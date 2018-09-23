const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/phone-store';

mongoose.connect(MONGO_URI)
  .then(() => console.info(`Successfully connected to ${MONGO_URI}`))
  .catch(error => console.error('An error ocurred trying to connect to database', error));
