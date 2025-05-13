import React from "react";
import { NoOrder } from "../../assets/index.js";
import { Button } from "../../index.js";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-56px)] overflow-hidden">
      <h1 className="text-6xl font-bold text-white mb-6 uppercase tracking-tighter ">
        My Order
      </h1>
      <div className="flex flex-col justify-center items-center  px-4">
        <div className=" rounded-xl shadow-lg flex flex-col items-center p-10 gap-6">
          <div className="w-44 h-36 mb-2">
            <img
              src={NoOrder}
              alt="No Orders"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            No orders placed!
          </h2>
          <p className="text-gray-500 text-lg text-center">
            Looks like you haven&apos;t placed any orders yet.
          </p>
          <Button
            className="w-60 md:w-96"
            children="Start Shopping"
            onclick={() => navigate("/shop")}
          />
        </div>
      </div>
    </div>
  );
}

export default Orders;
