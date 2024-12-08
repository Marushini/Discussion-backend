const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const { verifyToken } = require("../middleware/authMiddleware");

// POST route to create a new post
router.post("/", verifyToken, async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  try {
    const newPost = new Post({
      title,
      content,
      user: req.userId,  // Assuming you want to link the post with the logged-in user
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ message: "Error creating post" });
  }
});

module.exports = router;
