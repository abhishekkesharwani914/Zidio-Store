import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SearchBar } from "../../index.js";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
      <SideNavigationBar sideBar={sideBar} onClose={() => setSideBar(false)} />

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
          {[{ name: "Shop", path: "/mens-wear" }].map((route) => (
            <NavLink
              key={route.name}
              to={route.path}
              className={({ isActive }) =>
                `relative uppercase px-3 py-1 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "text-indigo-300 font-semibold bg-white/10"
                    : "hover:text-indigo-200"
                }`
              }
            >
              {route.name}
            </NavLink>
          ))}
          <button
            className="relative uppercase flex items-center gap-1 hover:text-indigo-200 transition-colors px-3 py-1 rounded-md"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" stroke="currentColor" />
              <line
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
                stroke="currentColor"
              />
            </svg>
            SEARCH
          </button>
        </div>

        {/* Brand Logo */}
        <NavLink to="/" className="flex items-center justify-center">
          <h1 className="rubik-glitch text-xl md:text-lg xl:text-2xl lg:text-xl tracking-widest font-extrabold hover:text-indigo-300 transition-colors">
            DUKE & VILLAN
          </h1>
        </NavLink>

        {/* Right Navigation Links */}
        <div className="md:flex md:gap-3.5 lg:gap-5 xl:gap-7 items-center justify-center hidden">
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen((v) => !v)}
              className="flex items-center focus:outline-none group"
              aria-label="Profile menu"
              tabIndex={0}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium shadow-md group-hover:from-indigo-600 group-hover:to-purple-700 transition-all">
                JD
              </div>
              <svg
                className="ml-1 w-4 h-4 text-indigo-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Profile Dropdown */}
            <div
              className={`absolute right-0 mt-5 bg-[#1d1d1d] rounded-lg shadow-xl py-1 w-48 z-50 transition-all duration-200 ${
                isProfileOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible pointer-events-none"
              }`}
              tabIndex={-1}
            >
              {[
                {
                  name: "Profile",
                  path: "/profile",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                    >
                      <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
                    </svg>
                  ),
                },
                {
                  name: "WishList",
                  path: "/wishlist",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                    >
                      <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path>
                    </svg>
                  ),
                },
              ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="px-4 py-2 text-sm flex gap-3 items-center hover:bg-gray-700/50 transition-colors"
                >
                  <span className="text-indigo-300">{item.icon}</span>
                  {item.name}
                </NavLink>
              ))}
              <button
                type="button"
                className="px-4 py-2 w-full text-sm flex gap-3 items-center hover:bg-gray-700/50 transition-colors border-t border-gray-700 text-red-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"></path>
                </svg>
                Log In
              </button>
            </div>
          </div>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative uppercase px-3 py-1 rounded-md transition-colors duration-200 ${
                isActive
                  ? "text-indigo-300 font-semibold bg-white/10"
                  : "hover:text-indigo-200"
              }`
            }
          >
            <svg
              className="w-5 h-5 inline mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            CART
          </NavLink>
        </div>
      </div>
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}

function SideNavigationBar({ sideBar, onClose }) {
  return (
    <div
      className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
        sideBar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative h-full w-3/4 max-w-xs bg-gray-900 shadow-xl flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2 mt-6 mb-8 px-6">
          <span className="rubik-glitch text-lg font-bold text-indigo-300">
            DUKE & VILLAN
          </span>
        </div>
        <button
          onClick={onClose}
          className="self-end p-2 rounded-full hover:bg-gray-800 transition-colors absolute top-2 right-2"
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
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col gap-6 mt-10 px-6">
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/mens-wear" },
          ].map((route) => (
            <NavLink
              key={route.name}
              to={route.path}
              className="text-xl uppercase py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {route.name}
            </NavLink>
          ))}
          <button
            className="text-xl uppercase py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-left flex items-center gap-2"
            aria-label="Open search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" stroke="currentColor" />
              <line
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
                stroke="currentColor"
              />
            </svg>
            SEARCH
          </button>
          <NavLink
            to="/cart"
            className="text-xl uppercase py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            CART
          </NavLink>
        </div>
        <div className="mt-auto pt-6 border-t border-gray-800 px-6 pb-6">
          <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium">
              JD
            </div>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-400">Premium Member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
