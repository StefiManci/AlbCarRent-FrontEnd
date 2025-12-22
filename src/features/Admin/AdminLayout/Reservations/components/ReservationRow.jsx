export default function ReservationRow({
  id,
  customer,
  car,
  date,
  status,
  statusColor,
  payment,
}) {
  const badgeColors = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-b">
      <td className="p-3 text-sm font-medium">{id}</td>
      <td className="p-3 text-sm">{customer}</td>
      <td className="p-3 text-sm">{car}</td>
      <td className="p-3 text-sm">{date}</td>

      <td className="p-3">
        <span
          className={`px-3 py-1 rounded text-xs ${badgeColors[statusColor]}`}
        >
          {status}
        </span>
      </td>

      <td className="p-3 text-sm">{payment}</td>

      <td className="p-3 text-right">
        <button className="px-3 py-1 text-sm border rounded mr-2 hover:bg-gray-100">
          View
        </button>
        <button className="px-3 py-1 text-sm border rounded mr-2 hover:bg-gray-100">
          Approve
        </button>
        <button className="px-3 py-1 text-sm border rounded text-red-600 hover:bg-gray-100">
          Cancel
        </button>
      </td>
    </tr>
  );
}
