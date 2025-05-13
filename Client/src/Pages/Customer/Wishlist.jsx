import React from "react";
import { Wishlist as WishlistImg } from "../../assets/index.js";
import { Button } from "../../index.js";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  px-4">
      <div className=" rounded-xl shadow-lg flex flex-col items-center p-10 gap-6">
        <div className="w-44 h-36 mb-2">
          <img
            src={WishlistImg}
            alt="No Wishlist Items"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold  mb-2 text-center">
          Your wishlist is empty!
        </h2>
        <p className=" text-lg text-center mb-4">
          Looks like you haven&apos;t added anything to your wishlist yet.
        </p>
        <Button
          className="w-60 md:w-96"
          children="Browse Products"
          onclick={() => navigate("/shop")}
        />
      </div>
    </div>
  );
}

export default Wishlist;
