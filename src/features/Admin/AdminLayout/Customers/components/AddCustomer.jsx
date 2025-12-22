export default function AddCustomer() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Customer</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <form className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="+355 68 000 0000"
              className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Customer Type</label>
            <select className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
              <option>Normal User</option>
              <option>Business Customer</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Driving License Number</label>
            <input
              type="text"
              placeholder="Driving license number"
              className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">National ID / Passport</label>
            <input
              type="text"
              placeholder="ID / Passport number"
              className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="font-medium mb-1">Address</label>
            <input
              type="text"
              placeholder="Street, City, Country"
              className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Account Status</label>
            <select className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
              <option>Active</option>
              <option>Suspended</option>
            </select>
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="font-medium mb-1">Notes</label>
            <textarea
              rows="3"
              placeholder="Internal notes (optional)"
              className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              className="px-5 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
