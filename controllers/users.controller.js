const User = require('../models/user.model');
const createError = require('http-errors');
const mongoose = require('mongoose');

module.exports.list = (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(error => next(error));
}

module.exports.create = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        throw createError(409, `User with email ${req.body.email} already exists`);
      } else {
        user = new User(req.body);
        user.save()
          .then(user => res.status(201).json(user))
          .catch(error => {
            next(error)
          });
      }
    })
    .catch(error => next(error));
}
