const express = require('express');
const router = express.Router();
const { Activity } = require('../models/');

router.get('/', (req, res, next) => {
  Activity.findAll({})
  .then(function(result) {
    res.json(result)
  })
  .catch(next)
})

module.exports = router;
