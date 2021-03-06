const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Campground = require('./models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected');
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/make-campground', async (req, res) => {
  const camp = new Campground({
    title: 'My Backyard',
    description: 'cheap camping'
  });
  await camp.save();
  res.send(camp);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
