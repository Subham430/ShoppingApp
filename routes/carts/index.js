
// external imports
const express = require("express");
const cartsRouter = express.Router();

// internal imports
const { addProductValidators, updateProductValidators, productValidationHandler } = require("../../middlewares/productValidator");
const { cartController } = require("../../controllers");

// products details page
cartsRouter.get("/details", cartController.getCartsDetails);

// product details page
cartsRouter.get("/details/:id", cartController.getCartDetails);

// products create page
cartsRouter.post("/create", addProductValidators, productValidationHandler, cartController.createCart);

// product update page
cartsRouter.put("/update/:id", updateProductValidators, productValidationHandler, productController.updateProduct);

// product delete page
cartsRouter.put("/delete/:id", productController.removeProduct);

module.exports = cartsRouter;