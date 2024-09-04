const express = require('express');
const { printWorld } = require('../controllers/worldController');

const router = express.Router();

router.get('/world', printWorld);

module.exports = router;

