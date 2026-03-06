import { useState, useEffect } from "react";
import bookingService from "../../../../booking/services/BookingService";

export default function ReservationsManager() {
  const [bookings, setBookings] = useState([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("PENDING");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const ownerId = localStorage.getItem("userId");
        const data = await bookingService.getUserBookings(ownerId, status);

        console.log("Fetched bookings:", data);
        setBookings(data.bookings || []);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, [status]);

  const handleAction = (action) => {
    setOpen(false);

    if (action === "Pending") {
      setStatus("PENDING");
    }

    if (action === "Accepted") {
      setStatus("ACCEPTED");
    }

    if (action === "Rejected") {
      setStatus("REJECTED");
    }
  };

  return (
    <>
      <div className="p-4  w-full flex flex-col items-center">
        <div className="w-full max-w-4xl flex items-center justify-between mb-6 relative">
          <h2 className="text-2xl font-bold mb-4 pb-2 text-center">
            Booking Manager
          </h2>
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className={`bg-blue-500 text-white mb-4 px-4 py-2 rounded transition-colors ${status === "PENDING" ? "bg-blue-600  hover:bg-blue-800" : ""} ${status === "ACCEPTED" ? "bg-green-600 hover:bg-green-800" : ""} ${status === "REJECTED" ? "bg-red-600 hover:bg-red-800" : ""}`}
            >
              {status} ▾
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-50 bg-white border rounded-lg shadow-lg z-50">
                <button
                  onClick={() => handleAction("Pending")}
                  className="block w-full text-center px-4 py-2 hover:bg-gray-100"
                >
                  Pending
                </button>

                <button
                  onClick={() => handleAction("Accepted")}
                  className="block w-full text-center px-4 py-2 hover:bg-gray-100"
                >
                  Accepted
                </button>

                <button
                  onClick={() => handleAction("Rejected")}
                  className="block w-full text-center px-4 py-2 hover:bg-gray-100"
                >
                  Rejected
                </button>
              </div>
            )}
          </div>
        </div>
        {bookings.length === 0 ? (
          <p className="text-gray-500 mt-4">No pending reservations found.</p>
        ) : (
          <div className="w-full bg-white rounded shadow p-4 overflow-y-auto max-h-screen">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="border-b last:border-b-0 border-gray-200 py-4"
              >
                <h3 className="text-lg font-semibold mb-2">
                  Booking ID: {booking.id}
                </h3>
                <p className="text-gray-700 mb-1">
                  Customer: {booking.customerName} ({booking.customerEmail})
                </p>
                <p className="text-gray-700 mb-1">
                  Phone: {booking.customerPhone}
                </p>
                <p className="text-gray-700 mb-1">
                  Driver Age: {booking.driverAge}
                </p>
                <p className="text-gray-700 mb-1">
                  Additional Notes: {booking.additionalNotes || "None"}
                </p>
                <p className="text-gray-700 mb-1">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      booking.status === "PENDING"
                        ? "text-blue-600"
                        : booking.status === "ACCEPTED"
                          ? "text-green-600"
                          : "text-red-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </p>
                <div className="flex">
                  {booking.status === "PENDING" && (
                    <>
                      <button
                        onClick={() =>
                          bookingService.updateBookingStatus(
                            booking.id,
                            "ACCEPTED",
                          )
                        }
                        className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() =>
                          bookingService.updateBookingStatus(
                            booking.id,
                            "REJECTED",
                          )
                        }
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
