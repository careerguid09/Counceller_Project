const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const Counselor = require("../models/Counselor");
    const bcrypt = require("bcryptjs");
    const jwt = require("jsonwebtoken");

    const counselor = await Counselor.findOne({ email });

    if (!counselor) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, counselor.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: counselor._id, role: "counselor" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.status(200).json({
      message: "Login successful",
      token,
      counselor: {
        id: counselor._id,
        email: counselor.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
