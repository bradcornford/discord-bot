const config = require('../includes/config');

/**
 * @param {Client} client
 */
module.exports = (client) => {
    console.log(`${client.user.username} is now online!`);

    client.user.setActivity(`version ${config.version}`, { type: 'PLAYING' })
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
};
