const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db'); // Import your database connection
const authRoutes = require('./routes/authRoutes'); // Import the authRoutes

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // To parse JSON data
app.use(cors()); // If you want to allow cross-origin requests

// Connect to the database
connectDB();

// Use auth routes
app.use('/api/auth', authRoutes); // This ensures your /api/auth/login route is accessible

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
