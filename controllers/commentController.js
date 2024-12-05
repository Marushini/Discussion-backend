const Comment = require('../models/Comment');

const createComment = async (req, res) => {
  const { postId, content } = req.body;
  const userId = req.user.id;
  try {
    const comment = new Comment({ postId, content, userId });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create comment' });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).populate('userId', 'username');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve comments' });
  }
};

module.exports = { createComment, getComments };