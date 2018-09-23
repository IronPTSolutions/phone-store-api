const User = require('../models/user.model');
const createError = require('http-errors');
const passport = require('passport');

module.exports.create = (req, res, next) => {
  passport.authenticate('auth-local', (error, user) => {
    if (error) {
      next(error);
    } else {
      req.login(user, (error) => {
        if (error) {
          next(error);
        } else {
          res.status(201).json(user);
        }
      })
    }
  })(req, res, next);
}

module.exports.delete = (req, res, next) => {
  req.logout();
  res.status(204).json();
}
