const Measurement = require('../models/measurement.model');

// Create and Save a new Measurement
exports.create = (req, res) => {
  // Create a Measurement
  const measurement = new Measurement({
    title: req.body.title,
    content: req.body.content
  })

  // Save measurement in the db
  measurement.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    })
};

// Retrieve and return all measurements from the database.
exports.findAll = (req, res) => {
  Measurement.find()
    .then(measurements => {
      console.log('Jestem w measurement route');
      res.send(measurements);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    })
};

// Find a single measurement with a measurementId
exports.findOne = (req, res) => {
  Measurement.findById(req.params.measurementId)
    .then(measurement => {
      if (!measurement) {
        return res.status(404).send({
          message: "Measurement not found width id " + req.params.measurementId
        });
      }
      res.send(measurement);
    })
    .catch(err => {
      return res.status(500).send({
        message: "error retrieving measurement with id " + req.params.measurementId
      });
    });
};

// Update a measurement identified by the measurementId in the request
exports.update = (req, res) => {
  // Find measurement and update with the request body
  Measurement.findByIdAndUpdate(req.params.measurementId, {
    title: req.body.title,
    content: req.body.content
  }, {
    new: true
  })
    .then(measurement => {
      res.send(measurement);
    })
    .catch(err => {
      return res.status(500).send({
        message: "Error updating measurement with id " + req.params.measurementId
      });
    });
};

// Delete a measurement with the specified measurementId in the request
exports.delete = (req, res) => {
  Measurement.findByIdAndRemove(req.params.measurementId)
    .then(measurement => {
      res.send({message: "Measurement deleted successfully"});
    })
    .catch(err => {
      return res.status(500).send({
        message: "Could not delete measurement with id " + req.params.measurementId
      });
    });
};