import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (

    <div className="text-white w-60 h-full border-r border-gray-800 px-5 py-8 flex flex-col overflow-y-auto scrollbar-hide">
      {/* Brand Logo */}
      <div className="text-center mb-8">
        <h1 className=" font-bold tracking-tight">
          <span className="text-2xl">Thread</span>
          <span className="text-lg text-yellow-400 ml-1 mr-1">&</span>
          <span className="text-2xl">Throne</span>
        </h1>
      </div>

      {/* User Profile */}
      <div className="flex flex-col items-center mb-8 p-4 rounded-xl">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center mb-3 shadow-lg">
          <span className="text-xl font-bold text-gray-900">AM</span>
        </div>
        <h2 className="text-lg font-semibold">Aryan Mishra</h2>
        <div className="flex w-full justify-between text-center">
          <div className="flex-1">
            <p className="text-yellow-400 font-bold">$1.2K</p>
            <p className="text-xs text-gray-400">7d Revenue</p>
          </div>
          <div className="border-l border-gray-700"></div>
          <div className="flex-1">
            <p className="text-green-400 font-bold">24</p>
            <p className="text-xs text-gray-400">New Orders</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <button
          onClick={() => navigate("add-product")}
          className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-gray-900 font-medium py-2.5 px-4 rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-yellow-500/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
          </svg>
          New Product
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1.5">
        {[
          {
            path: "/store",
            exact: true,
            name: "Overview",
            icon: "M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z",
            badge: null,
          },
          {
            path: "/store/products",
            name: "Products",
            icon: "M20.5021 5.92225 12 1 3.49793 5.92225 12 10.8445 20.5021 5.92225ZM2.5 7.6555V17.5L11 22.4211V12.5765L2.5 7.6555ZM13 22.4211 21.5 17.5V7.6555L13 12.5765V22.4211Z",
            badge: "12",
          },
          {
            path: "/store/orders",
            name: "Orders",
            icon: "M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z",
            badge: "5+",
          },
          {
            path: "/store/inventory",
            name: "Inventory",
            icon: "M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9ZM9 12V18H11V12H9ZM13 12V18H15V12H13Z",
            badge: "3 Low",
            warning: true,
          },
          {
            path: "/store/reviews",
            name: "Reviews",
            icon: "M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z",
            badge: "4.8★",
            success: true,
          },
          {
            path: "/store/customers",
            name: "Customers",
            icon: "M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18ZM12 20C11.4477 20 11 20.4477 11 21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21C13 20.4477 12.5523 20 12 20Z",
            badge: "1.2K",
          },
          {
            path: "/store/analytics",
            name: "Analytics",
            icon: "M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z",
            badge: null,
          },
        ].map((item, index) => (
          <NavLink
            end={item.exact}
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `flex items-center justify-between p-3 rounded-xl transition-all group ${
                isActive
                  ? "bg-gradient-to-r from-amber-500/20 to-yellow-600/10 border border-amber-500/30 text-amber-100 font-semibold shadow-lg"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white border border-transparent"
              }`
            }
          >
            <div className="flex items-center space-x-3">
              <div className={`p-1 rounded-lg`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d={item.icon} />
                </svg>
              </div>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            {item.badge && (
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  item.warning
                    ? "bg-amber-500/10 text-amber-400"
                    : item.success
                    ? "bg-green-500/10 text-green-400"
                    : "bg-gray-700/50 text-gray-300"
                }`}
              >
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-4 border-t border-gray-800 space-y-3">
        <div className="flex items-center justify-between text-xs text-gray-400 p-2 bg-gray-800/30 rounded-lg">
          <span>System Status</span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
            Operational
          </span>
        </div>

        <button className="w-full flex items-center justify-between p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 16V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V16H22ZM20.333 14H3.667L4.667 5H19.333L20.333 14ZM16 3V1H14V3H8V1H6V3H5C3.89543 3 3 3.89543 3 5V15H21V5C21 3.89543 20.1046 3 19 3H16ZM10 11V9H8V11H10ZM14 11V9H12V11H14Z" />
            </svg>
            <span className="text-sm">Support Center</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
