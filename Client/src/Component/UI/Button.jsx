import React from "react";

function Button({
  children = "",
  className = "w-full",
  type = "button",
  onclick = () => {},
  svg = "",
}) {
  return (
    <button
      className={`relative cursor-pointer py-4 px-4 text-center font-barlow inline-flex gap-2 justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group/btn outline-offset-4  focus:outline-white focus:outline-offset-4 overflow-hidden ${className}`}
      type={type}
      onClick={onclick}
    >
      {svg && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="rgba(254,244,244,1)"
        >
          <path d={svg}></path>
        </svg>
      )}
      {children && <span className="relative z-20">{children}</span>}
      {/* <!-- Bat-Signal Glow (Tailwind) --> */}
      <div class="bat-glow absolute inset-0 flex items-center justify-center opacity-0 group-hover/btn:opacity-30 transition-opacity duration-500">
        <div class="w-full h-12 bg-gradient-to-b from-white to-transparent clip-path-chevron"></div>
      </div>

      <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover/btn:left-[125%] transition-all duration-1000 ease-in-out"></span>

      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover/btn:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover/btn:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
    </button>
  );
}

export default Button;
