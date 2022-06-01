// external imports
const express = require("express");
const odersRouter = express.Router();

// internal imports
const { addOrderProductValidators, orderValidationHandler} = require("../../middlewares/orderValidator");
const { orderController} = require("../../controllers");


/**
 * @swagger
 *   tags:
 *     name: orders
*/

/**
 * @swagger
 * /shopping/orders/details:
 *   get:
 *     tags: [orders]
 *     summary: get orders Details
 *     responses:
 *       200:
 *         description: Get orders details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

// order details page
odersRouter.get("/details", orderController.getOrderDetails);


// order created 
odersRouter.post("/create", addOrderProductValidators, orderValidationHandler, orderController.createOrder);



/**
 * @swagger
 * /shopping/orders/delete/{id}:
 *   delete:
 *     tags: [orders]
 *     summary: order delete
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to delete.
 *         schema:
 *     responses:
 *       200:
 *         description: Delete order details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

// order delete page
odersRouter.delete("/delete/:id", orderController.removeOrder);


//extra


/**
 * @swagger
 * /shopping/orders/restore/{id}:
 *   get:
 *     tags: [orders]
 *     summary: order restore
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the cart to restore.
 *         schema:
 *     responses:
 *       200:
 *         description: restore order
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

// order restore
odersRouter.get("/restore/:id", orderController.restoreOrder);


/**
 * @swagger
 * /shopping/orders/all/details:
 *   get:
 *     tags: [orders]
 *     summary: get all orders Details
 *     responses:
 *       200:
 *         description: Get all orders details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
//get all order details page
odersRouter.get("/all/details", orderController.getOrdersDetails);


module.exports = odersRouter;