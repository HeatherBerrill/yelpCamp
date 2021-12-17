const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  title: String,
  pricePerNight: Number,
  description: String,
  county: String
});

module.exports = mongoose.model('Campground', CampgroundSchema);
