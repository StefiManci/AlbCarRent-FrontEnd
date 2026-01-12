import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BusinessProfileManager() {
  const userId = useSelector((state) => state.auth.userId);
  const navigate = useNavigate();
  return (
    <div className="p-6 max-w-7xl mx-auto flex items-center justify-between border-b border-gray-300">
      <div>
        <h2 className="text-3xl font-bold mb-1">Business Profile Dashboard</h2>
        <p className="text-gray-700">Manage your business profile!</p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => {
            navigate(`/businessprofile/${userId}`);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Live Profile
        </button>
      </div>
    </div>
  );
}
