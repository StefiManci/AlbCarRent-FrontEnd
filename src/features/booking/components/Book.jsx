export default function Book() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gray-100 p-20">
      <div className="h-300 w-full flex flex-col items-center justify-start bg-white rounded-lg shadow-lg p-10">
        <h1 className="text-2xl font-bold mb-4">You are about to book a car</h1>
        <p className="text-gray-600 mb-6 border-b border-gray-200 pb-6">
          Please add the details of your booking before proceeding.
        </p>
        <div className="w-full max-w-2xl bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">
                Pick-up Location
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter pick-up location"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Drop-off Location
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter drop-off location"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">Pick-up Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">
                  Drop-off Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any special requests or information"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
