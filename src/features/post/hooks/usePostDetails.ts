import { useEffect, useState } from "react";
import type { Post } from "../models";
import { getPostById } from "../../../api";

export const usePostDetails = (postId: number) => {
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const res = await getPostById(postId);
      setPost(res);
    } catch (err) {
      console.error("Failed to fetch post details:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return { post, loading, fetchPost };
};
