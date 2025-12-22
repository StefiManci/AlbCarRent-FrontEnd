export default function DashboardCard({ title, value, badge }) {
  return (
    <div className="bg-white shadow border rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
          {badge}
        </span>
      </div>

      <p className="text-3xl font-bold mt-3">{value}</p>
    </div>
  );
}
