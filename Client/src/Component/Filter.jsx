import React, { useState } from "react";
import { Button, ProductSort } from "../index.js";

const colors = [
  { name: "Black", bg: "bg-gray-900" },
  { name: "White", bg: "bg-white" },
  { name: "Blue", bg: "bg-blue-600" },
  { name: "Red", bg: "bg-red-600" },
  { name: "Green", bg: "bg-green-600" },
  { name: "Gray", bg: "bg-gray-400" },
  { name: "Navy", bg: "bg-blue-900" },
  { name: "Yellow", bg: "bg-yellow-400" },
  { name: "Pink", bg: "bg-pink-500" },
  { name: "Purple", bg: "bg-purple-600" },
  { name: "Indigo", bg: "bg-indigo-600" },
  { name: "Teal", bg: "bg-teal-500" },
];

const priceRanges = [
  { label: "Under $20", min: 0, max: 20, checked: false },
  { label: "$20 - $50", min: 20, max: 50, checked: false },
  { label: "$50 - $100", min: 50, max: 100, checked: false },
  { label: "Above $100", min: 100, max: null, checked: false },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];

export const MobileFilter = () => {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [priceRange, setPriceRange] = useState(priceRanges);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Sizes");

  const togglePriceRange = (rangeLabel) => {
    setPriceRange((prevRanges) =>
      prevRanges.map((range) =>
        range.label === rangeLabel
          ? { ...range, checked: !range.checked }
          : { ...range, checked: false }
      )
    );
  };

  const resetFilters = () => {
    setSize("");
    setColor("");
    setPriceRange(priceRanges);
  };

  const renderFilterContent = () => {
    switch (activeFilter) {
      case "Sizes":
        return (
          <div className="flex flex-wrap gap-3">
            {sizes.map((sizes, index) => (
              <button
                key={index}
                className={`bg-[#1d1d1d] text-white px-7 py-2 rounded-xl hover:bg-white hover:text-black cursor-pointer ${
                  size === sizes ? "border-2 border-white" : ""
                }`}
                onClick={() => setSize(sizes)}
              >
                {sizes}
              </button>
            ))}
          </div>
        );
      case "Colors":
        return (
          <div className="flex flex-wrap gap-3">
            {colors.map((colors) => (
              <div
                key={colors.name}
                className="flex flex-col items-center text-white"
              >
                <button
                  onClick={() => setColor(colors.name)}
                  className={`h-10 w-10 rounded-full transition-all cursor-pointer ${
                    colors.bg
                  } ${
                    color == colors.name
                      ? "ring-2 ring-white scale-110"
                      : "hover:scale-105"
                  }`}
                  aria-label={colors.name}
                />
                <span className="text-sm mt-1 text-white">{color.name}</span>
              </div>
            ))}
          </div>
        );
      case "Price":
        return (
          <div className="space-y-3 flex flex-wrap gap-3">
            {priceRanges.map((range) => (
              <label
                key={range.label}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition-colors text-white"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={range.checked}
                    onChange={() => togglePriceRange(range.label)}
                    className="form-checkbox h-5 w-5 text-white rounded border-gray-300 focus:ring-white transition-colors"
                  />
                  <span className="ml-3">{range.label}</span>
                </div>
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };
  console.log(color);
  return (
    <>
      {/* Mobile Filter/Sort Buttons - Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 text-white flex z-30 shadow-lg">
        <button
          onClick={() => {
            setShowSortModal(true);
            setShowFilterModal(false);
          }}
          className={`flex-1 py-4 font-medium flex items-center justify-center gap-2 border-r border-gray-700 transition-all ${
            showSortModal
              ? "text-white bg-gray-900"
              : "text-gray-300 hover:text-white hover:bg-gray-800"
          }`}
        >
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
              d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
            />
          </svg>
          Sort
        </button>
        <button
          onClick={() => {
            setShowFilterModal(true);
            setShowSortModal(false);
          }}
          className={`flex-1 py-4 font-medium flex items-center justify-center gap-2 transition-all ${
            showFilterModal
              ? "text-white bg-gray-900"
              : "text-gray-300 hover:text-white hover:bg-gray-800"
          }`}
        >
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
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filter
        </button>
      </div>

      {/* Filter Modal - Improved */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          showFilterModal ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black opacity-30"
          onClick={() => setShowFilterModal(false)}
        />

        {/* Modal Content */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-black rounded-t-2xl z-50 border-t border-gray-700 transform transition-transform duration-300 ease-out ${
            showFilterModal ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ maxHeight: "90vh" }}
        >
          {/* Header with close button */}
          <div className="p-5 border-b border-gray-700 flex justify-between items-center sticky top-0 z-10 text-white">
            <h2 className="text-xl font-bold uppercase tracking-tight ">
              Filters
            </h2>
            <button
              onClick={() => setShowFilterModal(false)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto">
            {/* Filter Tabs - Sticky */}
            <div className="sticky top-0 bg-black z-10 border-b border-gray-700 flex">
              {["Sizes", "Colors", "Price"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex-1 py-4 text-center font-medium transition-colors uppercase text-sm tracking-tight ${
                    activeFilter === filter
                      ? "text-white border-b-2 border-white font-semibold"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Filter Content */}
            <div className="p-5">{renderFilterContent()}</div>
          </div>

          {/* Action Buttons - Sticky Bottom */}
          <div className="p-4 border-t border-gray-700 grid grid-cols-2 gap-3 sticky bottom-0 bg-black">
            <button
              onClick={resetFilters}
              className="py-3 px-4 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              Reset All
            </button>
            <button
              onClick={() => setShowFilterModal(false)}
              className="py-3 px-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Sort Modal - Improved */}
      <ProductSort
        setShowSortModal={setShowSortModal}
        showSortModal={showSortModal}
      />
    </>
  );
};

export const Filter = () => {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [priceRange, setPriceRange] = useState(priceRanges);

  const togglePriceRange = (rangeLabel) => {
    setPriceRange((prevRanges) =>
      prevRanges.map((range) =>
        range.label === rangeLabel
          ? { ...range, checked: !range.checked }
          : { ...range, checked: false }
      )
    );
  };

  const resetFilters = () => {
    setSize("");
    setColor("");
    setPriceRange(priceRanges);
  };
  return (
    <div className=" overflow-y-auto  lg:block hidden ">
      <div className=" text-white shadow-xl p-3 border-r border-gray-800">
        {/* Header */}
        <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-800">
          <h3 className="text-xl font-bold text-white tracking-tight">
            FILTERS
          </h3>
          <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center transition-all group">
            Reset all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>

        {/* Size Filter */}
        <div className="mb-3 pb-3 border-b border-gray-800">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-white uppercase text-sm tracking-wider">
              Sizes
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {sizes.map((sizes, index) => (
              <button
                key={index}
                className={`bg-[#1d1d1d] text-white px-7 py-2 rounded-xl hover:bg-white hover:text-black cursor-pointer ${
                  size === sizes ? "border-2 border-white" : ""
                }`}
                onClick={() => setSize(sizes)}
              >
                {sizes}
              </button>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div className="mb-3 pb-3 border-b border-gray-800">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-white uppercase text-sm tracking-wider">
              Colors
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {colors.map((c) => (
              <button
                key={c.name}
                className={`h-8 w-8 rounded-full ${c.bg} ${
                  c.border
                } transition-all relative flex items-center justify-center
              hover:ring-2 hover:ring-gray-400 hover:scale-110
              ${color === c.name ? "ring-2 ring-white scale-110" : ""}`}
                aria-label={c.name}
                title={c.name}
                onClick={() => setColor(c.name)}
              >
                {color === c.name && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-white uppercase text-sm tracking-wider">
              Price Range
            </h4>
          </div>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label
                key={range.label}
                className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-900 px-2 py-1 rounded-md transition-colors"
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="opacity-0 absolute h-4 w-4 cursor-pointer"
                    checked={range.checked}
                    onChange={togglePriceRange}
                  />
                  <div
                    className={`border-2 rounded-sm w-4 h-4 flex items-center justify-center transition-all ${
                      range.checked
                        ? "bg-blue-500 border-blue-500"
                        : "bg-gray-900 border-gray-600 group-hover:border-gray-500"
                    }`}
                  >
                    {range.checked && (
                      <svg
                        className="fill-current w-3 h-3 text-white"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    )}
                  </div>
                </div>
                <span
                  className={`text-sm ${
                    range.checked
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-300"
                  }`}
                >
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-all 
                hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
          onClick={() => {
            /* Apply filters logic */
          }}
        >
          Apply Filters
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
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
