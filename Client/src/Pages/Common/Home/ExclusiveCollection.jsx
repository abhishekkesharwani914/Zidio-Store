import React from "react";
import { Button } from "../../../index.js";
import { useNavigate } from "react-router-dom";
import {
  LongSleeveVideo2,
  OverSizedVideo2,
  PoloTShirtVideo2,
  SleeveLessVideo2,
} from "../../../assets/index.js";

function ExclusiveCollection() {
  const navigate = useNavigate();

  const collections = [
    {
      img: "https://i.pinimg.com/1200x/a0/9c/06/a09c064cb9797b5f7f3fddb5ee663cf2.jpg",
    },
    {
      img: "https://i.pinimg.com/1200x/a0/9c/06/a09c064cb9797b5f7f3fddb5ee663cf2.jpg",
    },
    {
      img: "https://i.pinimg.com/1200x/a0/9c/06/a09c064cb9797b5f7f3fddb5ee663cf2.jpg",
    },
    {
      img: "https://i.pinimg.com/1200x/a0/9c/06/a09c064cb9797b5f7f3fddb5ee663cf2.jpg",
    },
  ];

  return (
    <section className="w-full text-white py-12 px-4 relative overflow-hidden">
      <div className=" relative z-10">
        {/* Header Section */}
        <div className="flex flex-col gap-6 mb-5">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <span className="text-yellow-400 uppercase tracking-[0.2em] text-sm font-medium">
              Limited Edition
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>

          <div className="relative text-center mb-8">
            {/* Background Text */}
            <div className="absolute -top-9 md:-top-12 left-1/2 transform -translate-x-1/2 text-[50px] md:text-[80px] lg:text-[180px] font-bold uppercase opacity-5 pointer-events-none select-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-transparent whitespace-nowrap">
              Collection
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase relative">
              <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%]">
                Featured Collections
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6">
              Discover our curated selection of premium designs crafted for
              those who dare to stand out.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex items-center justify-center gap-5">
          {collections.map((item, index) => (
            <div className="aspect-[4/4] rounded-xl overflow-hidden">
              <img
                src={item.img}
                alt=""
                srcset=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <Button onClick={() => navigate("/shop")} className=" px-8 py-4 ">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ExclusiveCollection;
