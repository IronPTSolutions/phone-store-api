const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');
const createError = require('http-errors');

module.exports.setup = (passport) => {
  
  passport.serializeUser((user, next) => {
    next(null, user._id);
  });

  passport.deserializeUser((id, next) => {
    User.findById(id)
      .then(user => next(null, user))
      .catch(error => next(error))
  });

  passport.use('auth-local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (email, password, next) => {
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          throw createError(401, 'Invalid email or password');
        } else {
          return user.checkPassword(password)
            .then(match => {
              if (!match) {
                throw createError(401, 'Invalid email or password');
              } else {
                next(null, user);
              }
            })
        }
      })
      .catch(error => next(error))
  }));
}