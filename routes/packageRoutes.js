const express = require('express');
const router = express.Router();
const { getAllPackages } = require('../controllers/packageController');

router.get('/', getAllPackages);

module.exports = router;
