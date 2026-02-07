const express = require("express");
const {
  createClient,
  getAllClients,
  deleteClient,
  updateClientStatus,
  getClientsByCategory,
} = require("../controllers/clientController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public – form submit
router.post("/", createClient);

// Protected – dashboard APIs


router.post("/", createClient);


router.get("/", authMiddleware, getAllClients);

// 1️⃣ Delete client
router.delete("/:id", authMiddleware, deleteClient);

// 2️⃣ Update client status
router.patch("/:id/status", authMiddleware, updateClientStatus);

// 3️⃣–6️⃣ Get clients by category
router.get(
  "/category/:category",
  authMiddleware,
  getClientsByCategory
);

module.exports = router;
