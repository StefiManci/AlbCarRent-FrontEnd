import carService from "../../../services/carService";
import { useSelector } from "react-redux";
import { useState } from "react";
import { validateCar } from "../validateCar";

export default function AddCarModal({ closeCarModal, setAddedCar }) {
  const [car, setCar] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    licensePlate: "",
    description: "",
    dailyRentalPrice: "",
    availability: true,
    transmission: "",
    fuelType: "",
    mileage: "",
    ownedBy: "",
  });

  const userId = useSelector((state) => state.auth.userId);

  const [errors, setErrors] = useState(null);

  const handleAddCar = async (e) => {
    e.preventDefault();

    const validationErrors = validateCar(car);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const carWithOwner = { ...car, ownedBy: userId };

    try {
      var response = await carService.addCar(carWithOwner);
      if (response.data.success) {
        setAddedCar((prev) => prev + 1);
      }
      closeCarModal();
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <>
      <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg max-h-170 overflow-x-auto w-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Add New Car</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Make</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                value={car.make}
                onChange={(e) => setCar({ ...car, make: e.target.value })}
              />
              {errors?.make && <p className="text-red-500">{errors.make}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Model</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                value={car.model}
                onChange={(e) => setCar({ ...car, model: e.target.value })}
              />
              {errors?.model && <p className="text-red-500">{errors.model}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Year</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded"
                value={car.year}
                onChange={(e) => setCar({ ...car, year: e.target.value })}
              />
              {errors?.year && <p className="text-red-500">{errors.year}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Color</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                value={car.color}
                onChange={(e) => setCar({ ...car, color: e.target.value })}
              />
              {errors?.color && <p className="text-red-500">{errors.color}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">License Plate</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                value={car.licensePlate}
                onChange={(e) =>
                  setCar({ ...car, licensePlate: e.target.value })
                }
              />
              {errors?.licensePlate && (
                <p className="text-red-500">{errors.licensePlate}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Description</label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border rounded resize-none"
                value={car.description}
                onChange={(e) =>
                  setCar({ ...car, description: e.target.value })
                }
              ></textarea>
              {errors?.description && (
                <p className="text-red-500">{errors.description}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Daily Rental Price
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded"
                value={car.dailyRentalPrice}
                onChange={(e) =>
                  setCar({ ...car, dailyRentalPrice: e.target.value })
                }
              />
              {errors?.dailyRentalPrice && (
                <p className="text-red-500">{errors.dailyRentalPrice}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Availability</label>
              <select
                className="w-full px-3 py-2 border rounded"
                value={car.availability}
                onChange={(e) =>
                  setCar({ ...car, availability: e.target.value === "true" })
                }
              >
                <option value="true">Available</option>
                <option value="false">Not Available</option>
              </select>
              {errors?.availability && (
                <p className="text-red-500">{errors.availability}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Transmission</label>
              <select
                className="w-full px-3 py-2 border rounded"
                value={car.transmission}
                onChange={(e) =>
                  setCar({ ...car, transmission: e.target.value })
                }
              >
                <option>Automatic</option>
                <option>Manual</option>
              </select>
              {errors?.transmission && (
                <p className="text-red-500">{errors.transmission}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Fuel Type</label>
              <select
                className="w-full px-3 py-2 border rounded"
                value={car.fuelType}
                onChange={(e) => setCar({ ...car, fuelType: e.target.value })}
              >
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Hybrid</option>
                <option>Electric</option>
              </select>
              {errors?.fuelType && (
                <p className="text-red-500">{errors.fuelType}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Mileage</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded"
                value={car.mileage}
                onChange={(e) => setCar({ ...car, mileage: e.target.value })}
              />
              {errors?.mileage && (
                <p className="text-red-500">{errors.mileage}</p>
              )}
            </div>
          </form>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleAddCar}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
            >
              Add Car
            </button>
            <button
              onClick={closeCarModal}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
