import type { LoginFormData } from "../features/auth/validation/loginSchema";
import type { SignupFormData } from "../features/auth/validation/signupSchema";
import axiosInstance from "./axios";

export const signupUser = async (data: SignupFormData) => {
  const response = await axiosInstance.post("/auth/register", data);  
  return response.data;
};

export const loginUser = async (data: LoginFormData) => {
  const response = await axiosInstance.post("/auth/login", data);  
  return response.data;
}
