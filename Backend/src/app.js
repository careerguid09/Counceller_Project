const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const clientRoutes = require("./routes/clientRoutes");
const formRoutes = require("./routes/formRoutes");
const counselorRoutes = require("./routes/counselorRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api", formRoutes);
app.use("/api/counselor", counselorRoutes);

// Default route
app.get("/", (req, res) => {
  res.json({
    message: "HerStudent Career API is running",
    endpoints: {
      careerForm: "POST /api/career",
      requiredFields: ["name", "email", "mobileNumber", "city", "problem"],
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;