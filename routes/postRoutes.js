const express = require("express");
const router = express.Router();
const Post = require("../models/Post"); // Assuming you have a Post model
const { verifyToken } = require("../middleware/authMiddleware");

// POST route to create a new post
router.post("/", verifyToken, async (req, res) => {
  const { title, content } = req.body;

  try {
    const newPost = new Post({ title, content, user: req.userId });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: "Error creating post" });
  }
});

module.exports = router;
