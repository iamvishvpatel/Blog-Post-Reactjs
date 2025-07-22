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

  

export const updatePostApi = async(postId: number, updatedData: any) =>{
  const user = JSON.parse(localStorage.getItem("user") || "{}")
  const authorId = user?.id;
  const finalData = {
    ...updatedData, authorId
  }
  const {data} = await axiosInstance.put(`/post/edit/${postId}`, finalData);
  return data;
}
