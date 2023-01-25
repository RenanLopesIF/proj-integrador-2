import { Router, json } from 'express';

import usuariosController from './controllers/usuariosController.js';

const routes = new Router();

routes.use(json());
routes.get('/usuarios', usuariosController.getAll);
routes.get('/usuarios/:id', usuariosController.getOne);
routes.post('/usuarios/novo', usuariosController.insertOne);

export default routes;
