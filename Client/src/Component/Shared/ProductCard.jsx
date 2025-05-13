import React from "react";
import { AcidWash } from "../../assets/index.js";
import { Button } from "../../index.js";

function ProductCard() {
  return (
    <div class="h-[500px] w-[90%] perspective-[1000px] relative group">
      <div class="h-full w-full transition-all duration-700 preserve-3d group-hover:[transform:rotateY(180deg)] shadow-lg hover:shadow-xl">
        <div class="absolute w-full h-full bg-gradient-to-br from-black/40 to-black/30 border border-gray-700 rounded-2xl backface-hidden p-6 flex flex-col overflow-hidden">
          <div class="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
            NEW
          </div>

          <div class="w-full h-[320px] rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-500">
            <img
              src={AcidWash}
              class="w-full h-full object-cover group-hover:brightness-110 transition-all"
              alt="Nike Shoes"
            />
          </div>

          <div class="flex flex-col justify-center">
            <div class="text-center mb-3 flex justify-center items-center">
              <span class="text-gray-400 line-through text-md mr-2">$250</span>
              <span class="text-2xl font-bold text-white mr-2">$225</span>
              <span class="text-md bg-yellow-400 text-gray-900 px-2 py-1 rounded-md font-semibold">
                -10% OFF
              </span>
            </div>
            <h3 class="text-center text-xl font-bold text-white mb-2">
              Nike Awesome Red Shoes
            </h3>
            <h6 class="text-center text-sm font-medium text-gray-300 tracking-widest">
              Special Edition
            </h6>
          </div>
        </div>
        <div class="absolute w-full h-full bg-gradient-to-br from-black/40 to-black/30 border border-gray-400 rounded-2xl backface-hidden rotate-y-180 p-8 flex flex-col justify-center items-center gap-4">
          <div class="w-full mb-4">
            <h4 class="text-lg font-bold text-white mb-3">SELECT SIZE</h4>
            <div class="grid grid-cols-3 gap-3">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button class="py-2 px-1  text-white border border-gray-600 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all text-sm font-medium">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <Button
            className="w-full py-4 active:scale-95"
            children=" ADD TO CART "
            svg="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"
          />
          <Button
            class="w-full py-4 active:scale-95"
            children="QUICK VIEW"
            svg="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 7C11.4872 7 10.9925 7.07719 10.5269 7.21995C11.3954 7.61175 12 8.48527 12 9.5C12 10.8807 10.8807 12 9.5 12C8.48527 12 7.61175 11.3954 7.22057 10.5268C7.07719 10.9925 7 11.4872 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z"
          />
        </div>
      </div>

      <button class="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-white hover:text-red-500 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProductCard;
