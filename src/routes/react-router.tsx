import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { AppLayout } from "../components";
import { PostRoutes } from "../features/post/routes";
import { AuthRoute } from "../features/auth/routes";
import { ProfileRoutes } from "../features/profile/routes";
import { ProtectedRoute } from "../components/protected";

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
          { path: "/posts/*", element: <PostRoutes /> },
          { path: "/profile/*", element: <ProfileRoutes /> },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
