const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Ab yahan sirf 'userController.functionName' likhna hai
// Check karo ki tumhare userController.js mein ye functions exist karte hain
router.get("/allUsers", userController.getAllUsers);
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/userProfile/:id", userController.getUserProfile);
router.put("/updateProfile/:id", userController.updateUserProfile);
router.delete("/deleteProfile/:id", userController.deleteUserProfile);

module.exports = router;
