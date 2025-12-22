export default function SummaryCard({ label, value }) {
  return (
    <div className="bg-white shadow border rounded-xl p-5">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </div>
  );
}
