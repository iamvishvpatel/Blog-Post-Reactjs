import { Route, Routes } from "react-router";
import { LoginForm, SignupForm } from "./components";
import type { FC } from "react";
import { Toaster } from "react-hot-toast";

export const AuthRoute: FC = () => {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/signup" index element={<SignupForm />} />
        <Route path="/login" index element={<LoginForm />} />
      </Routes>
    </>
  );
}; 