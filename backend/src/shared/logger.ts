import { addColors, createLogger } from 'winston';
import { TypeLogger } from '../interfaces/GeneralResponse';
import { colors, formatMessage, loggerConfig } from './loggerConfig';

addColors(colors);

class Logger {
  static readonly originalLogger = createLogger(loggerConfig);

  static readonly prettyJson = (args, type: TypeLogger) => {
    try {
      const message = args.reduce(formatMessage, '');
      this.originalLogger[type](message);
    } catch (e) {
      this.originalLogger.error(e);
    }
  };

  static readonly info = (...args) => { this.prettyJson(args, 'info'); };

  static readonly error = (...args) => { this.prettyJson(args, 'error'); };

  static readonly debug = (...args) => { this.prettyJson(args, 'debug'); };

  static readonly stream = {
    write: (message) => this.originalLogger.http(message.trim()),
  };
}

export const {
  info, error, debug, stream,
} = Logger;

export default Logger;
