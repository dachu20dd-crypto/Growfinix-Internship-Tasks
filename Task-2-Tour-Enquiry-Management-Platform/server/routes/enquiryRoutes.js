const express = require("express");
const router = express.Router();

const {
  getAllEnquiries,
  getEnquiryById,
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
} = require("../controllers/enquiryController");

// Debug: Check if controller functions are imported correctly
console.log({
  getAllEnquiries,
  getEnquiryById,
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
});

// Read all enquiries
router.get("/", getAllEnquiries);

// Read one enquiry
router.get("/:id", getEnquiryById);

// Create enquiry
router.post("/", createEnquiry);

// Update enquiry
router.put("/:id", updateEnquiry);

// Delete enquiry
router.delete("/:id", deleteEnquiry);

module.exports = router;