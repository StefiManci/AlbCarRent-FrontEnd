export default function CarFilter({ filter, setFilter }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilter({
      search: "",
      lowPrice: "",
      highPrice: "",
      fuelType: "",
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search cars..."
          name="search"
          value={filter.search}
          onChange={handleFilterChange}
          className="border-b-2 rounded px-4 py-2 w-full md:w-1/4"
        />
        <p>Price Range:</p>
        <select
          className="border-b-2 rounded px-4 py-2 w-full md:w-1/6"
          name="priceRange"
          value={`${filter.lowPrice}-${filter.highPrice}`}
          onChange={(e) => {
            const [low, high] = e.target.value.split("-");
            setFilter((prev) => ({
              ...prev,
              lowPrice: low || "",
              highPrice: high || "",
              page: 1,
            }));
          }}
        >
          <option value="0-50">0 - 50</option>
          <option value="51-100">51 - 100</option>
          <option value="101-200">101 - 200</option>
          <option value="201-999">201+</option>
        </select>
        <p>Fuel Type:</p>
        <select
          className="border-b-2 rounded px-4 py-2 w-full md:w-1/6"
          value={filter.fuelType}
          onChange={handleFilterChange}
        >
          <option value="gasoline">Gasoline</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <button
          onClick={clearFilters}
          className=" text-black border px-6 py-2 rounded hover:bg-blue-100 transition"
        >
          Clear Filters
        </button>
      </div>
    </>
  );
}
