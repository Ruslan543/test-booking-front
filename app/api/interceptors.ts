import axios from "axios";

import { getContentType } from "./api.helper";
import { API_URL } from "@/configs/api.config";

export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
});

export const instance = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default instance;
