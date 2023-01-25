import UsuariosModel from '../models/usuariosModel.js';

class UsuariosController {
  async getOne(req, res) {
    try {
      const userId = Number(req.params.id);

      if (isNaN(userId)) {
        res.status(400).send({ message: 'invalid user id' });
      }

      const result = await UsuariosModel.getUserById({ userId });

      res.send(result);
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
      res.send(result);
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
      res.send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }
}

export default new UsuariosController();
