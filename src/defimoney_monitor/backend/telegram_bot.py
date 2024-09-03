import os
from dotenv import load_dotenv

from rich import print

from telegram import Bot

load_dotenv()

TELEGRAM_BOT_TOKEN = os.environ['TELEGRAM_BOT_TOKEN']

async def send_message(message, chat_id):
    bot = Bot(TELEGRAM_BOT_TOKEN)
    async with bot:
        # print(await bot.get_me())
        # updates = (await bot.get_updates())
        # print(updates)
        print("sending message")
        await bot.send_message(text=message, chat_id=chat_id)
