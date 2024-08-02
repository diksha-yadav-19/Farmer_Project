// axios-config.js
import axios from "axios";

const baseURL = "http://localhost:2024"; // baseURL is case sensitive-don't change it

const publicAxios = axios.create({ baseURL });

const privateReq = axios.create({ baseURL });

privateReq.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { publicAxios, baseURL, privateReq };
