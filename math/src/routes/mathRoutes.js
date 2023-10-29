const express = require('express');
const router = express.Router();
const { add } = require('../controller/mathController');

router.post('/add', add);

module.exports = router;
