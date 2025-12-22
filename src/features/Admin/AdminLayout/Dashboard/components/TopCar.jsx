export default function TopCar({ name, rentals }) {
  return (
    <li className="flex justify-between border p-3 rounded-lg">
      <span>{name}</span>
      <span className="text-gray-500 text-sm">{rentals}</span>
    </li>
  );
}
