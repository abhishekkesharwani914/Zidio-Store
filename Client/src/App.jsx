import React, { useState, useRef, useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { Navbar, Footer, Loader } from "./index.js";
import { gsap } from "gsap";
import { ToastContainer, Bounce } from "react-toastify";

function App() {
  return (
    <>
      <div className="bg">
        <Navbar />
        <main className="2xl:px-[150px]">
          <Outlet />
        </main>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
    </>
  );
}

export default App;
