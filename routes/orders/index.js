// external imports
const express = require("express");
const odersRouter = express.Router();

// internal imports
const { addOrderProductValidators, orderValidationHandler} = require("../../middlewares/orderValidator");
const { orderController} = require("../../controllers");

// order details page
odersRouter.get("/details", orderController.getOrderDetails);

// order created 
odersRouter.post("/create", addOrderProductValidators, orderValidationHandler, orderController.createOrder);

// order delete page
odersRouter.delete("/delete/:id", orderController.removeOrder);


//extra
// order restore
odersRouter.get("/restore/:id", orderController.restoreOrder);

//get all order details page
odersRouter.get("/all/details", orderController.getOrdersDetails);


module.exports = odersRouter;