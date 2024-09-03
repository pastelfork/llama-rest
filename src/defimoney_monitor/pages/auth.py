import os

import reflex as rx
from dotenv import load_dotenv
from pymongo import MongoClient
from rich import print

from ..backend.telegram_bot import send_message
from ..templates import template
from .index import AppState

# load_dotenv()

MONGODB_CONNECTION_STRING = os.environ["MONGODB_CONNECTION_STRING"]

mongodb_client = MongoClient(MONGODB_CONNECTION_STRING)
db = mongodb_client["defimoney_monitor_db"]
users = db["users"]


def register_user(tg_id: int, first_name: str, username: str) -> bool:
    try:
        user = {"tg_id": tg_id, "first_name": first_name, "username": username}
        users.insert_one(user)
        return True

    except Exception as e:
        print(e)
        return False


def get_user(tg_id: int) -> dict | None:
    user = users.find_one({"tg_id": tg_id})
    return user


class AuthState(AppState):
    """The state for the auth page."""

    tg_id: int
    first_name: str
    username: str

    async def handle_auth(self) -> str:
        """Parse the query params from the URL."""
        params = self.router.page.params
        self.tg_id = params.get("id")
        self.first_name = params.get("first_name")
        self.username = params.get("username")
        user = get_user(self.tg_id)

        # If user does not exist, register them
        if user is None:
            register_user(self.tg_id, self.first_name, self.username)
            await send_message(f"Hello {self.first_name}!", self.tg_id)

        # Set the current user on parent state
        self.current_user_tg_id = self.tg_id
        self.current_user_first_name = self.first_name
        self.current_user_username = self.username
        self.user_logged_in = True
        return rx.redirect("/")


@rx.page(route="/auth", title="Auth", on_load=AuthState.handle_auth)
def auth():
    return rx.vstack()
