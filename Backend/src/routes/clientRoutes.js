const express = require("express");
const {
  createClient,
  getAllClients,
  deleteClient,
  updateClientStatus,
  getClientsByDomain,
} = require("../controllers/clientController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", createClient);
router.get("/", authMiddleware, getAllClients);
router.delete("/:id", authMiddleware, deleteClient);
router.patch("/:id/status", authMiddleware, updateClientStatus);
router.get(
  "/:domain",
  authMiddleware,
  getClientsByDomain
);

module.exports = router;