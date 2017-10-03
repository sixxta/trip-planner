const express = require('express');
const router = express.Router();
const { db, Place, Activity, Restaurant, Hotel } = require('./models/')

router.get('/', (req, res, next) => {
  console.log('it\'s going to the router')

  Promise.all(
    [Hotel.findAll({ include: [Place]}),
    Activity.findAll({ include: [Place]}),
    Restaurant.findAll({ include: [ Place]})])
  .then(function(result) {
    res.json(result)
  })
  .catch(next)

})
module.exports = router;
