const Client = require("../models/Client");



/* ===============================
   CREATE CLIENT (Public)
================================ */
exports.createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json({ success: true, client });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};



/* ===============================
   GET ALL CLIENTS (Protected)
================================ */
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json({ success: true, clients });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};



/* ===============================
   DELETE CLIENT (Protected)
================================ */
exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    await client.deleteOne();
    res.json({ success: true, message: "Client deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};



/* ===============================
   UPDATE CLIENT STATUS (Protected)
================================ */

exports.updateClientStatus = async (req, res) => {
  const { status } = req.body;
  const allowedStatus = ["new", "in-progress", "completed"];
  if (!allowedStatus.includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.json({ success: true, client });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};




/* ===============================
   GET CLIENTS BY CATEGORY (Protected)
================================ */
exports.getClientsByDomain = async (req, res) => {
  const { domain } = req.params;
  const allowedDomains = [
    "MEDICAL",
    "PHARMACY",
    "NURSING",
    "PARAMEDICAL",
    "ENGINEERING",
    "MANAGEMENT",
    "GRADUATION",
    "POST GRADUATION",
    "VOCATIONAL",
    "LANGUAGES",
    "AGRICULTURE",
    "EDUCATION",
  ];

  if (!allowedDomains.includes(domain)) {
    return res.status(400).json({
      success: false,
      message: "Invalid course domain",
    });
  }

  try {
    const clients = await Client.find({ domain }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      total: clients.length,
      data: clients,
    });
  } catch (error) {
    console.error("Get clients by domain error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
