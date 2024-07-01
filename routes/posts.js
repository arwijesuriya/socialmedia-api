const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const { 
    createPostController,
    createPostWithImagesController,
    updatePostController,
    getPostsController,
    getUserPostsController,
    deletePostController,
    likePostController,
    dislikePostController 
} = require("../controllers/postController");

// create post
router.post("/create", createPostController);

// create post with image
router.post("/create/:userId", upload.array("images", 5), createPostWithImagesController);

// update post
router.put("/update/:postId", updatePostController);

// get all posts
router.get("/all/:userId", getPostsController);

// get user posts
router.get("/user/:userId", getUserPostsController);

// delete post
router.delete("/delete/:postId", deletePostController);

// like post
router.post("/like/:postId", likePostController);

// dislike post
router.post("/dislike/:postId", dislikePostController);

module.exports = router;