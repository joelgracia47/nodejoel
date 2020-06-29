const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'ip',
    user: 'root',
    password: 'change',
    database: 'change'
  });
}
