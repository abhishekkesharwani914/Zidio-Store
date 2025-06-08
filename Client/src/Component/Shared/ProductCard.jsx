import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { addWishlistItem } from "../../api/whishlistApi";

function ProductCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const userId = useSelector((state) => state.auth.userData._id);
  const navigate = useNavigate();
  if (!item) return null;

  const discountPrice =
    item.discount > 0
      ? Math.round(item.price * (1 - item.discount / 100))
      : item.price;

  const wishlistHandler = async () => {
    const [response, error] = await addWishlistItem(item._id, userId);
    if (response) {
      console.log(response);
      toast.success("Added to wishlist!");
      setIsLiked(!isLiked);
    } else if (error) {
      // Show error toast if there was an error
      toast.error("Failed to add to wishlist.");
    }
  };
  console.log(userId, item._id);
  return (
    <div
      onClick={() => {
        navigate(`/product-detail/${item._id}`);
      }}
      key={item._id}
      className="relative shadow-lg rounded-lg overflow-hidden cursor-pointer transition-all duration-300 bg-neutral-800 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={item.images[0]}
          alt={item.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Discount Badge */}
        {item.discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            -{item.discount}%
          </div>
        )}

        {/* Wishlist Button - Now with higher z-index */}
        <button
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors z-20 ${
            isLiked
              ? "text-red-500"
              : "text-gray-300 bg-white/30 hover:bg-white/50"
          }`}
          onClick={(e) => {
            e.stopPropagation(); // Add this line
            wishlistHandler();
          }}
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isLiked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
      {/* Product Info */}
      <div className="p-4 flex flex-col gap-1">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {item.category}
        </span>
        <h3 className="text-sm font-medium text-white line-clamp-1">
          {item.title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-white">${discountPrice}</span>
          {item.discount > 0 && (
            <span className="text-xs text-gray-400 line-through">
              ${item.price}
            </span>
          )}
        </div>
      </div>
      {/* Add to Cart Overlay - Now with lower z-index than wishlist button */}
      <div
        className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 z-10 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}>
        <button
          className="bg-yellow-400 hover:bg-yellow-300 text-white font-semibold py-3 px-6 rounded-full uppercase text-sm tracking-wider transition-all transform hover:scale-105 flex items-center gap-2"
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart logic here
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Add to Cart
        </button>
      </div>{" "}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default ProductCard;
