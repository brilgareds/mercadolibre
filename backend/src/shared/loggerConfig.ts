import { join } from 'path';
import { format, transports } from 'winston';
import { dateFormat } from './generalHelpers';

const {
  printf, colorize, timestamp, combine,
} = format;

class LoggerConfig {
  private static logsFolder = join(__dirname, '..', '..', 'src', 'logs');

  public static tabspaces = 2;

  public static spaces = ' '.repeat(this.tabspaces);

  static readonly getNullMessage = () => null;

  static readonly getTypeOfdata = (message) => {
    let typeOfData = '';
    if (message instanceof Error) typeOfData = message.name;
    else if (Array.isArray(message)) typeOfData = 'array';
    else if (message === null) typeOfData = 'null';
    else typeOfData = typeof message;

    return typeOfData;
  };

  static readonly getErrorMessage = (msg) => {
    const route = (msg.url) ? `Route "${msg.url}" - ${msg.status || ''}` : '';
    return `${route}${msg.stack}`;
  };

  static getJsonMessage = (msg) => {
    const json = JSON.stringify(msg, null, (this.tabspaces + 4));
    const lastCharacter = json.slice(-1);
    return `${json.slice(0, -1)}${this.spaces}${lastCharacter}`;
  };

  static readonly formatMessage = (prev, msg, i, args) => {
    const isNull = (msg === null);
    const isNotTheFirst = (i > 0);
    const isAnError = (msg instanceof Error);
    const hasVariousArgs = (args.length > 1);
    const isNotUndefined = (msg !== undefined);
    const isAnObject = (typeof msg === 'object');
    const showType = (hasVariousArgs && isNotTheFirst);
    const initialSpaces = (isNotTheFirst) ? this.spaces : '';
    const type = (showType) ? `(${this.getTypeOfdata(msg)}) ` : '';

    let msgFormated: string | null = '';
    if (isAnError) msgFormated = this.getErrorMessage(msg);
    else if (isNull) msgFormated = this.getNullMessage();
    else if (isAnObject) msgFormated = this.getJsonMessage(msg);
    else if (isNotUndefined) msgFormated = msg.toString();
    else msgFormated = msg;
    msgFormated += (hasVariousArgs || isAnError) ? '\n' : '';

    return `${prev}${initialSpaces}${type}${msgFormated}`;
  };

  static colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
  };

  static transports = [
    new transports.Console(),
    new transports.File({
      filename: join(this.logsFolder, 'all.log'), maxsize: 1000000, maxFiles: 10,
    }),
    new transports.File({
      filename: join(this.logsFolder, 'error.log'), maxsize: 1000000, maxFiles: 10, level: 'error',
    }),
  ];

  static levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
  };

  static loggerConfig = {
    level: 'debug',
    levels: this.levels,
    format: combine(
      timestamp({ format: dateFormat({ type: 'es' }) }),
      colorize({ all: true }),
      printf(({ timestamp: date, level, message }) => `[${date}] ${level}: ${message}`),
    ),
    transports: this.transports,
  };
}

export const {
  colors,
  loggerConfig,
  formatMessage,
} = LoggerConfig;
