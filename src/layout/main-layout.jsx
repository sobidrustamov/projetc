import React from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export const MainLayout = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <Sidebar />
      <main>MainLayout</main>
    </div>
  );
};
