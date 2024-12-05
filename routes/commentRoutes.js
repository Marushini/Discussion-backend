const express = require('express');
const { createComment, getComments } = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a comment (protected by JWT authentication)
router.post('/create', authMiddleware, createComment);

// Route to get all comments for a specific post
router.get('/:postId', getComments);

module.exports = router;