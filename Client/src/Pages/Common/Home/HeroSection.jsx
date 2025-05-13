import React from "react";
import { Video11, Video12, Video13 } from "../../../assets/index.js";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../index.js";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full h-[calc(100vh-74px)] relative overflow-hidden bg-black">
      {/* Enhanced Background overlays */}
      <div className="absolute inset-0 cracked-texture w-full h-full z-10 opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-20 pointer-events-none"></div>

      {/* Video Background with enhanced styling */}
      <div className="absolute inset-0 flex">
        {[Video11, Video12, Video13].map((video, index) => (
          <div
            key={index}
            className="w-1/2 h-full relative overflow-hidden group"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-90 scale-105 transform transition-transform duration-[2s] group-hover:scale-110"
              aria-hidden="true"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div
              className={`absolute inset-0 ${
                index === 0 ? "bg-gradient-to-r" : "bg-gradient-to-l"
              } from-black/90 via-transparent to-black/50 backdrop-blur-[1.2px]`}
            ></div>
          </div>
        ))}
      </div>

      {/* Enhanced Main Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center w-full px-4 space-y-8">
        {/* Enhanced Subtitle */}
        <div className="overflow-hidden">
          <p className="text-sm md:text-xl text-white tracking-[0.3em] uppercase transform translate-y-0 transition-transform duration-500 hover:-translate-y-1">
            Where{" "}
            <span className="inline-block group">
              <span className="text-yellow-400 font-medium relative">
                shadows
                <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </span>{" "}
            become your signature
          </p>
        </div>

        {/* Enhanced Title */}
        <h1 className="text-4xl sm:text-7xl md:text-9xl font-bold tracking-tighter uppercase flex flex-wrap items-center justify-center gap-4">
          <span className="text-gray-100 font-serif relative hover:text-yellow-400 transition-colors duration-300">
            Thread
          </span>
          <span className="text-yellow-400 font-mono text-3xl sm:text-7xl md:text-8xl relative inline-block transform hover:rotate-12 transition-all duration-300">
            &amp;
          </span>
          <span className="text-gray-300 font-sans relative hover:text-yellow-400 transition-colors duration-300">
            Throne
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </h1>

        {/* Enhanced Description */}
        <div className="overflow-hidden">
          <p className="text-base md:text-xl text-white font-light transform hover:translate-y-0 transition-transform duration-500">
            Premium streetwear for those who{" "}
            <span className="text-yellow-400 relative inline-block group">
              dare to stand out
              <span className="absolute bottom-0 left-0 w-full h-px bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </p>
        </div>

        {/* Enhanced CTA Button */}
        <div className="mt-12">
          <Button
            onClick={() => console.log("bsdae")}
            className="relative px-8 py-4"
            children="  Shop Collection"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
