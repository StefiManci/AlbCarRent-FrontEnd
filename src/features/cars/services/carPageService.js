import axiosInstance from "../../../services/axiosInstance";

const carPageService = {
  getCarsWithPagination: async (request) => {
    try {
      const response = await axiosInstance.get("/car/cars", {
        params: request,
      });

      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getCarById: async (carId) => {
    try {
      const response = await axiosInstance.get(`/business/get-car/${carId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default carPageService;
