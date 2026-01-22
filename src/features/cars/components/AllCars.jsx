import carPageService from "./services/carPageService";
import { useEffect, useState } from "react";

export default function AllCars({ filter }) {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);

        const request = {
          ...filter,
          page,
          pageSize: 10,
        };

        const response = await carPageService.getCarsWithPagination(request);

        if (response?.success) {
          setCars(response.cars);
        } else {
          setError("Failed to load cars");
        }
      } catch (err) {
        setError(err.message || "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [filter, page]);

  if (loading) {
    return <p className="text-center">Loading cars...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Fleet:</h2>

      {cars.length === 0 ? (
        <p className="text-center text-gray-500">No cars found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={car.imageUrl || "https://via.placeholder.com/300x200"}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{car.model}</h3>
                <p className="text-gray-700">{car.make}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-8 space-x-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="px-4 py-1 border rounded bg-gray-300">{page}</span>

        <button
          disabled={cars.length < 10}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
