import jwt from 'jsonwebtoken';

const privateKey = process.env['JWT_KEY'];

export default function decodeJwt(token) {
  let decodedToken = {};
  jwt.verify(token, privateKey, (err, decoded) => {
    if (err) decodedToken = { status: 'error', data: err };
    decodedToken = { status: 'success', data: decoded };
  });

  return decodedToken;
}
