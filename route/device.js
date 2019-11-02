const express = require("express");
const router = express.Router();
const Device = require("../models").Device;

router.get("/", (req, res) => {
  return Device.findAll()
    .then(devices => res.status(200).send(devices))
    .catch(error => {
      return res.status(400).send(error);
    });
});

router.get("/:id", (req, res) => {
  return Device.findByPk(req.params.id)
    .then(device => res.status(200).send(device))
    .catch(error => {
      return res.status(400).send(error);
    });
});

router.post("/", (req, res) => {
  return Device.create({ ...req.body })
    .then(device => res.status(201).send(device))
    .catch(error => res.status(400).send(error));
});

router.put("/:id", (req, res) => {
  return Device.update(
    { ...req.body },
    { where: { id: req.params.id }, returning: true, plain: true }
  )
    .catch(error => res.status(400).send(error))
    .then(updatedDevice => {
      return res.status(204).send(updatedDevice[1]);
    });
});

router.delete("/:id", (req, res) => {
  return Device.destroy({
    where: {
      id: req.params.id
    }
  })
    .catch(error => res.status(404).send(error))
    .then(() => {
      return res.status(201).send();
    });
});

module.exports = router;
