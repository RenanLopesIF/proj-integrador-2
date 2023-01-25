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
    return result;
  }

  async getAll() {
    const query = `SELECT * FROM usuario;`;

    const [result] = await this.db.query(query);
    return result;
  }
  async insertOne({ email, login, senha }) {
    const query = `INSERT INTO usuario
      VALUES (default, ?, default, default);`;

    const [result] = await this.db.query(query, [email]);
    return result;
  }
  //   insert into usuario
  // values (default, 'teste@teste.com', 'https://img', "https://img2");

  async deleteOne({ userId }) {
    await database.query('DELETE FROM `usuarios` WHERE `id` = ?', [userId]);
    return true;
  }
}

export default new UsuariosModel();
