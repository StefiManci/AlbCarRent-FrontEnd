export default function TopPicked() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-6">Top Picked Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Car"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Car Name</h3>
              <p className="text-gray-700">Some description here.</p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Car"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Car Name</h3>
              <p className="text-gray-700">Some description here.</p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Car"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Car Name</h3>
              <p className="text-gray-700">Some description here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
