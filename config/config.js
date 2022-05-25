require("dotenv").config();
module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_CONNECTION,
        "logging": console.log,
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": process.env.PROD_DB_USERNAME,
        "password": process.env.PROD_DB_PASSWORD,
        "database": process.env.PROD_DB_DATABASE,
        "host": process.env.PROD_HOST,
        "dialect": process.env.PROD_DB_CONNECTION,
    }
}
