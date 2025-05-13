import React, { useState, useRef, useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { Navbar, Footer, Loader } from "./index.js";
import { gsap } from "gsap";

function App() {
  return (
    <>
      <div className="bg">
        <Navbar />
        <main className="2xl:px-[150px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
