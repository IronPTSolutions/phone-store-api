const Phone = require('../models/phone.model');
const createError = require('http-errors');
const mongoose = require('mongoose');

module.exports.list = (req, res, next) => {
  Phone.find()
    .then(phones => res.json(phones))
    .catch(error => next(error));
}

module.exports.get = (req, res, next) => {
  Phone.findById(req.params.id)
    .then(phone => {
      if (!phone) {
        throw createError(404, 'Phone not found');
      } else {
        res.json(phone);
      }
    })
    .catch(error => {
      next(error);
    });
}

module.exports.create = (req, res, next) => {
  const phone = new Phone(req.body);
  phone.save()
    .then(phone => res.status(201).json(phone))
    .catch(error => next(error));
}

module.exports.delete = (req, res, next) => {
  Phone.findOneAndDelete({_id: req.params.id})
    .then(phone => {
      if (!phone) {
        throw createError(404, 'Phone not found');
      } else {
        res.status(204).json();
      }
    })
    .catch(error => next(error));
}