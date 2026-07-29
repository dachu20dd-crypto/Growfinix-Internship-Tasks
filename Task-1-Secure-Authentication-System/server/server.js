require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Authentication Routes
app.use("/api/auth", authRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 Secure Auth Backend is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});