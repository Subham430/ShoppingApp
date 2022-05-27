
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
cartsRouter.post("/create", addCartValidators, cartValidationHandler, cartController.createCart);

// product update page
cartsRouter.put("/update/:id", updateCartValidators, cartValidationHandler, cartController.updateCart);

// product delete page
cartsRouter.put("/delete/:id", cartController.removeCart);

module.exports = cartsRouter;