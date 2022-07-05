import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { join } from 'path';
import express from 'express';
import { NOT_FOUND } from 'http-status';

import allRoutes from './routes';
import Logger, { stream } from './shared/logger';
import { inizializeGeneralResponse } from './shared/generalHelpers';

dotenv.config({ path: join(__dirname, '..', 'src', '.env') });

class Appconfig {
  public server: any;

  public app = express();

  constructor() {
    this.setHandlerUncaughtError();
    this.setPort();
    this.setMiddlewares();
    this.setPublicFolder();
    this.loadRoutes();
    this.setErrorRouterHandler();
  }

  setPublicFolder = () => {
    this.app.use('public', express.static(join(__dirname, '..', '..', 'frontend', 'public')));
  };

  setHandlerUncaughtError = () => {
    process
      .on('unhandledRejection', (reason, promise) => {
        Logger.error('Unhandled Rejection at Promise', reason, promise);
      }).on('uncaughtException', (err) => {
        Logger.error('Uncaught Exception thrown:', err);
        process.exit(1);
      });

    return this;
  };

  setPort = () => {
    this.app.set('port', process.env.APP_PORT || '4000');
  };

  setMiddlewares = () => {
    this.app.use(cors());
    this.app.use(morgan('dev', { stream }));
  };

  loadRoutes = () => {
    try {
      Object.entries(allRoutes).forEach(([key, routes]: [any, any]) => {
        const mainRoute = (key === 'index') ? '' : key;

        this.app.use(`/${mainRoute}`, routes);
      });
    } catch (e) {
      Logger.error(e);
    }

    return this;
  };

  setErrorRouterHandler = () => {
    this.app.use((req, res) => {
      res.status(NOT_FOUND).send('404 not found');
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.app.use((err, req, res, next) => {
      Logger.error(`Express error in route "${req.url}":`, err);
      const response = inizializeGeneralResponse();
      res.json(response);
    });
  };

  deploy = () => {
    const port = this.app.get('port');

    this.server = this.app.listen(port);
    Logger.info(`Running in port ${port}`);
  };
}

export default Appconfig;
