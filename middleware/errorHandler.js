const { HTTP_STATUS, ERROR_CODES } = require('../config/constants');

/**
 * Global error handler middleware
 */
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Default error response
  let statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  let errorCode = err.errorCode || ERROR_CODES.INTERNAL_ERROR;
  let message = err.message || 'Internal server error';

  // Handle specific error types
  if (err.code === 'ER_DUP_ENTRY') {
    statusCode = HTTP_STATUS.CONFLICT;
    errorCode = ERROR_CODES.CONFLICT;
    message = 'Resource already exists';
  }

  if (err.code === 'ER_NO_REFERENCED_ROW') {
    statusCode = HTTP_STATUS.BAD_REQUEST;
    errorCode = ERROR_CODES.INVALID_INPUT;
    message = 'Invalid reference';
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: errorCode,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

/**
 * 404 Not Found handler
 */
const notFoundHandler = (req, res) => {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    success: false,
    message: 'Resource not found',
    error: ERROR_CODES.NOT_FOUND,
  });
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
