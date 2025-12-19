export default function News() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <img
                src="https://via.placeholder.com/400x200"
                alt="News"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  News Title {index + 1}
                </h3>
                <p className="text-gray-700 mb-2">
                  Brief description of the news article goes here.
                </p>
                <span className="text-sm text-gray-500">Date: 2025-12-19</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
