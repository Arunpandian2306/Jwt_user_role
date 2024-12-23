const sendError = (res, message, details = null, statusCode = 401) => {
    return res.status(statusCode).json({ error: message, details });
};

module.exports = { sendError };
