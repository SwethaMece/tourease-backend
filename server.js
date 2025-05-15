const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();

// Connect to MongoDB Atlas
connectDB();

const app = express();

// Use CORS - for now allow all origins
const allowedOrigins = ['*'];
app.use(cors({
  origin: allowedOrigins,
}));

// Middleware to parse JSON
app.use(express.json());

// ✅ Add this root route
app.get('/', (req, res) => {
  res.send('TourEase Backend is running ✅');
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/destinations', require('./routes/destinationRoutes'));
app.use('/api/packages', require('./routes/packageRoutes'));
app.use('/api/trips', require('./routes/tripRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
