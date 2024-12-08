const Comment = require('../models/Comment');


const createComment = async (req, res) => {
    try {
        const { content, postId } = req.body;
        const comment = new Comment({ content, post: postId, author: req.user.id });
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get Comments for a Post
const getCommentsForPost = async (req, res) => {
    try {
        const comments = await Comment.find({ post: req.params.postId }).populate('author', 'name email');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { createComment, getCommentsForPost };