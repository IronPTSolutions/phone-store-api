const express = require('express');
const router = express.Router();
const uploadConfig = require('../configs/multer.config');
const phoneController = require('../controllers/phones.controller');
const phonesMiddleware = require('../middleware/phones.middleware');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/', secureMiddleware.isAuthenticated, phoneController.list);
router.get('/:id', secureMiddleware.isAuthenticated, phonesMiddleware.checkValidId, phoneController.get);
router.post('/', secureMiddleware.isAuthenticated, uploadConfig.single('image'), phoneController.create);
router.put('/:id', secureMiddleware.isAuthenticated, uploadConfig.single('image'), phoneController.edit);
router.delete('/:id', secureMiddleware.isAuthenticated, phonesMiddleware.checkValidId, phoneController.delete);

module.exports = router;
