const Client = require("../models/Client");

// PUBLIC – client submits form
exports.createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json({
      message: "Form submitted successfully",
      clientId: client._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit form" });
  }
};

// PROTECTED – counselors view all clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });

    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch clients" });
  }
};
