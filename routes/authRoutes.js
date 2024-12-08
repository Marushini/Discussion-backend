const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register user
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Generate JWT token after successful registration
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    
    // Send the token back to the client
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);  // log error for debugging
    res.status(500).json({ message: "Server error" });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token for logged-in user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    
    // Send token in response
    res.json({ token });
  } catch (err) {
    console.error(err);  // log error for debugging
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
