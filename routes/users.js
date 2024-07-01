const express = require("express");
const { 
    getUserController, 
    updateUserController, 
    followUserController, 
    unfollowUserController, 
    blockUserController, 
    unblockUserController, 
    getBlockedUsersController, 
    deleteUserController, 
    searchUserController, 
    uploadProfilePictureController, 
    uploadCoverPictureController 
} = require("../controllers/userController");
const upload = require("../middlewares/upload");
const router = express.Router();

// get user
router.get("/:userId", getUserController);

// update user
router.put("/update/:userId", updateUserController);

// follow user
router.post("/follow/:userId", followUserController);

// unfollow user
router.post("/unfollow/:userId", unfollowUserController);

// block user
router.post("/block/:userId", blockUserController);

// unblock user
router.post("/unblock/:userId", unblockUserController);

// get block user
router.get("/blocked/:userId", getBlockedUsersController);

// delete user
router.delete("/delete/:userId", deleteUserController);

// search user
router.get("/search/:query", searchUserController);

// update profile picture
router.put("/update-profile-picture/:userId", upload.single("profilePicture"), uploadProfilePictureController);

// update cover picture
router.put("/update-cover-picture/:userId", upload.single("coverPicture"), uploadCoverPictureController);

module.exports = router;