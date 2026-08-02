import { useState } from "react";
import API from "../services/api";

function PropertyCard({ property, fetchProperties }) {
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    title: property.title,
    location: property.location,
    price: property.price,
    description: property.description,
  });

  const handleDelete = async () => {
    if (!window.confirm("Delete this property?")) return;

    try {
      await API.delete(`/properties/${property._id}`);
      alert("Property deleted successfully!");
      fetchProperties();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await API.put(`/properties/${property._id}`, formData);

      alert("Property updated successfully!");

      setEditing(false);

      fetchProperties();
    } catch (error) {
      console.error(error);
      alert("Update failed!");
    }
  };

  return (
    <div className="card">
      <img src={property.image} alt={property.title} />

      <div className="card-content">

        {editing ? (
          <>
            <input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <input
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />

            <input
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />

            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
            />

            <button onClick={handleUpdate}>
              💾 Save
            </button>

            <button
              onClick={() => setEditing(false)}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h2>{property.title}</h2>

            <p>📍 {property.location}</p>

            <p>
              <strong>💰 ₹{property.price}</strong>
            </p>

            <p>{property.description}</p>

            <button
              onClick={() => setEditing(true)}
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "6px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              ✏ Edit
            </button>

            <button
              onClick={handleDelete}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              🗑 Delete
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default PropertyCard;