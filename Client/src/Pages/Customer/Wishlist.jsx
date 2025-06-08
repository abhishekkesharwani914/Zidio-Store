import React from "react";
import { Wishlist as WishlistImg } from "../../assets/index.js";
import { Button } from "../../index.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { wishlistItems } from "../../api/whishlistApi.js";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function Wishlist() {
  const [items, setItems] = useState([]);
  const userId = useSelector((state) => state.auth.userData._id);
  console.log(userId);
  useEffect(() => {
    fetchWishlistItems();
  }, []);

  const fetchWishlistItems = async () => {
    const [response, error] = await wishlistItems(userId);
    if (response) {
      console.log(response);
      // setItems(response?.data);
    }
    if (error) {
      toast.error("Failed to fetch wishlist items." || error);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      {items.length > 0 ? (
        <div className="wishlist-container">
          {items.map((item) => (
            <div key={item._id} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <Button
                onClick={() => navigate(`/shop/${item._id}`)}
                text="View Item"
              />
            </div>
          ))}
        </div>
      ) : (
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
      )}
    </>
  );
}

export default Wishlist;
