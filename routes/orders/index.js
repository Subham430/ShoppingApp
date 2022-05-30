// external imports
const express = require("express");
const oderRouter = express.Router();

// internal imports
const { addUserValidators, updateUserValidators, resetPasswordValidators, userValidationHandler } = require("../../middlewares/userValidator/userRegisterValidator");
const { orderController} = require("../../controllers");


// user details page
oderRouter.get("/details/:id", orderController.getOrderDetails);

// user update
oderRouter.put("/update", updateUserValidators, userValidationHandler, orderController.updateUser );

// reset-password page
oderRouter.put("/reset-password", resetPasswordValidators, userValidationHandler, UserController.resetPassword);


module.exports = oderRouter;