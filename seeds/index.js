const Campground = require('../models/campground');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected');
});

const seedDB = async () => {
  await Campground.deleteMany({});
};

seedDB();
