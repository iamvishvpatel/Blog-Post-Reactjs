import { type FC } from "react";
import { AppRoutes } from "./routes";
import { Toaster } from "react-hot-toast";

export const App: FC = () => {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
    </>
  )
};
