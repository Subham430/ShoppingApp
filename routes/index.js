const router = require('express').Router();
const { authenticate } = require('../middlewares/auth');

const authRouter = require("./auth");
const userProfileRouter = require("./user-profile");
const productsRouter = require("./products");
const cartsRouter = require("./carts");


router.use('/auth', authRouter);
router.use('/user-profile', authenticate, userProfileRouter);
router.use('/products', authenticate, productsRouter);
router.use('/carts', authenticate, cartsRouter);


// const testRouter = require("./test")
// const {testInfo} = require("../controllers/testController");
// router.get('/test',testInfo)

module.exports = router;