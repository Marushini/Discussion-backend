const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Register routes
app.use("/api/auth", require("./routes/authRoutes"));  // Authentication routes
app.use("/api/posts", require("./routes/postRoutes")); // Post-related routes
app.use("/api/comments", require("./routes/commentRoutes")); // Comment-related routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
