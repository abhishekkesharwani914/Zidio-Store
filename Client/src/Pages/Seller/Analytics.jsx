import {AnalyticsChart} from "../../index.js";

const Analytics = () => {
  const metrics = [
    { title: "Conversion Rate", value: "3.2%", change: "+0.5%", trend: "up" },
    {
      title: "Avg. Order Value",
      value: "$89.54",
      change: "+$12.30",
      trend: "up",
    },
    { title: "Return Rate", value: "1.8%", change: "-0.3%", trend: "down" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Business Analytics</h2>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-sm transition-colors">
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="text-sm font-medium text-gray-500">
              {metric.title}
            </h3>
            <div className="flex items-end justify-between mt-2">
              <p className="text-2xl font-semibold text-gray-800">
                {metric.value}
              </p>
              <p
                className={`text-sm flex items-center ${
                  metric.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {metric.change}
                <svg
                  className={`w-4 h-4 ml-1 ${
                    metric.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      metric.trend === "up" ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"
                    }
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="h-96">
          <AnalyticsChart />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
