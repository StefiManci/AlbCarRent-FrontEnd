import axiosInstance from "../../../../../services/axiosInstance";

const carService = {
  addCar: async (carData) => {
    try {
      const response = await axiosInstance.post("/business/add-car", carData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getCars: async (ownedBy) => {
    try {
      const response = await axiosInstance.get(
        `/business/get-all-cars/${ownedBy}`
      );
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

  updateCar: async (car) => {
    try {
      const response = await axiosInstance.post(`/business/update-car`, car);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default carService;
