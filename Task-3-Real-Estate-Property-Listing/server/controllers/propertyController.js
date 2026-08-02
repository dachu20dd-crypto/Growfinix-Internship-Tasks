const Property = require("../models/propertyModel");

// Get All Properties
const getProperties = async (req, res) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 });
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add Property
const addProperty = async (req, res) => {
  console.log("========== DEBUG ==========");
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);
  console.log("===========================");

  try {
    const property = await Property.create({
      title: req.body.title,
      location: req.body.location,
      price: req.body.price,
      description: req.body.description,
      image: req.file ? req.file.path : "",
    });

    res.status(201).json(property);
  } catch (error) {
    console.error("ERROR:", error);
    res.status(400).json({
      message: error.message,
    });
  }
};

// Update Property
const updateProperty = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      location: req.body.location,
      price: req.body.price,
      description: req.body.description,
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const property = await Property.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.status(200).json(property);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Delete Property
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.status(200).json({
      message: "Property deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProperties,
  addProperty,
  updateProperty,
  deleteProperty,
};