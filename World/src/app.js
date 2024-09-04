const express = require('express');
const worldRoute = require('./routes/worldRoute');
const errorHandler = require('./utils/errHandler');
const config = require('../config/config');
const logger = require('./utils/logger');

const app = express();

//Middleware
app.use(express.json());

//routes
app.use('/api', worldRoute);

//error handling
app.use(errorHandler);

// Starting the server
app.listen(config.port, () => {
    logger.info(` world server is running`);
});

module.exports = app;

