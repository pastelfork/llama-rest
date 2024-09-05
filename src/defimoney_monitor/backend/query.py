# %%
import os
import asyncio
from dotenv import load_dotenv

from rich import print, inspect
from rich.console import Console

import reflex as rx
from web3 import Web3, HTTPProvider
from eth_abi import decode

from pymongo import MongoClient

from .abi.abi import *
from .telegram_bot import send_message

# %%

# load_dotenv()
console = Console()

ARBITRUM_RPC_URL = os.environ["ARBITRUM_RPC_URL"]
OPTIMISM_RPC_URL = os.environ["OPTIMISM_RPC_URL"]

MONGODB_CONNECTION_STRING = os.environ["MONGODB_CONNECTION_STRING"]

mongodb_client = MongoClient(MONGODB_CONNECTION_STRING)
db = mongodb_client["defimoney_monitor_db"]
users = db["users"]

w3_arbitrum = Web3(HTTPProvider(ARBITRUM_RPC_URL, request_kwargs={'timeout': 60}))
w3_optimism = Web3(HTTPProvider(OPTIMISM_RPC_URL, request_kwargs={'timeout': 60}))

arbitrum_cdp_market_views_ca = '0x45D92BF29f1b5B0e7eb0640D6230Fae488311845'
optimism_cdp_market_views_ca = '0x4459FF9D7FE90FD550c0b9d39E00b4f18b13A0Ab'

multicall_ca = '0xcA11bde05977b3631167028862bE2a173976CA11'
arbitrum_multicall_contract = w3_arbitrum.eth.contract(
    address=multicall_ca,
    abi=multicall_abi  # noqa: F405
)
optimism_multicall_contract = w3_optimism.eth.contract(
    address=multicall_ca,
    abi=multicall_abi  # noqa: F405
)

arbitrum_cdp_market_views_contract = w3_arbitrum.eth.contract(
    address=arbitrum_cdp_market_views_ca,
    abi=cdp_market_views_abi  # noqa: F405
)
optimism_cdp_market_views_contract = w3_optimism.eth.contract(
    address=optimism_cdp_market_views_ca,
    abi=cdp_market_views_abi  # noqa: F405
)

arbitrum_markets_configs = {
    '0xe38FB572099A8Fdb51e0929cb2B439D0479fC43E': {
        'name': 'WETH',
        'collateral_decimals': 18,
        'amm_address': '0xE73a960cD30659714aa8275Aa12aeec918e729D8'
    },
    '0xB745f12eCF271484c79D3999cA12164Fe1c4e5f9': {
        'name': 'WBTC',
        'collateral_decimals': 8,
        'amm_address': '0x9cabC4d0eD66Ff48625D6f973A784c7234eB2B80'
    },
    '0xEC70Ac48D2cc382987a176f64fe74d77d010F9D1': {
        'name': 'ARB',
        'collateral_decimals': 18,
        'amm_address': '0xfeAf54Da93b427caCe0B6A063ABac637D1A981f5'
    }
}

optimism_markets_configs = {
    '0xD74A1f6B44395cf8c4833df5Bc965C6C2b567476': {
        'name': 'WETH',
        'collateral_decimals': 18,
        'amm_address': '0xad7d46ceB08ba5a1A21AFc43e9E2591c842F9057'
    },
    '0xC82B4C656BA6Aa4A2eF6bfe6b511d206C93b405b': {
        'name': 'WBTC',
        'collateral_decimals': 8,
        'amm_address': '0x69B308628D58066Dd21874B43CB790BaE3D0BaFC'
    },
    '0xfC6Ec1F94f2fFCe0f0BcB79592D765abD3E1BAEf': {
        'name': 'WSTETH',
        'collateral_decimals': 18,
        'amm_address': '0x2eEAb5f076dea85517a53b33f4828c5bb6CE9216'
    }
}

