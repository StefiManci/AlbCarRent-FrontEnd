import SummaryCard from "./components/SummaryCard";
import ReservationRow from "./components/ReservationRow";

export default function ReservationsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <div>
          <h1 className="text-3xl font-semibold">Reservations</h1>
          <p className="text-gray-500">
            Monitor, approve, manage and track all bookings
          </p>
        </div>

        <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          + Create Manual Booking
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <SummaryCard label="Total Reservations" value="512" />
        <SummaryCard label="Approved" value="341" />
        <SummaryCard label="Pending" value="62" />
        <SummaryCard label="Cancelled" value="41" />
      </div>
      <div className="bg-white border shadow rounded-xl p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search by name, booking id..."
            className="border rounded-lg px-4 py-2 w-full"
          />
          <select className="border rounded-lg px-4 py-2 w-full">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <input type="date" className="border rounded-lg px-4 py-2 w-full" />
          <select className="border rounded-lg px-4 py-2 w-full">
            <option>Sort by Latest</option>
            <option>Oldest</option>
            <option>Highest Amount</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-xl border shadow p-5">
        <h2 className="text-lg font-semibold mb-3">Reservations List</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left text-sm">
                <th className="p-3">Booking ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Car</th>
                <th className="p-3">Dates</th>
                <th className="p-3">Status</th>
                <th className="p-3">Payment</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              <ReservationRow
                id="#R-98231"
                customer="John Miller"
                car="BMW X5"
                date="12 Jan - 15 Jan"
                status="Approved"
                statusColor="green"
                payment="Paid"
              />

              <ReservationRow
                id="#R-98214"
                customer="Emily Clark"
                car="Audi A6"
                date="10 Jan - 14 Jan"
                status="Pending"
                statusColor="yellow"
                payment="Pending"
              />

              <ReservationRow
                id="#R-98199"
                customer="Mark Wilson"
                car="Toyota Corolla"
                date="8 Jan - 10 Jan"
                status="Completed"
                statusColor="blue"
                payment="Paid"
              />

              <ReservationRow
                id="#R-98190"
                customer="Lisa Johnson"
                car="Mercedes C-Class"
                date="6 Jan - 9 Jan"
                status="Cancelled"
                statusColor="red"
                payment="Refunded"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
