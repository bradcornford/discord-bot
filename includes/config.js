const packageJson = require('../package.json');

const PREFIX = process.env.BOT_PREFIX || '!';
const DISCORD_TOKEN = process.env.DISCORD_TOKEN || '';
const COLORS = {
    primary: '#004085',
    secondary: '#383d41',
    success: '#155724',
    danger: '#721c24',
    warning: '#856404',
    info: '#0c5460',
    light: '#818182',
    dark: '#1b1e21',
};

exports.prefix = PREFIX;
exports.discordToken = DISCORD_TOKEN;
exports.colors = COLORS;
exports.version = packageJson.version;
