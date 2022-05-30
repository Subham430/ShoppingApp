
// external imports
const express = require("express");
const cartsRouter = express.Router();

// internal imports
const { addCartValidators, updateCartValidators, cartValidationHandler } = require("../../middlewares/cartValidator");
const { cartController } = require("../../controllers");

// products details page
cartsRouter.get("/details", cartController.getCartsDetails);

// product details page
cartsRouter.get("/details/:id", cartController.getCartDetails);

// products create page
cartsRouter.post("/create/:id", addCartValidators, cartValidationHandler, cartController.createCart);

// product delete page
cartsRouter.delete("/delete/:id", cartController.removeCart);

module.exports = cartsRouter;