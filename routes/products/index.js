// external imports
const express = require("express");
const productsRouter = express.Router();

// internal imports
const { addProductValidators, updateProductValidators, productValidationHandler } = require("../../middlewares/productValidator");
const { productController} = require("../../controllers");

// products details page
productsRouter.get("/details", productController.getProductsDetails);

// product details page
productsRouter.get("/details/:id", productController.getProductDetails);

// products create page
productsRouter.post("/create", addProductValidators, productValidationHandler, productController.createProduct);

// product update page
productsRouter.put("/update/:id", updateProductValidators, productValidationHandler, productController.updateProduct);

// product delete page
productsRouter.put("/delete/:id", productController.removeProduct);

module.exports = productsRouter;