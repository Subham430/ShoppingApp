const router = require('express').Router();
const { authenticate } = require('../middlewares/auth');

const loginRouter = require("./auth");
const registerRouter = require("./register/register");

router.use('/auth', loginRouter);
router.use('/auth', registerRouter);

// const testRouter = require("./test")
// const {testInfo} = require("../controllers/testController");

// router.get('/test',testInfo)

module.exports = router;