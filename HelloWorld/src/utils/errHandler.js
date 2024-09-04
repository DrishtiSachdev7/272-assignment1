
function errorHandler(err, req, res, next) {
    res.status(err.statusCode || 500).json({
        message: err.message || 'server error',
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
}

module.exports = errorHandler;