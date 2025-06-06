import { OrderTable } from "../../index.js";

const SellerOrders = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Order Management</h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            Export
          </button>
          <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-sm transition-colors">
            Create Order
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <OrderTable />
      </div>
    </div>
  );
};

export default SellerOrders;
