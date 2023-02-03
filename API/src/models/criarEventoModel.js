import database from '../database/index.js';

class CriarEventoModel {
    constructor(){
        this.db= database.promise();
    }
    async dadosEvento({id_usuario,titulo,descricao,faixa_etaria,url_imagem,data_inicio,data_fim,criado_em}){
        const query = 'INSERT INTO eventos (id_usuario,titulo,descricao,faixa_etaria,url_imagem,data_inicio,data_fim,criado_em) VALUES (?,?,?,?,?,?,?,?)';
        const [resultEvento] = await this.db.query(query,[id_usuario,titulo,descricao,faixa_etaria,url_imagem,data_inicio,data_fim,criado_em]);
        return resultEvento;
    }
}
export default new CriarEventoModel();