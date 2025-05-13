import React from "react";
import {
  GraphicPrintedVideo,
  HenleyVideo,
  HoodedVideo,
  LongSleeveVideo,
  OverSizedVideo,
  PoloTShirtVideo,
  SleeveLessVideo,
  SolidColorVideo,
} from "../../../assets/index.js";
import { Button } from "../../../index.js";
import { useNavigate } from "react-router-dom";

function CategorySection() {
  const navigate = useNavigate();

  const navigateHandler = () => navigate("/shop");

  const categories = [
    {
      name: "Oversized",
      video: OverSizedVideo,
      theme: "bg-gradient-to-br from-gray-900 to-yellow-600",
    },
    {
      name: "Graphic Printed",
      video: GraphicPrintedVideo,
      theme: "bg-gradient-to-br from-black to-gray-800",
    },
    {
      name: "Solid Color",
      video: SolidColorVideo,
      theme: "bg-gradient-to-br from-gray-800 to-black",
    },
    {
      name: "Polo T-Shirts",
      video: PoloTShirtVideo,
      theme: "bg-gradient-to-br from-yellow-500 to-gray-900",
    },
    {
      name: "Sleeveless",
      video: SleeveLessVideo,
      theme: "bg-gradient-to-br from-black to-gray-700",
    },
    {
      name: "Long Sleeve",
      video: LongSleeveVideo,
      theme: "bg-gradient-to-br from-gray-900 to-yellow-500",
    },
    {
      name: "Henley",
      video: HenleyVideo,
      theme: "bg-gradient-to-br from-black to-gray-800",
    },
    {
      name: "Hooded",
      video: HoodedVideo,
      theme: "bg-gradient-to-br from-gray-900 to-black",
    },
  ];

  return (
    <section className="w-full  py-12 overflow-hidden relative">
      <div className="container mx-auto px-5 relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center relative mb-5">
          {/* Large Background Text */}
          <div className="absolute sm:-top-12 left-1/2 transform -translate-x-1/2 text-[50px] ms:text-[80px] lg:text-[180px] font-bold uppercase opacity-5 pointer-events-none select-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-transparent whitespace-nowrap">
            Categories
          </div>

          {/* Main Title */}
          <div className="relative z-10 mb-5">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-yellow-400"></div>
              <span className="text-yellow-400 uppercase tracking-widest text-sm font-medium">
                Explore Styles
              </span>
              <div className="h-px w-12 bg-yellow-400"></div>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase relative">
              <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent inline-block">
                Unmask Your
              </span>
              <span className="block mt-2">Next Look</span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg md:text-xl mb-5 relative">
            Modern silhouettes with urban edge. Each piece tells a unique story.
          </p>
        </div>

        {/* Category Grid */}
        <div className="relative">
          <div className="flex gap-6 scroll w-max px-4">
            {[...categories, ...categories].map((category, index) => (
              <div
                key={index}
                className="relative w-[275px] h-[440px] group overflow-hidden rounded-xl cursor-pointer"
                onClick={() => navigate("/shop")}
              >
                {/* Video Background */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={category.video} type="video/mp4" />
                </video>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 opacity-60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-80 ${category.theme}`}
                ></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-3 transform transition-all duration-500 group-hover:-translate-y-2">
                    {category.name}
                  </h3>
                  <div className="overflow-hidden">
                    <div className="w-full h-px bg-yellow-400 transform transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-left"></div>
                  </div>
                  <div className="overflow-hidden">
                    <span className="inline-block text-sm font-medium mt-4 transform transition-all duration-500 translate-y-full group-hover:translate-y-0">
                      Explore Collection →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button onClick={() => navigate("/shop")} className=" px-8 py-4">
            Explore Collection
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
