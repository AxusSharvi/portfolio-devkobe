const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

// Map the post request to the controller
router.post('/', submitContactForm);

module.exports = router;