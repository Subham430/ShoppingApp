// external imports
const express = require("express");
const userProfileRouter = express.Router();

// internal imports
const { addUserValidators, updateUserValidators, resetPasswordValidators, userValidationHandler } = require("../../middlewares/userValidator/userRegisterValidator");
const { UserController} = require("../../controllers");


// user details page
userProfileRouter.get("/details", UserController.getUserDetails);

// user update
userProfileRouter.put("/update", updateUserValidators, userValidationHandler, UserController.updateUser );

// reset-password page
userProfileRouter.put("/reset-password", resetPasswordValidators, userValidationHandler, UserController.resetPassword);



//extra

// all users details
userProfileRouter.get("/all/details", UserController.getUsersDetails);

// delete user
userProfileRouter.delete("/delete", UserController.removeUser);

// restore deleted user
userProfileRouter.get("/restore", UserController.restoreUser);


module.exports = userProfileRouter;