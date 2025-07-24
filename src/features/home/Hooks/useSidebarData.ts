import { useEffect, useState } from "react";
import {
  getAllComment,
  getAllPosts,
  getAllTags,
  searchPostsByCategoryId,
  searchPostsByTagId,
  type Tag,
} from "../../../api";
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

  const fetchPosts = async () => {
    try {
      const [postsRes, tagsRes, commentsRes] = await Promise.all([
        getAllPosts(),
        getAllTags(),
        getAllComment(),
      ]);
      setPosts(postsRes.data);
      setTags(tagsRes);
      setRecentComments(commentsRes);
    } catch (err) {
      console.error("Error loading sidebar data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
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
