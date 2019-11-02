const express = require("express");
const bodyParser = require("body-parser");
const measurementsRoute = require("./route/measurements");
const deviceRoute = require("./route/device");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/devices", deviceRoute);
app.use("/measurements", measurementsRoute);

app.listen(port);
