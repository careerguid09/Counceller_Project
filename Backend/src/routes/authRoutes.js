const express = require("express");
const { loginCounselor, logoutCounselor } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", loginCounselor);
router.post("/logout", authMiddleware, logoutCounselor);

module.exports = router;
