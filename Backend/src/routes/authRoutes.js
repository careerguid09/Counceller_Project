const express = require("express");
const { loginCounselor } = require("../controllers/authController");

const router = express.Router();

router.post("/login", loginCounselor);

module.exports = router;
