import express from 'express';

import routes from './routes.js';

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
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
