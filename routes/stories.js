const express = require("express");
const { 
    createStoryController,
    getStoriesController,
    getUserStoriesController,
    deleteStoryController,
    deleteStoriesController 
} = require("../controllers/storyController");
const upload = require("../middlewares/upload");
const router = express.Router();

// create story
router.post("/create/:userId", upload.single("image"), createStoryController);

// get all stories
router.get("/all/:userId", getStoriesController);

// get user stories
router.get("/user/:userId", getUserStoriesController);

// delete a story
router.delete("/delete/:storyId", deleteStoryController);

// delete all stories
router.delete("/delete/stories/:userId", deleteStoriesController);

module.exports = router;