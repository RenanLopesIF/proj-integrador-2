import database from '../database/index.js';

class EventosModel {
  constructor() {
    this.db = database.promise();
  }

  async getAll() {
    const query = `SELECT * FROM eventos
    INNER JOIN endereco_eventos ON endereco_eventos.id_evento = eventos.id`;

    const [result] = await this.db.query(query);
    return result;
  }

  async getOneEvent({ eventID }) {
    const query = `SELECT * FROM eventos
    INNER JOIN endereco_eventos ON endereco_eventos.id_evento = eventos.id
    WHERE eventos.ID = ?`;

    const [result] = await this.db.query(query, [eventID]);
    return result;
  }

  async getOneEventByUser({ userId }) {
    const query = `SELECT * FROM eventos
    INNER JOIN endereco_eventos ON endereco_eventos.id_evento = eventos.id
    WHERE eventos.id_usuario = ?`;

    const [result] = await this.db.query(query, [userId]);
    return result;
  }
}

export default new EventosModel();
