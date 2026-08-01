import { useEffect, useState } from "react";
import API from "./services/api";
import EnquiryForm from "./components/EnquiryForm";
import EnquiryTable from "./components/EnquiryTable";
import EnquiryCard from "./components/EnquiryCard";

function App() {
  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  // Fetch all enquiries
  const fetchEnquiries = async () => {
    try {
      const response = await API.get("/");
      setEnquiries(response.data);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    }
  };

  // Delete enquiry
  const deleteEnquiry = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) {
      return;
    }

    try {
      await API.delete(`/${id}`);
      fetchEnquiries();
    } catch (error) {
      console.error("Error deleting enquiry:", error);
    }
  };

  // Edit enquiry
  const editEnquiry = (enquiry) => {
    setSelectedEnquiry(enquiry);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Clear edit mode
  const clearEdit = () => {
    setSelectedEnquiry(null);
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Tour Enquiry Management Platform
        </h1>

        <EnquiryForm
          fetchEnquiries={fetchEnquiries}
          selectedEnquiry={selectedEnquiry}
          clearEdit={clearEdit}
        />

        {/* Desktop Table */}
        <div className="hidden md:block">
          <EnquiryTable
            enquiries={enquiries}
            deleteEnquiry={deleteEnquiry}
            editEnquiry={editEnquiry}
          />
        </div>

        {/* Mobile Cards */}
        <div className="block md:hidden">
          <EnquiryCard
            enquiries={enquiries}
            deleteEnquiry={deleteEnquiry}
            editEnquiry={editEnquiry}
          />
        </div>

      </div>
    </div>
  );
}

export default App;