import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MinimalLayout = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default MinimalLayout;
