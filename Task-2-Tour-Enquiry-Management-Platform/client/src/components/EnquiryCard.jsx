function EnquiryCard({ enquiries, deleteEnquiry, editEnquiry }) {
  return (
    <div className="space-y-4 md:hidden">
      {enquiries.length === 0 ? (
        <p className="text-center text-gray-500">No Enquiries Found</p>
      ) : (
        enquiries.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-4 border"
          >
            <h2 className="text-xl font-bold text-blue-700">
              {item.name}
            </h2>

            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Phone:</strong> {item.phone}</p>
            <p><strong>Destination:</strong> {item.destination}</p>
            <p>
              <strong>Travel Date:</strong>{" "}
              {item.travel_date?.substring(0, 10)}
            </p>
            <p><strong>People:</strong> {item.people}</p>
            <p><strong>Message:</strong> {item.message}</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => editEnquiry(item)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Edit
              </button>

              <button
                onClick={() => deleteEnquiry(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default EnquiryCard;