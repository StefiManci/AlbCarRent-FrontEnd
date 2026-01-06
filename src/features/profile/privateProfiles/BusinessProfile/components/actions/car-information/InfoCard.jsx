export default function InfoCard({ title, value, badge }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <p className="text-sm text-gray-500">{title}</p>
      {badge ? (
        <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
          {value}
        </span>
      ) : (
        <p className="text-xl font-bold mt-2">{value}</p>
      )}
    </div>
  );
}
