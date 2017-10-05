const express = require('express');
const router = express.Router();
const { Activity, Hotel, Restaurant, Place } = require('./models')

const activityTypes = { activities: Activity, hotels: Hotel, restaurants: Restaurant}

router.get('/:activityType', function(req, res){
  activityTypes[req.params.activityType].findAll({}).then(result => res.json(result));
})

router.get('/:activityType/:name', function(req, res){
  activityTypes[req.params.activityType]
  .findOne({where: {name: req.params.name}, include: [Place]})
  .then(result => res.json(result.dataValues.place.location));
})

module.exports = router;
