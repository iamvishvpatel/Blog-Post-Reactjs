import { type FC } from "react";
import { Outlet } from "react-router";
import { Navbar } from "../Navbar";


export const AppLayout: FC = () => {
  return (
    <div className="">
      {/* Header */}
      <Navbar/>
      <main className="">
        <Outlet />
      </main>
      {/* Footer */  }
    </div>
  );
};
