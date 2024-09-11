import os

from dotenv import load_dotenv
import asyncio

from rich import print, inspect
from rich.console import Console

from pymongo import MongoClient
from .telegram_bot import send_message

from .curve_query import poll_oracles

console = Console()

MONGODB_CONNECTION_STRING = os.environ["MONGODB_CONNECTION_STRING"]

mongodb_client = MongoClient(MONGODB_CONNECTION_STRING)
db = mongodb_client["curve_monitor_db"]
users = db["users"]


async def process_prices_updates(prices: dict):
    # console.log(f"process_prices_updates event loop: {asyncio.get_running_loop()}", log_locals=True)

    async def process_price(controller_address, price):
        # Find users with threshold price higher than current price, and this is the first time price has crossed the threshold (since last cross)
        down_results = users.find(
            {
                f"notification_configs.{controller_address}.threshold_price": {
                    "$gt": price
                },
                f"notification_configs.{controller_address}.has_price_crossed_threshold": False,
            }
        )

        down_results = list(down_results)
        if down_results:
            for result in down_results:
                controller_name = result["notification_configs"][controller_address][
                    "controller_name"
                ]
                threshold_price = result["notification_configs"][controller_address][
                    "threshold_price"
                ]
                await send_message(
                    f"⚠️ Price alert for your crvUSD position.\n{controller_name} is now at ${round(price, 2)}.\nYou are configured to receive price alert when {controller_name} drops below ${threshold_price}",
                    result["tg_id"],
                )
                query_filter = {"tg_id": result["tg_id"]}
                notification_configs_for_controller = result["notification_configs"][
                    controller_address
                ]
                notification_configs_for_controller["has_price_crossed_threshold"] = (
                    True
                )
                update_operation = {
                    "$set": {
                        f"notification_configs.{controller_address}": notification_configs_for_controller
                    }
                }
                users.update_one(query_filter, update_operation)

        # Find users who was notified due to crossing threshold, and now price has climbed back over
        up_results = users.find(
            {
                f"notification_configs.{controller_address}.threshold_price": {
                    "$lt": price
                },
                f"notification_configs.{controller_address}.has_price_crossed_threshold": True,
            }
        )
        up_results = list(up_results)
        if up_results:
            for result in up_results:
                print(f"\n[bold green]{result}[/bold green]")
                query_filter = {"tg_id": result["tg_id"]}
                notification_configs_for_controller = result["notification_configs"][
                    controller_address
                ]
                notification_configs_for_controller["has_price_crossed_threshold"] = (
                    False
                )
                update_operation = {
                    "$set": {
                        f"notification_configs.{controller_address}": notification_configs_for_controller
                    }
                }
                users.update_one(query_filter, update_operation)

    tasks = [
        process_price(controller_address, price)
        for controller_address, price in prices.items()
    ]
    await asyncio.gather(*tasks)

    return True


async def handle_process_prices_updates(queue):
    while True:
        prices = await queue.get()
        await process_prices_updates(prices)
        queue.task_done()


async def poll_oracles_task(queue):
    while True:
        prices = poll_oracles()
        print(f"latest prices: \n{prices}")
        await queue.put(prices)
        await asyncio.sleep(30)


curve_polling_task_running = False
curve_processing_task_running = False


async def start_polling_tasks():
    global curve_polling_task_running, curve_processing_task_running
    if curve_polling_task_running or curve_processing_task_running:
        return
    # asyncio.get_event_loop().set_debug(True)
    if not curve_polling_task_running and not curve_processing_task_running:
        curve_polling_task_running = True
        curve_processing_task_running = True
        queue = asyncio.Queue()
        # console.log(f"Current event loop: {asyncio.get_running_loop()}", log_locals=True)
        task1 = asyncio.create_task(poll_oracles_task(queue))
        task2 = asyncio.create_task(handle_process_prices_updates(queue))
        await asyncio.gather(task1, task2)
