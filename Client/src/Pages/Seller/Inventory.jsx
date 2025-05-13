import { InventoryTable } from "../../index.js";

const Inventory = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6 text-white">
        <h2 className="text-4xl uppercase tracking-tighter font-bold">Inventory Management</h2>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            Request Stock
          </button>
          <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-sm transition-colors">
            Update Inventory
          </button>
        </div>
      </div>

      <div className=" p-6 rounded-xl shadow-sm border border-gray-100">
        <InventoryTable />
      </div>
    </div>
  );
};

export default Inventory;
