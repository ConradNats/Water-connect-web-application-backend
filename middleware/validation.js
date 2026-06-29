const { HTTP_STATUS, ERROR_CODES } = require('../config/constants');

/**
 * Validate request body against schema
 */
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        success: false,
        message: 'Validation failed',
        error: ERROR_CODES.INVALID_INPUT,
        details: error.details.map(d => ({
          field: d.path.join('.'),
          message: d.message,
        })),
      });
    }

    req.body = value;
    next();
  };
};

/**
 * Sanitize user input
 */
const sanitizeInput = (req, res, next) => {
  if (req.body && typeof req.body === 'object') {
    for (const key in req.body) {
      if (typeof req.body[key] === 'string') {
        // Remove leading/trailing whitespace
        req.body[key] = req.body[key].trim();
      }
    }
  }
  next();
};

module.exports = {
  validateRequest,
  sanitizeInput,
};
