const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get token from Authorization header
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({
        message: "Access denied. No token provided."
      });
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Save user information
    req.user = decoded;

    // Continue to next function
    next();

  } catch (error) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
};

module.exports = authMiddleware;