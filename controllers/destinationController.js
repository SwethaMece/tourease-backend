const Destination = require('../models/Destination');

const getAllDestinations = async (req, res) => {
  const destinations = await Destination.find();
  res.json(destinations);
};

module.exports = { getAllDestinations };
