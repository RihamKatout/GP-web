import axios from "axios";

export const clientAxios = axios.create({
  baseURL: "http://localhost:1218/api",
  headers: {
    "Content-Type": "application/json",
  },
});

clientAxios.interceptors.request.use(
  (config) => {
    if (config.url?.includes("login") || config.url?.includes("register")) {
      return config;
    }
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
