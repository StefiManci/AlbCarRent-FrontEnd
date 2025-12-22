import SummaryCard from "./components/SummaryCard";
import FleetRow from "./components/FleetRow";

export default function FleetPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <div>
          <h1 className="text-3xl font-semibold">Fleet Management</h1>
          <p className="text-gray-500">
            Manage all vehicles, availability, condition and status
          </p>
        </div>

        <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          + Add New Car
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <SummaryCard label="Total Cars" value="128" />
        <SummaryCard label="Available" value="78" />
        <SummaryCard label="On Rent" value="27" />
        <SummaryCard label="Under Maintenance" value="8" />
      </div>
      <div className="bg-white border shadow rounded-xl p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search by model, plate, category..."
            className="border rounded-lg px-4 py-2 w-full"
          />
          <select className="border rounded-lg px-4 py-2 w-full">
            <option>All Categories</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Luxury</option>
            <option>Electric</option>
          </select>
          <select className="border rounded-lg px-4 py-2 w-full">
            <option>All Status</option>
            <option>Available</option>
            <option>Rented</option>
            <option>Maintenance</option>
            <option>Out of Service</option>
          </select>
          <select className="border rounded-lg px-4 py-2 w-full">
            <option>All Locations</option>
            <option>Tirana</option>
            <option>Durres</option>
            <option>Airport</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-xl border shadow p-5">
        <h2 className="text-lg font-semibold mb-3">Fleet Vehicles</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left text-sm">
                <th className="p-3">Car</th>
                <th className="p-3">Plate</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price / Day</th>
                <th className="p-3">Status</th>
                <th className="p-3">Location</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              <FleetRow
                img="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                name="BMW X5"
                plate="AA-234-AB"
                category="SUV"
                price="$160"
                status="Available"
                statusColor="green"
                location="Tirana"
              />

              <FleetRow
                img="https://images.unsplash.com/photo-1519682337058-a94d519337bc"
                name="Audi A6"
                plate="BB-888-FF"
                category="Luxury"
                price="$220"
                status="Rented"
                statusColor="blue"
                location="Airport"
              />

              <FleetRow
                img="https://images.unsplash.com/photo-1552519507-99c5d2fdfa5d"
                name="Toyota Corolla"
                plate="AA-999-KL"
                category="Sedan"
                price="$90"
                status="Maintenance"
                statusColor="yellow"
                location="Durres"
              />

              <FleetRow
                img="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023"
                name="Mercedes C-Class"
                plate="AA-555-MM"
                category="Luxury"
                price="$200"
                status="Out of Service"
                statusColor="red"
                location="Tirana"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
