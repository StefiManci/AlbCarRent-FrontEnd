export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <section className="h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Welcome to AlbCarRent
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mb-8">
          Rent the perfect car for your journey with ease and confidence. Affordable prices, reliable cars, and fast booking.
        </p>
        <div className="flex space-x-4">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
            Explore Cars
          </button>
          <button className="bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose AlbCarRent?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-gray-800 text-white p-4 rounded-full mb-4">
                🚗
              </div>
              <h3 className="font-semibold text-xl mb-2">Wide Selection</h3>
              <p className="text-gray-600">Choose from a wide variety of cars to suit your needs.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-gray-800 text-white p-4 rounded-full mb-4">
                💰
              </div>
              <h3 className="font-semibold text-xl mb-2">Affordable Prices</h3>
              <p className="text-gray-600">Transparent pricing and great deals for all customers.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-gray-800 text-white p-4 rounded-full mb-4">
                ⚡
              </div>
              <h3 className="font-semibold text-xl mb-2">Fast Booking</h3>
              <p className="text-gray-600">Reserve your car in minutes with our easy online booking.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Hit the Road?</h2>
        <p className="text-gray-700 mb-8 max-w-lg">
          Find the perfect car for your journey and book it instantly.
        </p>
        <button className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition">
          Book Now
        </button>
      </section>
    </div>
  );
}
