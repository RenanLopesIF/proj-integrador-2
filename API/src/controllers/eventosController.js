import EventosModel from '../models/eventosModel.js';

class EventosController {
  async getAll(req, res) {
    try {
      const exmplGeoloaction = { maxLat: 48, maxLon: 18, minLat: 42, minLon: 12 };
      const result = await EventosModel.getAll(exmplGeoloaction);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async getOne(req, res) {
    try {
      const result = await EventosModel.getOneEvent({ eventID: req.params.eventID });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async getEventsByUser(req, res) {
    try {
      const result = await EventosModel.getEventsByUser({ userId: req.params.userID });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }


}

export default new EventosController();
