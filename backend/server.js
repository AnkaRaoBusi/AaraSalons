// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Allowed origins — include both www and non-www, and Render preview domains
const allowedOrigins = [
  "https://aarasalons6.onrender.com",
  "https://aarasalons5.onrender.com",
  "https://www.aarasalons.com",
  "https://aarasalons.com",
  "http://localhost:3000", // frontend local (if used)
  "http://localhost:4000",
];

// CORS with debug logging for origin issues
app.use(cors({
  origin: function(origin, callback){
    // Log origin for debugging (undefined for curl/postman)
    console.log('CORS check, request origin:', origin);
    if (!origin) return callback(null, true); // allow server-to-server, postman, or same-origin
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      console.warn('CORS blocked origin:', origin);
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const bookingRoutes = require('./src/routes/bookingRoutes');
app.use('/api', bookingRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'OK',
    message: '💇‍♀️ AARA Salon API is running smoothly',
    time: new Date().toISOString(),
  });
});

// MongoDB connection and server start
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/aarasalon';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
  });
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error.message);
  process.exit(1);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('💥 Error:', err.stack || err);
  res.status(500).json({
    success: false,
    message: 'Something went wrong on the server!',
    error:
      process.env.NODE_ENV === 'development'
        ? (err && err.message) || String(err)
        : 'Internal Server Error',
  });
});

module.exports = app;
