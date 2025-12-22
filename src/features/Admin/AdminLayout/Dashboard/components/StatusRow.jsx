export default function StatusRow({ label, value, color }) {
  const colors = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${colors[color]}`}></span>
        <span>{label}</span>
      </div>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
