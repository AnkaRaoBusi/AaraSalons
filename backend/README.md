# AARA Salon - Backend API

Node.js/Express backend for AARA Salon booking system with OTP verification and SMS notifications.

## Features

- ✅ OTP generation and verification
- ✅ SMS notifications via Twilio
- ✅ MongoDB integration for storing bookings
- ✅ RESTful API endpoints
- ✅ CORS enabled for frontend integration
- ✅ Error handling and validation

## Prerequisites

Before running the backend, you need to install:

1. **Node.js** (v14 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **MongoDB**
   - Option 1: Local MongoDB
     - Download from: https://www.mongodb.com/try/download/community
     - Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas
   - Option 2: MongoDB Atlas (Recommended - Free tier available)
     - Sign up at: https://www.mongodb.com/cloud/atlas
     - Create a free cluster
     - Get connection string

3. **Twilio Account** (For SMS)
   - Sign up at: https://www.twilio.com/
   - Get Account SID, Auth Token, and Phone Number
   - Note: Twilio has a free trial with limited credits

## Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env file with your credentials
   ```

4. **Update `.env` file with your credentials:**
   ```env
   PORT=5000
   NODE_ENV=development
   
   # MongoDB (use your MongoDB Atlas connection string or local)
   MONGODB_URI=mongodb://localhost:27017/aarasalon
   # Or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/aarasalon?retryWrites=true&w=majority
   
   # Twilio (get from https://console.twilio.com/)
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_PHONE_NUMBER=+1234567890
   
   JWT_SECRET=your_secret_key_here
   ```

## Running the Application

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status

### Send OTP
- **POST** `/api/send-otp`
- Body: `{ "mobile": "9876543210" }`
- Response: `{ "success": true, "message": "OTP sent successfully", "expiresIn": 600 }`

### Verify OTP and Create Booking
- **POST** `/api/verify-otp-book`
- Body:
  ```json
  {
    "mobile": "9876543210",
    "otp": "123456",
    "name": "John Doe",
    "service": "Hair",
    "stylist": "Rhea",
    "date": "2025-01-15",
    "time": "10:00"
  }
  ```
- Response: Booking confirmation with booking details

### Resend OTP
- **POST** `/api/resend-otp`
- Body: `{ "mobile": "9876543210" }`

### Get All Bookings (Admin)
- **GET** `/api/bookings`

### Get Booking by ID
- **GET** `/api/bookings/:id`

## Test Mode

If Twilio credentials are not configured, the application runs in **TEST MODE**:
- OTPs are logged to console instead of sending SMS
- All functionality works, but SMS won't be sent
- Useful for development without Twilio account

## Database Schema

### Booking
- name, mobile, service, stylist, date, time
- status, otpVerified, createdAt, updatedAt

### OTP
- mobile, otp, expiresAt, attempts, verified
- Auto-expires after 10 minutes

## Error Handling

All endpoints return consistent JSON responses:
```json
{
  "success": true/false,
  "message": "Response message",
  "data": {} // optional
}
```

## CORS

CORS is enabled for frontend integration. The frontend (running on port 3000) can communicate with this API.

## Troubleshooting

1. **MongoDB Connection Error:**
   - Ensure MongoDB is running (if local)
   - Check connection string in `.env`
   - Verify network access for MongoDB Atlas

2. **SMS Not Sending:**
   - Check Twilio credentials in `.env`
   - Verify Twilio account has credits
   - Check console logs for errors
   - App runs in TEST MODE if credentials missing

3. **Port Already in Use:**
   - Change PORT in `.env` file
   - Or kill the process using port 5000

## Next Steps

1. Set up MongoDB (local or Atlas)
2. Configure Twilio account for SMS
3. Update `.env` file with credentials
4. Run `npm install` and `npm run dev`
5. Connect frontend to backend API
