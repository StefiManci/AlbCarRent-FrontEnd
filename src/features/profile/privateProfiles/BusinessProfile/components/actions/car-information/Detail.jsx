export default function Detail({ label, value, isEditing, onChange }) {
  return (
    <>
      {isEditing ? (
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">{label}</span>
          <span className="font-medium">{value}</span>
        </div>
      )}
    </>
  );
}
