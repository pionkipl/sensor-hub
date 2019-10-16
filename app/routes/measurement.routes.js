module.exports = (app) => {
  const measurements = require('../controllers/measurements.controller');

  app.post('/measurements', measurements.create);

  app.get('/measurements', measurements.findAll);

  app.get('/measurements/:noteId', measurements.findOne);

  app.put('/measurements/:noteId', measurements.update);

  app.delete('/measurements/:noteId', measurements.delete);


}