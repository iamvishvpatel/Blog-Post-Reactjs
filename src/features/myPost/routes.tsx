import type { FC } from "react";
import { Route, Routes } from "react-router";
import MyPostsPage from "./components/MyPostPage";

export const MyPostRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<MyPostsPage />} />
    </Routes> 
  );
}; 
