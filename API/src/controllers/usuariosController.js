import UsuariosModel from '../models/usuariosModel.js';
import path from 'path';
import CryptoJS from 'crypto-js';

class UsuariosController {
  async getOne(req, res) {
    try {
      const userId = Number(req.params.id);

      if (isNaN(userId)) {
        res.status(400).send({ message: 'invalid user id' });
      }

      const result = await UsuariosModel.getUserById({ userId });

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async getAll(req, res) {
    try {
      const result = await UsuariosModel.getAll();
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async getUserConfig(req, res) {
    const { id } = req.params;
    try {
      const result = await UsuariosModel.getUserConfig({ userId: id });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async uploadUserProfileImage(req, res) {
    try {
      await UsuariosModel.updateUserProfileImage({
        userId: req.params.userId,
        imgExt: path.extname(req.file.originalname),
      });
      res.status(200).send({ message: 'success' });
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async uploadUserBgImage(req, res) {
    try {
      await UsuariosModel.updateUserBgImage({
        userId: req.params.userId,
        imgExt: path.extname(req.file.originalname),
      });
      res.status(200).send({ message: 'success' });
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }
  async updateUserData(req, res) {
    try {
      const recoverySecretKey = process.env['SECRET_KEY_RECOVERY_PASS'] || '';

      const { userID, name, email, birthdate, login, senha } = req.body;
      const criptSenha = CryptoJS.AES.encrypt(String(senha), recoverySecretKey).toString();

      console.log(req.body);
      const result = await UsuariosModel.updateUserData({
        userID,
        name,
        email,
        birthdate,
      });

      const respp = await UsuariosModel.updateUserCredentials({
        login,
        senha: criptSenha,
        userId: userID,
      });

      console.log(respp);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async updateConfigUser(req, res) {
    try {
      const { userId, maxDistance, maxDate } = req.body;
      const result = await UsuariosModel.updateConfigUser({
        userId,
        maxDistance,
        maxDate,
      });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }
}

export default new UsuariosController();
