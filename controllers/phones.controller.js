const mongoose = require('mongoose');
const Phone = require('../models/phone.model');
const ApiError = require('../models/api-error.model');

module.exports.list = (req, res, next) => {
  Phone.find()
    .then(phones => res.json(phones))
    .catch(error => next(error));
}

module.exports.get = (req, res, next) => {
  const id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(id)) {
    Phone.findById(id)
      .then(phone => {
        if (phone) {
          res.json(phone)        
        } else {
          next(new ApiError(`Phone not found`, 404));
        }
      }).catch(error => next(error));
  } else {
    next(new ApiError(`Invalid phone id: ${id}`));
  }
}

module.exports.create = (req, res, next) => {
  const phone = new Phone(req.body);
  phone.save()
    .then(() => {
      res.status(200).json(phone);
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        console.log(error);
        next(new ApiError(error.errors));
      } else {
        next(new ApiError(error.message, 500));
      }
    })
}

module.exports.delete = (req, res, next) => {
  res.json({ message: 'Unimplemented' });
}

module.exports.edit = (req, res, next) => {
  res.json({ message: 'Unimplemented' });
}