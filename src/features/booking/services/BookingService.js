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
  updateBookingStatus: async (bookingId, newStatus) => {
    try {
      console.log(`Updating booking ${bookingId} to status: ${newStatus}`);
      const response = await axiosInstance.post(`/booking/change-status`, {
        status: newStatus,
        bookingId: bookingId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating booking status:", error);
      throw error;
    }
  },
};

export default bookingService;
