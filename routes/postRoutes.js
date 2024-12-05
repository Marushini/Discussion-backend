const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).send(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author');
  res.status(200).json(posts);
});

module.exports = router;