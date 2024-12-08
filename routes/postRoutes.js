const express = require('express');
const { createPost, getAllPosts } = require('../controllers/postController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Create Post
router.post('/', verifyToken, createPost);

// Get All Posts
router.get('/', getAllPosts);

module.exports = router;
