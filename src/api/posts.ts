import axiosInstance from "./axios";

export const getAllPosts = async () => {
  const response = await axiosInstance.get("/post/list")  
  return response.data;
};

export const getPostById = async (id: string | number) => {
  const response = await axiosInstance.get(`/post/${id}`)
  return response.data
}

export const searchPostsByTagId = async (tagId: number) => {  
  const response = await axiosInstance.post("/post/search", {tagIds:[tagId]})  
  return response.data
}
export const createPost = (data: any) => {
  return axiosInstance.post("/post/create", data);
};
