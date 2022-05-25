require('dotenv').config();

// const cookieParser = require("cookie-parser");
// const path = require("path");
// const body = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const app = express();

//internal imports
const swaggerSpecs = require('./config/swagger');
const {notFoundHandler, errorHandler} = require('./middlewares/common/errorHandler')

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const router = require("./routes");

app.use('/shopping', router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

//not found handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => console.log(`Example app is listening on port ${process.env.PORT}`));