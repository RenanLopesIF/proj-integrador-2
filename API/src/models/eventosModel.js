import database from '../database/index.js';

class EventosModel {
  constructor() {
    this.db = database.promise();
  }

  async getEventsByWhereCondition(whereCondition, queryVariables, userId = 0) {
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
    u.url_imagem_perfil AS usuario_avatar,
    u.ID as usuario_id,
    (select count(ec.id_evento) from eventos_curtidas ec where ec.id_evento = e.ID) as total_curtidas,
    (select
			count(ce.ID) + (select count(rc.ID) from respostas_comentario rc
			join comentarios_evento ce2 ON ce2.ID = rc.id_comentario
			where ce2.id_evento = ce.id_evento)
		from comentarios_evento ce
		where ce.id_evento = e.ID) as total_comentarios,
	(select count(ec2.id_usuario) from eventos_curtidas ec2 where ec2.id_usuario = ? and ec2.id_evento = e.ID ) as curtiu
  FROM eventos e
  LEFT JOIN endereco_eventos ee ON ee.id_evento = e.ID
  LEFT JOIN eventos_curtidas ec ON ec.id_evento = e.ID
  LEFT JOIN usuarios u ON e.id_usuario = u.ID
  WHERE ${whereCondition}
  ORDER BY e.criado_em DESC;`;

    const queryComments = `SELECT
      ce.ID,
      ce.descricao,
      ce.criado_em,
      u.ID as autor_id,
      u.nome AS autor,
      u.url_imagem_perfil AS autor_avatar
      FROM comentarios_evento ce
      JOIN usuarios u ON u.ID = ce.id_usuario
    WHERE ce.id_evento = ?
    ORDER BY ce.criado_em DESC;`;

    const queryReply = `SELECT
      rc.ID,
      rc.descricao,
      rc.criado_em,
      u.ID as autor_id,
      u.nome AS autor,
      u.url_imagem_perfil AS autor_avatar
      FROM respostas_comentario rc
      JOIN usuarios u ON u.ID = rc.id_usuario
    WHERE rc.id_comentario = ?
    ORDER BY rc.criado_em DESC;`;

    const [resultEvents] = await this.db.query(queryEvents, [userId, ...queryVariables]);

    const parsedResultEvents = resultEvents.reduce((agg, cur) => {
      if (cur.ID) return [...agg, cur];
      return agg;
    }, []);

    for (const event of parsedResultEvents) {
      const [resultComments] = await this.db.query(queryComments, [event.ID]);

      for (const comment of resultComments) {
        const [resultReply] = await this.db.query(queryReply, [comment.ID]);
        comment.respostas = resultReply;
      }
      event.comentarios = resultComments;
    }

    return parsedResultEvents;
  }

  async getAll({ maiorLat, maiorLong, menorLat, menorLong, maxDate }, userId) {
    const whereCondition =
      'ee.latitude  <= ? AND ee.latitude  >=  ? AND ee.longitude  <= ? AND ee.longitude  >= ? AND data_inicio <= ?';
    const response = await this.getEventsByWhereCondition(
      whereCondition,
      [maiorLat, menorLat, maiorLong, menorLong, maxDate],
      userId,
    );
    return response;
  }

  async getOneEvent({ eventID, userId }) {
    const whereCondition = 'e.ID = ?';
    const response = await this.getEventsByWhereCondition(whereCondition, [eventID], userId);
    return response;
  }

  async getEventsByUser({ userId }) {
    const whereCondition = 'u.ID = ?';
    const response = await this.getEventsByWhereCondition(whereCondition, [userId]);
    return response;
  }

  async insertOne({
    id_usuario,
    titulo,
    descricao,
    faixa_etaria,
    url_imagem,
    data_inicio,
    data_fim,
    latitude,
    longitude,
    descricao_endereco,
    autoDescEndereco,
    addressDetails,
    img_ext,
  }) {
    const query = 'INSERT INTO eventos VALUES (default,?,?,?,?,?,?,?,default)';
    const [resultEvento] = await this.db.query(query, [
      id_usuario,
      titulo,
      descricao,
      faixa_etaria,
      url_imagem,
      data_inicio,
      data_fim,
    ]);

    const eventId = resultEvento.insertId;

    const eventImg = url_imagem ? `${url_imagem}/${eventId}${img_ext}` : '';
    const queryUpdateEventImg = `UPDATE eventos
    SET url_imagem = '${eventImg}'
    WHERE eventos.ID = ?`;

    await this.db.query(queryUpdateEventImg, [eventId]);

    const queryAddresEvent = 'INSERT INTO endereco_eventos VALUES (default, ?, ?, ?, ? ,? ,? ,? ,? ,?)';
    await this.db.query(queryAddresEvent, [
      eventId,
      longitude,
      latitude,
      descricao_endereco,
      autoDescEndereco,
      addressDetails.road || '',
      addressDetails.town || addressDetails.village || '',
      addressDetails.state || '',
      addressDetails.country || '',
    ]);

    return resultEvento;
  }

  async deletarEvento(id_evento, id_usuario) {
    const query = `DELETE ee, e FROM endereco_eventos ee
      JOIN eventos e on e.ID = ee.id_evento
      WHERE ee.id_evento = ? AND e.id_usuario = ?;`;

    const [result] = await this.db.query(query, [id_evento, id_usuario]);
    if (result.affectedRows === 0) {
      throw new Error('Evento não encontrado ou não pertence ao usuário.');
    }
    return result;
  }

  async addEventLike({ userId, eventId }) {
    const query = `INSERT INTO  eventos_curtidas VALUES (
      ?,?
    )`;

    const [result] = await this.db.query(query, [userId, eventId]);
    return result;
  }

  async removeEventLike({ userId, eventId }) {
    const query = `DELETE FROM eventos_curtidas WHERE id_usuario = ? AND id_evento = ?`;

    const [result] = await this.db.query(query, [userId, eventId]);
    return result;
  }

  async addEventComment({ userId, eventId, description }) {
    const query = `INSERT INTO  comentarios_evento VALUES (
      DEFAULT, ?,?,?,DEFAULT
    )`;

    const [result] = await this.db.query(query, [eventId, userId, description]);
    return result;
  }

  async addCommentReply({ userId, comentId, description }) {
    const query = `INSERT INTO respostas_comentario VALUES (
      DEFAULT,?,?,?,DEFAULT
    )`;

    const [result] = await this.db.query(query, [comentId, userId, description]);
    return result;
  }
}

export default new EventosModel();
