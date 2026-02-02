import carPageService from "../services/carPageService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PublicCarInfo() {
  const [car, setCar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await carPageService.getCarById(id);

        console.log("Fetched car data:", response);
        if (response?.success) {
          setCar(response.car);
        } else {
          console.error("Failed to load car information");
        }
      } catch (err) {
        console.error(err.message || "Unexpected error");
      }
    };

    fetchCar();
  }, [id]);

  return (
    <>
      <div className="min-h-screen px-6 py-10">
        {car ? (
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <p className="text-center text-gray-700 p-4">{car.model}</p>
          </div>
        ) : (
          <p className="text-center text-gray-500">Car not found</p>
        )}
      </div>
    </>
  );
}
