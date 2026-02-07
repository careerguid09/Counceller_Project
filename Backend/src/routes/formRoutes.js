const express = require('express');
const router = express.Router();
const { submitCareerForm } = require('../controllers/formController');

// POST route for career form submission
router.post('/career', submitCareerForm);

module.exports = router;