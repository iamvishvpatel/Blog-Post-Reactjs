import axiosInstance from "./axios";
export interface Tag {
  id: number;
  name: string;
}
export const getAllTags = async () => {
  const response = await axiosInstance.get<Tag[]>("/tag");
  return response.data;
};
