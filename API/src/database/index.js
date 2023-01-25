import mysql from 'mysql2';
import 'dotenv/config';

const database = mysql.createConnection({
  host: process.env['DB_HOST'],
  user: process.env['DB_USER'],
  database: process.env['DB_NAME'],
});

export default database;
