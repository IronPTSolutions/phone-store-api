const express = require('express');
const router = express.Router();
const secureMiddleware = require('../middleware/secure.middleware');
const sessionController = require('../controllers/session.controller');

router.delete('/', secureMiddleware.isAuthenticated, sessionController.destroy);
router.post('/', sessionController.create);

module.exports = router;
