import decodeToken from '../utils/decodeJwt.js';

export default function protect(req, res, next) {
  const token = req.headers['user-token'];
  const decodedToken = decodeToken(token);

  if (!token || decodedToken.status === 'error') {
    res.status(403).send({ message: 'user not authenticated' });
    return;
  } else {
    next();
  }
}
