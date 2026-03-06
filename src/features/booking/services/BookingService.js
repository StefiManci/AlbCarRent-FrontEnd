import axiosInstance from "../../../services/axiosInstance";

const bookingService = {
  createBooking: async (newBooking) => {
    try {
      console.log("Creating booking with details:", newBooking);
      const response = await axiosInstance.post("/booking/book", newBooking);
      return response.data;
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  },
  getUserBookings: async (ownerId, status) => {
    try {
      const response = await axiosInstance.get(`/booking/bookings/${ownerId}`, {
        params: { status },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching user bookings:", error);
      throw error;
    }
  },
};

export default bookingService;
