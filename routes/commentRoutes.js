const express = require('express');
const { createComment, getCommentsForPost } = require('../controllers/commentController');

const router = express.Router();

// Create Comment
router.post('/', createComment);

// Get Comments for a Post
router.get('/:postId', getCommentsForPost);

module.exports = router; // Ensure the router is exported correctly
