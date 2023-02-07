import database from '../database/index.js';

class UsuariosModel {
  constructor() {
    this.db = database.promise();
  }

  async getUserById({ userId }) {
    const query = `SELECT u.*, cu.distancia_maxima, cu.data_maxima FROM usuarios u
      LEFT JOIN configuracoes_usuario cu
      ON cu.id_usuario = u.ID
      WHERE u.ID = ?;`;

    const [result] = await this.db.query(query, [userId]);
    return result[0];
  }

  async getUserByEmail({ email }) {
    const query = 'SELECT * FROM usuarios WHERE email = ?';

    const [result] = await this.db.query(query, [email]);
    return result[0];
  }

  async getAll() {
    const query = `SELECT * FROM usuarios;`;

    const [result] = await this.db.query(query);
    return result;
  }

  async updatePasswordById({ senha, id }) {
    const query = `UPDATE credenciais_usuario
      SET senha = ?
      WHERE id_usuario = ?;`;

    const [result] = await this.db.query(query, [senha, id]);
    return result;
  }

  async insertOne({ email, login, senha, nascimento, nome }) {
    const query = `INSERT INTO usuarios
      VALUES (default, ?, ?, ?,default, default);`;

    const [result] = await this.db.query(query, [nome, email, nascimento]);
    return result;
  }

  async deleteOne({ userId }) {
    await this.db.query('DELETE FROM `usuarios` WHERE `ID` = ?', [userId]);
    return true;
  }

  async updateUserProfileImage({ userId, imgExt }) {
    const query = `UPDATE usuarios
    SET url_imagem_perfil = 'uploads/user/profile/${userId}.${imgExt}'
    WHERE usuarios.ID = ?`;

    const [result] = await this.db.query(query, [userId]);
    return result;
  }

  async updateUserBgImage({ userId, imgExt }) {
    const query = `UPDATE usuarios
    SET url_imagem_fundo = 'uploads/user/background/${userId}.${imgExt}'
    WHERE usuarios.ID = ?`;

    const [result] = await this.db.query(query, [userId]);
    return result;
  }

  async putConfigUser({ userId, maxDistance, maxDate }) {
    const query = `UPDATE configuracoes_usuario cu
      SET distancia_maxima = ?, data_maxima = ?
      WHERE cu.id_usuario = ?;`;

    const [result] = await this.db.query(query, [maxDistance, maxDate, userId]);
    return result;
  }
}

export default new UsuariosModel();
