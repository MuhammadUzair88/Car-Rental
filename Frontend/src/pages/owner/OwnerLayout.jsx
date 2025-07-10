import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

const OwnerLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 md:ml-64 p-4 pt-20 md:pt-8 transition-all">
        <Outlet />
      </main>
    </div>
  );
};

export default OwnerLayout;
