
// external imports
const express = require("express");
const cartsRouter = express.Router();

// internal imports
const { addCartValidators, updateCartValidators, cartValidationHandler } = require("../../middlewares/cartValidator");
const { cartController } = require("../../controllers");

// Carts details page
cartsRouter.get("/details", cartController.getCartsDetails);

// Cart details page
cartsRouter.get("/details/:id", cartController.getCartDetails);

// Cart create page
cartsRouter.post("/create/:id", addCartValidators, cartValidationHandler, cartController.createCart);

// Cart delete page
cartsRouter.delete("/delete/:id", cartController.removeCart);

//extra 
// Cart restore
cartsRouter.get("/restore/:id", cartController.restoreCart);

module.exports = cartsRouter;