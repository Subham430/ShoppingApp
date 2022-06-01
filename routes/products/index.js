// external imports
const express = require("express");
const productsRouter = express.Router();

// internal imports
const { addProductValidators, updateProductValidators, productValidationHandler } = require("../../middlewares/productValidator");
const { productController} = require("../../controllers");

/**
 * @swagger
 *   tags:
 *     name: products
*/

/**
 * @swagger
 * /shopping/products/details:
 *   get:
 *     tags: [products]
 *     summary: get all products Details
 *     responses:
 *       200:
 *         description: Get products details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// products details page
productsRouter.get("/details", productController.getProductsDetails);


/**
 * @swagger
 * /shopping/products/details/{id}:
 *   get:
 *     tags: [products]
 *     summary: product Details
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to retrieve.
 *         schema:
 *     responses:
 *       200:
 *         description: Get product details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// product details page
productsRouter.get("/details/:id", productController.getProductDetails);


/**
 * @swagger
 * /shopping/products/create:
 *   post:
 *     tags: [products]
 *     summary: products create 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "face wash"
 *               description:
 *                 type: string
 *                 example: "ertyu"
 *               price:
 *                 type: integer
 *                 example: "100"
 *     responses:
 *       200:
 *         description: create product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

// products create page
productsRouter.post("/create", addProductValidators, productValidationHandler, productController.createProduct);


/**
 * @swagger
 * /shopping/products/update/{id}:
 *   put:
 *     tags: [products]
 *     summary: products update 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to retrieve.
 *         schema:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "face wash"
 *               description:
 *                 type: string
 *                 example: "ertyu"
 *               price:
 *                 type: integer
 *                 example: "100"
 *     responses:
 *       200:
 *         description: update product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

// product update page
productsRouter.put("/update/:id", updateProductValidators, productValidationHandler, productController.updateProduct);


/**
 * @swagger
 * /shopping/products/delete/{id}:
 *   delete:
 *     tags: [products]
 *     summary: product delete
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to delete.
 *         schema:
 *     responses:
 *       200:
 *         description: Delete product details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// product delete page
productsRouter.delete("/delete/:id", productController.removeProduct);

// extra


/**
 * @swagger
 * /shopping/products/restore/{id}:
 *   get:
 *     tags: [products]
 *     summary: product restore
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to restore.
 *         schema:
 *     responses:
 *       200:
 *         description: restore product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
//restore product 
productsRouter.get("/restore/:id", productController.restoreProduct);

module.exports = productsRouter;