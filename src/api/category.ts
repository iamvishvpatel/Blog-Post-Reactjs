import type { Category } from "../features/home/models"
import axiosInstance from "./axios"

export const getAllCategory = async () => {
  const response = await axiosInstance.get<Category[]>("/category")
  return response.data
}