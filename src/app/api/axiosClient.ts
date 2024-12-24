import axios from "axios";

export const clientAxios = axios.create({
  baseURL: "http://localhost:1218/api",
  headers: {
    "Content-Type": "application/json",
  },
});

