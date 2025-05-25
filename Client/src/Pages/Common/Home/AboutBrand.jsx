import React from "react";

const stats = [
  { number: "200K+", label: "Happy Customers" },
  { number: "87", label: "Countries Served" },
  { number: "24", label: "Award Wins" },
  { number: "100%", label: "Ethically Sourced" },
];

const DividerWithText = ({ text }) => (
  <div className="flex items-center justify-center gap-4 mb-10">
    <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
    <span className="text-yellow-400 uppercase tracking-widest text-xs sm:text-sm font-medium">
      {text}
    </span>
    <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
  </div>
);

const AboutBrand = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 text-white text-center">
      {/* Decorative Title */}
      <DividerWithText text="Our Story" />

      <div className="relative max-w-5xl mx-auto">
        {/* Ghost Background Heading */}
        <h2 className="absolute -top-2 sm:-top-4 lg:-top-10 left-1/2 transform -translate-x-1/2 text-[100px] sm:text-[140px] lg:text-[160px] font-bold uppercase opacity-5 select-none pointer-events-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-transparent tracking-widest whitespace-nowrap">
          Heritage
        </h2>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-[3.5rem] lg:text-8xl font-bold uppercase relative tracking-tight">
          <span className="bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:300%]">
            About Our Brand
          </span>
        </h1>

        {/* Description */}
        <div className="mt-10 grid gap-8">
          <p className="text-gray-300 leading-relaxed">
            Founded in 2015, we began as a small team of passionate designers
            committed to redefining modern aesthetics. Today, we are an
            internationally recognized brand known for uncompromising quality
            and innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <article className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-yellow-300 uppercase">
                Our Vision
              </h3>
              <p className="text-gray-400">
                To create timeless pieces blending functionality and artistry,
                inspiring self-expression in everyone who wears our designs.
              </p>
            </article>

            <article className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-yellow-300 uppercase">
                Our Craft
              </h3>
              <p className="text-gray-400">
                Each product goes through 87 meticulous steps, combining
                traditional techniques and modern technology for unmatched
                quality.
              </p>
            </article>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map(({ number, label }, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                {number}
              </div>
              <div className="text-sm sm:text-base text-gray-400 mt-2 uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
