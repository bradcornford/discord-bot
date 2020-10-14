module.exports = {
    name: 'coin',
    description: 'Flip a coin',
    parameters: [],
    hidden: false,
    run: async (client, message, args) => {
        let coin = ['Heads', 'Tails'];

        return message.channel.send(`🪙 **Flipped a coin:** ${coin[Math.floor(Math.random() * coin.length)]}`);
    },
};
