const router = require('express').Router();
const { authenticate } = require('../middlewares/auth');

const authRouter = require("./auth");
const userProfileRouter = require("./user-profile");
const productsRouter = require("./products");

router.use('/auth', authRouter);
router.use('/user-profile', authenticate, userProfileRouter);
router.use('/products', authenticate, productsRouter);
router.use('/carts', authenticate, productsRouter);


// const testRouter = require("./test")
// const {testInfo} = require("../controllers/testController");
// router.get('/test',testInfo)

module.exports = router;