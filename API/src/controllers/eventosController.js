import EventosModel from '../models/eventosModel.js';
import UsuariosModel from '../models/usuariosModel.js';
import decodeJwt from '../utils/decodeJwt.js';
import getGeolocationInfo from '../utils/getGeolocationInfo.js';
import fs from 'fs';
import path from 'path';

class EventosController {
  async getAll(req, res) {
    const userToken = req.headers['user-token'];
    const userId = userToken ? decodeJwt(userToken).data.ID : 0;
    const ONE_DAY_ONTIMESTAMP = 86400000;

    try {
      const curGeolocation = { lat: Number(req.query.lat), lng: Number(req.query.lng) };

      let [userConfigs] = await UsuariosModel.getUserConfig({ userId });

      if (!userConfigs)
        userConfigs = {
          data_maxima: 30,
          distancia_maxima: 30,
        };

      const eventMaxDate = new Date(Date.now() + userConfigs.data_maxima * ONE_DAY_ONTIMESTAMP)
        .toJSON()
        .slice(0, 19)
        .replace('T', ' ');
      const maxDistance = userConfigs.distancia_maxima;

      // latitude
      const diffLat = maxDistance / 107;
      const diffLong = maxDistance / 99.012;

      const eventConfigs = {
        maiorLat: diffLat + curGeolocation.lat,
        menorLat: -diffLat + curGeolocation.lat,
        maiorLong: diffLong + curGeolocation.lng,
        menorLong: -diffLong + curGeolocation.lng,
        maxDate: eventMaxDate,
      };

      const result = await EventosModel.getAll(eventConfigs, userId);
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
      const userToken = req.headers['user-token'];
      const userId = userToken ? decodeJwt(userToken).data.ID : 0;

      const result = await EventosModel.getOneEvent({ eventID: req.params.eventID, userId: userId });
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

      const url_imagem = req.file ? 'uploads/event' : '';
      const img_ext = req.file ? path.extname(req.file.originalname) : '';

      const insertRes = await EventosModel.insertOne({
        ...req.body,
        addressDetails,
        autoDescEndereco,
        url_imagem,
        img_ext,
      });

      if (req.file) {
        const newFilePath = req.file.path.split('\\event\\')[0] + `\\event\\${insertRes.insertId}${img_ext}`;

        await new Promise((resolve, reject) => {
          fs.rename(req.file.path, newFilePath, (err) => {
            if (err) reject(err);
            resolve('ok');
          });
        });
      }

      res.status(200).send({ message: 'success' });
    } catch (error) {
      console.log(error);
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
    const { eventID, userID } = req.body;
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
