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
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/posts/*",
        element: <PostRoutes />, // We can also manage all routes here rather than create specific route file
      },
      {
        path: "/profile/*",
        element: <ProfileRoutes />, // We can also manage all routes here rather than create specific route file
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
