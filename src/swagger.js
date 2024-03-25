// swagger.js

const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Food Delivery API',
    version: '1.0.0',
    description: 'API documentation for the food delivery service',
  },
  basePath: '/',
};

const options = {
  swaggerDefinition,
  apis: ['./src/controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
