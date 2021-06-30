const errorHandler = (req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    next.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? "Erreur" : error.stack
    })
}

module.exports = errorHandler