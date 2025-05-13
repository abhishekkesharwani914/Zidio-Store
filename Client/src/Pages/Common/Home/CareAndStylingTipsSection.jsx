import React, { useState } from "react";

const CareAndStylingSection = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-6 gap-4 h-screen px-10">
      <div className="col-span-4 row-span-6 bg-blue-500 rounded-xl">1</div>
      <div
        className="col-span-8 row-span-3 col-start-5 clip-path-polygon bg-blue-500 rounded-xl"
      >
        <span className="font-bold text-lg">CONTACT US</span>
        <span className="text-2xl">✉️</span>
      </div>
      <div className="col-span-3 row-span-3 col-start-5 row-start-4 bg-blue-500 rounded-xl">
        3
      </div>
      <div className="col-span-3 row-span-3 col-start-8 row-start-4 bg-blue-500 rounded-xl">
        4
      </div>
      <div className="col-span-2 row-span-3 col-start-11 row-start-4 bg-blue-500 rounded-xl">
        5
      </div>
    </div>
  );
};

export default CareAndStylingSection;
