const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,  // This references the User who created the post
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
