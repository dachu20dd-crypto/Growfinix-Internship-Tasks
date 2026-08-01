const enquiryModel = require("../models/enquiryModel");

console.log("✅ Controller file loaded");

// Get all enquiries
const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await enquiryModel.getAllEnquiries();
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get enquiry by ID
const getEnquiryById = async (req, res) => {
  try {
    const enquiry = await enquiryModel.getEnquiryById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    res.status(200).json(enquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create enquiry
const createEnquiry = async (req, res) => {
  try {
    const enquiry = await enquiryModel.createEnquiry(req.body);
    res.status(201).json(enquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update enquiry
const updateEnquiry = async (req, res) => {
  try {
    const enquiry = await enquiryModel.updateEnquiry(
      req.params.id,
      req.body
    );

    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    res.status(200).json(enquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete enquiry
const deleteEnquiry = async (req, res) => {
  try {
    await enquiryModel.deleteEnquiry(req.params.id);
    res.status(200).json({
      message: "Enquiry deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEnquiries,
  getEnquiryById,
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
};