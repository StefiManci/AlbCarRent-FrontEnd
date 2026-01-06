import carService from "../services/carService";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CarTable({ addedCar }) {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await carService.getCars(userId);
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
          onClick={() => navigate(`/businessmanager/cars/${car.id}`)}
        >
          <td className="px-4 py-3 font-medium text-gray-900">{car.make}</td>
          <td className="px-4 py-3 font-medium text-gray-900">{car.model}</td>
          <td className="px-4 py-3">{car.year}</td>
          <td className="px-4 py-3 capitalize">{car.color}</td>
          <td className="px-4 py-3 uppercase">{car.licensePlate}</td>
          <td className="px-4 py-3">${car.dailyRentalPrice}</td>
          <td className="px-4 py-3">
            <span
              className={`
                px-2 py-1 rounded-full text-xs font-semibold
                ${
                  car.status === "available"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }
              `}
            >
              {car.status === "available" ? "Available" : "Not Available"}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
