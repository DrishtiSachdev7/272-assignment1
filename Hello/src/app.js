const express = require('express');
const helloRoute = require('./routes/helloRoute');
const errorHandler = require('./utils/errHandler');
const config = require('../config/config');
const logger = require('./utils/logger');

const app = express();

//Middleware
app.use(express.json());

//routes
app.use('/api', helloRoute);

//error handling
app.use(errorHandler);

// Starting the server
app.listen(config.port, () => {
    logger.info(`Server is running`);
});

module.exports = app;

