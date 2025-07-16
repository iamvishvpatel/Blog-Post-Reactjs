import axiosInstance from "./axios"

export const getAllCategory = async () => {
  const response = await axiosInstance.get("/category")
  return response.data
}