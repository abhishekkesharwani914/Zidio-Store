import React from "react";
import {
  CategorySlider,
  Filter,
  ProductCard,
  MobileFilter,
  MobileProductSort,
} from "../../index.js";
import { IMAGE } from "../../assets/index.js";

function ProductPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      {/* Batman-Themed Hero Section */}
      <header className="relative h-[90vh] w-full overflow-hidden mb-2">
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-yellow-400/10 z-10"></div>

        {/* Bat-Signal Inspired Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[200%] h-[200%] bg-gradient-radial from-yellow-400/5 via-transparent to-transparent animate-pulse-slow"></div>
        </div>

        {/* Background Image */}
        <img
          src={IMAGE}
          alt="Batman Collection"
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
        />

        {/* Bat Particle Effects */}
        <div className="absolute inset-0 z-10 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background:
                  'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDIgQzYuNDgsMiAyLDYuNDggMiwxMiBDMiwxNy41MiA2LjQ4LDIyIDEyLDIyIEMxNy41MiwyMiAyMiwxNy41MiAyMiwxMiBDMjIsNi40OCAxNy41MiwyIDEyLDIgTTEyLDMuNDIgQzE2Ljg2LDMuNDIgMjAuNTgsNy4xNCAyMC41OCwxMiBDMjAuNTgsMTYuODYgMTYuODYsMjAuNTggMTIsMjAuNTggQzcuMTQsMjAuNTggMy40MiwxNi44NiAzLjQyLDEyIEMzLjQyLDcuMTQgNy4xNCwzLjQyIDEyLDMuNDIgTTYuNSwxMS45OSBDNi41LDkuMjQgOC42OSw2Ljg3IDExLjUsNi41IEwxMS41LDQuMjUgQzcuNTMsNC43MyA0LjUsOC4xMSA0LjUsMTEuOTkgQzQuNSwxNS44NyA3LjUzLDE5LjI1IDExLjUsMTkuNzQgTDExLjUsMTcuNDkgQzguNjksMTcuMTIgNi41LDE0Ljc0IDYuNSwxMS45OSBNMTcuNSwxMS45OSBDMTcuNSwxNC43NCAxNS4zMSwxNy4xMiAxMi41LDE3LjQ5IEwxMi41LDE5Ljc0IEMxNi40NywxOS4yNSAxOS41LDE1Ljg3IDE5LjUsMTEuOTkgQzE5LjUsOC4xMSAxNi40Nyw0LjczIDEyLjUsNC4yNSBMMTIuNSw2LjUgQzE1LjMxLDYuODcgMTcuNSw5LjI0IDE3LjUsMTEuOTkiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                animation: `float ${Math.random() * 15 + 15}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full px-6 text-center group">
          <div className="max-w-4xl space-y-8 transform transition-all duration-700 group-hover:scale-[1.01]">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
              <span className="inline-block bg-gradient-to-r from-yellow-400 via-gray-300 to-yellow-400 bg-clip-text text-transparent">
                DARK KNIGHT
              </span>
              <br />
              <span className="text-white font-light tracking-widest">
                COLLECTION
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto tracking-wide drop-shadow-md">
              Gear up with the official Batman merchandise - Where shadows meet
              style
            </p>
          </div>
        </div>

        {/* Scrolling Indicator - Bat Symbol */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow">
          <div className="w-10 h-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDIgQzYuNDgsMiAyLDYuNDggMiwxMiBDMiwxNy41MiA2LjQ4LDIyIDEyLDIyIEMxNy41MiwyMiAyMiwxNy41MiAyMiwxMiBDMjIsNi40OCAxNy41MiwyIDEyLDIgTTEyLDMuNDIgQzE2Ljg2LDMuNDIgMjAuNTgsNy4xNCAyMC41OCwxMiBDMjAuNTgsMTYuODYgMTYuODYsMjAuNTggMTIsMjAuNTggQzcuMTQsMjAuNTggMy40MiwxNi44NiAzLjQyLDEyIEMzLjQyLDcuMTQgNy4xNCwzLjQyIDEyLDMuNDIgTTYuNSwxMS45OSBDNi41LDkuMjQgOC42OSw2Ljg3IDExLjUsNi41IEwxMS41LDQuMjUgQzcuNTMsNC43MyA0LjUsOC4xMSA0LjUsMTEuOTkgQzQuNSwxNS44NyA3LjUzLDE5LjI1IDExLjUsMTkuNzQgTDExLjUsMTcuNDkgQzguNjksMTcuMTIgNi41LDE0Ljc0IDYuNSwxMS45OSBNMTcuNSwxMS45OSBDMTcuNSwxNC43NCAxNS4zMSwxNy4xMiAxMi41LDE3LjQ5IEwxMi41LDE5Ljc0IEMxNi40NywxOS4yNSAxOS41LDE1Ljg3IDE5LjUsMTEuOTkgQzE5LjUsOC4xMSAxNi40Nyw0LjczIDEyLjUsNC4yNSBMMTIuNSw2LjUgQzE1LjMxLDYuODcgMTcuNSw5LjI0IDE3LjUsMTEuOTkiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] bg-contain bg-no-repeat"></div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="pb-16 w-full grid lg:grid-cols-5 grid-cols-1 min-h-screen relative">
        {/* Filter Sidebar - Desktop */}
        <div className="col-span-1 lg:block hidden ">
          <div className="lg:sticky lg:top-[60px] left-0 lg:self-start">
            <div className="h-[calc(100vh-60px)] overflow-y-auto scrollbar-hide overscroll-contain">
              <Filter />
            </div>
          </div>
        </div>

        {/* Mobile Filter - Sticky Header */}
        <div className="lg:hidden block">
          <MobileFilter />
        </div>

        {/* Main Content */}
        <main className="col-span-4 p-6 lg:p-8 overflow-x-hidden">
          {/* Header Section */}
          <div className="mb-12 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-yellow-400 text-sm font-medium uppercase tracking-wider">
                    GOTHAM'S FINEST
                  </span>
                  <div className="w-12 h-px bg-gradient-to-r from-yellow-400 to-transparent"></div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter">
                  <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
                    BATMAN MERCH
                  </span>
                </h1>
                <p className="text-gray-400 mt-4 text-lg max-w-2xl leading-relaxed">
                  Official DC Comics merchandise - Become the night with our
                  premium collection
                </p>
              </div>
              <div className="lg:block hidden">
                <div className="flex items-center gap-3 bg-black/50 border border-yellow-400/30 rounded-full px-4 py-2 hover:border-yellow-400/50 transition-colors">
                  <span className="text-yellow-400 text-sm">SORT BY:</span>
                  <select className="bg-transparent text-white text-sm focus:outline-none appearance-none pr-6">
                    <option className="bg-black">FEATURED</option>
                    <option className="bg-black">NEWEST</option>
                    <option className="bg-black">PRICE: LOW TO HIGH</option>
                    <option className="bg-black">PRICE: HIGH TO LOW</option>
                  </select>
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Category Slider - Batman Themes */}
          <div className="mb-16">
            <CategorySlider />
          </div>

          {/* Product Grid Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <span>BAT-ARANG YOUR STYLE</span>
              <span className="text-sm font-normal bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/20">
                40 ITEMS
              </span>
            </h2>
            <div className="text-gray-400 text-sm hidden sm:block">
              SHOWING <span className="text-yellow-400 font-medium">1-12</span>{" "}
              OF <span className="text-yellow-400 font-medium">40</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 w-full relative">
            {[...Array(12)].map((_, idx) => (
              <ProductCard />
            ))}
          </div>

          {/* Pagination - Batman Theme */}
          <div className="mt-20 flex justify-center">
            <nav className="flex items-center gap-1">
              <button className="px-5 py-3 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-black/50 transition-all flex items-center gap-2 border border-gray-800 hover:border-yellow-400/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>PREVIOUS</span>
              </button>

              <div className="flex items-center gap-1 mx-2">
                {[1, 2, 3, null, 8, 9, 10].map((page, i) =>
                  page === null ? (
                    <span key={i} className="px-4 py-2 text-gray-500">
                      ...
                    </span>
                  ) : (
                    <button
                      key={i}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                        page === 1
                          ? "bg-yellow-400 text-black font-bold shadow-lg"
                          : "text-gray-400 hover:text-yellow-400 hover:bg-black/50 border border-gray-800 hover:border-yellow-400/30"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button className="px-5 py-3 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-black/50 transition-all flex items-center gap-2 border border-gray-800 hover:border-yellow-400/30">
                <span>NEXT</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </main>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default ProductPage;
