export interface PostInterface {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  category: {
    id: number;
    name: string;
  };
  tags: {
    id: number;
    name: string;
  }[];
  author: {
    id: number;
    username: string;
  };
}
