const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * Hash password
 */
const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    throw new Error('Failed to hash password');
  }
};

/**
 * Compare password with hash
 */
const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw new Error('Failed to compare password');
  }
};

/**
 * Generate JWT token
 */
const generateToken = (userId, role, expiresIn = process.env.JWT_EXPIRE || '7d') => {
  return jwt.sign(
    { userId, role },
    process.env.JWT_SECRET,
    { expiresIn }
  );
};

/**
 * Verify JWT token
 */
const verifyJWT = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

/**
 * Format date to MySQL format
 */
const formatDate = (date) => {
  return date.toISOString().slice(0, 19).replace('T', ' ');
};

/**
 * Generate random code
 */
const generateRandomCode = (length = 6) => {
  return Math.random().toString(36).substring(2, 2 + length).toUpperCase();
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyJWT,
  formatDate,
  generateRandomCode,
};
