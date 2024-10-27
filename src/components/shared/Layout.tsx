import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div>{<Outlet />}</div>
    </div>
  );
};
