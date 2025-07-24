import { useState } from "react";
import toast from "react-hot-toast";
import { updatePostApi } from "../../../api";

export const useUpdatePost = () => {
  const [loading, setLoading] = useState(false);
  const handleUpdatePost = async (postId: number, formData: any, onPostUpdated:any, onSuccess: () => void, ) => {
    setLoading(true);
    try {
      const {updated} = await updatePostApi(postId, formData);
      toast.success("Post updated successfully!");
      onPostUpdated(updated)
      console.log("fetch done");
      
      onSuccess();
    } catch (error: any) {
      // console.log(error, "hello");
      
      toast.error(error?.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return { handleUpdatePost, loading };
};
