export default function TopRentalBusinesses() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-6">Top Rental Businesses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow p-4 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Business"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Business Name</h3>
          </div>
          <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow p-4 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Business"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Business Name</h3>
          </div>
          <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow p-4 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Business"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Business Name</h3>
          </div>
        </div>
      </div>
    </>
  );
}
