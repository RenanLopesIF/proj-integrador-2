import mysql from 'mysql2';

const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'if_integrador_2',
});

export default database;
