const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Config the db
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to db
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to the db');
}).catch((err => {
  console.log('Could not conneted due to ', err);
  process.exit();
}));

app.get('/', (req, res) => {
  res.json({"message": "Hello"});
});

require('./app/routes/measurement.routes')(app);

app.listen(port);
