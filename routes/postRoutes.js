const express = require("express");
const router = express.Router();
const Post = require("../models/Post"); // Ensure this path is correct
const { verifyToken } = require("../middleware/authMiddleware"); // Ensure this path is correct

// POST route to create a new post
router.post("/", verifyToken, async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  try {
    const newPost = new Post({ title, content, user: req.userId });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);  // Log error for debugging
    res.status(500).json({ message: "Error creating post" });
  }
});

module.exports = router;
