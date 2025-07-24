export type Post = {
  id: number;
  title: string;
  content?: string ;
  createdAt: string;
  updatedAt: string;
  author: {
    id: number;
    username: string;
  };
  updatedBy?: {
    username: string;
  };
  category: {
    id: number;
    name: string;
  };
  tags: { id: number, name: string }[];
  comments: {
    id: number;
    content: string;
    user: {
      username: string;
    };
  }[];
};

export type PostCardProps = {
  post: Post;
  onDelete?: (id: number) => void;
  onPostUpdated:(updatedPost: Post) => void;
};