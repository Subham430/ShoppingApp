const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Express App",
            version: "0.1.0",
        },
        components: {
            securitySchemes: {
                jwt: {
                    type: "http",
                    scheme: "bearer",
                    in: "header",
                    bearerFormat: "JWT"
                },
            }
        },
        security: [{
            jwt: []
        }],
    },
    apis: ['./routes/**/*.js'],
};

module.exports = swaggerJsdoc(options);