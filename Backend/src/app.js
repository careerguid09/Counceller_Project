const express = require("express");
<<<<<<< HEAD
const cors = require("cors"); // Add CORS for frontend connection
=======
const cors = require("cors");
>>>>>>> 072bc27cd1ca928274f75df9ced8c1ed8b4920f7
const authRoutes = require("./routes/authRoutes");
const clientRoutes = require("./routes/clientRoutes");
const formRoutes = require("./routes/formRoutes");

const app = express();

<<<<<<< HEAD
// Middleware
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
=======
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
>>>>>>> 072bc27cd1ca928274f75df9ced8c1ed8b4920f7

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