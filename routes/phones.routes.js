const express = require('express');
const router = express.Router();
const phoneController = require('../controllers/phones.controller');

router.get('/', phoneController.list);
router.get('/:id', phoneController.get);
router.post('/', phoneController.create);
router.put('/:id', phoneController.edit);
router.delete('/:id', phoneController.delete);

module.exports = router;
