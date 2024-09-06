import os
from dotenv import load_dotenv

from telegram import Bot

load_dotenv()

TELEGRAM_BOT_TOKEN = os.environ["TELEGRAM_BOT_TOKEN"]


async def send_message(message, chat_id):
    bot = Bot(TELEGRAM_BOT_TOKEN)
    async with bot:
        await bot.send_message(text=message, chat_id=chat_id)
