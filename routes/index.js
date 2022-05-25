const router = require('express').Router();
// const { authenticate } = require('../middlewares/auth');

const loginRouter = require("./auth");
const registerRouter = require("./register/register");

// const adminRouter = require('./admin');
// const employeeRouter = require('./employee');
// const companyRouter = require('./company');

router.use('/auth', loginRouter);
router.use('/auth', registerRouter);

// router.use('/admin',authenticate, adminRouter);
// router.use('/employee', authenticate, employeeRouter);
// router.use('/company',authenticate, companyRouter);

// const testRouter = require("./test")
// const {testInfo} = require("../controllers/testController");

// router.get('/test',testInfo)

module.exports = router;