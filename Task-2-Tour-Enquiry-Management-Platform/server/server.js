const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Tour Enquiry Management Backend is Running...");
});

// API Routes
app.use("/api/enquiries", enquiryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});