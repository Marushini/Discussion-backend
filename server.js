const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const path = require("path");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB database
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse incoming JSON requests

// Routes
app.use("/api/auth", require("./routes/authRoutes")); // Authentication routes (login/register)
app.use("/api/posts", require("./routes/postRoutes")); // Post routes
app.use("/api/comments", require("./routes/commentRoutes")); // Comment routes

// Serve frontend build (for production)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "build")));

  // All routes will redirect to index.html in production
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  // Development mode (will run the app from frontend separately)
  app.get("/", (req, res) => {
    res.send("Backend connected successfully");
  });
}

// Catch-all route for unhandled requests
app.all("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
