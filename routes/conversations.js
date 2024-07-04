const express = require("express");
const { 
    createNewConversationController,
    getConversationOfUserController,
    getTwoUsersConversationController,
    deleteConversationController 
} = require("../controllers/conversationController");
const router = express.Router();

// new conversation
router.post("/create", createNewConversationController);

// get conversation of user
router.get("/:userId", getConversationOfUserController);

// find two users conversation
router.get("/:firstUserId/:secondUserId", getTwoUsersConversationController);

// delete conversation
router.delete("/delete/:conversationId", deleteConversationController);

module.exports = router;