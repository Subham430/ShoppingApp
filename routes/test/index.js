// external imports
const express = require("express");
const loginRouter = express.Router();
const {testInfo} = require("../../controllers/testController");

loginRouter.get('/info',testInfo);