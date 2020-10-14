# Discord Bot

Provides a base Discord bot with an example command and help command

## Installation

Create a copy of the env configuration

    cp .env{.example,}

Add your bots Discord token, and the prefix you want the bot to look for to `.env`

    DISCORD_TOKEN=XXX
    BOT_PREFIX=!

### Node.js

The application can be run locally with the following:

    node .

### Docker

The application can be run in a docker container with the following:

    docker build -t bradcornford/discord-bot .
    docker run -d bradcornford/discord-bot

### Docker-Compose

The application can be run using docker-compose container with the following:

    docker-compose build
    docker-compose up -d
