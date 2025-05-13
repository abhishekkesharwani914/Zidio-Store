import React from "react";
import { Button } from "../../index.js";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
function UserAddress() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {location.pathname === "/account/address" ? (
        <div className="">
          <h1 className="text-6xl font-bold text-white mb-6 uppercase tracking-tighter ">
            You Address
          </h1>
          <div className="grid sm:grid-cols-2 grid-rows-1 gap-4 w-full">
            <div className="w-full p-5 rounded-lg text-white border border-gray-400 ">
              <div className=" flex gap-5 sm:max-w-[70%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="currentColor"
                >
                  <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                </svg>
                <div>
                  <h1>Aryan Mishra</h1>
                  <p>
                    Chow bazar kankhal, kankhal, Haridwar, Uttarakhand, 249408
                  </p>
                  <p className="mt-4">Mobile: +91 1234567890</p>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <Button
                  children="Edit"
                  onclick={() =>
                    navigate("/user-account/address/address-id/123456789")
                  }
                />
                <Button children="Delete" />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Button
              children="Add New Address"
              className="w-54"
              onclick={() => navigate("/user-account/address/address-id/new")}
            />
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default UserAddress;
