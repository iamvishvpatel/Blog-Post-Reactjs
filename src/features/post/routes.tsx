import type { FC } from "react";
import { Route, Routes } from "react-router";
import { PostDetails } from "./components";

export const PostRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/:id" index element={<PostDetails />} />
    </Routes> 
  );
}; 
