import { Router, json } from 'express';

import usuariosController from './controllers/usuariosController.js';
import authController from './controllers/authController.js';

const routes = new Router();

routes.use(json());

routes.get('/usuarios', usuariosController.getAll);
routes.get('/usuarios/:id', usuariosController.getOne);
routes.post('/usuarios/novo', usuariosController.insertOne);

routes.post('/recuperar-senha', authController.sendMailToRecoveryPassword);
routes.post('/recuperar-senha/nova-senha/:userIdToken', authController.changePasswordFromMailToRecovery);

export default routes;
