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
      const result = await EventosModel.getOneEvent({ eventID: req.params.eventID });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async postCurtiEvent(req, res) {
    try {
      const { userId, eventId } = req.params;
      const result = await EventosModel.getCurtirEvent({
        userId,
        eventId,
      });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async getByUser(req, res) {
    try {
      const result = await EventosModel.getOneEventByUser({ userId: req.params.userID });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async postComentEvent(req, res) {
    try {
      const { userId, eventId, description } = req.params;
      const result = await EventosModel.getComentEvent({
        userId,
        eventId,
        description,
      });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: 'error' });
    } finally {
      res.end();
    }
  }

  async postRespostaComent(req, res) {
    try {
      const { userId, comentId, description } = req.params;
      const result = await EventosModel.getRespostaComentEvent({
        userId,
        comentId,
        description,
      });
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
