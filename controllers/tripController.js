const Trip = require('../models/Trip');

const createTrip = async (req, res) => {
  const trip = await Trip.create({ ...req.body, userId: req.user._id });
  res.status(201).json(trip);
};

const getUserTrips = async (req, res) => {
  const trips = await Trip.find({ userId: req.user._id });
  res.json(trips);
};

module.exports = { createTrip, getUserTrips };
