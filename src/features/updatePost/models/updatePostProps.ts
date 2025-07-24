import type { Post } from "../../post/models";

export interface updatedPostProps {
  postId: number;
  defaultValues: any;
  onClose: () => void;
  onPostUpdated: (updatedPost: Post) => void;
}