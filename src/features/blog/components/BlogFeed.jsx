export default function BlogFeed() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-6">All Blog Posts</h2>
        <div className="flex flex-col gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <img
                src="https://via.placeholder.com/800x400"
                alt="Blog"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Blog Title {index + 1}
                </h3>
                <p className="text-gray-700 mb-2">
                  Short excerpt from the blog post goes here.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Author: Admin</span>
                  <span>Date: 2025-12-19</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
