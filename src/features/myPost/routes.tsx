import type { FC } from "react";
import { Route, Routes } from "react-router";
import MyPostsPage from "./components/MyPostPage";
import CreatePostPage from "../createPost/pages/CreatePostPage";

export const MyPostRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<MyPostsPage />} />
      <Route path="/create-post" element={<CreatePostPage />} />
    </Routes> 
  );
}; 
