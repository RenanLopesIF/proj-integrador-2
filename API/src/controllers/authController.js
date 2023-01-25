class AuthController {
  async login(req, res) {
    try {
      let result = 'teste';

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(403).send({ message: 'error' });
    } finally {
      res.end();
    }
  }
}

export default new AuthController();
