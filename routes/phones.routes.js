const express = require('express');
const router = express.Router();
const phoneController = require('../controllers/phones.controller');
const phonesMiddleware = require('../middleware/phones.middleware');

router.get('/', phoneController.list);
router.get('/:id', phonesMiddleware.checkValidId, phoneController.get);
router.post('/', phoneController.create);
router.put('/:id', phonesMiddleware.checkValidId, phoneController.edit);
router.delete('/:id', phonesMiddleware.checkValidId, phoneController.delete);

module.exports = router;
