import TopPicked from "../features/blog/components/TopPicked";
import TopRentalBusinesses from "../features/blog/components/TopRentalBusinesses";
import BlogFeed from "../features/blog/components/BlogFeed";
import News from "../features/blog/components/News";

export default function Blog() {
  return (
    <>
      <div className="min-h-screen px-6 py-10 space-y-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Car News & Updates</h1>
          <p className="text-gray-600 mt-2">
            Latest news, top cars, rental business insights and tips.
          </p>
        </div>
        <News />
        <TopPicked />
        <TopRentalBusinesses />
        <BlogFeed />
      </div>
    </>
  );
}
