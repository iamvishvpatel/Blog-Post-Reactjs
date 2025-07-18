export type Post = {
  id: number;
  title: string;
  content?: string | null;
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
    name: string;
  };
  tags: { name: string }[];
  comments: {
    id: number;
    content: string;
    user: {
      username: string;
    };
  }[];
};