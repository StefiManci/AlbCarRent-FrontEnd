import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InfoCard from "../car-information/InfoCard";
import Detail from "../car-information/Detail";
import carService from "../../../services/carService";

export default function CarInformation() {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    hasError: false,
    message: "",
  });
  const [success, setSuccess] = useState({
    hasSuccess: false,
    message: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  //Get car details on component mount
  useEffect(() => {
    async function fetchCarDetails() {
      try {
        const carData = await carService.getCarById(id);
        setCar(carData.car);
      } catch (err) {
        console.error("Error fetching car details:", err);

        const message =
          err?.response?.data?.title ||
          (err?.response?.data?.errors
            ? JSON.stringify(err.response.data.errors)
            : null) ||
          err?.message ||
          "Failed to load car details. An error occurred!";

        setError({
          hasError: true,
          message,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchCarDetails();
  }, [id]);

  useEffect(() => {
    if (success.hasSuccess || error.hasError) {
      const timer = setTimeout(() => {
        setSuccess({ hasSuccess: false, message: "" });
        setError({ hasError: false, message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success.hasSuccess, error.hasError]);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  //Edit Car Details
  const saveChanges = async () => {
    try {
      const updateCarResponse = await carService.updateCar(car);

      if (updateCarResponse.success) {
        setSuccess({
          hasSuccess: true,
          message: updateCarResponse.message || "Car updated successfully",
        });
        setError({ hasError: false, message: "" });
      } else {
        setError({
          hasError: true,
          message: updateCarResponse.message || "Update failed",
        });
        setSuccess({ hasSuccess: false, message: "" });
      }
    } catch (err) {
      const message =
        err?.response?.data?.title ||
        (err?.response?.data?.errors
          ? JSON.stringify(err.response.data.errors)
          : null) ||
        err?.message ||
        "Failed to save car details. An error occurred!";

      setError({ hasError: true, message });
      setSuccess({ hasSuccess: false, message: "" });
    }

    setIsEditing(false);
  };

  //Delete Car
  const handleDelete = async () => {
    try {
      const deleteCarResponse = await carService.deleteCar(car.id);
      if (deleteCarResponse.success) {
        setSuccess({
          hasSuccess: true,
          message: deleteCarResponse.message || "Car deleted successfully",
        });
        navigate(-1);
      } else {
        setError({
          hasError: true,
          message: deleteCarResponse.message || "Delete failed",
        });
      }
    } catch (err) {
      const message =
        err?.response?.data?.title ||
        (err?.response?.data?.errors
          ? JSON.stringify(err.response.data.errors)
          : null) ||
        err?.message ||
        "Failed to delete car. An error occurred!";
      setError({ hasError: true, message });
    }
  };

  const confirmDelete = (carId) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      handleDelete(carId);
    }
  };

  if (loading) {
    return <div>Loading Car Data...</div>;
  }
  if (error.hasError) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <>
      {success.hasSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          {success.message}
        </div>
      )}
      {error.hasError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          {error.message}
        </div>
      )}
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-3 py-1.5 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
            >
              ← Back
            </button>

            <h1 className="text-3xl font-bold">Car Information</h1>
          </div>
          <span className="text-sm text-gray-500">ID: {car.id}</span>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <InfoCard
            title="Status"
            value={car.status ? "Available" : "Not Available"}
            isEditing={isEditing}
            onChange={(newValue) => {
              setCar((prev) => ({
                ...prev,
                status: newValue,
              }));
            }}
            badge
          />
          <InfoCard
            title="Daily Price"
            value={car.dailyRentalPrice}
            isEditing={isEditing}
            onChange={(newValue) => {
              setCar((prev) => ({
                ...prev,
                dailyRentalPrice: newValue,
              }));
            }}
          />
          <InfoCard
            title="License Plate"
            value={car.licensePlate}
            isEditing={isEditing}
            onChange={(newValue) => {
              setCar((prev) => ({
                ...prev,
                licensePlate: newValue,
              }));
            }}
          />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Details</h2>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <Detail
              label="Make"
              value={car.make}
              isEditing={isEditing}
              onChange={(newValue) => {
                setCar((prev) => ({
                  ...prev,
                  make: newValue,
                }));
              }}
            />
            <Detail
              label="Model"
              value={car.model}
              isEditing={isEditing}
              onChange={(newValue) => {
                setCar((prev) => ({
                  ...prev,
                  model: newValue,
                }));
              }}
            />
            <Detail
              label="Year"
              value={car.year}
              isEditing={isEditing}
              onChange={(newValue) => {
                setCar((prev) => ({
                  ...prev,
                  year: newValue,
                }));
              }}
            />
            <Detail
              label="Color"
              value={car.color}
              isEditing={isEditing}
              onChange={(newValue) => {
                setCar((prev) => ({
                  ...prev,
                  color: newValue,
                }));
              }}
            />
            <Detail
              label="Mileage"
              value={car.mileage}
              isEditing={isEditing}
              onChange={(newValue) => {
                setCar((prev) => ({
                  ...prev,
                  mileage: newValue,
                }));
              }}
            />
            <Detail
              label="Fuel Type"
              value={car.fuelType}
              isEditing={isEditing}
              onChange={(newValue) => {
                setCar((prev) => ({
                  ...prev,
                  fuelType: newValue,
                }));
              }}
            />
            <Detail
              label="Transmission"
              value={car.transmission}
              isEditing={isEditing}
              onChange={(newValue) => {
                setCar((prev) => ({
                  ...prev,
                  transmission: newValue,
                }));
              }}
            />
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <button className="px-5 py-2 bg-white text-black rounded-md hover:bg-gray-200">
            + Add Photos
          </button>
          {isEditing ? (
            <button
              onClick={saveChanges}
              className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Save
            </button>
          ) : (
            <button
              onClick={toggleEdit}
              className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Edit
            </button>
          )}

          <button
            onClick={() => confirmDelete(car.id)}
            className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
