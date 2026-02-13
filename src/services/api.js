import axios from "axios";

const API_BASE = `${process.env.REACT_APP_API_URL}/api`;

console.log("API URL:", API_BASE);

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
});

// ===============================
// REQUEST INTERCEPTOR (JWT ONLY)
// ===============================
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("JWT_TOKEN");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ===============================
// RESPONSE INTERCEPTOR (UNCHANGED)
// ===============================
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("JWT expired or unauthorized. Auto logout triggered.");

      localStorage.removeItem("JWT_TOKEN");
      localStorage.removeItem("USER");
      localStorage.removeItem("IS_ADMIN");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
