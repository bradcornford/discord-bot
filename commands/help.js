const { MessageEmbed } = require('discord.js');

const { readdirSync } = require('fs');

const config = require('../includes/config');

module.exports = {
    name: 'help',
    description: 'Show help for the bot',
    parameters: [],
    hidden: true,
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setColor(config.colors.info)
            .setTitle('Help')
            .setDescription('Available commands')
            .setFooter(`Bot ${config.version}`)
            .setTimestamp();

        readdirSync(`./commands/`).map((cmd) => {
            let command = require(`../commands/${cmd}`);

            if (!command.hidden) {
                embed.addField(`**\`${config.prefix}${command.name} ${command.parameters.join(' ')}\`**`, command.description);
            }
        });

        return message.channel.send(embed);
    },
};
