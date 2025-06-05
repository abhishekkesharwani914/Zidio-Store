import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Loader2 = () => {
  return (
    <div className="preloader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-72 h-72 mb-8 flex items-center justify-center">
        {/* Animated T-Shirt with Thread */}
        <div className="relative z-10">
          <svg
            className="w-32 h-32 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* T-Shirt outline */}
            <path
              d="M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Neckline */}
            <path
              d="M8 4V7C8 8.65685 9.34315 10 11 10H13C14.6569 10 16 8.65685 16 7V4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Sleeves */}
            <path
              d="M4 8L2 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M20 8L22 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Thread decoration */}
            <path
              className="thread-path"
              d="M12 12L12 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="1, 4"
            />
            <path
              className="thread-path"
              d="M8 14L16 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="1, 4"
            />
          </svg>
        </div>

        {/* Spinning thread circle */}
        <div className="thread-circle absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"></div>
      </div>

      <h1 className=" font-bold text-white mb-1 tracking-tight flex gap-3 items-center uppercase">
        <span className="text-yellow-400 text-6xl">Thread</span>
        <span className="text-white text-4xl">&</span>
        <span className="text-yellow-400 text-6xl">Throne</span>
      </h1>

      <p className="text-white mb-1 font-light">Elevating Everyday Wear</p>
      <p className="text-white font-medium">
        This is a simple ten word sentence for demonstration purposes.
      </p>
    </div>
  );
};

export default Loader2;
