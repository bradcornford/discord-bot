const dateFormat = require('dateformat');

require('log-timestamp')(function() { return '[' + dateFormat(new Date(), "dd-mm-yyyy hh:MM:ss") + '] %s' });
