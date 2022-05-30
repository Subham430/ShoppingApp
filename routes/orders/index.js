// external imports
const express = require("express");
const odersRouter = express.Router();

// internal imports
const { addOrderProductValidators, orderValidationHandler} = require("../../middlewares/oderValidator");
const { orderController} = require("../../controllers");


// order details page
odersRouter.get("/details/:id", orderController.getOrderDetails);

// order created 
odersRouter.post("/create", addOrderProductValidators, orderValidationHandler, orderController.createOrder);

// user update
// odersRouter.put("/update", updateUserValidators, userValidationHandler, orderController.updateUser );

// reset-password page
// odersRouter.put("/reset-password", resetPasswordValidators, userValidationHandler, UserController.resetPassword);


module.exports = odersRouter;