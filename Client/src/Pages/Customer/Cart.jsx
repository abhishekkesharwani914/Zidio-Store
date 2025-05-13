import React, { useState } from "react";
import { Button } from "../../index.js";
import { Henley } from "../../assets/index.js";

function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Acid Wash Distressed Tee",
      price: 29.99,
      discount: 0.1,
      size: "M",
      quantity: 1,
    },
    {
      id: 2,
      name: "Acid Wash Distressed Tee",
      price: 29.99,
      discount: 0.1,
      size: "M",
      quantity: 1,
    },
    {
      id: 3,
      name: "Acid Wash Distressed Tee",
      price: 29.99,
      discount: 0.1,
      size: "M",
      quantity: 1,
    },
    {
      id: 4,
      name: "Acid Wash Distressed Tee",
      price: 29.99,
      discount: 0.1,
      size: "M",
      quantity: 1,
    },
    {
      id: 5,
      name: "Acid Wash Distressed Tee",
      price: 29.99,
      discount: 0.1,
      size: "M",
      quantity: 1,
    },
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = items.reduce(
    (sum, item) => sum + item.price * item.discount * item.quantity,
    0
  );
  const delivery = 0;
  const total = subtotal - discount + delivery;

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-20 px-4 sm:px-8 lg:px-12 relative">
      <h1 className="text-3xl md:text-4xl tracking-tight uppercase font-bold mb-8">
        Your Cart ({items.length} {items.length === 1 ? "item" : "items"})
      </h1>

      <div className="flex">
        {/* Left Column - Cart Items */}
        <div className="flex-1 lg:mr-96">
          <div className="max-w-4xl space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="relative p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors duration-300 flex flex-col sm:flex-row gap-5 bg-gray-900/50"
              >
                <div className="w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={Henley}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    alt={item.name}
                  />
                </div>

                <div className="flex-1">
                  <span className="text-xs text-gray-400 mb-1 tracking-tighter uppercase">
                    Acid Wash
                  </span>
                  <h2 className="text-lg font-bold mb-1 tracking-tighter uppercase">
                    {item.name}
                  </h2>
                  <p className="text-xs text-gray-400 mb-3">
                    Size: {item.size}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <div className="flex items-center border border-gray-600 rounded-md">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-base font-semibold flex gap-2 items-center">
                      <span className="text-sm line-through text-gray-500">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <span className="text-white">
                        $
                        {(
                          item.price *
                          item.quantity *
                          (1 - item.discount)
                        ).toFixed(2)}
                      </span>
                      <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded">
                        {item.discount * 100}% OFF
                      </span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Fixed Position Summary */}
        <div className="hidden lg:block fixed right-8 top-32 w-80 h-[calc(100vh-11rem)] border-2 border-gray-700 p-6 rounded-xl bg-gray-900/90 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-400">
                Subtotal ({items.length} items)
              </span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Discount</span>
              <span className="text-green-400">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Delivery</span>
              <span>{delivery === 0 ? "FREE" : `$${delivery.toFixed(2)}`}</span>
            </div>
          </div>

          <div className="border-t border-b border-gray-700 py-4 mb-6">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all shadow-lg">
            Proceed to Checkout
          </Button>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Free delivery for orders over $50</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
