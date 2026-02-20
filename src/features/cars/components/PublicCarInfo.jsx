import carPageService from "../services/carPageService";
import carService from "../../profile/privateProfiles/BusinessProfile/services/carService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PublicCarInfo() {
  const [car, setCar] = useState(null);
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;

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

  useEffect(() => {
    const getCarImages = async () => {
      if (car) {
        try {
          const response = await carService.getCarImages(
            car.id,
            car.businessId,
          );
          if (response?.success) {
            setImages(response.imageUrls || []);
          } else {
            console.error("Failed to load car images");
          }
        } catch (err) {
          console.error("Failed to load car images:", err.message || err);
        }
      }
    };

    getCarImages();
  }, [car]);

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (images.length === 0) return;
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    if (images.length === 0) return;
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="min-h-screen px-6 py-10 flex flex-col items-center bg-white">
        <div className="relative h-[400px] w-4/5 overflow-hidden rounded-2xl bg-gray-200">
          {images.map((image, index) => (
            <img
              key={index}
              src={apiUrl + image}
              alt="car"
              className={`absolute h-full w-full object-cover transition-opacity duration-500 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70"
          >
            ›
          </button>
        </div>

        {car ? (
          <div className="w-full min-h-[600px] mt-10 flex justify-center items-start bg-gray-50 p-6">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-900 text-white p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">
                    {car.make} {car.model}
                  </h2>
                  <p className="text-sm text-gray-300">ID: {car.id}</p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    car.isAvailable
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {car.isAvailable ? "Available" : "Not Available"}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">Make</span>
                    <span className="font-semibold text-gray-800">
                      {car.make}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">Model</span>
                    <span className="font-semibold text-gray-800">
                      {car.model}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">Year</span>
                    <span className="font-semibold text-gray-800">
                      {car.year}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">Color</span>
                    <span className="font-semibold text-gray-800">
                      {car.color}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">Transmission</span>
                    <span className="font-semibold text-gray-800">
                      {car.transmission}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">Fuel Type</span>
                    <span className="font-semibold text-gray-800">
                      {car.fuelType}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">Mileage</span>
                    <span className="font-semibold text-gray-800">
                      {car.mileage?.toLocaleString()} km
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">License Plate</span>
                    <span className="font-semibold text-gray-800">
                      {car.licensePlate}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">Daily Price</span>
                    <span className="font-bold text-green-600 text-lg">
                      €{car.dailyRentalPrice?.toFixed(2)} / day
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">Owned By</span>
                    <span className="font-semibold text-gray-800">
                      {car.ownedBy}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">Rented By</span>
                    <span className="font-semibold text-gray-800">
                      {car.rentedBy || "—"}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">Created</span>
                    <span className="font-semibold text-gray-800">
                      {new Date(car.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500 text-sm">Updated</span>
                    <span className="font-semibold text-gray-800">
                      {car.updatedAt
                        ? new Date(car.updatedAt).toLocaleDateString()
                        : "—"}
                    </span>
                  </div>
                  <div className="pt-3">
                    <p className="text-sm font-semibold text-gray-500 mb-1">
                      Description
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {car.description}
                    </p>
                  </div>
                </div>
                <div className="w-full max-w-5xl mt-6 p-4">
                  <button
                    onClick={() => navigate("/booking")}
                    className="text-blue-700 border-b-2 font-semibold hover:text-blue-800 transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-10 text-center text-lg text-gray-500">
            Loading car information...
          </p>
        )}
      </div>
    </>
  );
}
