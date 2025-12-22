export default function ReservationRow({
  id,
  customer,
  car,
  date,
  status,
  amount,
  color,
}) {
  const colors = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    blue: "bg-blue-100 text-blue-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-b">
      <td className="p-3 text-sm">{id}</td>
      <td className="p-3 text-sm">{customer}</td>
      <td className="p-3 text-sm">{car}</td>
      <td className="p-3 text-sm">{date}</td>

      <td className="p-3">
        <span className={`px-3 py-1 rounded text-xs ${colors[color]}`}>
          {status}
        </span>
      </td>

      <td className="p-3 text-sm text-right font-semibold">{amount}</td>
    </tr>
  );
}
