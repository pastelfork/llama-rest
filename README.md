# llama.rest is a monitoring and notification app for defi.money

## Requirements
This project is managed using `uv`
```bash
pip install uv
```
You will also need:
* A Telegram bot registered with @botfather
* A MongoDB instance
* RPC URLs for Arbitrum and Optimism

## Setup
```bash
git clone https://github.com/pastelfork/llama-rest
```
```bash
cd llama-rest/src/defimoney_monitor/
```
```bash
cp .env.example .env
```
Paste your enviroment variables in the .env file (see requirements above).
```bash
cd ..
```
```bash
uv run reflex run
```
The app should now be running on port 3000.
