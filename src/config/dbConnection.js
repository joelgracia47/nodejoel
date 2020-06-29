const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '13.65.203.149',
    user: 'root',
    password: 'N0s3r3h@ackead0',
    database: 'spotify'
  });
}
