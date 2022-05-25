// external imports
const express = require("express");
const loginRouter = express.Router();

// internal imports
const { doLoginValidators, doLoginValidationHandler } = require("../../middlewares/loginValidator");
const {login} = require("../../controllers/loginController");

/**
 * @swagger
 *   tags:
 *     name: Login
*/

/**
 * @swagger
 * /swastik/auth/login:
 *   post:
 *     tags: [Login]
 *     summary: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "heritage@gmail.com"
 *               password:
 *                 type: string
 *                 example: "Password@430"
 *     responses:
 *       200:
 *         description: Get user & access token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

// login page
// loginRouter.post("/login", doLoginValidators, doLoginValidationHandler, login);

module.exports = loginRouter;