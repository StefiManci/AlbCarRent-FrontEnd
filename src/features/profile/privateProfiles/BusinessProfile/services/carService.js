import axiosInstance from "../../../../../services/axiosInstance";

const carService = {
  addCar: async (carData) => {
    try {
      //   const response = await axiosInstance.post("/bussiness/add-car", carData);
      //   return response.data;
      console.log("Car data submitted:", carData);
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default carService;
