export default function Header() {
  return (
    <>
      <section className="h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Welcome to AlbCarRent
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mb-8">
          Rent the perfect car for your journey with ease and confidence.
          Affordable prices, reliable cars, and fast booking.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="text"
            placeholder="Search by brand or model"
            className="w-64 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <select className="px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-800">
            <option value="">All Categories</option>
            <option value="economy">Economy</option>
            <option value="suv">SUV</option>
            <option value="luxury">Luxury</option>
            <option value="electric">Electric</option>
          </select>
          <div className="flex space-x-4">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
