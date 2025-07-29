import toast from "react-hot-toast";
import axiosInstance from "./axios";

export const getAllComment = async () => {
  const response = await axiosInstance.get("/comment")  
  return response.data;
};

export const searchPostsByCategoryId = async (categoryId: number) =>{
  const response = await axiosInstance.post("/post/search", { categoryId: categoryId });
  return response.data
}

export const searchPostWithBoth = async (tagId:number, categoryId: number) =>{
  const response = await axiosInstance.post("/post/search", { categoryId: categoryId, tagIds:[tagId] });
  // console.log(response, "fromboth ");  
  return response.data
}

export const addCommentToPost = async (postId: number, content: string) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user?.id) toast.error("User not found");
  const res = await axiosInstance.post("/comment", {
    content,
    userId: user.id,
    postId,
  });

  return res.data;
};