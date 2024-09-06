"""The overview page of the app."""

import os
from dotenv import load_dotenv
import datetime
import asyncio

from pymongo import MongoClient

import reflex as rx
from reflex import toggle_color_mode

from web3 import Web3

from .. import styles

from ..backend.query import get_market_states_for_account, get_collateral_oracle_price

from rich.traceback import install
from rich.console import Console

install()
console = Console()

MONGODB_CONNECTION_STRING = os.environ["MONGODB_CONNECTION_STRING"]

mongodb_client = MongoClient(MONGODB_CONNECTION_STRING)
db = mongodb_client["defimoney_monitor_db"]
users = db["users"]


class AppState(rx.State):
    """The state for the overview page."""

    current_user_tg_id: int
    current_user_first_name: str
    current_user_username: str
    user_logged_in: bool = False

    @rx.var
    def get_current_user_tg_id(self) -> int:
        return self.current_user_tg_id

    async def load_account(self):
        if not self.user_logged_in:
            return
        user = users.find_one({"tg_id": self.current_user_tg_id})
        if user.get("address"):
            query_state = await self.get_state(QueryState)
            account_state = await self.get_state(AccountState)
            account_state.account_bound = True
            account_state.bound_address = user.get("address")
            return query_state.handle_get_market_states_for_account(user.get("address"))

    async def logout(self):
        self.user_logged_in = False
        self.current_user_tg_id = 0
        self.current_user_first_name = ""
        self.current_user_username = ""
        query_state = await self.get_state(QueryState)
        query_state.account_queried = False
        query_state.current_address = ""
        query_state.arbitrum_account_states = []
        query_state.optimism_account_states = []
        account_state = await self.get_state(AccountState)
        account_state.account_bound = False
        account_state.bound_address = ""

    async def delete_account(self):
        try:
            users.delete_one({"tg_id": self.current_user_tg_id})
        except Exception as e:
            print(f"Error deleting account: {e}")

        await self.logout()
        return rx.toast("Account deleted", duration=10000, close_button=True)


class QueryState(AppState):
    arbitrum_account_states: list[list]
    optimism_account_states: list[list]

    loading = False
    input_validation_text: str = ""
    current_address: str = ""
    account_queried: bool = False

    def handle_get_market_states_for_account(self, account_address: str):
        self.account_queried = False
        if account_address == "":
            self.input_validation_text = ""
            self.current_address = ""
            self.account_queried = False
            self.arbitrum_account_states = []
            self.optimism_account_states = []
            return
        if not Web3.is_address(account_address):
            self.input_validation_text = "Invalid address"
            return
        self.input_validation_text = ""
        self.current_address = str(Web3.to_checksum_address(account_address))
        self.loading = True
        yield
        self.arbitrum_account_states, self.optimism_account_states = (
            get_market_states_for_account(account_address=self.current_address)
        )
        self.loading = False
        self.account_queried = True

    @rx.var
    def get_current_address(self) -> str:
        return self.current_address

    @rx.var
    def is_input_error(self):
        if self.input_validation_text == "":
            return False
        return True


class AccountState(AppState):
    account_bound: bool = False
    bound_address: str = ""

    async def handle_bind_address(self):
        query_filter = {"tg_id": self.current_user_tg_id}
        query_state = await self.get_state(QueryState)
        update_operation = {"$set": {"address": query_state.current_address}}
        users.update_one(query_filter, update_operation)
        self.account_bound = True
        self.bound_address = query_state.current_address
        return rx.toast(
            "This address is now connected to your Telegram account. You can now setup notifications for each collateral.",
            duration=10000,
            close_button=True,
        )

    async def handle_set_notification(self, form_data: dict):
        form_data["threshold_price"] = float(form_data["threshold_price"])
        notification_state = await self.get_state(NotificationState)
        market_name = notification_state.account_market_state[0]
        market_address = notification_state.account_market_state[8]
        market_chain = notification_state.account_market_state[9]
        has_price_crossed_threshold = False
        form_data.update(
            {
                "market_name": market_name,
                "market_chain": market_chain,
                "has_price_crossed_threshold": has_price_crossed_threshold,
            }
        )
        console.log(f"\nUpdated form data: {form_data}")

        query_filter = {"tg_id": self.current_user_tg_id}
        user = users.find_one(query_filter)
        notification_configs = user.get("notification_configs")
        if not notification_configs:
            notification_configs = {market_address: form_data}
        else:
            notification_configs[market_address] = form_data
        update_operation = {"$set": {"notification_configs": notification_configs}}
        users.update_one(query_filter, update_operation)
        notification_state.current_threshold_price = form_data["threshold_price"]
        notification_state.threshold_price_set = True
        return notification_state.manage_notification_success()


