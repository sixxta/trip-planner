const express = require('express');
const router = express.Router();
const { Activity, Hotel, Restaurant } = require('./models')

router.get('/activities', function(req, res){
  Activity.findAll({}).then(result => res.json(result));
});

router.get('/hotels', function(req, res){
  Hotel.findAll({}).then(result => res.json(result));
});

router.get('/restaurants', function(req, res){
  Restaurant.findAll({}).then(result => res.json(result));
});

module.exports = router;
