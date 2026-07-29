const express = require("express");
const { register, login, getProfile } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Register Route
router.post("/register", register);

// Login Route
router.post("/login", login);

// Protected Profile Route
router.get("/profile", authMiddleware, getProfile);

module.exports = router;