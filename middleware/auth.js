const jwt = require('jsonwebtoken');
const { HTTP_STATUS, ERROR_CODES } = require('../config/constants');

/**
 * Verify JWT token
 */
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({
      success: false,
      message: 'No token provided',
      error: ERROR_CODES.UNAUTHORIZED,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({
      success: false,
      message: 'Invalid or expired token',
      error: ERROR_CODES.UNAUTHORIZED,
    });
  }
};

/**
 * Check user role
 */
const checkRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({
        success: false,
        message: 'User not authenticated',
        error: ERROR_CODES.UNAUTHORIZED,
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(HTTP_STATUS.FORBIDDEN).json({
        success: false,
        message: 'Insufficient permissions',
        error: ERROR_CODES.FORBIDDEN,
      });
    }

    next();
  };
};

module.exports = {
  verifyToken,
  checkRole,
};
