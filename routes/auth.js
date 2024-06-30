const express = require("express");
const { registerController, loginController, logoutController, refetchUserController } = require("../controllers/authController");
const router = express.Router();

// register
router.post("/register", registerController);

// login
router.post("/login", loginController);


// logout
router.get("/logout", logoutController);


// refetch
router.get("/refetch", refetchUserController);

module.exports = router;