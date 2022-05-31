
// external imports
const express = require("express");
const cartsRouter = express.Router();

// internal imports
const { addCartValidators, updateCartValidators, cartValidationHandler } = require("../../middlewares/cartValidator");
const { cartController } = require("../../controllers");

// Cart details page
cartsRouter.get("/details", cartController.getCartDetails);

// Cart create page
cartsRouter.post("/create", addCartValidators, cartValidationHandler, cartController.createCart);

// Cart delete page
cartsRouter.delete("/delete/:id", cartController.removeCart);

//extra 
// Cart restore
cartsRouter.get("/restore/:id", cartController.restoreCart);

// Carts details page
cartsRouter.get("/all/details", cartController.getCartsDetails);

module.exports = cartsRouter;