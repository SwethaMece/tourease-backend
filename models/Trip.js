const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  destination: String,
  startDate: String,
  endDate: String,
  members: Number
});

module.exports = mongoose.model('Trip', tripSchema);
