const express = require('express');
const { printHelloWorld } = require('../controllers/helloWorldController');

const router = express.Router();

router.get('/helloworld', printHelloWorld);

module.exports = router;

