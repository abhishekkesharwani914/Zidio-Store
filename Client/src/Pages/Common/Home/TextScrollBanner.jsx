import React from "react";

function TextScrollBanner({ texts }) {
  const duplicatedTexts = [...texts, ...texts, ...texts];

  return (
    <div className="w-full overflow-x-hidden select-none  bg-black relative group ">
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling content container */}
      <div className="overflow-x-hidden">
        <ul className="flex items-center w-max gap-4 h-full scroll">
          {duplicatedTexts.map((text, index) => (
            <li
              key={`${text}-${index}`}
              className="flex items-center justify-center gap-4 transition-transform duration-300 group-hover:scale-[1.02] h-full py-5">
              {/* Gradient text with batman font */}
              <h1 className="text-2xl md:text-3xl font-bold  text-yellow-400 bg-clip-text whitespace-nowrap tracking-tighter uppercase font-stretch-50%">
                {text}
              </h1>

              {/* Decorative divider */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TextScrollBanner;
