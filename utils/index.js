import axios from "axios";

export const identity = (val) => val;

export const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});
