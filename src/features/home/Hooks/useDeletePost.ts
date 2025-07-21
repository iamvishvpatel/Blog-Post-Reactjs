import axiosInstance from "../../../api/axios";
import toast from "react-hot-toast";

export const useDeletePost = () => {
  const handleDelete = async (postId: number) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirm) return;

    try {
      const res = await axiosInstance.delete(`/post/delete/${postId}`, {
        method: "DELETE",
      });

      if (res.status === 404) throw new Error("Failed to delete");
      toast.success("Post deleted successfully");
      return true;
    } catch (err) {
      console.error(err);
      toast.error("You are Not Allowed to delete post of Others.");
      return false;
    }
  };
  return {handleDelete}
};
