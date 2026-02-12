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
        `/business/get-all-cars/${ownedBy}`,
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

  deleteCar: async (carId) => {
    try {
      const response = await axiosInstance.delete(
        `/business/delete-car/${carId}`,
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  uploadCarImage: async (carId, businessId, imageFile) => {
    try {
      const formData = new FormData();
      formData.append("FormFile", imageFile);
      formData.append("CarId", carId);
      formData.append("BusinessId", businessId);

      console.log(
        "Uploading image with data:",
        formData.get("FormFile"),
        formData.get("CarId"),
        formData.get("BusinessId"),
      );

      const response = await axiosInstance.post("/upload/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getCarImages: async (carId, businessId) => {
    try {
      console.log(
        `Fetching images for carId: ${carId}, businessId: ${businessId}`,
      );
      const response = await axiosInstance.get(
        `/car/images/car/${carId}/business/${businessId}`,
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default carService;
