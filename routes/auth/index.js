// external imports
const express = require("express");
const authRouter = express.Router();

// internal imports
const { addUserValidators, userValidationHandler } = require("../../middlewares/userValidator/userRegisterValidator");
const { doLoginValidators, doLoginValidationHandler } = require("../../middlewares/loginValidator");
const {loginController, UserController} = require("../../controllers");

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
authRouter.post("/login", doLoginValidators, doLoginValidationHandler, loginController.login);

// user register
authRouter.post("/register", addUserValidators, userValidationHandler, UserController.registerUser );


module.exports = authRouter;