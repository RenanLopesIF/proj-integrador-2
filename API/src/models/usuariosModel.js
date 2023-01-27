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

  async deleteOne({ userId }) {
    await this.db.query('DELETE FROM `usuarios` WHERE `id` = ?', [userId]);
    return true;
  }

  async updateUserProfileImage({ userId, imgExt }) {
    const query = `UPDATE usuario
    SET url_imagem_perfil = 'uploads/user/profile/${userId}.${imgExt}'
    WHERE usuario.ID = ?`;

    const [result] = await this.db.query(query, [userId]);
    return result;
  }

  async updateUserBgImage({ userId, imgExt }) {
    const query = `UPDATE usuario
    SET url_imagem_fundo = 'uploads/user/background/${userId}.${imgExt}'
    WHERE usuario.ID = ?`;

    const [result] = await this.db.query(query, [userId]);
    return result;
  }
}

export default new UsuariosModel();
