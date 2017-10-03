const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/trip-planner', {logging: false});

const Place = db.define('place', {
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  phone: Sequelize.STRING,
  location: Sequelize.ARRAY(Sequelize.FLOAT)
});

const Hotel = db.define('hotel', {
  name: Sequelize.STRING,
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      min: 1, max: 5
    }
  }, amenities: Sequelize.STRING
});

const Activity = db.define('activity', {
  name: Sequelize.STRING,
  age_range: Sequelize.STRING
});

const Restaurant = db.define('restaurant', {
  name: Sequelize.STRING,
  cuisine: Sequelize.STRING,
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1, max: 5
    }
  }
})

Restaurant.belongsTo(Place);
Hotel.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = { db, Place, Activity, Restaurant, Hotel };
