// src/controllers/bookingController.js
const Booking = require('../models/Booking');
const { MailerSend, EmailParams, Sender, Recipient } = require('mailersend');

// Basic env checks
if (!process.env.API_KEY) {
  console.warn('⚠️ Warning: process.env.API_KEY is not set (MailerSend API key)');
}
if (!process.env.ADMIN_EMAIL) {
  console.warn('⚠️ Warning: process.env.ADMIN_EMAIL is not set');
}
if (!process.env.FROM_EMAIL) {
  console.warn('⚠️ Warning: process.env.FROM_EMAIL is not set');
}

const mailerSend = new MailerSend({ apiKey: process.env.API_KEY });
const adminEmail = process.env.ADMIN_EMAIL;
const fromEmail = process.env.FROM_EMAIL || `no-reply@${process.env.MAIL_DOMAIN || 'aarasalons.com'}`;

function ensureEmailConfig() {
  const missing = [];
  if (!process.env.API_KEY) missing.push('API_KEY');
  if (!adminEmail) missing.push('ADMIN_EMAIL');
  if (!fromEmail) missing.push('FROM_EMAIL');
  if (missing.length) {
    console.warn('⚠️ Missing environment variables for email:', missing.join(', '));
    return false;
  }
  return true;
}

exports.createBooking = async (req, res) => {
  try {
    const { name, mobile, service, stylist, date, time } = req.body;

    if (!name || !mobile || !service || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required (name, mobile, service, date, time)',
      });
    }

    // Save booking to database
    const booking = new Booking({
      name,
      mobile,
      service,
      stylist: stylist || 'No Preference',
      date: new Date(date),
      time,
      status: 'confirmed'
    });

    const savedBooking = await booking.save();
    console.log('✅ Booking saved:', savedBooking._id);

    // If email config missing, return (booking saved)
    if (!ensureEmailConfig()) {
      console.warn('Email not sent: missing mail configuration. Booking saved.');
      return res.status(201).json({
        success: true,
        message: 'Booking confirmed (email NOT sent — missing mail config).',
        booking: savedBooking,
      });
    }

    // Prepare email
    try {
      const from = new Sender(fromEmail, 'AARA Salon');
      const to = [new Recipient(adminEmail, 'Admin')];

      const emailParams = new EmailParams()
        .setFrom(from)
        .setTo(to)
        .setSubject('🪞 New Booking Received - AARA Salon')
        .setHtml(`
          <h2>New Booking Details</h2>
          <p><strong>Name:</strong> ${savedBooking.name}</p>
          <p><strong>Mobile:</strong> ${savedBooking.mobile}</p>
          <p><strong>Service:</strong> ${savedBooking.service}</p>
          <p><strong>Stylist:</strong> ${savedBooking.stylist}</p>
          <p><strong>Date:</strong> ${new Date(savedBooking.date).toLocaleDateString('en-IN')}</p>
          <p><strong>Time:</strong> ${savedBooking.time}</p>
          <p><strong>Status:</strong> ${savedBooking.status}</p>
          <hr/>
          <p>📩 Sent automatically by AARA Salon Booking System</p>
        `);

      const result = await mailerSend.email.send(emailParams);

      // Log full result for debugging in case of delivery issues
      console.log('✅ Booking email send result (MailerSend):', JSON.stringify(result, null, 2));

    } catch (emailError) {
      // Full error logging so you don't get "undefined"
      console.error('❌ Failed to send admin email - full error:', emailError);
      if (emailError && emailError.response) {
        console.error('❌ MailerSend response:', emailError.response);
        try {
          console.error('❌ MailerSend response body:', JSON.stringify(emailError.response.body || emailError.response, null, 2));
        } catch (e) {
          console.error('❌ Could not stringify response body', e);
        }
      }

      // Return booking success but inform that email failed
      return res.status(201).json({
        success: true,
        message: 'Booking saved but failed to send admin email.',
        booking: savedBooking,
        emailError: (emailError && emailError.message) ? emailError.message : 'See server logs for full error'
      });
    }

    // If we reached here, email was sent
    res.status(201).json({
      success: true,
      message: 'Booking confirmed successfully! Admin email sent.',
      booking: savedBooking,
    });

  } catch (error) {
    console.error('Error in createBooking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to confirm booking. Please try again.',
      error: (process.env.NODE_ENV === 'development') ? (error && error.message) : undefined
    });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, bookings });
  } catch (error) {
    console.error('Error in getAllBookings:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch bookings',
    });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }
    res.status(200).json({ success: true, booking });
  } catch (error) {
    console.error('Error in getBookingById:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch booking',
    });
  }
};
