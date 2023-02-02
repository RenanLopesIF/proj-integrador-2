import { Router, json } from 'express';

import LoginUserController from './controllers/loginUserController.js';

import usuariosController from './controllers/usuariosController.js';
import eventosController from './controllers/eventosController.js';

const routes = new Router();

routes.use(json());
routes.get('/usuarios', usuariosController.getAll);
routes.get('/usuarios/:id', usuariosController.getOne);
routes.post('/usuarios/novo', usuariosController.insertOne);
routes.get('/usuario/evento/:userID', eventosController.getByUser);
routes.get('/evento/:eventID', eventosController.getOne);
routes.get('/eventos', eventosController.getAll);

routes.post('/authenticate',LoginUserController.authenticate)
export default routes;
