export default function Suggested() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trending Cars & Popular Destinations
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Trending Cars
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { name: "BMW X5", price: "$85/day" },
                  { name: "Mercedes C-Class", price: "$75/day" },
                  { name: "Toyota Corolla", price: "$45/day" },
                  { name: "Tesla Model 3", price: "$90/day" },
                ].map((car, index) => (
                  <div
                    key={index}
                    className="p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="h-32 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">
                      Car Image
                    </div>
                    <h4 className="font-semibold text-lg text-gray-900">
                      {car.name}
                    </h4>
                    <p className="text-gray-600">{car.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Popular Places
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {["Tirana", "Durrës", "Sarandë", "Shkodër"].map(
                  (place, index) => (
                    <div
                      key={index}
                      className="p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
                    >
                      <div className="h-32 w-full bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">
                        Place Image
                      </div>
                      <h4 className="font-semibold text-lg text-gray-900">
                        {place}
                      </h4>
                      <p className="text-gray-600">
                        Popular rental destination
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
