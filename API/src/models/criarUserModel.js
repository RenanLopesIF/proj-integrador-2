import database from '../database/index.js';

class CriarUserModel{
    constructor(){
        this.db = database.promise();
    }
   
}
export default new CriarUserModel();


/*
    Existe dois problemas neste código>
    o id_usuario deve ser criado no mesmo momento que o email
    e a rota deve chamar as duas funçoes assincronas,
*/