const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Get from device');
});

router.post('/', (req, res) => {
  console.log('Post from device');
})

router.put('/', (req, res) => {
  console.log('Put from device');
})

router.delete('/', (req, res) => {
  console.log('Delete from device');
})

module.exports = router;