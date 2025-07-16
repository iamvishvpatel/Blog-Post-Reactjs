import { useEffect, useState } from "react";
import { getAllTags } from "../../../api/tags";
import { getAllPosts, searchPostsByTagId } from "../../../api";
import { getAllComment } from "../../../api/comment";

export const useSidebarData = () => {
  const [tags, setTags] = useState([]);
  const [posts, setPosts] = useState([]);
  const [recentComments, setRecentComments] = useState([]);
  const [selectedTagId, setSelectedTagId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchByTag = (tagId: number) => {
    searchPostsByTagId(tagId).then((res) => setPosts(res.items));
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

  return { posts, tags, recentComments, selectedTagId, setSelectedTagId,
    fetchPosts, fetchByTag, loading };
};