def poll_oracles():
    arbitrum_markets = [market_address for market_address in arbitrum_markets_configs.keys()]
    optimism_markets = [market_address for market_address in optimism_markets_configs.keys()]

    price_oracle_calldata = '0x86fc88d3'

    arbitrum_amm_addresses = [price['amm_address'] for price in arbitrum_markets_configs.values()]
    optimism_amm_addresses = [price['amm_address'] for price in optimism_markets_configs.values()]

    arbitrum_calls = [
        {
            'target': amm,
            'allowFailure': True,
            'callData': price_oracle_calldata
        }
        for amm in arbitrum_amm_addresses
    ]
    optimism_calls = [
        {
            'target': amm,
            'allowFailure': True,
            'callData': price_oracle_calldata
        }
        for amm in optimism_amm_addresses
    ]

    arbitrum_call_res = arbitrum_multicall_contract.functions.aggregate3(arbitrum_calls).call()
    optimism_call_res = optimism_multicall_contract.functions.aggregate3(optimism_calls).call()

    arbitrum_prices_decoded = [decode(['uint256'], call[1]) for call in arbitrum_call_res]
    optimism_prices_decoded = [decode(['uint256'], call[1]) for call in optimism_call_res]

    prices = {}
    for i, price in enumerate(arbitrum_prices_decoded):
        market = arbitrum_markets[i]
        if arbitrum_call_res[i][0]:
            prices[market] = price[0] / 10 ** 18
        else:
            prices[market] = None
    
    for i, price in enumerate(optimism_prices_decoded):
        market = optimism_markets[i]
        if optimism_call_res[i][0]:
            prices[market] = price[0] / 10 ** 18
        else:
            prices[market] = None
    
    return prices
            
    

def get_collateral_oracle_price(market_address: str, chain: str) -> float:
    if chain == 'arbitrum':
        market_config = arbitrum_markets_configs[market_address]
        w3 = w3_arbitrum
    elif chain == 'optimism':
        market_config = optimism_markets_configs[market_address]
        w3 = w3_optimism
    
    amm_contract = w3.eth.contract(
        address=market_config['amm_address'],
        abi=amm_abi  # noqa: F405
    )

    collateral_oracle_price = amm_contract.functions.price_oracle().call() / 10 ** 18

    return collateral_oracle_price
    

def get_market_states_for_account(account_address: str):
    arbitrum_markets = [market_address for market_address in arbitrum_markets_configs.keys()]
    optimism_markets = [market_address for market_address in optimism_markets_configs.keys()]
    
    arbitrum_account_states = arbitrum_cdp_market_views_contract.functions.get_market_states_for_account(
        account_address,
        arbitrum_markets
    ).call()
    optimism_account_states = optimism_cdp_market_views_contract.functions.get_market_states_for_account(
        account_address,
        optimism_markets
    ).call()

    arbitrum_account_states_parsed = []
    optimism_account_states_parsed = []

    for market in arbitrum_account_states:
        market_address: str = str(Web3.to_checksum_address(market[0]))
        market_name: str = arbitrum_markets_configs[market_address]['name']
        market_collateral_decimals: int = arbitrum_markets_configs[market_address]['collateral_decimals']

        account_debt: float = round(market[1] / 10 ** 18, 2)
        amm_coll_balance: float = round(market[2] / 10 ** market_collateral_decimals, 2)
        amm_stable_balance: float = round(market[3] / 10 ** 18, 2)
        health: float = round(market[4] / 10 ** 16, 2)
        bands: list[int] = market[5]
        coll_conversion_range: list[float] = [price / 10 ** 18 for price in market[6]]
        coll_conversion_range_start: float = round(coll_conversion_range[0], 2)
        coll_conversion_range_end: float = round(coll_conversion_range[1], 2)

        arbitrum_account_states_parsed.append(
            [
                market_name,
                account_debt,
                amm_coll_balance,
                amm_stable_balance,
                health,
                bands,
                coll_conversion_range_start,
                coll_conversion_range_end,
                market_address,
                'arbitrum'
            ]
        )

    for market in optimism_account_states:
        market_address: str = str(Web3.to_checksum_address(market[0]))
        market_name: str = optimism_markets_configs[market_address]['name']
        market_collateral_decimals: int = optimism_markets_configs[market_address]['collateral_decimals']

        account_debt: float = round(market[1] / 10 ** 18, 2)
        amm_coll_balance: float = round(market[2] / 10 ** market_collateral_decimals, 2)
        amm_stable_balance: float = round(market[3] / 10 ** 18, 2)
        health: float = round(market[4] / 10 ** 16, 2)
        bands: list[int] = market[5]
        coll_conversion_range: list[float] = [price / 10 ** 18 for price in market[6]]
        coll_conversion_range_start: float = round(coll_conversion_range[0], 2)
        coll_conversion_range_end: float = round(coll_conversion_range[1], 2)

        optimism_account_states_parsed.append(
            [
                market_name,
                account_debt,
                amm_coll_balance,
                amm_stable_balance,
                health,
                bands,
                coll_conversion_range_start,
                coll_conversion_range_end,
                market_address,
                'optimism'
            ]
        )
    
    return arbitrum_account_states_parsed, optimism_account_states_parsed
    