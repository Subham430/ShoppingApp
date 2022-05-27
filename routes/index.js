const router = require('express').Router();
const { authenticate } = require('../middlewares/auth');

const authRouter = require("./auth");
const userProfileRouter = require("./user-profile");

router.use('/auth', authRouter);
router.use('/user-profile', userProfileRouter);

// const testRouter = require("./test")
// const {testInfo} = require("../controllers/testController");

// router.get('/test',testInfo)

module.exports = router;