class NotificationState(AppState):
    account_market_state: list
    current_threshold_price: float
    threshold_price_set: bool = False

    def handle_managing_notification(self, account_market_state: list):
        self.account_market_state = account_market_state
        user = users.find_one({"tg_id": self.current_user_tg_id})
        notification_configs = user.get("notification_configs")
        if notification_configs:
            notification_configs_for_market = notification_configs.get(
                account_market_state[8]
            )
            if notification_configs_for_market:
                self.current_threshold_price = notification_configs_for_market.get(
                    "threshold_price"
                )
                self.threshold_price_set = True

    def reset_account_market_state(self, event_trigger):
        self.account_market_state = []
        self.current_threshold_price = 0
        self.threshold_price_set = False

    def manage_notification_success(self):
        return rx.toast(
            "Success! You will now receive notifications for this collateral.",
            duration=10000,
            close_button=True,
        )


def show_market(account_market_state: list[str | int | float]):
    return rx.table.row(
        rx.table.cell(account_market_state[0]),  # Market name
        rx.table.cell(account_market_state[1]),  # account debt
        rx.table.cell(account_market_state[2]),  # amm_coll_balance
        rx.table.cell(account_market_state[3]),  # amm_stable_balance
        rx.table.cell(account_market_state[4]),  # health
        rx.table.cell(
            f"${account_market_state[7]} - ${account_market_state[6]}"
        ),  # conversion range
        rx.table.cell(
            rx.cond(
                AppState.user_logged_in,
                rx.popover.root(
                    rx.popover.trigger(
                        rx.button(
                            "Manage",
                            on_click=NotificationState.handle_managing_notification(
                                account_market_state
                            ),
                        ),
                    ),
                    rx.popover.content(
                        rx.flex(
                            rx.callout(
                                f"Conversion to $Money will begin when {account_market_state[0]} drops below ${account_market_state[6]}",
                                icon="info",
                                size="1",
                            ),
                            rx.flex(
                                rx.text(
                                    f"Notify me when {account_market_state[0]} price is below: "
                                ),
                                rx.form(
                                    rx.hstack(
                                        rx.input(
                                            rx.input.slot(
                                                rx.icon("dollar-sign"), padding_left="0"
                                            ),
                                            placeholder="1234.56",
                                            name="threshold_price",
                                            type="number",
                                        ),
                                        rx.button("Confirm", type="submit"),
                                    ),
                                    on_submit=AccountState.handle_set_notification,
                                ),
                                rx.spacer(),
                                rx.cond(
                                    NotificationState.threshold_price_set,
                                    rx.text(
                                        "Current notification price: ",
                                        rx.badge(
                                            f"${NotificationState.current_threshold_price}",
                                            color_scheme="green",
                                        ),
                                    ),
                                ),
                                direction="column",
                                spacing="2",
                            ),
                            direction="column",
                            spacing="2",
                        ),
                        on_close_auto_focus=NotificationState.reset_account_market_state,
                        on_escape_key_down=NotificationState.reset_account_market_state,
                        on_pointer_down_outside=NotificationState.reset_account_market_state,
                        on_focus_outside=NotificationState.reset_account_market_state,
                        on_interact_outside=NotificationState.reset_account_market_state,
                    ),
                ),
                rx.tooltip(
                    rx.button(
                        "Manage",
                        disabled=True,
                    ),
                    content="You need to be logged in to receive notification.",
                ),
            ),
        ),
        align="center",
    )


def create_table(account_states: list[list]) -> rx.Component:
    return (
        rx.table.root(
            rx.table.header(
                rx.table.row(
                    rx.table.column_header_cell("COLLATERAL"),
                    rx.table.column_header_cell("DEBT"),
                    rx.table.column_header_cell("COLLATERAL AMOUNT"),
                    rx.table.column_header_cell("$MONEY AMOUNT"),
                    rx.table.column_header_cell("HEALTH"),
                    rx.table.column_header_cell("CONVERSION RANGE"),
                    rx.table.column_header_cell("NOTIFICATION"),
                ),
                padding="5em",
            ),
            rx.table.body(
                rx.foreach(account_states, show_market),
            ),
            width="100%",
            variant="surface",
        ),
    )


class TelegramComponent(rx.Component):
    library = "telegram-login-button"
    tag = "TelegramLoginButton"
    is_default = True

    botName: rx.Var[str]
    dataAuthUrl: rx.Var[str]
    buttonSize: rx.Var[str]
    cornerRadius: rx.Var[int] = 5


