const express = require("express");
const {
  createClient,
  getAllClients,
} = require("../controllers/clientController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public route – form submit
router.post("/", createClient);

// Protected route – counselor dashboard
router.get("/", authMiddleware, getAllClients);

module.exports = router;
