const express = require('express');
const { createPost, getAllPosts } = require('../controllers/postController');

const router = express.Router();

// Create Post
router.post('/', createPost);

// Get All Posts
router.get('/', getAllPosts);

module.exports = router;
