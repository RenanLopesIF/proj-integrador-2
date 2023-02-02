import database from '../database/index.js';

class LoginUserModel {
    constructor() {
        this.db = database.promise(); //inicializando a conexão com o banco de dados
    }
    async authenticat({ login, senha }) {
        const query = 'SELECT * FROM crend_usuario WHERE login =? AND senha = ?'; //fazendo a busca no banco e comparandosenha e login que o user adicionou
        
        const [result] = await this.db.query(query, [login, senha]);
        return result; //aguarda o resultado da comparação entre os dados do banco com o que esta armazenado no 'query' e armazena e retorna o resultado na variavel result
    }
}
export default new LoginUserModel();
