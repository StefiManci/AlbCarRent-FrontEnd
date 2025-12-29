import { useState } from "react";
import AddCarModal from "./actions/add-car/AddCarModal";

export default function CarsManager() {
  const [carModal, setCarModalOpen] = useState(false);

  const openCarModal = () => {
    setCarModalOpen(true);
  };

  const closeCarModal = () => {
    setCarModalOpen(false);
  };

  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Manage Your Fleet</h2>
        <div className="mb-6 flex justify-end">
          <button
            onClick={openCarModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            + Add New Car
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Model</th>
                <th className="py-2 px-4 text-left">Year</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
      {carModal && <AddCarModal closeCarModal={closeCarModal} />}
    </>
  );
}
