import EventosModel from '../models/eventosModel.js';

class EventosController {
  async getAll(req, res) {
    try {
      const result = await EventosModel.getAll();
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
      const result = await EventosModel.getOneEvent({eventID: req.params.eventID});
      res.status(200).send(result)
    } catch (error) {
      console.log(error);
      res.status(400).send({message: 'error'})
    } finally {
      res.end();
    }
  }

  async getByUser(req, res) {
    try {
      const result = await EventosModel.getOneEventByUser({userId: req.params.userID})
      res.status(200).send(result);
    } catch (error) {
      console.log(error)
      res.status(400).send({message: 'error'})
    } finally {
      res.end();
    }
  }
}

export default new EventosController();
