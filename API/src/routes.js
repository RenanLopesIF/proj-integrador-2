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
routes.post(
  '/usuario/upload/profile-image/:userId',
  uploadUserProfileImage.single('profile-image'),
  usuariosController.uploadUserProfileImage,
);
routes.post(
  '/usuario/upload/background-image/:userId',
  uploadUserBgImage.single('background-image'),
  usuariosController.uploadUserBgImage,
);
routes.put('/usuario/atualizar/configuracoes', usuariosController.updateConfigUser);
routes.put('/usuario/atualizar/dados', usuariosController.updateUserData);

routes.get('/evento/:eventID', eventosController.getOne);
routes.get('/eventos', eventosController.getAll);
routes.post('/evento/novo', eventosController.criarEvento);
routes.delete('/evento/deletar/:eventID/:userID', eventosController.deletandoEvent);

routes.post('/auth/recuperar-senha', authController.sendMailToRecoveryPassword);
routes.put('/auth/recuperar-senha/nova-senha/:userIdToken', authController.changePasswordFromMailToRecovery);
routes.post('/auth/novo', authController.inserirUser);
routes.post('/auth/login', authController.login);

export default routes;
