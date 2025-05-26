import React from "react";

const NewArrivals = () => {
  return (
    <section className="relative overflow-hidden px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="relative">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <span className="text-yellow-400 uppercase tracking-[0.2em] text-xs sm:text-sm font-medium">
              Just Launched
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>

          {/* Title Section */}
          <div className="relative">
            {/* Background Text */}
            <div
              className="absolute -top-2 sm:-top-3.5 lg:-top-9 left-1/2 transform -translate-x-1/2 
                        text-5xl sm:text-8xl lg:text-[160px] font-bold uppercase opacity-5 
                  pointer-events-none select-none bg-clip-text text-transparent 
                  bg-gradient-to-b from-white via-white to-transparent whitespace-nowrap">
              Newness
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-[3.55rem] lg:text-8xl font-bold uppercase relative tracking-tighter">
              <span
                className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 
                   bg-clip-text text-transparent animate-gradient-shift bg-[length:200%]">
                New Arrivals
              </span>
            </h1>
          </div>
        </div>

        {/* Featured Products Grid */}
        <div className="">
          {/* Secondary Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4  px-10">
            <div className=" overflow-hidden aspect-[480/660]">
              <img
                src="https://i.pinimg.com/736x/96/f9/e3/96f9e3f357e4cfeee641e166c52f97ea.jpg"
                alt=""
                srcset=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" overflow-hidden aspect-[480/660]">
              <img
                src="https://i.pinimg.com/736x/2e/5d/20/2e5d205ba02de22cd7d978fa8efce733.jpg"
                alt=""
                srcset=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" overflow-hidden aspect-[480/660]">
              <img
                src="https://i.pinimg.com/736x/96/19/6f/96196f48342a4a2754091fa901e67016.jpg"
                alt=""
                srcset=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" overflow-hidden aspect-[480/660]">
              <img
                src="https://i.pinimg.com/736x/bf/0f/cc/bf0fcc478fc439625717737e8361f60a.jpg"
                alt=""
                srcset=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" overflow-hidden aspect-[480/660]">
              <img
                src="https://i.pinimg.com/736x/96/f9/e3/96f9e3f357e4cfeee641e166c52f97ea.jpg"
                alt=""
                srcset=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" overflow-hidden aspect-[480/660]">
              <img
                src="https://i.pinimg.com/736x/2e/5d/20/2e5d205ba02de22cd7d978fa8efce733.jpg"
                alt=""
                srcset=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" overflow-hidden aspect-[480/660]">
              <img
                src="https://i.pinimg.com/736x/96/19/6f/96196f48342a4a2754091fa901e67016.jpg"
                alt=""
                srcset=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" overflow-hidden aspect-[480/660]">
              <img
                src="https://i.pinimg.com/736x/bf/0f/cc/bf0fcc478fc439625717737e8361f60a.jpg"
                alt=""
                srcset=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
