const express = require("express");
const router = express.Router();
const { signupController } = require("../controllers/userController"); // Apne folder path ke hisaab se check kar lena
router.post("/signup", signupController);

module.exports = router;
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/allUsers", userController.getAllUsers);
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/userProfile/:id", userController.getUserProfile);
userRouter.put("/updateProfile/:id", userController.updateUserProfile);
userRouter.delete("/deleteProfile/:id", userController.deleteUserProfile);

module.exports = userRouter;
