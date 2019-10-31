const express = require("express");
const bodyParser = require("body-parser");
const measurementsRoute = require("./route/measurements");
const deviceRoute = require("./route/device");
const Sequelize = require("sequelize");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/measurements", measurementsRoute);
app.use("/device", deviceRoute);

app.listen(port);
