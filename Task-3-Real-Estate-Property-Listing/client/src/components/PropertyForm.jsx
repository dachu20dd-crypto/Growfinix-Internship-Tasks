import { useState } from "react";
import API from "../services/api";

function PropertyForm({ fetchProperties }) {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("location", formData.location);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("image", image);

    await API.post("/properties", data);

    fetchProperties();

    setFormData({
      title: "",
      location: "",
      price: "",
      description: "",
    });

    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Property Title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit">
        Add Property
      </button>
    </form>
  );
}

export default PropertyForm;