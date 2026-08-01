const db = require("../config/db");

// Get all enquiries
const getAllEnquiries = async () => {
  const result = await db.query(
    "SELECT * FROM enquiries ORDER BY id ASC"
  );
  return result.rows;
};

// Get enquiry by ID
const getEnquiryById = async (id) => {
  const result = await db.query(
    "SELECT * FROM enquiries WHERE id = $1",
    [id]
  );
  return result.rows[0];
};

// Create enquiry
const createEnquiry = async (data) => {
  const {
    name,
    email,
    phone,
    destination,
    travel_date,
    people,
    message,
  } = data;

  const result = await db.query(
    `INSERT INTO enquiries
    (name, email, phone, destination, travel_date, people, message)
    VALUES ($1,$2,$3,$4,$5,$6,$7)
    RETURNING *`,
    [
      name,
      email,
      phone,
      destination,
      travel_date,
      people,
      message,
    ]
  );

  return result.rows[0];
};

// Update enquiry
const updateEnquiry = async (id, data) => {
  const {
    name,
    email,
    phone,
    destination,
    travel_date,
    people,
    message,
  } = data;

  const result = await db.query(
    `UPDATE enquiries
     SET
       name = $1,
       email = $2,
       phone = $3,
       destination = $4,
       travel_date = $5,
       people = $6,
       message = $7
     WHERE id = $8
     RETURNING *`,
    [
      name,
      email,
      phone,
      destination,
      travel_date,
      people,
      message,
      id,
    ]
  );

  return result.rows[0];
};

// Delete enquiry
const deleteEnquiry = async (id) => {
  await db.query(
    "DELETE FROM enquiries WHERE id = $1",
    [id]
  );
};

module.exports = {
  getAllEnquiries,
  getEnquiryById,
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
};