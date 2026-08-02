const express = require("express");
const upload = require("../middleware/upload");

const {
  getProperties,
  addProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

const router = express.Router();

router.get("/", getProperties);

router.post("/", upload.single("image"), addProperty);

router.put("/:id", upload.single("image"), updateProperty);

router.delete("/:id", deleteProperty);

module.exports = router;