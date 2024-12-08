// server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db'); // Import database connection logic
const authRoutes = require('./routes/authRoutes'); // Import the routes

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // For parsing JSON data
app.use(cors()); // Enable cross-origin requests

// Connect to the database
connectDB(); // Make sure your database is connected

// Use the routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
