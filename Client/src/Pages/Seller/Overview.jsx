import { OverviewChart } from "../../index.js";

const Overview = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,345",
      change: "+12%",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "New Orders",
      value: "156",
      change: "+8%",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    },
    {
      title: "Products",
      value: "42",
      change: "+3",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    },
    {
      title: "Customers",
      value: "1,234",
      change: "+5%",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    },
  ];

  return (
    <div className="text-white">
      <div className="flex items-center justify-between mb-6 ">
        <h2 className="text-4xl font-bold uppercase tracking-tighter">
          Dashboard Overview
        </h2>
        <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-sm transition-colors">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className=" p-6 rounded-xl shadow-sm border border-gray-400"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium ">{stat.title}</p>
                <p className="text-2xl font-semibold  mt-1">{stat.value}</p>
                <p className="text-sm text-yellow-400 mt-1 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  {stat.change}
                </p>
              </div>
              <div className="p-3 rounded-lg border border-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={stat.icon}
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className=" p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <h3 className="text-xl uppercase tracking-tighter font-semibold  mb-4">
            Sales Performance
          </h3>
          <div className="h-80">
            <OverviewChart />
          </div>
        </div>
        <div className=" p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full border border-gray-400 flex items-center justify-center text-amber-600 font-medium mt-1">
                  {String.fromCharCode(64 + item)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">
                    New order #{1000 + item}
                  </p>
                  <p className="text-xs ">
                    {item} hour{item !== 1 ? "s" : ""} ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
