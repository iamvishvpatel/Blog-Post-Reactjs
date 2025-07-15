import type { FC } from "react";
import { Route, Routes } from "react-router";
import { MyPostList, PostDetails } from "./components";

export const PostRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<MyPostList />} />
      <Route path="/:id" index element={<PostDetails />} />
    </Routes> 
  );
}; 
