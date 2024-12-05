const Post = require('../models/Post');

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;
  try {
    const post = new Post({ title, content, userId });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('userId', 'username');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};

module.exports = { createPost, getPosts };