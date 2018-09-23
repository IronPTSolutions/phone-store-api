const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    throw createError(403);
  } else {
    next();
  }
}
