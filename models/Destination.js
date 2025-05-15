const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String
});

module.exports = mongoose.model('Destination', destinationSchema);
