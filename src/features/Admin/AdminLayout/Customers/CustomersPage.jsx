import { useState } from "react";

export default function CustomersPage() {
  const [filter, setFilter] = useState("all");
  console.log("Current Filter:", filter);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Customers" value="1,245" />
        <StatCard label="Active Users" value="1,018" color="green" />
        <StatCard label="Suspended Users" value="72" color="red" />
        <StatCard label="Business Accounts" value="155" color="blue" />
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex gap-3">
          <select
            className="border rounded px-3 py-2"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Customers</option>
            <option value="normal">Normal Users</option>
            <option value="business">Business Clients</option>
            <option value="active">Active Only</option>
            <option value="suspended">Suspended Only</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Search customers..."
          className="border rounded px-3 py-2"
        />
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Customer</th>
              <th>Email</th>
              <th>Type</th>
              <th>Status</th>
              <th>Total Rentals</th>
              <th>Registered</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            <CustomerRow
              name="John Doe"
              email="john@email.com"
              type="Normal"
              status="Active"
              rentals="12"
              date="10 Jan 2025"
            />

            <CustomerRow
              name="Tesla Corp"
              email="fleet@tesla.com"
              type="Business"
              status="Active"
              rentals="54"
              date="08 Dec 2024"
            />

            <CustomerRow
              name="Mark Smith"
              email="mark@email.com"
              type="Normal"
              status="Suspended"
              rentals="3"
              date="22 Nov 2024"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }) {
  const colorClass =
    color === "green"
      ? "text-green-600"
      : color === "red"
      ? "text-red-600"
      : color === "blue"
      ? "text-blue-600"
      : "text-gray-700";

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <p className="text-gray-500">{label}</p>
      <h2 className={`text-3xl font-bold ${colorClass}`}>{value}</h2>
    </div>
  );
}
function CustomerRow({ name, email, type, status, rentals, date }) {
  const statusColor =
    status === "Active"
      ? "bg-green-200 text-green-700"
      : status === "Suspended"
      ? "bg-red-200 text-red-700"
      : "bg-gray-200 text-gray-700";

  const typeColor =
    type === "Business"
      ? "bg-blue-200 text-blue-700"
      : "bg-purple-200 text-purple-700";

  return (
    <tr className="border-b">
      <td className="p-3 font-medium">{name}</td>
      <td>{email}</td>

      <td>
        <span className={`px-2 py-1 rounded text-sm ${typeColor}`}>{type}</span>
      </td>

      <td>
        <span className={`px-2 py-1 rounded text-sm ${statusColor}`}>
          {status}
        </span>
      </td>

      <td>{rentals}</td>
      <td>{date}</td>

      <td className="text-center py-3">
        <div className="flex gap-2 justify-center">
          <button className="px-3 py-1 bg-blue-600 text-white rounded">
            View
          </button>
          <button className="px-3 py-1 bg-yellow-500 text-white rounded">
            Suspend
          </button>
          <button className="px-3 py-1 bg-red-600 text-white rounded">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
