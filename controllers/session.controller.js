const passport = require('passport');
const ApiError = require('../models/api-error.model');

module.exports.create = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    next(new ApiError('Email and password are required', 400));
  } else {
    passport.authenticate('local-auth', (err, user, message) => {
      if (err) {
        next(err);
      } else if (!user) {
        next(new ApiError(message, 401));
      } else {
        req.login(user, (err) => {
          if (err) {
            next(err);
          } else {
            res.json({ id: user._id, email: user.email });
          }
        });
      }
    })(req, res, next);
  }
};

module.exports.destroy = (req, res, next) => {
  req.logout();
  req.status(200).json({ message: 'Success' });
};
