import { useParams ,useNavigate } from "react-router-dom";
import InfoCard from "../car-information/InfoCard";
import Detail from "../car-information/Detail";

export default function CarInformation() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-3 py-1.5 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
          >
            ← Back
          </button>

          <h1 className="text-3xl font-bold">Car Information</h1>
        </div>
        <span className="text-sm text-gray-500">ID: {id}</span>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <InfoCard title="Status" value="Available" badge />
        <InfoCard title="Daily Price" value="$120" />
        <InfoCard title="License Plate" value="AA-123-BB" />
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Details</h2>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <Detail label="Make" value="BMW" />
          <Detail label="Model" value="X5" />
          <Detail label="Year" value="2022" />
          <Detail label="Color" value="Black" />
          <Detail label="Mileage" value="32,000 km" />
          <Detail label="Fuel Type" value="Diesel" />
          <Detail label="Transmission" value="Automatic" />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Edit
        </button>
        <button className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
}
