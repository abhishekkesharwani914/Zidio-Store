import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchBar } from "../../index.js";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/authSlice.js";
import { userLogout } from "../../api/authApi.js";
import { toast } from "react-toastify";
import { persistor } from "../../Store/store.js";
import { Button } from "../../index.js";

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userType = useSelector((state) => state.auth.userType);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const [sideBar, setSideBar] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const sideBarHandler = () => setSideBar(!sideBar);
  const [scrolled, setScrolled] = useState(false);

  const handleLogout = async () => {
    const [response, error] = await userLogout();
    if (error) {
      toast.error("Logout failed. Please try again.");
    }
    dispatch(logout());
    persistor.purge(); // Clear persisted state
  };
  return (
    <div className="flex justify-center text-white items-center fixed top-0 w-full z-50">
      {/* Sidebar for mobile */}
      <SideNavigationBar
        sideBar={sideBar}
        onClose={() => setSideBar(false)}
        setIsSearchOpen={setIsSearchOpen}
        userType={userType}
        handleLogout={handleLogout}
        userData={userData}
        isAuthenticated={isAuthenticated}
      />

      <div
        className={`flex justify-between w-full items-center transition-all duration-300 px-5 py-3`}>
        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center cursor-pointer md:hidden p-2 rounded-md hover:bg-yellow-400/20 transition-colors"
          onClick={sideBarHandler}
          aria-label="Toggle menu">
          <svg
            className="w-7 h-7 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
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
                `relative uppercase px-3 py-1 rounded-md transition-colors duration-200 text-lg hover:text-yellow-400 ${
                  isActive ? "font-extrabold text-yellow-400" : ""
                }`
              }>
              {route.name}
            </NavLink>
          ))}
          <button
            className={`relative uppercase flex items-center gap-1 px-3 py-1 text-lg hover:text-yellow-400 ${
              isSearchOpen ? "font-extrabold text-yellow-400" : ""
            }`}
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search">
            SEARCH
          </button>
        </div>

        {/* Brand Logo */}
        <NavLink
          to="/"
          className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-xl md:text-lg xl:text-2xl lg:text-xl tracking-tighter font-extrabold transition-colors uppercase text-yellow-400 hover:text-white">
            Thread & Throne
          </h1>
        </NavLink>

        {/* Right Navigation Links */}
        <div className="md:flex md:gap-3.5 lg:gap-5 xl:gap-7 items-center justify-center hidden">
          {userType === "seller" && isAuthenticated && (
            <NavLink
              to="/store"
              className={({ isActive }) =>
                `relative uppercase px-3 py-1 flex gap-1 items-center justify-center rounded-md transition-colors duration-200 text-lg hover:text-yellow-400 ${
                  isActive ? "font-extrabold text-yellow-400" : ""
                }`
              }>
              Store Hub
            </NavLink>
          )}

          {isAuthenticated ? (
            <>
              {/* Account Link with Avatar for logged in users */}
              <div className="relative group">
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-1 rounded-full transition-colors duration-200 ${
                      isActive ? "font-extrabold text-yellow-400" : ""
                    }`
                  }>
                  {userData?.avatar ? (
                    <img
                      src={userData.avatar}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full object-cover border-2 border-yellow-400 hover:border-white transition-colors"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm border-2 border-yellow-400 hover:border-white transition-colors">
                      {userData?.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                  <span className="uppercase text-lg hover:text-yellow-400">
                    Account
                  </span>
                </NavLink>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="uppercase px-3 py-1 flex gap-1 items-center justify-center rounded-md transition-colors duration-200 text-lg hover:text-yellow-400">
                LOGOUT
              </button>
            </>
          ) : (
            <>
              {/* Login Button for guests */}
              <NavLink
                to="/accounts/login"
                className={({ isActive }) =>
                  `relative uppercase px-3 py-1 flex gap-1 items-center justify-center rounded-md transition-colors duration-200 text-lg hover:text-yellow-400 ${
                    isActive ? "font-extrabold text-yellow-400" : ""
                  }`
                }>
                LOGIN
              </NavLink>

              {/* Register Button for guests */}
              <NavLink
                to="/accounts/register"
                className={({ isActive }) =>
                  `relative uppercase px-3 py-1 flex gap-1 items-center justify-center rounded-md transition-colors duration-200 text-lg hover:text-yellow-400 ${
                    isActive ? "font-extrabold text-yellow-400" : ""
                  }`
                }>
                REGISTER
              </NavLink>
            </>
          )}

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative uppercase px-3 py-1 flex gap-1 items-center justify-center rounded-md transition-colors duration-200 text-lg hover:text-yellow-400 ${
                isActive ? "font-extrabold text-yellow-400" : ""
              }`
            }>
            CART
          </NavLink>
        </div>
      </div>
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
function SideNavigationBar({
  sideBar,
  onClose,
  setIsSearchOpen,
  handleLogout,
  userType,
  userData,
  isAuthenticated,
}) {
  const navigate = useNavigate();
  const navigationItems = [
    {
      name: "Home",
      path: "/",
      icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    },
    {
      name: "Shop",
      path: "/shop",
      icon: "M4 21h16v-2H4v2zM4 8h16V6H4v2zm16 4H4v2h16v-2z",
    },
    {
      name: "Search",
      onClick: () => {
        setIsSearchOpen(true);
        onClose();
      },
      icon: "M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-4.95-5.58-5.24A6.505 6.505 0 0 0 3.24 9.24c-.29 2.79 1.88 5.11 4.66 5.58a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    },
    {
      name: "Account",
      path: "/account",
      icon: "M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z",
    },
    {
      name: "Cart",
      path: "/cart",
      icon: "M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z",
    },
    {
      name: "Wishlist",
      path: "/wishlist",
      icon: "M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z",
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        sideBar
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          sideBar ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`relative h-full w-[320px] max-w-xs bg-black/95 shadow-2xl flex flex-col 
                   transition-transform duration-500 ease-out ${
                     sideBar ? "translate-x-0" : "-translate-x-full"
                   }`}>
        {/* User Profile Section */}
        {isAuthenticated && (
          <div className="p-6 relative border-b border-yellow-400/30">
            <div className="flex items-center gap-4 group">
              <div className="relative">
                {userData.avatar ? (
                  <img
                    src={userData.avatar}
                    alt={userData.username}
                    className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 
                             transition-all duration-300 group-hover:scale-105 group-hover:border-white"
                  />
                ) : (
                  <div
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 
                               flex items-center justify-center text-black font-bold text-2xl
                               transition-all duration-300 group-hover:scale-105">
                    {userData.username?.[0]?.toUpperCase()}
                  </div>
                )}
                <div
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full 
                             border-2 border-black animate-pulse"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-xl font-bold text-white truncate">
                  {userData.username}
                </h1>
                <p className="text-yellow-400/80 text-sm truncate">
                  {userData.email}
                </p>
              </div>
            </div>
          </div>
        )}
        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.path ? (
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300
                      ${
                        isActive
                          ? "text-yellow-400 font-medium"
                          : "text-white"
                      }`
                    }>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d={item.icon} />
                    </svg>
                    <span>{item.name}</span>
                  </NavLink>
                ) : (
                  <button
                    onClick={item.onClick}
                    className="w-full flex items-center gap-4 px-4 py-3 rounded-xl
                             text-white transition-all duration-300 hover:bg-white/5">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d={item.icon} />
                    </svg>
                    <span>{item.name}</span>
                  </button>
                )}
              </div>
            ))}
            {userType === "seller" && isAuthenticated && (
              <NavLink
                to="/store"
                className={({ isActive }) =>
                  `relative uppercase px-3 py-1 flex gap-1 items-center justify-center rounded-md transition-colors duration-200 text-lg hover:text-yellow-400 ${
                    isActive ? "font-extrabold text-yellow-400" : ""
                  }`
                }>
                Store Hub
              </NavLink>
            )}
          </nav>
        </div>

        {/* Footer Actions */}
        {isAuthenticated ? (
          <div className="p-6 border-t border-yellow-400/30">
            <Button
              onClick={() => {
                handleLogout();
                onClose();
              }}
              className="w-full py-3 px-6  "
              children="Logout"
            />
          </div>
        ) : (
          <div className="p-6 space-y-3 border-b border-yellow-400/30">
            <Button
              onClick={() => {
                navigate("accounts/login");
                onClose();
              }}
              className="w-full py-3 px-6"
              children="Sign In"
            />
            <Button
              onClick={() => {
                navigate("accounts/register");
                onClose();
              }}
              className="w-full py-3 px-6"
              children="Create Account"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
