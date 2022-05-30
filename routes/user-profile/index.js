// external imports
const express = require("express");
const userProfileRouter = express.Router();

// internal imports
const { addUserValidators, updateUserValidators, resetPasswordValidators, userValidationHandler } = require("../../middlewares/userValidator/userRegisterValidator");
const { UserController} = require("../../controllers");


// user details page
userProfileRouter.get("/details/:id", UserController.getUserDetails);

// user update
userProfileRouter.put("/update/:id", updateUserValidators, userValidationHandler, UserController.updateUser );

// reset-password page
userProfileRouter.put("/reset-password/:id", resetPasswordValidators, userValidationHandler, UserController.resetPassword);




module.exports = userProfileRouter;