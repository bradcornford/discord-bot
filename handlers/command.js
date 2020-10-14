const { readdirSync } = require('fs');

module.exports = (client) => {
    readdirSync(`./commands/`).map((cmd) => {
        let command = require(`../commands/${cmd}`);
        console.log(`Loaded command ${command.name}`);
        client.commands.set(command.name, command);
    });
};
