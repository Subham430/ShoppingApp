// external imports
const express = require("express");
const userRouter = express.Router();

// internal imports
const { addUserValidators, addUserValidationHandler } = require("../../middlewares/userValidator/userRegisterValidator");
const {UserController} = require("../../controllers");

// user register
userRouter.post("/register", addUserValidators, addUserValidationHandler, UserController.registerUser);

//users details
userRouter.get("/details",UserController.getUsersDetails );


module.exports = userRouter;