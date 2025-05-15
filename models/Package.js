const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  title: String,
  price: Number,
  details: String,
  imageUrl: String
});

module.exports = mongoose.model('Package', packageSchema);
