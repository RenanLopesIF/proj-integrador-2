import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

import routes from './routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename).split('\\src')[0];

class App {
  constructor() {
    this.server = express();
    this.server.use(express.json());
    this.server.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
      res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
      next();
    });

    this.server.use(express.static('public'));
    this.server.use(express.static(path.join(__dirname, 'public')));

    this.server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.server.use(bodyParser.json({ limit: '50mb', extended: true }));

    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
