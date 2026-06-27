const express = require('express');
const router = express.Router();
const { generateImage } = require('../controllers/aiController');

// Jab koi frontend se POST request '/generate' par bhejega, toh generateImage function run hoga
router.post('/generate', generateImage);

module.exports = router;
