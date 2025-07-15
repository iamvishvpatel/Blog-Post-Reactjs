import type { FC } from "react";
import { Route, Routes } from "react-router";
import { PostList } from "./components";

export const PostRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<PostList />} />
      <Route path="/post/:id" index element={<PostList />} />
    </Routes> 
  );
}; 
