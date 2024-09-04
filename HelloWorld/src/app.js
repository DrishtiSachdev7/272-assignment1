const express = require('express');
const helloWorldRoute = require('./routes/helloWorldRoute');
const errorHandler = require('./utils/errHandler');
const config = require('../config/config');
const logger = require('./utils/logger');

const app = express();

//Middleware
app.use(express.json());

//routes
app.use('/api', helloWorldRoute);

//error handling
app.use(errorHandler);

// Starting the server
app.listen(config.port, () => {
    logger.info(` hello world server is running`);
});

module.exports = app;

