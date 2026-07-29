import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          🎉 Welcome!
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          You have successfully logged in to the Secure Authentication System.
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;