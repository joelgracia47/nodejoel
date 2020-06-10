const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();
  app.get('/', (req, res) => {
    
      res.render('./index', {
      
      });
    });
  

  app.get('/vista1', (req, res) => {
    connection.query('SELECT * FROM vista1', (err, result) => {
      res.render('./vista1', {
        vista1: result
      });
    });
  });

  app.get('/vista2', (req, res) => {
    connection.query('SELECT * FROM vista2', (err, result) => {
      res.render('./vista2', {
        vista2: result
      });
    });
  });

  app.get('/vista3', (req, res) => {
    connection.query('SELECT * FROM vista3', (err, result) => {
      res.render('./vista3', {
        vista3: result
      });
    });
  });

};