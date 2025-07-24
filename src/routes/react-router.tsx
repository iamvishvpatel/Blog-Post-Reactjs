import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { AppLayout } from "../components";
import { PostRoutes } from "../features/post/routes";
import { AuthRoute } from "../features/auth/routes";
import { ProfileRoutes } from "../features/profile/routes";
import { ProtectedRoute } from "../components/protected";
import { MyPostRoutes } from "../features/myPost/routes";
import { HomeRoutes } from "../features/home/routes";

const routes: RouteObject[] = [
  {
    path: "/auth/*",
    element: <AuthRoute />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
     {
        path: "/",
        element: <AppLayout />,
        children: [
          { path: "/", element: <HomeRoutes /> },
          { path: "/posts/*", element: <PostRoutes /> },
          { path: "/myposts/*", element: <MyPostRoutes /> },
          { path: "/profile/*", element: <ProfileRoutes /> },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
