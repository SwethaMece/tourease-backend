const Package = require('../models/Package');

const getAllPackages = async (req, res) => {
  const packages = await Package.find();
  res.json(packages);
};

module.exports = { getAllPackages };
