import React from "react";
import { HeroSection, Button } from "../../index";
import TextScrollAnimation from "../../Component/TextScrollAnimation";
import { Video1, Video2 } from "../../assets/index.js";
function Home() {
  const texts = [
    "New Drops Every Week",
    "Style That Speaks",
    "Wear Your Mood",
    "Limited Edition Tees",
    "Fresh Fits Only",
    "Designed to Stand Out",
    "Comfort Meets Style",
    "Oversized & Overconfident",
    "Graphic Goals",
    "Shop Now",
    "Don’t Miss Out",
    "Just Dropped",
  ];

  const videoSources = [
    Video1,
    Video2,
    Video1,
    Video2,
    Video1,
    Video2,
    Video1,
    Video2,
    Video1,
    Video2,
    Video1,
    Video2,
    Video1,
    Video2,
    Video1,
    Video2,
  ];
  const categories = [
    "Oversized",
    "Acid Wash",
    "Graphic Printed",
    "Solid Color",
    "Polo T-Shirts",
    "Sleeveless",
    "Long Sleeve",
    "Henley",
    "Hooded",
  ];

  return (
    <>
      <div className="">
        <HeroSection />
        <TextScrollAnimation texts={texts} />
        <div className="items-center justify-center audiowide overflow-hidden p-7">
          <div>
            <h2 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-gray-300 font-bold uppercase tracking-tighter">
              Discover our exclusive collections
            </h2>
          </div>

          <div className="max-w-7xl mx-auto mt-5 uppercase ">
            {/* Featured Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Main featured product (left) - 2/3 width */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-4 lg:gap-6 h-[650px]">
                {/* Large featured image */}
                <div className="sm:col-span-2 col-span-1 sm:row-span-2 row-span-1 relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-30 bg-orange-500">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1546998590-6a6195049fa7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Featured T-shirt"
                    loading="lazy"
                  />
                  <div className="absolute sm:bottom-6 sm:left-6 left-4 bottom-4 bg-white  text-black px-4 py-2 rounded-full text-sm sm:text-lg tracking-wider font-bold shadow-sm ">
                    Best Seller
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
                    <button className="bg-white text-gray-900 font-medium md:px-6 md:py-3 py-2 px-4 rounded-full shadow-md transform md:translate-y-4 translate-y-0 md:group-hover:translate-y-0 md:transition-transform duration-300 md:hover:bg-gray-100 uppercase">
                      Shop Collection
                    </button>
                  </div>
                </div>

                {/* Two smaller images below */}
                <div className="relative group overflow-hidden sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-orange-600">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Casual T-shirt"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                    <h3 className="text-white font-bold tracking-wider sm:text-md md:text-lg lg:text-xl text-sm ">
                      Casual Collection
                    </h3>
                    <p className="text-white text-sm">Starting at $24.99</p>
                  </div>
                </div>
                <div className="relative group overflow-hidden sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-orange-700">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1533835825768-478d38555d95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Graphic T-shirt"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    New Arrival
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
                    <button className="bg-white text-gray-900 font-medium px-4 py-2 rounded-full shadow-md text-sm transform md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform md:duration-300 md:hover:bg-gray-100 uppercase">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Right side - two stacked products - 1/3 width */}
              <div className="grid grid-rows-2 gap-6 lg:gap-8 h-[650px]">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-amber-500">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1532202193792-e95ef22f1bce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Premium T-shirt"
                    loading="lazy"
                  />
                  <div className="absolute top-6 right-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm  shadow-md">
                    -20% OFF
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 text-black p-4 rounded-xl backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">Summer Limited</h3>
                        <p className="text-gray-900 font-semibold">$34.99</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-amber-400">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Limited Edition T-shirt"
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6 bg-black text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    LIMITED EDITION
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 text-black p-4 rounded-xl backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">Summer Limited</h3>
                        <p className="text-gray-900 font-semibold">$34.99</p>
                      </div>
                      <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      Only 50 pieces available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-6 bg-black text-white">
          {/* Section Heading */}
          <div className="flex items-center justify-between px-4 mb-4">
            <h2 className="text-2xl sm:text-8xl font-bold uppercase tracking-tighter">
              Discover Your Next Look
            </h2>
            <Button children="View All" className="w-40" />
          </div>

          <div className="overflow-hidden w-full">
            <div className="flex gap-4 scroll shrink-0 w-max px-4 relative">
              {[...videoSources, ...videoSources].map((src, idx) => (
                <div
                  key={idx}
                  className="w-[250px] h-[550px] flex flex-col items-center bg-amber-700 rounded-xl overflow-hidden shadow-lg"
                >
                  <video
                    src={src}
                    className="h-full w-full object-cover"
                    loop
                    autoPlay
                    muted
                    playsInline
                  ></video>
                  <p className="py-2 text-sm font-semibold uppercase tracking-wider absolute bottom-4">
                    {/* Replace below with dynamic category name if you have one */}
                    {categories[idx % categories.length]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
