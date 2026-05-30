const express = require("express");
const userController = require("../controllers/userController"); 

const router = express.Router();

// Sirf ye lines rakhein:
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/allUsers", userController.getAllUsers);
router.get("/userProfile/:id", userController.getUserProfile);
router.put("/updateProfile/:id", userController.updateUserProfile);
router.delete("/deleteProfile/:id", userController.deleteUserProfile);

module.exports = router;
