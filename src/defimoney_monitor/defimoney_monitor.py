"""Welcome to Reflex!."""
from rich.traceback import install
install(show_locals=True)

# Import all the pages.
from .pages import index, auth  # noqa: F403
from . import styles

import reflex as rx

from .backend import dfm_polling, curve_polling

# Create the app.
app = rx.App(
    style=styles.base_style,
    stylesheets=styles.base_stylesheets,
    title="Dashboard Template",
    description="A dashboard template for Reflex.",
    theme=rx.theme(
        appearance="light",
        accent_color="violet"
    )
)
app.register_lifespan_task(dfm_polling.start_polling_tasks)
app.register_lifespan_task(curve_polling.start_polling_tasks)
