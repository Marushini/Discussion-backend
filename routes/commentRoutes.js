const express = require("express");
const {
  addComment,
  getCommentsByPost,
} = require("../controllers/commentControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addComment);
router.get("/:postId", protect, getCommentsByPost);

module.exports = router;
