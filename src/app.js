// app.js
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const pricingController = require('./controllers/pricingController');

const app = express();
app.use(bodyParser.json());

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Pricing controller endpoint
app.post('/calculate-price', pricingController.calculatePrice);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
