import React, { useRef, useEffect } from "react";
import { Video1, Video2 } from "../assets/index.js";
import { Button } from "../index.js";
import gsap from "gsap";

function HeroSection() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="w-full h-[calc(100vh)] relative overflow-hidden">
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

      {/* Background Videos */}
      <div className="w-full h-full flex items-center justify-center">
        <video
          src={Video1}
          autoPlay
          muted
          loop
          className="w-2/4 h-full object-cover"
          aria-label="Fashion video background 1"
        ></video>
        <video
          src={Video2}
          autoPlay
          muted
          loop
          className="w-2/4 h-full object-cover"
          aria-label="Fashion video background 2"
        ></video>
      </div>

      {/* Centered Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 text-center w-full px-4">
        {/* Brand Name as Heading */}
        <div className="flex justify-center mb-4">
          <span className="text-3xl md:text-4xl font-extrabold text-white tracking-widest drop-shadow-lg uppercase">
            DUKE & VILLAN
          </span>
        </div>
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.85)] tracking-wide mb-4"
        >
          Elevate Your Style
        </h1>
        <p
          ref={subheadingRef}
          className="text-lg md:text-2xl text-gray-200 font-medium drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] mb-8"
        >
          Discover the latest trends in fashion with Duke & Villan
        </p>
        <Button children="Shop Now" ref={ctaRef} className={"w-40"} />
      </div>
    </div>
  );
}

export default HeroSection;
