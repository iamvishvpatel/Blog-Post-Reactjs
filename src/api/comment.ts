import axiosInstance from "./axios";

export const getAllComment = async () => {
  const response = await axiosInstance.get("/comment")  
  return response.data;
};

export const searchPostsByCategoryId = async (categoryId: number) =>{
  const response = await axiosInstance.post("/post/search", { categoryId: categoryId });
  return response.data
}