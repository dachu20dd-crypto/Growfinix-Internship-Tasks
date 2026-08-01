import { useState, useEffect } from "react";
import API from "../services/api";

function EnquiryForm({
  fetchEnquiries,
  selectedEnquiry,
  clearEdit,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travel_date: "",
    people: "",
    message: "",
  });

  useEffect(() => {
    if (selectedEnquiry) {
      setFormData({
        name: selectedEnquiry.name || "",
        email: selectedEnquiry.email || "",
        phone: selectedEnquiry.phone || "",
        destination: selectedEnquiry.destination || "",
        travel_date:
          selectedEnquiry.travel_date?.substring(0, 10) || "",
        people: selectedEnquiry.people || "",
        message: selectedEnquiry.message || "",
      });
    }
  }, [selectedEnquiry]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedEnquiry) {
        await API.put(`/${selectedEnquiry.id}`, formData);
        alert("Enquiry Updated Successfully!");
        clearEdit();
      } else {
        await API.post("/", formData);
        alert("Enquiry Added Successfully!");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        travel_date: "",
        people: "",
        message: "",
      });

      fetchEnquiries();
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        {selectedEnquiry
          ? "Update Tour Enquiry"
          : "Add Tour Enquiry"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          type="date"
          name="travel_date"
          value={formData.travel_date}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <input
          type="number"
          name="people"
          placeholder="People"
          value={formData.people}
          onChange={handleChange}
          className="border rounded p-3"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="border rounded p-3 md:col-span-2"
          rows="4"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 md:col-span-2"
        >
          {selectedEnquiry ? "Update Enquiry" : "Add Enquiry"}
        </button>

        {selectedEnquiry && (
          <button
            type="button"
            onClick={() => {
              clearEdit();
              setFormData({
                name: "",
                email: "",
                phone: "",
                destination: "",
                travel_date: "",
                people: "",
                message: "",
              });
            }}
            className="bg-gray-500 text-white py-3 rounded hover:bg-gray-600 md:col-span-2"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default EnquiryForm;