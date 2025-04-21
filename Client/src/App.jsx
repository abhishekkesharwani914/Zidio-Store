import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./index.js";

function App() {
  return (
    <div className="bg min-h-screen w-full relative">
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
