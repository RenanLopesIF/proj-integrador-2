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

  async getUserConfig({ userId }) {
    const query = `SELECT distancia_maxima, data_maxima  FROM configuracoes_usuario cu where id_usuario = ?;`;
    const [result] = await this.db.query(query, [userId]);
    return result;
  }

  async updatePasswordById({ senha, id }) {
    const query = `UPDATE credenciais_usuario
      SET senha = ?
      WHERE id_usuario = ?;`;

    const [result] = await this.db.query(query, [senha, id]);
    return result;
  }

  async deleteOne({ userId }) {
    await this.db.query('DELETE FROM `usuarios` WHERE `ID` = ?', [userId]);
    return true;
  }

  async updateUserProfileImage({ userId, imgExt }) {
    const query = `UPDATE usuarios
    SET url_imagem_perfil = 'uploads/user/profile/${userId}${imgExt}'
    WHERE usuarios.ID = ?`;

    const [result] = await this.db.query(query, [userId]);
    return result;
  }

  async updateUserBgImage({ userId, imgExt }) {
    const query = `UPDATE usuarios
    SET url_imagem_fundo = 'uploads/user/background/${userId}${imgExt}'
    WHERE usuarios.ID = ?`;

    const [result] = await this.db.query(query, [userId]);
    return result;
  }

  async updateUserData({ userID, name, email, birthdate }) {
    const query = `UPDATE usuarios SET nome = ?, email = ?, data_nascimento = ? WHERE id = ?`;
    const [result] = await this.db.query(query, [name, email, birthdate, userID]);
    return result;
  }

  async authenticat({ login, senha }) {
    const query = 'SELECT * FROM credenciais_usuario WHERE login =?'; //fazendo a busca no banco e comparandosenha e login que o user adicionou

    const [result] = await this.db.query(query, [login]);
    return result; //aguarda o resultado da comparação entre os dados do banco com o que esta armazenado no 'query' e armazena e retorna o resultado na variavel result
  }

  async insertOne({ nome, email, data_nascimento, login, senha }) {
    const queryVerificUser = 'SELECT * FROM usuarios WHERE email = ?'; // buscando no banco de dados o email adicioando pelo usuario
    const [resultVerificUser] = await this.db.query(queryVerificUser, [email]); // esperando para armazenar o resultado da comparação entre os dados do banco e do que o user adicionou
    if (resultVerificUser.length) {
      // caso ja exista irá entrar nesta estrutura de decisão
      throw new Error('Email já existe.');
    }

    const queryUser = 'INSERT INTO usuarios (nome, email, data_nascimento) VALUES (?,?,?)';
    const [resultUser] = await this.db.query(queryUser, [nome, email, data_nascimento]);
    console.log(resultUser);
    const queryCred = 'INSERT INTO credenciais_usuario (login,id_usuario,senha) VALUES (?,?,?)';
    await this.db.query(queryCred, [login, resultUser.insertId, senha]);

    return resultUser;
  }

  async updateConfigUser({ userId, maxDistance, maxDate }) {
    const query = `UPDATE configuracoes_usuario cu
      SET distancia_maxima = ?, data_maxima = ?
      WHERE cu.id_usuario = ?;`;

    const [result] = await this.db.query(query, [maxDistance, maxDate, userId]);
    return result;
  }
  async checkpasswordUserLogin({ login }) {
    const query = 'SELECT senha FROM credenciais_usuario WHERE login = ?';

    const [result] = await this.db.query(query, [login]);
    return result;
  }
}
export default new UsuariosModel();
