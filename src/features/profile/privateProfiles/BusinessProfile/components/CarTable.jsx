import carService from "../services/carService";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function CarTable({ addedCar }) {
  const [cars, setCars] = useState([]);

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await carService.getCars(userId);
        console.log("Get All Cars Response:", response);
        setCars(response.cars || []);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, [addedCar, userId]);

  return (
    <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
      {cars.map((car) => (
        <tr
          key={car.id}
          className="hover:bg-gray-50 transition-colors duration-150"
        >
          <td className="px-4 py-3 font-medium text-gray-900">{car.model}</td>
          <td className="px-4 py-3">{car.year}</td>
          <td className="px-4 py-3 capitalize">{car.color}</td>
          <td className="px-4 py-3">
            <div className="flex justify-center gap-3">
              <button
                className="
                  px-4 py-1.5
                  bg-blue-600 text-white
                  rounded-md
                  text-xs font-semibold
                  hover:bg-blue-700
                  focus:outline-none focus:ring-2 focus:ring-blue-400
                  transition
                "
              >
                Edit
              </button>

              <button
                className="
                  px-4 py-1.5
                  bg-red-600 text-white
                  rounded-md
                  text-xs font-semibold
                  hover:bg-red-700
                  focus:outline-none focus:ring-2 focus:ring-red-400
                  transition
                "
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
