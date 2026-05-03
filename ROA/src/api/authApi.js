import axiosInstance from "./axiosInstance";
import { clearAuthData } from "../utils/storage";

export const signupUser = async (userData) => {
  const response = await axiosInstance.post("/auth/signup", userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};

export const logoutUser = () => {
  clearAuthData();
};
