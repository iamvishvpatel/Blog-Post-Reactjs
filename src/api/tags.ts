import axios from "axios";

export const getAllTags = async () => {
  const response = await axios.get("http://localhost:3000/tag")    
  return response.data; 
};