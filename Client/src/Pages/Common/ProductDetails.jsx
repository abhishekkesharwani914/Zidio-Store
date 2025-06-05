import React, { useState } from "react";
import { ProductImageSlider } from "../../index.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Item } from "../../api/ShopApi.js";
import Loader2 from "../../Component/Loader2.jsx";
const images = [
  {
    image:
      "https://images.unsplash.com/photo-1622567893612-a5345baa5c9a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://images.unsplash.com/photo-1680292783974-a9a336c10366?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    image:
      "https://images.unsplash.com/photo-1586746944933-d8112de2c45b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    image:
      "https://images.unsplash.com/photo-1547774475-cc8bce3a768c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function ProductDetails() {
  const id = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Fetch product details using the id from params
    const fetchProductDetails = async () => {
      setIsLoading(true);
      const [data, error] = await Item(id.id);
      if (data) {
        setIsLoading(false);
        setProductDetails(data);
      }
    };
    fetchProductDetails();
  }, [id]);
  console.log(productDetails);

  const [size, setSize] = useState("XS");
  return (
    <>
      {isLoading ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col overflow-hidden pt-[64px] px-20 py-4">
          <div className="xl:flex">
            <div className="flex ">
              <ProductImageSlider images={productDetails?.images || []} />
            </div>
            <div className="text-[#CCCCCC] flex flex-col items-start gap-3 px-5 ">
              <h2 className="text-2xl font-bold">{productDetails?.category}</h2>
              <p className="text-xl font-bold">{productDetails?.title}</p>
              <p>
                <span className="text-xl font-semibold mt-4">
                  ${(productDetails?.price / 100).toFixed(2)}
                </span>
                {productDetails?.discount > 0 && (
                  <span className="line-through text-sm ml-1.5">
                    $
                    {(
                      (productDetails?.price / 100) *
                      (1 + productDetails?.discount / 100)
                    ).toFixed(2)}
                  </span>
                )}
              </p>
              <div className="flex gap-3 flex-col">
                <p>Select Size</p>
                <div className="flex gap-3 w-full flex-wrap">
                  {productDetails?.sizes.map((sizes) => (
                    <button
                      key={sizes}
                      className={`bg-[#1d1d1d] text-white px-7 py-2 rounded-xl hover:bg-white hover:text-black cursor-pointer ${
                        size === sizes ? "border-2 border-white" : ""
                      }`}
                      onClick={() => setSize(sizes)}>
                      {sizes}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid max-sm:grid-cols-1 sm:grid-cols-7 gap-4 w-full">
                <div className="sm:col-span-3">
                  <button class="relative w-full cursor-pointer py-4 px-4 text-center font-barlow inline-flex gap-2 justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4  focus:outline-white focus:outline-offset-4 overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(254,244,244,1)">
                      <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
                    </svg>
                    <span class="relative z-20">Add to Cart</span>

                    <span class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

                    <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
                    <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
                    <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
                    <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
                  </button>
                </div>
                <div className=" sm:col-span-3">
                  <button class="relative w-full cursor-pointer py-4 px-4 text-center font-barlow inline-flex gap-2 justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4  focus:outline-white focus:outline-offset-4 overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(254,244,244,1)">
                      <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
                    </svg>
                    <span class="relative z-20">Buy Now</span>

                    <span class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

                    <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
                    <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
                    <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
                    <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
                  </button>
                </div>
                <div className="sm:col-start-7">
                  <button class="relative w-full cursor-pointer py-4 px-4 text-center font-barlow inline-flex gap-2 justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline-white focus:outline-offset-4 overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(251,251,251,1)">
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                    </svg>

                    <span class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

                    <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
                    <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
                    <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
                    <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
                  </button>
                </div>
              </div>

              <div className=" w-full py-4">
                <h3 className="text-2xl uppercase tracking-widest font-extrabold">
                  Product Details
                </h3>
                <p className="text-md mt-3">{productDetails?.description}</p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold uppercase tracking-widest">
                    Specifications:
                  </h4>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <span className="font-medium">Fabric:</span>{" "}
                      {productDetails?.specifications.fabric}
                    </li>
                    <li>
                      <span className="font-medium">Sleeve Length:</span>{" "}
                      {productDetails?.specifications.sleeveLength}
                    </li>
                    <li>
                      <span className="font-medium">Pattern:</span>{" "}
                      {productDetails?.specifications.pattern}
                    </li>
                    <li>
                      <span className="font-medium">Fit:</span>{" "}
                      {productDetails?.specifications.fit}
                    </li>
                    <li>
                      <span className="font-medium">Neck:</span>{" "}
                      {productDetails?.specifications.neck}
                    </li>
                    <li>
                      <span className="font-medium">Origin:</span>{" "}
                      {productDetails?.specifications.origin}
                    </li>
                  </ul>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
