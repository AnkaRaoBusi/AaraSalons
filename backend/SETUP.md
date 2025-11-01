# Backend Setup Instructions

## Step 1: Install Required Software

### 1. Install Node.js
- **Download:** https://nodejs.org/
- **Version:** v14 or higher (LTS recommended)
- **Verify:** Open terminal and run `node --version`

### 2. Install MongoDB

**Option A: MongoDB Atlas (Cloud - Recommended for beginners)**
- Go to: https://www.mongodb.com/cloud/atlas
- Sign up for free account
- Create a free cluster (M0 - Free tier)
- Create database user
- Whitelist your IP (or use 0.0.0.0/0 for all IPs during development)
- Get connection string

**Option B: Local MongoDB**
- Download: https://www.mongodb.com/try/download/community
- Install MongoDB Community Edition
- Start MongoDB service
- Default connection: `mongodb://localhost:27017/aarasalon`

### 3. Twilio Account (For SMS)

- **Sign up:** https://www.twilio.com/
- Get free trial account with $15.50 credit
- Get your Account SID and Auth Token from dashboard
- Get a phone number (provided in trial)

## Step 2: Setup Backend

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create .env file:**
   ```bash
   # Copy the example
   copy env.example.txt .env
   # Or manually create .env file
   ```

4. **Edit .env file with your credentials:**
   ```env
   PORT=5000
   NODE_ENV=development
   
   # MongoDB - Replace with your connection string
   MONGODB_URI=mongodb://localhost:27017/aarasalon
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/aarasalon?retryWrites=true&w=majority
   
   # Twilio - Get from https://console.twilio.com/
   TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   TWILIO_AUTH_TOKEN=your_auth_token_here
   TWILIO_PHONE_NUMBER=+1234567890
   
   JWT_SECRET=your_random_secret_key_here
   ```

## Step 3: Run Backend

**Development mode (auto-reload on changes):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

You should see:
```
✅ Connected to MongoDB
🚀 Server running on port 5000
📍 Health check: http://localhost:5000/api/health
```

## Step 4: Test the API

Open browser or use Postman:
- Health check: http://localhost:5000/api/health

## Step 5: Connect Frontend

The frontend is already configured to call the backend API at `http://localhost:5000/api`

## Important Notes

1. **Test Mode:** If Twilio credentials are not set, the app runs in TEST MODE:
   - OTPs are logged to console
   - SMS won't be sent
   - Perfect for development

2. **MongoDB Atlas Setup:**
   - Replace `<password>` in connection string with your actual password
   - Replace `<dbname>` with `aarasalon`
   - Make sure IP whitelist includes your IP

3. **Twilio Trial:**
   - Free trial has limitations
   - Can only send SMS to verified phone numbers
   - Upgrade for production use

## Troubleshooting

- **Port 5000 already in use:** Change PORT in .env
- **MongoDB connection failed:** Check connection string and network
- **SMS not working:** Check Twilio credentials, verify phone numbers in Twilio console
