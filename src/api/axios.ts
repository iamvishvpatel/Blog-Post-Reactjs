import axios from "axios";
import { VITE_API_URL } from "../config/env";

const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error("REQUEST ERROR:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (Response) => Response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized. Redirecting to login.");
    }

    if (error.response?.status === 500) {
      console.error("Server error!");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
