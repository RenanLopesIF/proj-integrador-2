import database from '../database/index.js';

class EventosModel {
  constructor() {
    this.db = database.promise();
  }

  async #getEventsByWhereCondition(whereCondition, queryVariables) {
    const queryEvents = `SELECT
    e.ID,
    e.titulo,
    e.descricao,
    e.faixa_etaria,
    e.url_imagem,
    e.data_inicio,
    e.data_fim,
    e.criado_em,
    ee.longitude,
    ee.latitude,
    ee.descricao_endereco,
    ee.auto_descricao_endereco,
    ee.rua,
    ee.cidade,
    ee.estado,
    ee.pais,
    u.nome AS usuario_nome,
    u.url_imagem_perfil AS usuario_avatar
  FROM eventos e
  LEFT JOIN endereco_eventos ee ON ee.id_evento = e.ID
  JOIN usuarios u ON e.id_usuario = u.ID
  WHERE ${whereCondition};`;

    const queryComments = `SELECT
      ce.ID,
      ce.descricao,
      u.nome AS autor,
      u.url_imagem_perfil AS autor_avatar
      FROM comentarios_evento ce
      JOIN usuarios u ON u.ID = ce.id_usuario
    WHERE ce.id_evento = ?;`;

    const queryReply = `SELECT
      rc.ID,
      rc.descricao,
      u.nome AS autor,
      u.url_imagem_perfil AS autor_avatar
      FROM respostas_comentario rc
      JOIN usuarios u ON u.ID = rc.id_usuario
    WHERE rc.id_comentario = ?;`;

    const [resultEvents] = await this.db.query(queryEvents, queryVariables);

    for (const event of resultEvents) {
      const [resultComments] = await this.db.query(queryComments, [event.ID]);

      for (const comment of resultComments) {
        const [resultReply] = await this.db.query(queryReply, [comment.ID]);
        comment.respostas = resultReply;
      }
      event.comentarios = resultComments;
    }

    return resultEvents;
  }

  async getAll({ maxLat, maxLon, minLat, minLon }) {
    const whereCondition = 'ee.longitude <= ? AND ee.longitude >= ? AND ee.latitude <= ? AND ee.latitude >= ?';
    const response = await this.#getEventsByWhereCondition(whereCondition, [maxLon, minLon, maxLat, minLat]);
    return response;
  }

  async getOneEvent({ eventID }) {
    const whereCondition = 'e.ID = ?';
    const response = await this.#getEventsByWhereCondition(whereCondition, [eventID]);
    return response;
  }

  async getEventsByUser({ userId }) {
    const whereCondition = 'u.ID = ?';
    const response = await this.#getEventsByWhereCondition(whereCondition, [userId]);
    return response;
  }
  async dadosEvento({ id_usuario, titulo, descricao, faixa_etaria, url_imagem, data_inicio, data_fim, }) {
    const query = 'INSERT INTO eventos  VALUES (default,?,?,?,?,?,?,?,?)';
    const criado_em = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const [resultEvento] = await this.db.query(query, [id_usuario, titulo, descricao, faixa_etaria, url_imagem, data_inicio, data_fim, criado_em]);
    return resultEvento;
  }


}

export default new EventosModel();
