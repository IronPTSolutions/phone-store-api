const express = require('express');
const router = express.Router();
const uploader = require('../config/multer.config');
const phones = require('../controllers/phones.controller');
const secure = require('../middleware/secure.middleware');

router.get('/', secure.isAuthenticated, phones.list);
router.post('/', secure.isAuthenticated, uploader.single('image'), phones.create);
router.get('/:id', phones.get);
router.delete('/:id', secure.isAuthenticated, phones.delete);

module.exports = router;