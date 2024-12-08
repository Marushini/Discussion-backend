const express = require('express');
const { createComment, getCommentsForPost } = require('../controllers/commentController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Create Comment
router.post('/', verifyToken, createComment);

// Get Comments for a Post
router.get('/:postId', getCommentsForPost);

module.exports = router;
