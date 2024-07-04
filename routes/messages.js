const express = require("express");
const { 
    createMessageController,
    getMessagesController,
    deleteMessageController 
} = require("../controllers/messageController");
const router = express.Router();

// create message
router.post("/create", createMessageController);

// get messages
router.get("/:conversationId", getMessagesController);

// delete message
router.delete("/:messageId", deleteMessageController);

module.exports = router;