const Phone = require('../models/phone.model');

module.exports.list = (req, res, next) => {
  Phone.find()
    .then(phones => res.json(phones))
    .catch(error => next(error));
}

module.exports.get = (req, res, next) => {
  res.json({ message: 'Unimplemented' });
}

module.exports.create = (req, res, next) => {
  res.json({ message: 'Unimplemented' });
}

module.exports.delete = (req, res, next) => {
  res.json({ message: 'Unimplemented' });
}

module.exports.edit = (req, res, next) => {
  res.json({ message: 'Unimplemented' });
}