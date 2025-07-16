import axiosInstance from "./axios";

export const getAllTags = async () => {
  const response = await axiosInstance.get("/tag")    
  return response.data; 
};