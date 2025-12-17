export default function About() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">About AlbCarRent</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          AlbCarRent is a modern car rental service dedicated to making
          transportation simple, affordable, and reliable across Albania.
        </p>
      </section>

      {/* Company Story */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded with a passion for mobility and customer satisfaction,
              AlbCarRent was created to simplify the car rental experience. We
              understand that every journey matters, whether for business,
              leisure, or adventure.
            </p>
            <p className="text-gray-700">
              Our platform combines a wide selection of vehicles, transparent
              pricing, and fast booking to give customers full confidence on the
              road.
            </p>
          </div>

          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Company Image
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To provide reliable, affordable, and high-quality car rental
              services that empower our customers to travel freely and
              confidently.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become Albania’s most trusted and innovative car rental
              platform by continuously improving our services and expanding our
              fleet.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose AlbCarRent?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="font-semibold text-xl mb-2">
                Wide Vehicle Selection
              </h3>
              <p className="text-gray-600">
                Economy, SUV, luxury, and electric vehicles to match every
                travel need.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-semibold text-xl mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                No hidden fees. What you see is what you pay.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-semibold text-xl mb-2">Customer Focused</h3>
              <p className="text-gray-600">
                Dedicated support to ensure a smooth rental experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 py-20 text-center text-white px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Explore our fleet and book your car today with confidence.
        </p>
        <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
          Browse Cars
        </button>
      </section>
    </div>
  );
}
