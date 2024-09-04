const express = require('express');
const { printHello } = require('../controllers/helloController');

const router = express.Router();

router.get('/hello', printHello);

module.exports = router;

