const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    validate: {
      validator: function(v) {
        return /^[0-9]{10,15}$/.test(v);
      },
      message: 'Please provide a valid mobile number'
    }
  },
  service: {
    type: String,
    required: [true, 'Service is required'],
    enum: ['Hair', 'Color', 'Makeup', 'Skin']
  },
  stylist: {
    type: String,
    default: 'No Preference',
    enum: ['No Preference', 'Rhea', 'Vivek', 'Aisha', 'Priya']
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  time: {
    type: String,
    required: [true, 'Time slot is required']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'confirmed'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
