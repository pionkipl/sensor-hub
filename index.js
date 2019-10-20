const express = require("express");
const bodyParser = require("body-parser");
const measurements = require("./measurements");
const database = require("./database/connection");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/measurements", measurements);

app.listen(port);

database.initConnection();
