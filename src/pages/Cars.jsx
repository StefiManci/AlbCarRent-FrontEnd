import AllCars from "../features/cars/components/AllCars";

export default function Cars() {
  return (
    <div className="min-h-screen px-6 py-10 space-y-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search cars..."
          className="border rounded px-4 py-2 w-full md:w-1/3"
        />
        <select className="border rounded px-4 py-2 w-full md:w-1/4">
          <option value="">Sort by price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
      <AllCars />
    </div>
  );
}
