import bunyan, { LogLevel } from 'bunyan';

export const logger = bunyan.createLogger({
  name: 'ts-express-mongo-template',
  streams: [
    {
      stream: process.stdout,
      level: (process.env.LOG_LEVEL || 'info') as LogLevel,
    },
  ],
});

logger.info('ts-express-mongo-template logger started');
