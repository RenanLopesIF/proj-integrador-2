import UsuariosModel from '../models/usuariosModel.js';
import path from 'path';
import usuariosModel from '../models/usuariosModel.js';

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

  async insertOne(req, res) {
    try {
      const { email, login, senha } = req.body;

      const result = await UsuariosModel.insertOne({ email, login, senha });
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
    }
  }
  async updateUserData(req, res) {
    try {
      const { userID, name, email, birthdate } = req.body;

      console.log(req.body);
      const result = await UsuariosModel.updateUserData({
        userID,
        name,
        email,
        birthdate,
      });
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
      const result = await usuariosModel.updateConfigUser({
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
