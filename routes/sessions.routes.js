const express = require('express');
const router = express.Router();
const sessions = require('../controllers/sessions.controller');

router.post('/', sessions.create);
router.delete('/', sessions.delete);

module.exports = router;