export default function AllCars() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-6">All Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
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
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-200">
            Previous
          </button>
          <button className="px-3 py-1 border rounded bg-gray-300">1</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-200">
            2
          </button>
          <button className="px-3 py-1 border rounded hover:bg-gray-200">
            3
          </button>
          <button className="px-3 py-1 border rounded hover:bg-gray-200">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
