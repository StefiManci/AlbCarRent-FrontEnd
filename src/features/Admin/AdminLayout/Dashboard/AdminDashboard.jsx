import DashboardCard from "./components/DashboardCard";
import ReservationRow from "./components/ReservationRow";
import StatusRow from "./components/StatusRow";
import TopCar from "./components/TopCar";

export default function AdminDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <p className="text-gray-500">
          Overview of fleet, reservations, and performance
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <DashboardCard title="Total Cars" value="128" badge="Fleet" />
        <DashboardCard title="Active Rentals" value="27" badge="On Road" />
        <DashboardCard
          title="Revenue This Month"
          value="$42,310"
          badge="Finance"
        />
        <DashboardCard title="Pending Approvals" value="6" badge="Tasks" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="p-5 bg-white rounded-xl shadow border">
          <h2 className="text-lg font-semibold mb-2">Reservations Trend</h2>
          <p className="text-gray-500 mb-4 text-sm">
            Month to month booking performance
          </p>
          <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-500">
            Chart Placeholder
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl shadow border">
          <h2 className="text-lg font-semibold mb-2">Fleet Status</h2>
          <p className="text-gray-500 mb-4 text-sm">Operational summary</p>

          <div className="space-y-3">
            <StatusRow label="Available Cars" value="78" color="green" />
            <StatusRow label="Currently Rented" value="27" color="blue" />
            <StatusRow label="Under Maintenance" value="8" color="yellow" />
            <StatusRow label="Out of Service" value="3" color="red" />
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl shadow border">
          <h2 className="text-lg font-semibold mb-2">Top Performing Cars</h2>
          <p className="text-gray-500 mb-4 text-sm">Most rented vehicles</p>

          <ul className="space-y-3">
            <TopCar name="BMW X5" rentals="142 Rentals" />
            <TopCar name="Audi A6" rentals="121 Rentals" />
            <TopCar name="Toyota Corolla" rentals="109 Rentals" />
            <TopCar name="Mercedes C-Class" rentals="96 Rentals" />
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow border p-5">
        <h2 className="text-lg font-semibold mb-2">Recent Reservations</h2>
        <p className="text-gray-500 mb-4 text-sm">Latest booking activities</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3 text-sm">Booking ID</th>
                <th className="p-3 text-sm">Customer</th>
                <th className="p-3 text-sm">Car</th>
                <th className="p-3 text-sm">Dates</th>
                <th className="p-3 text-sm">Status</th>
                <th className="p-3 text-sm text-right">Amount</th>
              </tr>
            </thead>

            <tbody>
              <ReservationRow
                id="#R-98231"
                customer="John Miller"
                car="BMW X5"
                date="12 Jan - 15 Jan"
                status="Approved"
                amount="$540"
                color="green"
              />
              <ReservationRow
                id="#R-98214"
                customer="Emily Clark"
                car="Audi A6"
                date="10 Jan - 14 Jan"
                status="Pending"
                amount="$460"
                color="yellow"
              />
              <ReservationRow
                id="#R-98199"
                customer="Mark Wilson"
                car="Toyota Corolla"
                date="8 Jan - 10 Jan"
                status="Completed"
                amount="$190"
                color="blue"
              />
              <ReservationRow
                id="#R-98190"
                customer="Lisa Johnson"
                car="Mercedes C-Class"
                date="6 Jan - 9 Jan"
                status="Cancelled"
                amount="$0"
                color="red"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
