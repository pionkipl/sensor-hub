const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Get from measurement');
});

router.post('/', (req, res) => {
  console.log('Post from measurement');
})

router.put('/', (req, res) => {
  console.log('Put from measurement');
})

router.delete('/', (req, res) => {
  console.log('Delete from measurement');
})

module.exports = router;