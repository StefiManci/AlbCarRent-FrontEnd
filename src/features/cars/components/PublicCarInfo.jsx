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

  const images = ["/react.svg", "/car2.jpg", "/car3.jpg"];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="min-h-screen px-6 py-10 flex flex-col items-center bg-gray-50">
        <div className="relative h-[400px] w-4/5 overflow-hidden rounded-2xl bg-gray-200">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
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
          <div className="w-full mt-10 flex justify-center">
            <div className="w-full max-w-3xl rounded-2xl border bg-white p-8 shadow-lg">
              <div className="w-full mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-3xl font-bold text-gray-900">
                  {car.make} {car.model}
                </h1>
                <span className="text-lg font-semibold text-gray-600">
                  {car.year}
                </span>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  <span className="font-semibold text-gray-900">Price:</span>{" "}
                  <span className="text-xl font-bold text-blue-600">
                    ${car.dailyRentalPrice}/day
                  </span>
                </p>

                <p>
                  <span className="font-semibold text-gray-900">
                    Description:
                  </span>{" "}
                  {car.description}
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <button className="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700 active:scale-95">
                  Rent Now
                </button>
                <button className="ml-4 rounded-xl bg-gray-200 px-6 py-3 text-lg font-semibold text-gray-800 transition hover:bg-gray-300 active:scale-95">
                  Owner Page
                </button>
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
