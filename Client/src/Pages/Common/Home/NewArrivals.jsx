import React from "react";

const newArrivals = [
  {
    img: "https://i.pinimg.com/736x/96/f9/e3/96f9e3f357e4cfeee641e166c52f97ea.jpg",
    alt: "New Arrival 1",
  },
  {
    img: "https://i.pinimg.com/736x/2e/5d/20/2e5d205ba02de22cd7d978fa8efce733.jpg",
    alt: "New Arrival 2",
  },
  {
    img: "https://i.pinimg.com/736x/96/19/6f/96196f48342a4a2754091fa901e67016.jpg",
    alt: "New Arrival 3",
  },
  {
    img: "https://i.pinimg.com/736x/bf/0f/cc/bf0fcc478fc439625717737e8361f60a.jpg",
    alt: "New Arrival 4",
  },
  {
    img: "https://i.pinimg.com/736x/96/f9/e3/96f9e3f357e4cfeee641e166c52f97ea.jpg",
    alt: "New Arrival 5",
  },
  {
    img: "https://i.pinimg.com/736x/2e/5d/20/2e5d205ba02de22cd7d978fa8efce733.jpg",
    alt: "New Arrival 6",
  },
  {
    img: "https://i.pinimg.com/736x/96/19/6f/96196f48342a4a2754091fa901e67016.jpg",
    alt: "New Arrival 7",
  },
  {
    img: "https://i.pinimg.com/736x/bf/0f/cc/bf0fcc478fc439625717737e8361f60a.jpg",
    alt: "New Arrival 8",
  },
];

const NewArrivals = () => {
  return (
    <section className="relative overflow-hidden px-2 py-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <span className="text-yellow-400 uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold bg-yellow-400/10 px-4 py-1 rounded-full shadow">
              Just Launched
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl lg:text-[160px] font-black uppercase opacity-5 pointer-events-none select-none bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 via-white to-transparent whitespace-nowrap">
              Newness
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase relative tracking-tighter">
              <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%]">
                New Arrivals
              </span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-xl mx-auto text-base sm:text-lg">
              Discover the latest additions to our collection. Handpicked styles,
              fresh trends, and exclusive drops you won't want to miss.
            </p>
          </div>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6 px-2 sm:px-6">
          {newArrivals.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-[3/4] rounded-2xl shadow-lg bg-neutral-900 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full p-4">
                  <button className="w-full py-2 rounded-lg bg-yellow-400 text-black font-semibold uppercase text-xs tracking-wider shadow hover:bg-yellow-300 transition">
                    Quick View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
