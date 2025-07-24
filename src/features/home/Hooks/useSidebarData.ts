import { useEffect, useState } from "react";
import { getAllComment, getAllPosts, getAllTags, searchPostsByCategoryId, searchPostsByTagId, type Tag } from "../../../api";
import { type Post } from "../../post/models";

export const useSidebarData = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [recentComments, setRecentComments] = useState([]);
  const [selectedTagId, setSelectedTagId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchByTag = (tagId: number) => {
    searchPostsByTagId(tagId).then((res) => setPosts(res.items));
  };

  const fetchByCategory = (id: number) => {
    searchPostsByCategoryId(id)
      .then((res) => setPosts(res.items))
      .catch((err) => console.error("Filter by category failed", err));
  };

  const fetchPosts = () => {
    getAllPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Failed to load posts", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPosts();
    getAllTags()
      .then((res) => setTags(res))
      .catch((err) => console.error("Failed to load tags", err))
      .finally(() => setLoading(false));

    getAllComment()
      .then((res) => setRecentComments(res))
      .catch((err) => console.error("Failed to load comments", err))
      .finally(() => setLoading(false));
  }, []);

  return {
    posts,
    tags,
    setPosts,
    recentComments,
    selectedTagId,
    setSelectedTagId,
    fetchPosts,
    fetchByCategory,
    fetchByTag,
    loading,
  };
};
