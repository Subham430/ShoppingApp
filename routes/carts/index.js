
// external imports
const express = require("express");
const cartsRouter = express.Router();

// internal imports
const { addCartValidators, updateCartValidators, cartValidationHandler } = require("../../middlewares/cartValidator");
const { cartController } = require("../../controllers");


/**
 * @swagger
 *   tags:
 *     name: carts
*/

/**
 * @swagger
 * /shopping/carts/details:
 *   get:
 *     tags: [carts]
 *     summary: get carts Details
 *     responses:
 *       200:
 *         description: Get carts details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// Cart details page
cartsRouter.get("/details", cartController.getCartDetails);

/**
 * @swagger
 * /shopping/carts/create:
 *   post:
 *     tags: [carts]
 *     summary: cart create 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: integer
 *                 example: "1"
 *               quantity:
 *                 type: integer
 *                 example: "2"
 *     responses:
 *       200:
 *         description: create cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// Cart create page
cartsRouter.post("/create", addCartValidators, cartValidationHandler, cartController.createCart);

/**
 * @swagger
 * /shopping/carts/delete/{id}:
 *   delete:
 *     tags: [carts]
 *     summary: cart delete
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the cart to delete.
 *         schema:
 *     responses:
 *       200:
 *         description: Delete cart details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

// Cart delete page
cartsRouter.delete("/delete/:id", cartController.removeCart);

//extra 

/**
 * @swagger
 * /shopping/carts/restore/{id}:
 *   get:
 *     tags: [carts]
 *     summary: cart restore
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the cart to restore.
 *         schema:
 *     responses:
 *       200:
 *         description: restore cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

// Cart restore
cartsRouter.get("/restore/:id", cartController.restoreCart);


/**
 * @swagger
 * /shopping/carts/all/details:
 *   get:
 *     tags: [carts]
 *     summary: get all carts Details
 *     responses:
 *       200:
 *         description: Get all carts details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// Carts details page
cartsRouter.get("/all/details", cartController.getCartsDetails);

module.exports = cartsRouter;