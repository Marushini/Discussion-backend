const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  try {
    const { postId, content } = req.body;
    const comment = new Comment({ postId, content, createdBy: req.user.id });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).populate(
      "createdBy",
      "username"
    );
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
