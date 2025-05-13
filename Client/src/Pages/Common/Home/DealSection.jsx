import React from "react";
import { Button } from "../../../index.js";
import { useNavigate } from "react-router-dom";

function DealSection() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/shop");
  };
  return (
    <div className="min-h-screen text-white px-4 sm:px-7 py-12 relative overflow-hidden bg-black">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-12 relative z-10">
        <div className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase leading-tight text-center flex flex-wrap items-center justify-center gap-3">
          <h1 className="bg-gradient-to-r from-yellow-400 via-gray-300 to-yellow-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%]">
            Dark Deals
          </h1>
          <span className="relative">
            Time Ticks
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400/50 animate-pulse"></div>
          </span>
          <span className="inline-block animate-pulse hover:animate-spin transition-transform">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </span>
        </div>
        <div className="flex items-center relative justify-center">
          <p className="text-base md:text-lg lg:text-xl font-medium text-gray-300 text-center max-w-2xl">
            Don't miss our biggest sale of the season! Limited-time offers on
            your favorite styles at
            <span className="text-amber-400 font-bold relative">
              <span className="relative z-10">unbeatable prices</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-amber-400/30 animate-pulse"></span>
            </span>
            .
            <span className="block text-amber-100 mt-2">
              {/* <CountdownTimer endDate="2024-12-31" /> */}
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 grid-rows-8 gap-4 h-screen">
        <div className="col-span-12 row-span-4">
          <img src="https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="" srcset="" />
        </div>
        <div className="col-span-6 row-span-4 row-start-5">
          <img src="https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="" srcset="" />
        </div>
        <div className="col-span-6 row-span-4 col-start-7 row-start-5">
          <img src="https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default DealSection;
