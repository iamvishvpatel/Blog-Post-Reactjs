import type { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./react-router";
import { Provider } from "react-redux";
import { AuthProvider } from "../context";
import { store } from "../store";

export const AppRoutes: FC = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  );
};
