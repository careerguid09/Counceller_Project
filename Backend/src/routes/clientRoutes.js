const express = require("express");
const {
  createClient,
  getAllClients,
} = require("../controllers/clientController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/", createClient);


router.get("/", authMiddleware, getAllClients);

module.exports = router;
