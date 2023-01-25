import database from '../database/index.js';

class EventosModel {
  constructor() {
    this.db = database.promise();
  }

  async getAll() {
    const query = `SELECT * FROM evento;`;

    const [result] = await this.db.query(query);
    return result;
  }
}

export default new EventosModel();
