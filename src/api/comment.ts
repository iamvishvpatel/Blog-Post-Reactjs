import axios from "axios";



export const getAllComment = async () => {
  const response = await axios.get("http://localhost:3000/comment")  
  return response.data;
};