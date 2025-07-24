import { useState } from "react";
import toast from "react-hot-toast";
import { updatePostApi } from "../../../api";
import { usePostUpdateContext } from "../../../context";

export const useUpdatePost = () => {
  const [loading, setLoading] = useState(false);
  const { postId, onPostUpdated , onClose} = usePostUpdateContext();
  
  const handleUpdatePost = async (formData: any) => {
    setLoading(true);
    try {
      const { updated } = await updatePostApi(postId, formData);
      toast.success("Post updated successfully!");
      onPostUpdated(updated);
      console.log("fetch done");

      onClose();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return { handleUpdatePost, loading };
};
