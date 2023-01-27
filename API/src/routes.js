import { Router, json } from 'express';
import multer from 'multer';
import storageUserProfileImage from './configs/uploadUserImageStorage.js';
import storageUserBGImage from './configs/uploadUserBackgroundStorage.js';

import usuariosController from './controllers/usuariosController.js';

const uploadUserProfileImage = multer({ dest: 'public/uploads/user/profile', storage: storageUserProfileImage });
const uploadUserBgImage = multer({ dest: 'public/uploads/user/profile', storage: storageUserBGImage });

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

export default routes;
