import axiosInstance from "../../../services/axiosInstance";

const authService = {
  login: async (credentials) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  register: async (userInfo) => {
    try {
      const response = await axiosInstance.post("/auth/register", userInfo);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default authService;
