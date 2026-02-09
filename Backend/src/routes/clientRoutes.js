const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/", clientController.createClient);


router.get("/", authMiddleware, clientController.getAllClients);
router.delete("/:id", authMiddleware, clientController.deleteClient);
router.patch("/:id/status", authMiddleware, clientController.updateClientStatus);
router.get("/domain/:domain", authMiddleware, clientController.getClientsByDomain);
router.get("/category/:category", authMiddleware, clientController.getClientsByCategory);
router.get("/export", authMiddleware, clientController.exportClientsToExcel);



router.get("/filter", authMiddleware, clientController.getClientsByDynamicFilter);
router.get("/course/:course", authMiddleware, clientController.getClientsByCourse);
router.get("/stats/domain", authMiddleware, clientController.getDomainStats);
router.get("/stats/course/:domain", authMiddleware, clientController.getCourseStats);
router.patch("/viewed/:clientId", authMiddleware, clientController.markAsViewed);

module.exports = router;