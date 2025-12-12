// src/routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Create booking (send admin email)
router.post('/book', bookingController.createBooking);

// Get all bookings
router.get('/bookings', bookingController.getAllBookings);

// Get booking by ID
router.get('/bookings/:id', bookingController.getBookingById);

module.exports = router;
