export default function FleetRow({
  img,
  name,
  plate,
  category,
  price,
  status,
  statusColor,
  location,
}) {
  const badgeColors = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-b">
      <td className="p-3 flex items-center gap-3">
        <img
          src={img}
          alt={name}
          className="w-14 h-10 rounded object-cover border"
        />
        <span className="font-medium">{name}</span>
      </td>

      <td className="p-3 text-sm">{plate}</td>
      <td className="p-3 text-sm">{category}</td>
      <td className="p-3 text-sm font-semibold">{price}</td>

      <td className="p-3">
        <span
          className={`px-3 py-1 rounded text-xs ${badgeColors[statusColor]}`}
        >
          {status}
        </span>
      </td>

      <td className="p-3 text-sm">{location}</td>

      <td className="p-3 text-right">
        <button className="px-3 py-1 text-sm border rounded mr-2 hover:bg-gray-100">
          Edit
        </button>
        <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">
          Manage
        </button>
      </td>
    </tr>
  );
}
