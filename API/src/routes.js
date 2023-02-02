import { Router, json } from 'express';
import multer from 'multer';
import storageUserProfileImage from './configs/uploadUserImageStorage.js';
import storageUserBGImage from './configs/uploadUserBackgroundStorage.js';

import LoginUserController from './controllers/loginUserController.js';

import usuariosController from './controllers/usuariosController.js';
import eventosController from './controllers/eventosController.js';

const uploadUserProfileImage = multer({ storage: storageUserProfileImage });
const uploadUserBgImage = multer({ storage: storageUserBGImage });

const routes = new Router();
routes.use(json());

routes.get('/usuarios', usuariosController.getAll);
routes.get('/usuarios/:id', usuariosController.getOne);
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
routes.get('/usuario/evento/:userID', eventosController.getByUser);
routes.get('/evento/:eventID', eventosController.getOne);
routes.get('/eventos', eventosController.getAll);

routes.post('/authenticate', LoginUserController.authenticate);
export default routes;