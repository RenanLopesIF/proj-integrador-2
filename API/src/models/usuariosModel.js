import database from '../database/index.js';

class UsuariosModel {
  constructor() {
    this.db = database.promise();
  }

  async getUserById({ userId }) {
    const query = `SELECT u.*, cu.distancia_maxima, cu.data_maxima FROM usuario u
      LEFT JOIN config_usuario cu
      ON cu.id_usuario = u.ID
      WHERE u.ID = ?;`;

    const [result] = await this.db.query(query, [userId]);
    return result[0];
  }

  async getUserByEmail({ email }) {
    const query = 'SELECT * FROM usuario WHERE email = ?';

    const [result] = await this.db.query(query, [email]);
    return result[0];
  }

  async getAll() {
    const query = `SELECT * FROM usuario;`;

    const [result] = await this.db.query(query);
    return result;
  }

  async updatePasswordById({ senha, id }) {
    const query = `UPDATE crend_usuario
      SET senha = ?
      WHERE id_usuario = ?;`;

    const [result] = await this.db.query(query, [senha, id]);
    return result;
  }

  async insertOne({ email, login, senha }) {
    const query = `INSERT INTO usuario
      VALUES (default, ?, default, default);`;

    const [result] = await this.db.query(query, [email]);
    return result;
  }

  async deleteOne({ userId }) {
    await this.db.query('DELETE FROM `usuarios` WHERE `id` = ?', [userId]);
    return true;
  }
}

export default new UsuariosModel();
