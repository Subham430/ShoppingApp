// external imports
const express = require("express");
const userProfileRouter = express.Router();

// internal imports
const { addUserValidators, updateUserValidators, resetPasswordValidators, userValidationHandler } = require("../../middlewares/userValidator/userRegisterValidator");
const { UserController} = require("../../controllers");

/**
 * @swagger
 *   tags:
 *     name: user-profile
*/

/**
 * @swagger
 * /shopping/user-profile/details:
 *   get:
 *     tags: [user-profile]
 *     summary: User Details
 *     responses:
 *       200:
 *         description: Get user details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// user details page
userProfileRouter.get("/details", UserController.getUserDetails);


/**
 * @swagger
 * /shopping/user-profile/update:
 *   put:
 *     tags: [user-profile]
 *     summary: user-profile update
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
 *               name:
 *                 type: string
 *                 example: "heritage@gmail.com"
 *               address:
 *                 type: string
 *                 example: "purulia"
 *     responses:
 *       200:
 *         description: user profile updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// user update
userProfileRouter.put("/update", updateUserValidators, userValidationHandler, UserController.updateUser );



/**
 * @swagger
 * /shopping/user-profile/reset-password:
 *   put:
 *     tags: [user-profile]
 *     summary: reset password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 example: "Password@430"
 *     responses:
 *       200:
 *         description: reset password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// reset-password page
userProfileRouter.put("/reset-password", resetPasswordValidators, userValidationHandler, UserController.resetPassword);

//extra

/**
 * @swagger
 * /shopping/user-profile/all/details:
 *   get:
 *     tags: [user-profile]
 *     summary: All User Details
 *     responses:
 *       200:
 *         description: Get all user details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// all users details
userProfileRouter.get("/all/details", UserController.getUsersDetails);

/**
 * @swagger
 * /shopping/user-profile/delete:
 *   delete:
 *     tags: [user-profile]
 *     summary: User delete
 *     responses:
 *       200:
 *         description: User deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// delete user
userProfileRouter.delete("/delete", UserController.removeUser);

/**
 * @swagger
 * /shopping/user-profile/restore:
 *   get:
 *     tags: [user-profile]
 *     summary: User restore
 *     responses:
 *       200:
 *         description: restore deleted user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
// restore deleted user
userProfileRouter.get("/restore", UserController.restoreUser);


module.exports = userProfileRouter;