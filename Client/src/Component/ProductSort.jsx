import React, { useState } from "react";
import { Button } from "../index.js";

const sortOptions = [
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest", value: "newest" },
  { label: "Popular", value: "popular" },
  { label: "Rating", value: "rating" },
];
function ProductSort({ showSortModal, setShowSortModal }) {
  const [sortOption, setSortOption] = useState("");
  return (
    <>
      <div
        className={`lg:hidden block fixed bottom-0 left-0 right-0 bg-black rounded-t-2xl z-20 border-t border-white text-white transition-transform duration-300 ease-out ${
          showSortModal
            ? "transform translate-y-0"
            : "transform translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-white flex justify-between items-center text-white">
          <h2 className=" font-bold uppercase text-2xl tracking-tighter ">
            Sort By
          </h2>
          <button
            onClick={() => setShowSortModal(false)}
            className="text-2xl font-thin"
          >
            &times;
          </button>
        </div>

        {/* Sort Options */}
        <div className="flex flex-wrap p-4 gap-3">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSortOption(option.value)}
              className={`bg-[#1d1d1d] text-white px-7 py-2 rounded-xl hover:bg-white hover:text-black cursor-pointer ${
                sortOption === option.value ? "border-2 border-white" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="p-4 border-t border-white">
          <Button
            onclick={() => {
              setShowSortModal(false);
            }}
            children="Apply Sort"
          />
        </div>
      </div>
    </>
  );
}
function MobileProductSort() {
  const [sortOption, setSortOption] = useState("");

  return (
    <>
      <div className="lg:flex items-center gap-3 hidden">
        <div className="relative">
          <select className="appearance-none bg-gray-900 text-white text-sm rounded-lg px-4 py-2 pr-8 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-600 transition-colors">
            {sortOptions.map((option) => (
              <option>Sort by: {option.label}</option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export { MobileProductSort, ProductSort };
