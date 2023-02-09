import jwt from 'jsonwebtoken';

const privateKey = process.env['JWT_KEY'];

export default function encodeJwt(data) {
  const token = jwt.sign(data, privateKey);
  return token;
}
