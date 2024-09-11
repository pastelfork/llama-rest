import os
import asyncio
from dotenv import load_dotenv

from rich import print, inspect
from rich.console import Console

import reflex as rx
from web3 import Web3, HTTPProvider
from web3.providers.rpc.utils import (
    REQUEST_RETRY_ALLOWLIST,
    ExceptionRetryConfiguration,
)
from web3.exceptions import ProviderConnectionError
from requests import HTTPError, Timeout
from eth_abi import decode

from pymongo import MongoClient

from .abi.curve_abi import *  # noqa: F403
from .telegram_bot import send_message

console = Console()

MAINNET_RPC_URL = os.environ["MAINNET_RPC_URL"]

MONGODB_CONNECTION_STRING = os.environ["MONGODB_CONNECTION_STRING"]

mongodb_client = MongoClient(MONGODB_CONNECTION_STRING)
db = mongodb_client["curve_monitor_db"]
users = db["users"]

w3 = Web3(
    HTTPProvider(
        MAINNET_RPC_URL,
        request_kwargs={"timeout": 60},
        exception_retry_configuration=ExceptionRetryConfiguration(
            errors=(ProviderConnectionError, HTTPError, Timeout),
            retries=100,
            backoff_factor=0.125,
            method_allowlist=REQUEST_RETRY_ALLOWLIST,
        ),
    )
)

multicall_ca = "0xcA11bde05977b3631167028862bE2a173976CA11"

multicall_contract = w3.eth.contract(
    address=multicall_ca,
    abi=multicall_abi,  # noqa: F405
)

controllers_configs = {
    # sfrxETH v2
    "0xEC0820EfafC41D8943EE8dE495fC9Ba8495B15cf": {
        "name": "sfrxETH",
        "collateral_decimals": 18,
        "amm_address": "0xfA96ad0a9E64261dB86950e2dA362f5572c5c6fd",
    },
    "0x100dAa78fC509Db39Ef7D04DE0c1ABD299f4C6CE": {
        "name": "wstETH",
        "collateral_decimals": 18,
        "amm_address": "0x37417B2238AA52D0DD2D6252d989E728e8f706e4",
    },
    "0x4e59541306910aD6dC1daC0AC9dFB29bD9F15c67": {
        "name": "WBTC",
        "collateral_decimals": 8,
        "amm_address": "0xE0438Eb3703bF871E31Ce639bd351109c88666ea",
    },
    "0xA920De414eA4Ab66b97dA1bFE9e6EcA7d4219635": {
        "name": "WETH",
        "collateral_decimals": 18,
        "amm_address": "0x1681195C176239ac5E72d9aeBaCf5b2492E0C4ee",
    },
    "0x1C91da0223c763d2e0173243eAdaA0A2ea47E704": {
        "name": "tBTC",
        "collateral_decimals": 18,
        "amm_address": "0xf9bD9da2427a50908C4c6D1599D8e62837C2BCB0",
    },
}


def poll_oracles():
    controllers = [
        controller_address for controller_address in controllers_configs.keys()
    ]

    price_oracle_calldata = "0x86fc88d3"

    amm_addresses = [
        controller["amm_address"] for controller in controllers_configs.values()
    ]

    calls = [
        {"target": amm, "allowFailure": True, "callData": price_oracle_calldata}
        for amm in amm_addresses
    ]

    call_res = multicall_contract.functions.aggregate3(calls).call()

    prices_decoded = [decode(["uint256"], call[1]) for call in call_res]

    prices = {}
    for i, price in enumerate(prices_decoded):
        controller = controllers[i]
        if call_res[i][0]:
            prices[controller] = price[0] / 10**18
        else:
            prices[controller] = None

    return prices


def get_collateral_oracle_price(controller_address: str) -> float:
    controller_config = controllers_configs[controller_address]

    amm_contract = w3.eth.contract(
        address=controller_config["amm_address"],
        abi=amm_abi,  # noqa: F405
    )

    collateral_oracle_price = amm_contract.functions.price_oracle().call() / 10**18

    return collateral_oracle_price


def get_market_states_for_account(account_address: str):
    """
    get_market_states_for_account is the aggregate function (and terminology) from defimoney's refactored contract.
    In the curve implementation, we will use Python code below to aggregate data.
    """
    controllers = [
        controller_address for controller_address in controllers_configs.keys()
    ]

    # Controller functions
    loan_exist_sig = "0xa21adb9e"
    user_prices_sig = "0x2c5089c3"
    user_state_sig = "0xec74d0a8"
    health_sig = "0xe2d8ebee"

    address_padding = "0" * 24

    calls = []

    for controller in controllers:
        calls.extend(
            [
                {
                    "target": controller,
                    "allowFailure": True,
                    "callData": loan_exist_sig + address_padding + account_address[2:],
                },
                {
                    "target": controller,
                    "allowFailure": True,
                    "callData": user_prices_sig + address_padding + account_address[2:],
                },
                {
                    "target": controller,
                    "allowFailure": True,
                    "callData": user_state_sig + address_padding + account_address[2:],
                },
                {
                    "target": controller,
                    "allowFailure": True,
                    "callData": health_sig + address_padding + account_address[2:],
                },
            ]
        )

    call_res = multicall_contract.functions.aggregate3(calls).call()

    account_states_parsed = []
    controller_idx = 0

    for i in range(0, len(call_res), 4):
        controller_address = controllers[controller_idx]
        controller_name = controllers_configs[controller_address]["name"]
        controller_collateral_decimals = controllers_configs[controller_address][
            "collateral_decimals"
        ]

        loan_exist = decode(["bool"], call_res[i][1])[0]
        if not loan_exist:
            controller_idx += 1
            continue

        coll_conversion_range = decode(["uint256[2]"], call_res[i + 1][1])[0]
        coll_conversion_range = [price / 10**18 for price in coll_conversion_range]
        coll_conversion_range_start: float = round(coll_conversion_range[0], 2)
        coll_conversion_range_end: float = round(coll_conversion_range[1], 2)

        user_state = decode(["uint256[4]"], call_res[i + 2][1])[0]
        amm_coll_balance: float = round(
            user_state[0] / 10**controller_collateral_decimals, 2
        )
        amm_stable_balance: float = round(user_state[1] / 10**18, 2)
        account_debt: float = round(user_state[2] / 10**18, 2)
        bands = user_state[3]

        health = decode(["int256"], call_res[i + 3][1])[0]
        health: float = round(health / 10**16, 2)

        account_states_parsed.append(
            [
                controller_name,
                account_debt,
                amm_coll_balance,
                amm_stable_balance,
                health,
                bands,
                coll_conversion_range_start,
                coll_conversion_range_end,
                controller_address,
                "mainnet",
            ]
        )

        controller_idx += 1

    return account_states_parsed