telegram_component = TelegramComponent.create


class AlertState(rx.State):
    alert_open: bool = False

    def toggle_alert(self, event):
        self.alert_open = not self.alert_open


def delete_account_alert():
    return rx.alert_dialog.root(
        rx.alert_dialog.content(
            rx.alert_dialog.title("Account Deletion"),
            rx.alert_dialog.description(
                "This action will delete your account and permanently erase all your data on llama.rest. You will no longer receive notifications.",
                size="2",
            ),
            rx.flex(
                rx.alert_dialog.cancel(
                    rx.button(
                        "Cancel",
                        variant="soft",
                        color_scheme="gray",
                    ),
                ),
                rx.alert_dialog.action(
                    rx.button(
                        "Confirm Deletion",
                        variant="solid",
                        color_scheme="red",
                        on_click=AppState.delete_account,
                    ),
                ),
                justify="end",
                spacing="3",
                margin_top="16px",
            ),
        ),
        open=AlertState.alert_open,
        on_open_change=AlertState.toggle_alert,
    )


def address_badge():
    return rx.flex(
        rx.tablet_and_desktop(
            rx.badge(
                AccountState.bound_address,
                size="2",
                variant="soft",
                high_contrast=True,
                _hover={"cursor": "pointer"},
            )
        ),
        rx.mobile_only(
            rx.badge(
                f"{AccountState.bound_address[:4]}...{AccountState.bound_address[-4:]}",
                size="2",
                variant="soft",
                high_contrast=True,
                _hover={"cursor": "pointer"},
            )
        ),
    )


def navbar() -> rx.Component:
    """The navbar.

    Returns:
        The navbar component.
    """

    return rx.el.nav(
        rx.hstack(
            # The logo.
            rx.flex(
                rx.tablet_and_desktop(
                    rx.image(src="/llama_rest_logo.jpg", width="6em"),
                ),
                rx.mobile_only(
                    rx.image(src="/llama_rest_logo_small.jpg", width="2em"),
                ),
                rx.tablet_and_desktop(
                    rx.color_mode_cond(
                        light=rx.image(src="/Defi.Money.Logo.Black.png", width="10em"),
                        dark=rx.image(src="/Defi.Money.Logo.Sand.png", width="10em"),
                    ),
                ),
                rx.mobile_only(
                    rx.color_mode_cond(
                        light=rx.image(src="/$GM.Logomark.Black.png", width="2em"),
                        dark=rx.image(src="/$GM.Logomark.Sand.png", width="2em"),
                    ),
                ),
                spacing=rx.breakpoints(
                    initial="3",
                    sm="5",
                    md="7",
                    lg="7",
                ),
                align="center",
            ),
            rx.spacer(),
            rx.cond(
                # Account address badge
                AccountState.account_bound,
                rx.menu.root(
                    rx.menu.trigger(
                        address_badge(),
                    ),
                    rx.menu.content(
                        rx.menu.item(
                            "Delete account",
                            on_select=AlertState.toggle_alert,
                            color_scheme="red",
                        ),
                    ),
                ),
            ),
            rx.flex(
                rx.cond(
                    ~AppState.user_logged_in,
                    # Telegram login button
                    telegram_component(
                        botName="defimoney_monitor_bot",  # uncomment for public deployment
                        # botName="llama_rest_dev_bot", # uncomment for local development
                        #
                        # dataAuthUrl="https://defimoney-monitor.reflex.run/auth" # uncomment for reflex deployment
                        dataAuthUrl="https://llama.rest/auth",  # uncomment for public deployment
                        # dataAuthUrl="https://nord.prawn-dinosaur.ts.net/auth", # uncomment for local development
                        buttonSize="medium",
                    ),
                    # logout button
                    rx.button(
                        rx.icon(tag="log-out"),
                        on_click=AppState.logout,
                        variant="ghost",
                    ),
                ),
                # color mode button
                rx.button(
                    rx.icon(tag="sun-moon"),
                    on_click=toggle_color_mode,
                    variant="ghost",
                    color_scheme=None,
                ),
                align="center",
                justify="between",
                spacing="4",
            ),
            align="center",
            width="auto",
            padding_y="1.25em",
            padding_x=["1em", "1em", "2em"],
        ),
        # display=["block", "block", "block", "block", "block", "none"],
        position="sticky",
        background_color=rx.color("gray", 1),
        top="0px",
        z_index="5",
        border_bottom=styles.border,
    )


