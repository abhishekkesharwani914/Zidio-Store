import React, { useState } from "react";
import { ProductCard } from "../../../index.js";
const TrendingProduct = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Collection",
      image: "product1.jpg",
      category: "New Arrivals",
    },
    // ...add more products
  ];

  return (
    <section className="relative overflow-hidden px-4">
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <span className="text-yellow-400 uppercase tracking-[0.3em] text-xs sm:text-sm font-medium">
              Limited Edition
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>

          {/* Title Section */}
          <div className="relative">
            {/* Background Text */}
            <div
              className="absolute -top-2 sm:-top-3.5 lg:-top-9 left-1/2 transform -translate-x-1/2 
                        text-5xl sm:text-8xl lg:text-[160px] font-bold uppercase opacity-5 
                        pointer-events-none select-none bg-clip-text text-transparent 
                        bg-gradient-to-b from-white via-white to-transparent whitespace-nowrap tracking-wider">
              Collection
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-[3.55rem] lg:text-8xl font-bold uppercase relative tracking-tighter">
              <span
                className="bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-400 
                         bg-clip-text text-transparent animate-gradient-shift bg-[length:300%]">
                Trending Product
              </span>
            </h1>
          </div>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 mb-12 px-10">
          {[
            {
              src: "https://i.pinimg.com/1200x/d4/b1/c2/d4b1c25a53f59f6a0e118182e90515cd.jpg",
              title: "Deconstructed Logo Tee",
              price: "$34.99",
              badge: "🔥 Hot",
            },
            {
              src: "https://i.pinimg.com/736x/2d/10/53/2d1053f2305782e5d00d870aa18b6000.jpg",
              title: "Abstract Brushstroke",
              price: "$39.99",
              badge: "✨ New",
            },
            {
              src: "https://i.pinimg.com/736x/62/6c/09/626c09aa50722981c1d69673d36a2211.jpg",
              title: "Retro Sunwash Tee",
              price: "$29.99",
              badge: "⚡ Flash Sale",
            },
            {
              src: "https://i.pinimg.com/736x/09/20/d8/0920d80a8878e25d1cde0238140470e9.jpg",
              title: "Oversized Pocket Tee",
              price: "$42.99",
              badge: "🏆 Bestseller",
            },
            {
              src: "https://i.pinimg.com/1200x/d4/b1/c2/d4b1c25a53f59f6a0e118182e90515cd.jpg",
              title: "Deconstructed Logo Tee",
              price: "$34.99",
              badge: "🔥 Hot",
            },
            {
              src: "https://i.pinimg.com/736x/2d/10/53/2d1053f2305782e5d00d870aa18b6000.jpg",
              title: "Abstract Brushstroke",
              price: "$39.99",
              badge: "✨ New",
            },
            {
              src: "https://i.pinimg.com/736x/62/6c/09/626c09aa50722981c1d69673d36a2211.jpg",
              title: "Retro Sunwash Tee",
              price: "$29.99",
              badge: "⚡ Flash Sale",
            },
            {
              src: "https://i.pinimg.com/736x/09/20/d8/0920d80a8878e25d1cde0238140470e9.jpg",
              title: "Oversized Pocket Tee",
              price: "$42.99",
              badge: "🏆 Bestseller",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-neutral-800 hover:bg-neutral-700 transition-all duration-500">
              {/* Product Image */}
              <div className="relative aspect-[480/660] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="relative inline-flex items-center px-8 py-3 overflow-hidden text-sm font-medium border-2 border-yellow-400 rounded-full group text-yellow-400 hover:text-black">
            <span className="absolute left-0 block w-full h-0 transition-all bg-yellow-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="relative flex items-center gap-2">
              View Full Collection
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-shift {
          animation: gradient-shift 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default TrendingProduct;

// Icon components (add these somewhere in your code)
function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}
