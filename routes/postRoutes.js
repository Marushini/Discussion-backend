const express = require("express");
const {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createPost);
router.get("/", protect, getAllPosts);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;
