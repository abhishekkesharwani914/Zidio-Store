import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchBar } from "../../index.js";
import Image from "../../assets/image.jpg";
import { useSelector } from "react-redux";
function Navbar() {
  const userType = useSelector((state) => state.auth.userType);
  const [sideBar, setSideBar] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const sideBarHandler = () => setSideBar(!sideBar);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center text-white items-center fixed top-0 w-full z-50">
      {/* Sidebar for mobile */}
      <SideNavigationBar
        sideBar={sideBar}
        onClose={() => setSideBar(false)}
        setIsSearchOpen={setIsSearchOpen}
        userType={userType}
      />

      <div
        className={`flex justify-between w-full items-center transition-all duration-300 px-5 py-2 ${
          scrolled ? "bg-black" : "bg-transparent shadow-2xs shadow-gray-200"
        }`}
      >
        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center cursor-pointer md:hidden p-2 rounded-md hover:bg-white/20 transition-colors"
          onClick={sideBarHandler}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Left Navigation Links */}
        <div className="md:flex lg:gap-5 md:gap-3.5 items-center justify-center hidden xl:gap-7">
          {[{ name: "Shop", path: "/Shop" }].map((route) => (
            <NavLink
              key={route.name}
              to={route.path}
              className={({ isActive }) =>
                `relative uppercase px-3 py-1 rounded-md transition-colors duration-200 text-lg ${
                  isActive ? "font-extrabold" : ""
                }`
              }
            >
              {route.name}
            </NavLink>
          ))}
          <button
            className={`relative uppercase flex items-center gap-1 px-3 py-1 text-lg ${
              isSearchOpen ? "font-extrabold" : ""
            }`}
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
          >
            SEARCH
          </button>
        </div>

        {/* Brand Logo */}
        <NavLink
          to="/"
          className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2"
        >
          <h1 className="text-xl md:text-lg xl:text-2xl lg:text-xl tracking-tighter font-extrabold transition-colors uppercase">
            Thread & Throne
          </h1>
        </NavLink>

        {/* Right Navigation Links */}
        <div className="md:flex md:gap-3.5 lg:gap-5 xl:gap-7 items-center justify-center hidden">
          {userType === "seller" && (
            <NavLink
              to="/store"
              className={({ isActive }) =>
                `relative uppercase px-3 py-1 flex gap-1 items-center justify-center rounded-md transition-colors duration-200 text-lg ${
                  isActive ? " font-extrabold" : ""
                }`
              }
            >
              Store Hub
            </NavLink>
          )}
          <div className="relative">
            <NavLink
              to="/account"
              className={({ isActive }) =>
                `relative uppercase px-3 py-1 flex gap-1 items-center justify-center rounded-md transition-colors duration-200 text-lg ${
                  isActive ? " font-extrabold" : ""
                }`
              }
            >
              Account
            </NavLink>
          </div>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative uppercase px-3 py-1 flex gap-1 items-center justify-center rounded-md transition-colors duration-200 text-lg ${
                isActive ? " font-extrabold" : ""
              }`
            }
          >
            CART
          </NavLink>
        </div>
      </div>
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}

function SideNavigationBar({ sideBar, onClose, setIsSearchOpen, userType }) {
  const navigate = useNavigate();
  const [cartItemsCount, setCartItemsCount] = useState(0);
  return (
    <div
      className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
        sideBar ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Overlay with smooth transition */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          sideBar ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar container with slide-in effect */}
      <div
        className={`relative h-full w-[320px] max-w-xs bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl flex flex-col transition-transform duration-300 ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header section with user info */}
        <div className="p-6 relative border-b border-gray-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
              {/* {userName ? userName.charAt(0).toUpperCase() : "A"} */}
              Aryan
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">
                {/* Hey {userName || "Aryan"} */}Aryan
              </h1>
              <p className="text-gray-400 text-sm">
                {/* {userEmail || "user@example.com"} */}user@example.com
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Navigation links with icons and hover effects */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {[
            {
              name: "Home",
              path: "/",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z" />
                </svg>
              ),
            },
            {
              name: "Shop",
              path: "/shop",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM13.0049 13H11.0049V17H13.0049V13ZM9.00488 13H7.00488V17H9.00488V13ZM17.0049 13H15.0049V17H17.0049V13ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z" />
                </svg>
              ),
            },
            {
              name: "Search",
              onClick: () => setIsSearchOpen(true),
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM12.1779 7.17624C11.8055 7.06167 11.41 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15C13.2091 15 15 13.2091 15 11C15 10.59 14.9383 10.1945 14.8238 9.82212C14.5102 10.5166 13.8115 11 13 11C11.8954 11 11 10.1046 11 9C11 8.18846 11.4834 7.48982 12.1779 7.17624Z" />
                </svg>
              ),
            },
            {
              name: "Account",
              path: "/account",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" />
                </svg>
              ),
            },
            {
              name: "Cart",
              path: "/cart",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z" />
                </svg>
              ),
              badge: cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              ),
            },
            {
              name: "Wishlist",
              path: "/wishlist",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.name} className="relative">
              {item.path ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 text-gray-300 hover:text-white hover:bg-gray-700/50 ${
                      isActive ? "bg-indigo-900/50 text-white font-medium" : ""
                    }`
                  }
                >
                  <span className="text-indigo-400">{item.icon}</span>
                  <span>{item.name}</span>
                  {item.badge}
                </NavLink>
              ) : (
                <button
                  onClick={item.onClick}
                  className="w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 text-gray-300 hover:text-white hover:bg-gray-700/50 text-left"
                >
                  <span className="text-indigo-400">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              )}
            </div>
          ))}

          {/* Seller-specific section */}
          {userType === "seller" && (
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="px-4 text-xs uppercase text-gray-500 font-semibold mb-2">
                Seller Dashboard
              </h3>
              <NavLink
                to="/store"
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-900/50 text-white font-medium"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  className="text-yellow-400"
                >
                  <path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 4H21V5H3V4Z" />
                </svg>
                <span>Store Hub</span>
              </NavLink>
              <NavLink
                to="/store/orders"
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-900/50 text-white font-medium"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  className="text-green-400"
                >
                  <path d="M22 8V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V8H22ZM22 6H2V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6ZM7 12H9V14H7V12ZM11 12H13V14H11V12ZM15 12H17V14H15V12Z" />
                </svg>
                <span>Orders</span>
              </NavLink>
            </div>
          )}
        </div>

        {/* Footer section with settings and logout */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM16 16V13H9V11H16V8L21 12L16 16Z" />
              </svg>
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
