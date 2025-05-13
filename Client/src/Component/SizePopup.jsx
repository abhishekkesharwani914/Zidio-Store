import React from "react";

const SizePopup = ({ open, size, setSize }) => {
  return (
    <div
      className={`w-96 h-80 border border-gray-400 absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="p-3 flex items-center justify-between">
        <h1 className="uppercase tracking-tighter text-md">
          Choose your perfect fit
        </h1>
        <button>X</button>
      </div>
      <div className="flex gap-3 w-full flex-wrap">
        {["XS", "S", "M", "L", "XL", "XXL"].map((sizes) => (
          <button
            key={sizes}
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
  );
};

export default SizePopup;
