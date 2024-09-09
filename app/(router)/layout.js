"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { MenuIcon } from "lucide-react"; // import a hamburger icon

function layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="sm:w-64 hidden sm:block fixed">
        <SideNav />
      </div>

      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-20 sm:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      >
        <div className="w-64 bg-white h-full">
          <SideNav />
        </div>
      </div>

      <div className="ml-0 sm:ml-64">
        <div className="flex items-center p-4 bg-white">
          <div className="sm:hidden">
            <MenuIcon
              className="h-6 w-6 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <Header />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default layout;
