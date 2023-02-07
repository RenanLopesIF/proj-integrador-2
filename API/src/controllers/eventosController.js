import EventosModel from '../models/eventosModel.js';
import getGeolocationInfo from '../utils/getGeolocationInfo.js';

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

  async addEventLike(req, res) {
    try {
      const { userId, eventId } = req.body;
      const result = await EventosModel.addEventLike({
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

  async removeEventLike(req, res) {
    try {
      const { userId, eventId } = req.body;
      const result = await EventosModel.removeEventLike({
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

  async addEventComment(req, res) {
    try {
      const { userId, eventId, description } = req.body;
      const result = await EventosModel.addEventComment({
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

  async criarEvento(req, res) {
    try {
      const auto_address = await getGeolocationInfo({ lat: req.body.latitude, lng: req.body.longitude });
      const autoDescEndereco = auto_address.data.display_name;
      const addressDetails = auto_address.data.address;

      await EventosModel.insertOne({ ...req.body, addressDetails, autoDescEndereco });
      res.status(200).send({ message: 'success' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    } finally {
      res.end();
    }
  }

  async addCommentReply(req, res) {
    try {
      const { userId, comentId, description } = req.body;
      const result = await EventosModel.addCommentReply({
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

  async deletandoEvent(req, res) {
    const eventID = req.params.eventID;
    const userID = req.params.userID;
    try {
      const result = await EventosModel.deletarEvento(eventID, userID);
      console.log(result);
      res.send(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    } finally {
      res.end();
    }
  }
}

export default new EventosController();
