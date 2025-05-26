import React from "react";
import { Button } from "../../../index.js";
import { useNavigate } from "react-router-dom";
import {
  LongSleeveVideo2,
  OverSizedVideo2,
  PoloTShirtVideo2,
  SleeveLessVideo2,
} from "../../../assets/index.js";

function FeaturedCollections() {
  const navigate = useNavigate();

  const collections = [
    {
      id: 1,
      name: "Oversized",
      description: "Relaxed and breathable fits",
      price: "From ₹299",
      img: "https://i.pinimg.com/736x/68/46/a2/6846a299e9f6c54dd67208e89e8e4676.jpg",
    },
    {
      id: 2,
      name: "Acid Wash",
      description: "Vintage inspired wash finish",
      price: "From ₹399",
      img: "https://i.pinimg.com/736x/06/28/63/062863338c9045e3f2970b40e818d252.jpg",
    },
    {
      id: 3,
      name: "Graphic Printed",
      description: "Street Style Essentials",
      price: "From ₹499",
      img: "https://i.pinimg.com/736x/05/14/eb/0514ebf04037b02df50e4d57353168a2.jpg",
    },
    {
      id: 4,
      name: "Solid Color",
      description: "Minimal and classic",
      price: "From ₹349",
      img: "https://i.pinimg.com/736x/ed/93/d1/ed93d11c27d4f50ae28e249b6ff20312.jpg",
    },
    {
      id: 5,
      name: "Polo T-Shirts",
      description: "Smart casual styles",
      price: "From ₹449",
      img: "https://i.pinimg.com/736x/6c/0a/36/6c0a36f57649e4f765c9e2315e48ebd5.jpg",
    },
    {
      id: 6,
      name: "Sleeveless",
      description: "Stay cool and stylish",
      price: "From ₹299",
      img: "https://i.pinimg.com/736x/00/f3/c2/00f3c283de1a04bdd33fb6a4a176297a.jpg",
    },
    {
      id: 7,
      name: "Long Sleeve",
      description: "Perfect for layering",
      price: "From ₹399",
      img: "https://i.pinimg.com/736x/e2/71/00/e2710025ee042304af1bb60daf29ce98.jpg",
    },
    {
      id: 8,
      name: "Henley",
      description: "Timeless neck designs",
      price: "From ₹599",
      img: "https://i.pinimg.com/736x/d2/db/d1/d2dbd12e687ffbd81f8fa70c65d62206.jpg",
    },
  ];

  return (
    <section className="w-full text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className=" relative z-10">
        {/* Header Section */}
        <div className="flex flex-col gap-6 mb-16">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <span className="text-yellow-400 uppercase tracking-[0.2em] text-sm font-medium">
              Limited Edition
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>

          <div className="relative text-center">
            {/* Background Text */}
            <div
              className="absolute -top-2 sm:-top-3.5 lg:-top-9 left-1/2 transform -translate-x-1/2 
                        text-5xl sm:text-8xl lg:text-[160px] font-bold uppercase opacity-5 
                          pointer-events-none select-none bg-clip-text text-transparent 
                          bg-gradient-to-b from-white via-white to-transparent whitespace-nowrap tracking-wider">
              Collection
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-[3.55rem] lg:text-8xl font-bold uppercase relative">
              <span
                className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 
                             bg-clip-text text-transparent animate-gradient-shift bg-[length:200%]">
                Featured Collections
              </span>
            </h1>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4  px-10">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden bg-gray-900/50 
                       backdrop-blur-sm border border-gray-800/50
                       hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 aspect-[480/660]">
              {/* Image */}
              <img
                src={collection.img}
                alt="main"
                className="w-full h-full object-cover"
              />

              {/* Blurred Bottom Area */}
              <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tl from-neutral-950 to-transparent" />
              </div>

              <div className="absolute bottom-0 z-40 flex p-5 flex-col w-full">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xl font-semibold">
                    {collection.name}
                  </div>
                  <p className=" text-sm">{collection.description}</p>
                </div>

                {/* Stats & Button */}
                <div className="flex items-center justify-between pt-2 w-full">
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      {collection.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button onClick={() => navigate("/shop")} className="px-8 py-4">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollections;
