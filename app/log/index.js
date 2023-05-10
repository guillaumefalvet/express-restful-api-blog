const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'Oblog',
  streams: [
    {
      level: 'debug',
      stream: process.stdout,
    },
    {
      level: 'error',
      path: 'logs/oblog.log',
    },
  ],
});

module.exports = logger;
