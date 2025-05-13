import React, { useState } from "react";
import {
  AcidWash,
  GraphicPrinted,
  Henley,
  Hooded,
  LongSleeve,
  OverSized,
} from "../../../assets/index.js";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const images = [
    { src: AcidWash, alt: "ACID", category: "DENIM" },
    { src: GraphicPrinted, alt: "GRAPHIC", category: "PRINT" },
    { src: Henley, alt: "HENLEY", category: "KNIT" },
    { src: OverSized, alt: "OVER", category: "SIZE" },
  ];

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px] bg-black relative overflow-hidden">
      {/* Left Column - Modern Image Grid */}
      <div className="w-full lg:w-1/2 h-[600px] relative p-6">
        <div className="h-full grid grid-cols-8 grid-rows-10 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group ${
                index === 0
                  ? "col-span-2 row-span-8 col-start-1 row-start-3"
                  : index === 1
                  ? "col-span-2 row-span-8 col-start-3 row-start-1"
                  : index === 2
                  ? "col-span-2 row-span-8 col-start-5 row-start-3"
                  : "col-span-2 row-span-8 col-start-7 row-start-1"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-yellow-400 text-black text-xs font-medium tracking-wider">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80 z-10"></div>
      </div>

      {/* Right Column - Newsletter */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          {isSubscribed ? (
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 mb-6">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">
                Welcome to the Club!
              </h3>
              <p className="text-gray-400">
                Check your inbox to confirm your subscription
              </p>
              <button
                onClick={() => setIsSubscribed(false)}
                className="px-6 py-3 bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-lg"
              >
                Subscribe Another Email
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Join Our <span className="text-yellow-400">Community</span>
                </h2>
                <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
              </div>

              <p className="text-gray-400 text-lg">
                Get exclusive updates on new collections and special offers.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all duration-300"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1.5 rounded border-gray-700 bg-gray-900 text-yellow-400 focus:ring-yellow-400"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400">
                    I agree to receive emails and accept the{" "}
                    <a
                      href="/terms"
                      className="text-yellow-400 hover:underline"
                    >
                      Terms of Service
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Subscribe Now
                </button>
              </form>

              <div className="pt-8 border-t border-gray-800">
                <p className="text-gray-500 text-sm text-center">
                  © 2024 All rights reserved
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
