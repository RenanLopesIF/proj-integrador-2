import database from '../database/index.js';

class CriarUserModel{
    constructor(){
        this.db = database.promise();
    }
    async user({nome, email, data_nascimento}){
        const queryVerificUser = 'SELECT * FROM usuarios WHERE email = ?'; // buscando no banco de dados o email adicioando pelo usuario
        const [resultVerificUser] = await this.db.query(queryVerificUser, [email]); // esperando para armazenar o resultado da comparação entre os dados do banco e do que o user adicionou
        if(resultVerificUser.length){ // caso ja exista irá entrar nesta estrutura de decisão 
            throw new Error('Email já existe.');
        }
        const query = 'INSERT INTO usuarios (nome, email, data_nascimento) VALUES (?,?,?)';
        const [resultUser] = await this.db.query(query, [nome, email, data_nascimento]);
        return resultUser;

    }
    async credUser({login,id_usuario,senha}){
        const queryVerificCred = 'SELECT * FROM credenciais_usuario WHERE login = ?' // buscando no banco de dados o login adicionado pelo usuario
        const [resultVerificCred] = await this.db.query(queryVerificCred,[login]);
        if(resultVerificCred.length){ // caso já exista um login igual, entrará na estrutura de decição
            throw new Error('Login já existe.'); 

        }
        
        const query = 'INSERT INTO credenciais_usuario (login,id_usuario,senha) VALUES (?,?,?)';
        const [resultCred] = await this.db.query(query, [login,id_usuario,senha]);
        return resultCred;
    }
}
export default new CriarUserModel();


/*
    Existe dois problemas neste código>
    o id_usuario deve ser criado no mesmo momento que o email
    e a rota deve chamar as duas funçoes assincronas,
*/