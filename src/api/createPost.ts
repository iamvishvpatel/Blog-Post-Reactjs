import type { PostFromData } from "../features/createPost/validation/createPost";
import axiosInstance from "./axios";

export const createPost = async (data: PostFromData)=>{
    const response = await axiosInstance.post("/posts", data)
    return response.data
}