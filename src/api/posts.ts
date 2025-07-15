import axios from "./axios";

export const getAllPosts = async () => {
  const response = await axios.get("/post/list")  
  return response.data;
};

export const createPost = (data: any) => {
  return axios.post("/post", data);
};
