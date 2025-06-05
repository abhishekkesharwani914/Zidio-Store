import React from "react";
import {
  CategorySlider,
  Filter,
  ProductCard,
  MobileFilter,
  MobileProductSort,
} from "../../index.js";
import { IMAGE } from "../../assets/index.js";
import { useState } from "react";
import { useEffect } from "react";
import { shopItems } from "../../api/ShopApi.js";
import Loader2 from "../../Component/Loader2.jsx";

function ProductPage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const [data, error] = await shopItems();
      if (data) {
        setIsLoading(false);
        setItems(data);
      }
    };
    fetchItems();
  }, []);
  console.log(items);
  return (
    <div className="flex flex-col items-center justify-center bg-black">
    
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
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"></path>
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

          <div>
            {isLoading ? (
              <Loader2 />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 w-full relative">
                {items.map((item) => (
                  <ProductCard item={item} />
                ))}
              </div>
            )}
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
                  stroke="currentColor">
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
                      }`}>
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
                  stroke="currentColor">
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
