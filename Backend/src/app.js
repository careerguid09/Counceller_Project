const express = require("express");
const cors = require("cors"); // Add CORS for frontend connection
const authRoutes = require("./routes/authRoutes");
const clientRoutes = require("./routes/clientRoutes");
const formRoutes = require("./routes/formRoutes");

const app = express();

// Middleware
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api", formRoutes); // Career form routes

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "HerStudent Career API is running",
    endpoints: {
      careerForm: "POST /api/career",
      requiredFields: ["name", "email", "mobileNumber", "city", "problem"]
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

module.exports = app;