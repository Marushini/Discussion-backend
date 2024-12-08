const Post = require('../models/Post');

// Create Post
const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = new Post({ title, content, author: req.user.id });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get All Posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'name email');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { createPost, getAllPosts };
