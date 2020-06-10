const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '13.65.203.149',
    user: 'root',
    password: 'password',
    database: 'spotify'
  });
}