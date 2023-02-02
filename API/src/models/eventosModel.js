import database from '../database/index.js';

class EventosModel {
  constructor() {
    this.db = database.promise();
  }

  async getAll() {
    const query = `SELECT * FROM evento
    INNER JOIN endereco_evento ON endereco_evento.id_evento = evento.id`;

    const [result] = await this.db.query(query);
    return result;
  }

  async getOneEvent({ eventID }) {
    const query = `SELECT * FROM evento
    INNER JOIN endereco_evento ON endereco_evento.id_evento = evento.id
    WHERE evento.ID = ?`;

    const [result] = await this.db.query(query, [eventID]);
    return result;
  }

  async getOneEventByUser({ userId }) {
    const query = `SELECT * FROM evento
    INNER JOIN endereco_evento ON endereco_evento.id_evento = evento.id
    WHERE evento.id_usuario = ?`;

    const [result] = await this.db.query(query, [userId]);
    return result;
  }
}

export default new EventosModel();
