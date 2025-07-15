import { type FC } from "react";
import { Outlet } from "react-router";
import { HomeRoutes } from "../../features/home/routes";
import { Navbar } from "../Navbar";


export const AppLayout: FC = () => {
  return (
    <div className="">
      {/* Header */}
      <Navbar/>
      <main className="">
        <Outlet />
        <HomeRoutes/>
      </main>
      {/* Footer */}
    </div>
  );
};
