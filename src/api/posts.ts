import axios from "./axios";

export const getAllPosts = async () => {
  const response = await axios.get("http://localhost:3000/post/list")  
  return response.data;
};

export const getPostById = async (id: string | number) => {
  const response = await axios.get(`/post/${id}`)
  return response.data
}

export const searchPostsByTagId = async (tagId: number) => {  
  const response = await axios.post("http://localhost:3000/post/search", {tagIds:[tagId]})  
  return response.data
}
export const createPost = (data: any) => {
  return axios.post("/post", data);
};
