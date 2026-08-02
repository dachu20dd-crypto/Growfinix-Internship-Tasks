import PropertyCard from "./PropertyCard";

function PropertyList({ properties, fetchProperties }) {
  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCard
          key={property._id}
          property={property}
          fetchProperties={fetchProperties}
        />
      ))}
    </div>
  );
}

export default PropertyList;