const express = require('express');
const router = express.Router();

// Mock POST route for creating a post
router.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  res.status(201).json({ message: 'Post created successfully', post: { title, content } });
});

module.exports = router;
