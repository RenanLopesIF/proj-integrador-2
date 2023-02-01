import { Router, json } from 'express';

import usuariosController from './controllers/usuariosController.js';
import eventosController from './controllers/eventosController.js';

const routes = new Router();

routes.use(json());
routes.get('/usuarios', usuariosController.getAll);
routes.get('/usuarios/:id', usuariosController.getOne);
routes.post('/usuarios/novo', usuariosController.insertOne);
routes.post('/curtievent', eventosController.postCurtiEvent);
routes.pots('/comentario', eventosController.postComentEvent);
routes.pots('/comentresposta', eventosController.postRespostaComent);

routes.get('/usuario/evento/:userID', eventosController.getByUser);


routes.get('/evento/:eventID', eventosController.getOne);
routes.get('/eventos', eventosController.getAll);

export default routes;
