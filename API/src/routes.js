import { Router, json } from 'express';
import multer from 'multer';
import storageUserProfileImage from './configs/uploadUserImageStorage.js';
import storageUserBGImage from './configs/uploadUserBackgroundStorage.js';

import usuariosController from './controllers/usuariosController.js';
import authController from './controllers/authController.js';
import eventosController from './controllers/eventosController.js';

const uploadUserProfileImage = multer({ storage: storageUserProfileImage });
const uploadUserBgImage = multer({ storage: storageUserBGImage });

const routes = new Router();
routes.use(json());

routes.get('/usuarios', usuariosController.getAll);
routes.get('/usuarios/:id', usuariosController.getOne);
routes.get('/usuario/eventos/:userID', eventosController.getEventsByUser);
routes.post('/usuarios/novo', usuariosController.insertOne);
routes.post(
  '/usuarios/upload/profile-image/:userId',
  uploadUserProfileImage.single('profile-image'),
  usuariosController.uploadUserProfileImage,
);
routes.post(
  '/usuarios/upload/background-image/:userId',
  uploadUserBgImage.single('background-image'),
  usuariosController.uploadUserProfileImage,
);
routes.put('/usuarios/novas/configuracoes', usuariosController.putNewConfigUser);

routes.post('/evento/novo', eventosController.criarEvento);
routes.get('/evento/:eventID', eventosController.getOne);
routes.get('/eventos', eventosController.getAll);
routes.delete('/deletEvent/:eventID/:userID', eventosController.deletandoEvent);

routes.post('/recuperar-senha', authController.sendMailToRecoveryPassword);
routes.put('/recuperar-senha/nova-senha/:userIdToken', authController.changePasswordFromMailToRecovery);

export default routes;
