import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor (optional: to add token dynamically)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from local storage or another source
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional: for error handling)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// PrivateHttp instance for authenticated requests
const PrivateHttp = axios.create({
  baseURL: "http://localhost:8081", // Same base URL
  headers: {
    "Content-Type": "application/json",
  },
});

PrivateHttp.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

PrivateHttp.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Private API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Export both axiosInstance and PrivateHttp
export const http = axiosInstance;
export const privateHttp = PrivateHttp;
export default axiosInstance;
