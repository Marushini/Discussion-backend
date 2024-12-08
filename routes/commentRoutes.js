const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");
const { verifyToken } = require("../middleware/authMiddleware");

// Get all comments
router.get("/", verifyToken, async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Post a comment
router.post("/", verifyToken, async (req, res) => {
  const { text } = req.body;

  try {
    const newComment = new Comment({ text });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
