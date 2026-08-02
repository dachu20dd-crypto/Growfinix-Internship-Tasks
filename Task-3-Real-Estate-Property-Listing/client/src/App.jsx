import { useEffect, useState } from "react";
import API from "./services/api";
import PropertyForm from "./components/PropertyForm";
import PropertyList from "./components/PropertyList";
import "./App.css";

function App() {
  const [properties, setProperties] = useState([]);

  // Fetch all properties
  const fetchProperties = async () => {
    try {
      const res = await API.get("/properties");
      setProperties(res.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  // Load properties when the app starts
  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="container">
      <h1>🏠 Real Estate Property Listing</h1>

      <PropertyForm fetchProperties={fetchProperties} />

      <PropertyList 
       properties={properties}
        fetchProperties={fetchProperties}
      />
    </div>
  );
}

export default App;