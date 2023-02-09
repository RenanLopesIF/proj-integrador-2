import { Router, json } from 'express';
import multer from 'multer';
import storageUserProfileImage from './configs/uploadUserImageStorage.js';
import storageUserBGImage from './configs/uploadUserBackgroundStorage.js';
import storageEventImage from './configs/uploadEventImageStorage.js';

import UsuariosController from './controllers/usuariosController.js';
import AuthController from './controllers/authController.js';
import EventosController from './controllers/eventosController.js';

const uploadUserProfileImage = multer({ storage: storageUserProfileImage });
const uploadUserBgImage = multer({ storage: storageUserBGImage });
const uploadEventImage = multer({ storage: storageEventImage });

const routes = new Router();
routes.use(json());

routes.get('/usuarios', UsuariosController.getAll);
routes.get('/usuarios/:id', UsuariosController.getOne);
routes.get('/usuario/eventos/:userID', EventosController.getEventsByUser);
routes.post(
  '/usuario/upload/profile-image/:userId',
  uploadUserProfileImage.single('profile-image'),
  UsuariosController.uploadUserProfileImage,
);
routes.post(
  '/usuario/upload/background-image/:userId',
  uploadUserBgImage.single('background-image'),
  UsuariosController.uploadUserBgImage,
);
routes.put('/usuario/atualizar/configuracoes', UsuariosController.updateConfigUser);
routes.put('/usuario/atualizar/dados', UsuariosController.updateUserData);

routes.get('/evento/:eventID', EventosController.getOne);
routes.get('/eventos', EventosController.getAll);
routes.post('/evento/novo', uploadEventImage.single('event-image'), EventosController.criarEvento);
routes.post('/evento/enviar-curtida', EventosController.addEventLike);
routes.post('/evento/enviar-comentario', EventosController.addEventComment);
routes.post('/evento/enviar-resposta', EventosController.addCommentReply);
routes.delete('/evento/deletar/:eventID/:userID', EventosController.deletandoEvent);
routes.delete('/evento/remover-curtida', EventosController.removeEventLike);

routes.post('/auth/recuperar-senha', AuthController.sendMailToRecoveryPassword);
routes.put('/auth/recuperar-senha/nova-senha/:userIdToken', AuthController.changePasswordFromMailToRecovery);
routes.post('/auth/novo', AuthController.inserirUser);
routes.post('/auth/login', AuthController.login);

export default routes;
