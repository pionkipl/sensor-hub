const express = require("express");
const bodyParser = require("body-parser");
const measurementsRoute = require("./routes/measurements");
const devicesRoute = require("./routes/devices");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/devices", devicesRoute);
app.use("/measurements", measurementsRoute);

app.listen(port);
