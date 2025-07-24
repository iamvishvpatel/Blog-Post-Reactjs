import { createContext, useContext } from 'react'
import type { Post } from '../features/post/models';

interface PostUpdateContextType {
  postId: number;
  postData: Post;
  onPostUpdated: (updatedPost: Post) => void;
  onClose: () => void;
  isOpen: boolean;
}

export const PostUpdateContext = createContext<PostUpdateContextType|null>(null)

export const usePostUpdateContext = () => {
  const context = useContext(PostUpdateContext);
  if (!context) throw new Error("PostUpdateContext not found");
  return context;
};