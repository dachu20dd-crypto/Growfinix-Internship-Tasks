function EnquiryTable({ enquiries, deleteEnquiry, editEnquiry }) {
  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-xl p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Tour Enquiries
      </h2>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Phone</th>
            <th className="p-3 border">Destination</th>
            <th className="p-3 border">Travel Date</th>
            <th className="p-3 border">People</th>
            <th className="p-3 border">Message</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {enquiries.length === 0 ? (
            <tr>
              <td
                colSpan="8"
                className="text-center p-4 text-gray-500"
              >
                No Enquiries Found
              </td>
            </tr>
          ) : (
            enquiries.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.email}</td>
                <td className="border p-2">{item.phone}</td>
                <td className="border p-2">{item.destination}</td>
                <td className="border p-2">
                  {item.travel_date?.substring(0, 10)}
                </td>
                <td className="border p-2">{item.people}</td>
                <td className="border p-2">{item.message}</td>

                <td className="border p-2">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => editEnquiry(item)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteEnquiry(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EnquiryTable;