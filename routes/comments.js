const express = require("express");
const { 
    createCommentController,
    createCommentReplyController,
    updateCommentController,
    updateReplyCommentController,
    getCommentsByPostController,
    deleteCommentController,
    deleteReplyCommentController,
    likeCommentController,
    dislikeCommentController,
    likeReplyCommentController,
    dislikeReplyCommentController 
} = require("../controllers/commentController");
const router = express.Router();

// create comment
router.post("/create", createCommentController);

// comment reply
router.post("/create/reply/:commentId", createCommentReplyController);

// update comment
router.put("/update/:commentId", updateCommentController);

// update reply comment
router.put("/update/:commentId/replies/:replyId", updateReplyCommentController);

// get all post comments
router.get("/post/:postId", getCommentsByPostController);

// delete comment
router.delete("/delete/:commentId", deleteCommentController);

// delete reply comment
router.delete("/delete/:commentId/replies/:replyId", deleteReplyCommentController);

// like a comment
router.post("/like/:commentId/", likeCommentController);

// dislike a comment
router.post("/dislike/:commentId/", dislikeCommentController);

// like a reply comment
router.post("/:commentId/replies/like/:replyId", likeReplyCommentController);

// dislike a reply comment
router.post("/:commentId/replies/dislike/:replyId", dislikeReplyCommentController);

module.exports = router;