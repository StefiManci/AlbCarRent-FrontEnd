import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import carPageService from "../../cars/services/carPageService";
import bookingService from "../services/BookingService";
import SuccessBooking from "./MessageComponents/SuccessBooking";
import ErrorBooking from "./MessageComponents/ErrorBooking";
import validateBooking from "../helpers/validateBooking";

export default function Book() {
  const { carId } = useParams();
  const [bookingDetails, setBookingDetails] = useState({
    carId: carId,
    pickupDate: "",
    dropoffDate: "",
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    driverAge: "",
    additionalNotes: "",
    carOwner: "",
  });
  const [bookingStatus, setBookingStatus] = useState(null);
  const [bookingMessage, setBookingMessage] = useState(null);

  const [errors, setErrors] = useState({});

  const [car, setCar] = useState(null);
  const [isViewingCarDetails, setIsViewingCarDetails] = useState(false);
  const [isViewingBillingDetails, setIsViewingBillingDetails] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    numberOfDays: "",
    Pricing: "",
  });

  const toggleCarDetails = () => {
    setIsViewingCarDetails((prev) => !prev);
  };

  const toggleBillingDetails = () => {
    setIsViewingBillingDetails((prev) => !prev);
  };

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await carPageService.getCarById(carId);
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
  }, [carId]);

  useEffect(() => {
    if (bookingDetails.pickupDate && bookingDetails.dropoffDate) {
      const pickup = new Date(bookingDetails.pickupDate);
      const dropoff = new Date(bookingDetails.dropoffDate);
      const timeDiff = dropoff.getTime() - pickup.getTime();
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setBillingDetails((prev) => ({
        ...prev,
        numberOfDays: days,
        Pricing: car ? `$${days * car.dailyRentalPrice}` : "",
      }));
    } else {
      setBillingDetails((prev) => ({
        ...prev,
        numberOfDays: "",
        Pricing: "",
      }));
    }
  }, [bookingDetails.pickupDate, bookingDetails.dropoffDate, car]);

  const handleBooking = async () => {
    try {
      const errors = validateBooking(bookingDetails);

      if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
      }

      var updatedBookingDetails = {
        ...bookingDetails,
        carOwner: car?.ownedBy || "",
      };
      setBookingDetails(updatedBookingDetails);

      const response = await bookingService.createBooking(
        updatedBookingDetails,
      );
      if (response?.success) {
        setBookingStatus("success");
        setBookingMessage(response.message || "Booking successful!");
      } else {
        setBookingStatus("error");
        setBookingMessage(
          response.message || "Booking failed. Please try again.",
        );
      }
    } catch (error) {
      setBookingStatus("error");
      setBookingMessage(
        error.message || "An unexpected error occurred. Please try again.",
      );
    }
  };
  if (bookingStatus === "success") {
    return <SuccessBooking message={bookingMessage} />;
  }
  if (bookingStatus === "error") {
    return <ErrorBooking message={bookingMessage} />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gray-100 p-20">
      <div className="min-h-screen w-full flex flex-col items-center justify-start bg-white rounded-lg shadow-lg p-10">
        <h1 className="text-2xl mb-4">
          You are about to book{" "}
          <span className="font-bold">
            {car?.make} {car?.model}
          </span>
        </h1>
        <p className="text-gray-600 mb-6 border-b border-gray-200 pb-6">
          Please add the details of your booking before proceeding.
        </p>
        <div className="w-full max-w-2xl bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">Pick-up Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={bookingDetails.pickupDate}
                  onChange={(e) =>
                    setBookingDetails({
                      ...bookingDetails,
                      pickupDate: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.pickupDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.pickupDate}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">
                  Drop-off Date
                </label>
                <input
                  type="date"
                  name="dropoffDate"
                  value={bookingDetails.dropoffDate}
                  onChange={(e) =>
                    setBookingDetails({
                      ...bookingDetails,
                      dropoffDate: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.dropoffDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.dropoffDate}
                  </p>
                )}
                {errors.dateRange && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.dateRange}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={bookingDetails.customerName}
                  onChange={(e) =>
                    setBookingDetails({
                      ...bookingDetails,
                      customerName: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
                {errors.customerName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.customerName}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">
                  Customer Email
                </label>
                <input
                  type="email"
                  name="customerEmail"
                  value={bookingDetails.customerEmail}
                  onChange={(e) =>
                    setBookingDetails({
                      ...bookingDetails,
                      customerEmail: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                {errors.customerEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.customerEmail}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">
                  Customer Phone Number
                </label>
                <input
                  type="tel"
                  name="customerPhone"
                  value={bookingDetails.customerPhone}
                  onChange={(e) =>
                    setBookingDetails({
                      ...bookingDetails,
                      customerPhone: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
                {errors.customerPhone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.customerPhone}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">Driver`s Age</label>
                <input
                  type="number"
                  name="driverAge"
                  value={bookingDetails.driverAge}
                  onChange={(e) =>
                    setBookingDetails({
                      ...bookingDetails,
                      driverAge: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter driver's age"
                />
                {errors.driverAge && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.driverAge}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                name="additionalNotes"
                value={bookingDetails.additionalNotes}
                onChange={(e) =>
                  setBookingDetails({
                    ...bookingDetails,
                    additionalNotes: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any special requests or information"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-full max-w-2xl bg-gray-50 p-6 rounded-lg shadow">
          <div className="w-full h-20 flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">Car Information</h2>
            <button
              onClick={toggleCarDetails}
              className="text-blue-600 hover:text-blue-800 transition"
            >
              {isViewingCarDetails ? "Hide Details" : "View Details"}
            </button>
          </div>
          {isViewingCarDetails && car && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p>
                <strong>Make:</strong> {car.make}
                <br />
                <strong>Model:</strong> {car.model}
                <br />
                <strong>Year:</strong> {car.year}
                <br />
                <strong>Price per Day:</strong> ${car.pricePerDay}
                <br />
                <strong>Description:</strong> {car.description}
                <br />
                <strong>Color:</strong> {car.color}
                <br />
                <strong>Fuel Type:</strong> {car.fuelType}
                <br />
                <strong>Transmission:</strong> {car.transmission}
                <br />
                <strong>Mileage:</strong> {car.mileage}
              </p>
            </div>
          )}
        </div>
        <div className="w-full max-w-2xl bg-gray-50 p-6 rounded-lg shadow">
          <div className="w-full h-20 flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
            <button
              onClick={toggleBillingDetails}
              className="text-blue-600 hover:text-blue-800 transition"
            >
              {isViewingBillingDetails ? "Hide Details" : "View Details"}
            </button>
          </div>
          {isViewingBillingDetails && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p>
                <strong>Number of Days:</strong> {billingDetails.numberOfDays}
                <br />
                <strong>Pricing:</strong> {billingDetails.Pricing}
              </p>
            </div>
          )}
        </div>
        <button
          onClick={handleBooking}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
