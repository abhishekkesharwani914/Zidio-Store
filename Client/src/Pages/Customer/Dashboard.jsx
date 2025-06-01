import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../index.js";
function UserAccount() {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateHandler = () => {
    navigate("/account/profile");
  };

  return (
    <div className="lg:flex lg:min-h-screen text-white pt-[60px] ">
      <div className="shadow-lg overflow-hidden sticky lg:top-6 top-10 w-full h-fit lg:h-[calc(100vh-3rem)] lg:w-64 z-50">
        <div className="flex md:flex-col p-4 space-y-2 h-full justify-evenly">
          {/* Header */}
          <div className="mb-4 p-2 pb-4 border-b border-gray-800 hidden md:block">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <svg
                className="w-6 h-6 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
              My Account
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="flex overflow-y-auto lg:block sm:gap-10 md:gap-2 items-center gap-3">
            {[
              {
                path: "/account",
                exact: true,
                name: "Overview",
                icon: "M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z",
              },
              {
                path: "/account/orders",
                name: "My Orders",
                icon: "M12.0049 0.999695C14.7663 0.999695 17.0049 3.23827 17.0049 5.99969V7.99969H20.0049C20.5572 7.99969 21.0049 8.44741 21.0049 8.99969V20.9997C21.0049 21.552 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.552 3.00488 20.9997V8.99969C3.00488 8.44741 3.4526 7.99969 4.00488 7.99969H7.00488V5.99969C7.00488 3.23827 9.24346 0.999695 12.0049 0.999695ZM17.0049 10.9997H15.0049V11.9997C15.0049 12.552 15.4526 12.9997 16.0049 12.9997C16.5177 12.9997 16.9404 12.6137 16.9982 12.1163L17.0049 11.9997V10.9997ZM9.00488 10.9997H7.00488V11.9997C7.00488 12.552 7.4526 12.9997 8.00488 12.9997C8.51772 12.9997 8.94039 12.6137 8.99815 12.1163L9.00488 11.9997V10.9997ZM12.0049 2.99969C10.4072 2.99969 9.10122 4.24861 9.00998 5.82342L9.00488 5.99969V7.99969H15.0049V5.99969C15.0049 4.40201 13.756 3.09603 12.1812 3.00479L12.0049 2.99969Z",
              },
              {
                path: "/account/payment",
                name: "Payments",
                icon: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5003 8C13.8278 8.43606 14.0625 8.94584 14.175 9.5H16V11H14.175C13.8275 12.7117 12.3142 14 10.5 14H10.3107L14.0303 17.7197L12.9697 18.7803L8 13.8107V12.5H10.5C11.4797 12.5 12.3131 11.8739 12.622 11H8V9.5H12.622C12.3131 8.62611 11.4797 8 10.5 8H8V6.5H16V8H13.5003Z",
              },
              {
                path: "/account/address",
                name: "Addresses",
                icon: "M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z",
              },
              {
                path: "/account/profile",
                name: "Profile",
                icon: "M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z",
              },
              {
                path: "/account/wishlist",
                name: "WishList",
                icon: "M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z",
              },
            ].map((item, index) => (
              <NavLink
                end={item.exact || false}
                to={item.path}
                key={index}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-gray-800 text-yellow-400 font-medium border-l-4 border-yellow-400"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`
                }>
                <span
                  className={`p-1 rounded-lg`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path d={item.icon}></path>
                  </svg>
                </span>
                <span className="text-sm hidden md:block font-medium whitespace-nowrap">
                  {item.name}
                </span>
              </NavLink>
            ))}
          </div>

          {/* Logout Button */}
          <div className="mt-auto pt-4 border-t border-gray-800 hidden lg:block">
            <button
              type="button"
              className="flex items-center space-x-3 p-3 rounded-lg text-red-400 hover:bg-gray-800 hover:text-red-300 transition-colors w-full group">
              <span className="p-1 rounded-lg group-hover:bg-red-900/20 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor">
                  <path d="M5 11H13V13H5V16L0 12L5 8V11ZM3.99927 18H6.70835C8.11862 19.2447 9.97111 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.97111 4 8.11862 4.75527 6.70835 6H3.99927C5.82368 3.57111 8.72836 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C8.72836 22 5.82368 20.4289 3.99927 18Z"></path>
                </svg>
              </span>
              <span className="hidden lg:block text-sm font-medium">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Main Content Area - Improved layout */}
      <div className=" p-5 w-full ">
        {location.pathname === "/account" ? (
          <>
            {/* Profile Card */}
            <div className="bg-[#000000] rounded-xl shadow-md border border-gray-200 p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 text-black text-xl font-bold w-14 h-14 flex items-center justify-center rounded-full shadow-md">
                    A
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Aryan Mishra</h3>
                    <p className="text-sm ">aryan.official@mishra@gmail.com</p>
                    <p className="text-sm ">+91 9027144850</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Button
                    children="Edit Profile"
                    className="w-40"
                    onclick={navigateHandler}
                  />
                  <div className="lg:hidden">
                    <Button children="Log Out" className="w-36" />
                  </div>
                </div>
              </div>
            </div>
            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  path: "/account/orders",
                  title: "My Orders",
                  desc: "Track and manage your orders",
                  icon: "M12.0049 0.999695C14.7663 0.999695 17.0049 3.23827 17.0049 5.99969V7.99969H20.0049C20.5572 7.99969 21.0049 8.44741 21.0049 8.99969V20.9997C21.0049 21.552 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.552 3.00488 20.9997V8.99969C3.00488 8.44741 3.4526 7.99969 4.00488 7.99969H7.00488V5.99969C7.00488 3.23827 9.24346 0.999695 12.0049 0.999695ZM17.0049 10.9997H15.0049V11.9997C15.0049 12.552 15.4526 12.9997 16.0049 12.9997C16.5177 12.9997 16.9404 12.6137 16.9982 12.1163L17.0049 11.9997V10.9997ZM9.00488 10.9997H7.00488V11.9997C7.00488 12.552 7.4526 12.9997 8.00488 12.9997C8.51772 12.9997 8.94039 12.6137 8.99815 12.1163L9.00488 11.9997V10.9997ZM12.0049 2.99969C10.4072 2.99969 9.10122 4.24861 9.00998 5.82342L9.00488 5.99969V7.99969H15.0049V5.99969C15.0049 4.40201 13.756 3.09603 12.1812 3.00479L12.0049 2.99969Z",
                },
                {
                  path: "/account/payment",
                  title: "Payment Methods",
                  desc: "Manage your payment options",
                  icon: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5003 8C13.8278 8.43606 14.0625 8.94584 14.175 9.5H16V11H14.175C13.8275 12.7117 12.3142 14 10.5 14H10.3107L14.0303 17.7197L12.9697 18.7803L8 13.8107V12.5H10.5C11.4797 12.5 12.3131 11.8739 12.622 11H8V9.5H12.622C12.3131 8.62611 11.4797 8 10.5 8H8V6.5H16V8H13.5003Z",
                },
                {
                  path: "/account/address",
                  title: "Saved Addresses",
                  desc: "Your delivery addresses",
                  icon: "M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z",
                },
                {
                  path: "/account/profile",
                  title: "Account Settings",
                  desc: "Update your profile details",
                  icon: "M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z",
                },
                {
                  path: "/help-support",
                  title: "Help Center",
                  desc: "Get support and help",
                  icon: "M12 22C6.47715 22 2 17.5228 2 12 2 6.47715 6.47715 2 12 2 17.5228 2 22 6.47715 22 12 22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12 20 7.58172 16.4183 4 12 4 7.58172 4 4 7.58172 4 12 4 16.4183 7.58172 20 12 20ZM13 10.5V15H14V17H10V15H11V12.5H10V10.5H13ZM13.5 8C13.5 8.82843 12.8284 9.5 12 9.5 11.1716 9.5 10.5 8.82843 10.5 8 10.5 7.17157 11.1716 6.5 12 6.5 12.8284 6.5 13.5 7.17157 13.5 8Z",
                },
              ].map((action, index) => (
                <NavLink
                  to={action.path}
                  key={index}
                  className="bg-[#000000] rounded-lg p-5 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-600">
                      <path d={action.icon}></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">{action.title}</h3>
                  <p className="text-sm text-gray-500">{action.desc}</p>
                </NavLink>
              ))}
            </div>
          </>
        ) : (
          <div className="">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserAccount;
