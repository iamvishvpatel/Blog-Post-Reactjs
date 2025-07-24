import type { Post } from "./postType";

export interface PostDetailProps{
    post: Post[];
  refreshPost: () => void;
}