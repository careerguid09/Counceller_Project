const express = require('express');
const router = express.Router();
const { submitCareerForm } = require('../controllers/formController');


router.post('/career', submitCareerForm);

module.exports = router;