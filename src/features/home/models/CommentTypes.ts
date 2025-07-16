export type Comment = {
  id: number;
  content: string;
  user: {
    username: string;
  };
};