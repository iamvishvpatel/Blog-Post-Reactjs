import { useState } from "react";
import type { Post } from "../../post/models";

export const useUpdatePostModal = () => {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [isEditOpen, setIsEditOpen] = useState(false);

  const openEditModal = (post: Post) => {
    setSelectedPost(post)
    setIsEditOpen(true)
  }

  const closeEditModal = () => {
    setSelectedPost(null);
    setIsEditOpen(false);
  };

  return { selectedPost, isEditOpen, openEditModal, closeEditModal,
  };
}