def footer() -> rx.Component:
    return rx.hstack(
        rx.text("@pastelfork", color_scheme="gray", size="1"),
        bottom="0px",
        # position="sticky",
        width="100%",
        z_index="1",
        padding_y="1em",
        justify="center",
        align="end",
        border_top=styles.border,
        margin_top="3em",
    )


@rx.page(route="/", title="llama.rest", on_load=AppState.load_account)
def index() -> rx.Component:
    """The overview page.

    Returns:
        The UI for the overview page.
    """
    return rx.flex(
        navbar(),
        delete_account_alert(),
        rx.flex(
            # rx.spacer(),
            rx.cond(
                AppState.user_logged_in,
                rx.heading(f"Welcome, {AppState.current_user_first_name}", size="5"),
            ),
            rx.card(
                rx.text.strong(
                    "Monitor any defi.money positions. Sign in to receive Telegram notifications."
                ),
                rx.text(rx.text.strong("1. "), "Sign in with Telegram."),
                rx.text(rx.text.strong("2. "), "Paste in your wallet address."),
                rx.text(
                    rx.text.strong("3. "),
                    "Set up notification price points for your positions.",
                ),
                rx.text(
                    rx.text.strong("4. "),
                    "You will then receive Telegram notifications when collateral price drops below your chosen price points.",
                ),
                rx.text(rx.text.strong("5. "), "Rest up, llama  🌿"),
                variant="surface",
                spacing="2",
                width="100%",
            ),
            rx.vstack(
                rx.cond(
                    ~AccountState.account_bound,
                    rx.flex(
                        # Wallet address input
                        rx.debounce_input(
                            rx.input(
                                rx.cond(
                                    # If account successfully queried
                                    QueryState.account_queried,
                                    # Circle check icon
                                    rx.input.slot(
                                        rx.icon("circle-check", color="green"),
                                        padding_left="2",
                                    ),
                                    rx.cond(
                                        # If still querying
                                        QueryState.loading,
                                        # Show spinner
                                        rx.input.slot(
                                            rx.spinner(loading=True), padding_left="2"
                                        ),
                                        # Else show search icon
                                        rx.input.slot(
                                            rx.icon("search"), padding_left="2"
                                        ),
                                    ),
                                ),
                                on_change=lambda e: QueryState.handle_get_market_states_for_account(
                                    e
                                ),
                                placeholder="Your wallet address here...",
                                value=QueryState.current_address,
                                size="3",
                                width="100%",
                                radius="large",
                                variant="surface",
                            ),
                            debounce_timeout=700,
                        ),
                        # Input validation text
                        rx.cond(
                            QueryState.is_input_error,
                            rx.text(
                                QueryState.input_validation_text, color="red", size="1"
                            ),
                        ),
                        justify="between",
                        align="center",
                        width="100%",
                        spacing="3",
                    ),
                ),
                rx.flex(
                    rx.cond(
                        # If account is not bound,
                        ~AccountState.account_bound,
                        rx.cond(
                            # If account is correctly queried, data loaded
                            QueryState.account_queried,
                            rx.cond(
                                # and if user is logged in, show the enabled button
                                AppState.user_logged_in,
                                # Get notifications for this address button
                                rx.button(
                                    "Get notifications for this address",
                                    on_click=AccountState.handle_bind_address,
                                ),
                                # else if user is not logged in, disable the button and show tooltip
                                rx.tooltip(
                                    rx.button(
                                        "Get notifications for this address",
                                        disabled=True,
                                    ),
                                    content="You need to be logged in to receive notification.",
                                ),
                            ),
                        ),
                    ),
                    spacing="2",
                    align="left",
                    width="100%",
                ),
                width="100%",
            ),
            rx.flex(
                rx.heading("Arbitrum", size="3", color_scheme="violet"),
                rx.scroll_area(
                    create_table(QueryState.arbitrum_account_states),
                    type="auto",
                    scrollbars="horizontal",
                    style={"width": "100%"},
                ),
                direction="column",
                spacing="2",
            ),
            rx.flex(
                rx.heading("Optimism", size="3", color_scheme="ruby"),
                rx.scroll_area(
                    create_table(QueryState.optimism_account_states),
                    type="auto",
                    scrollbars="horizontal",
                    style={"width": "100%"},
                ),
                direction="column",
                spacing="2",
            ),
            footer(),
            spacing="5",
            width="auto",
            margin_y="2em",
            margin_x=rx.breakpoints(
                initial="1.5em",
                sm="3em",
                md="10em",
                lg="10em",
            ),
            direction="column",
            flex_grow="1",
        ),
        flex_direction="column",
        width="auto",
        # margin="auto",
        position="relative",
    )
