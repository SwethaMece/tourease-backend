const express = require('express');
const router = express.Router();
const { createTrip, getUserTrips } = require('../controllers/tripController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createTrip);
router.get('/', protect, getUserTrips);

module.exports = router;
