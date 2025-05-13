import { useState } from 'react';

const InventoryTable = () => {
  const [inventory, setInventory] = useState([
    { id: 1, product: 'Premium T-Shirt', sku: 'TSH-PREM-001', stock: 45, lowStock: 10 },
    { id: 2, product: 'Classic Jeans', sku: 'JEA-CLAS-002', stock: 12, lowStock: 5 },
    { id: 3, product: 'Running Shoes', sku: 'SHO-RUNN-003', stock: 8, lowStock: 5 },
    { id: 4, product: 'Wireless Headphones', sku: 'HEA-WIRE-004', stock: 0, lowStock: 3 },
    { id: 5, product: 'Leather Wallet', sku: 'WAL-LEAT-005', stock: 23, lowStock: 5 }
  ]);

  return (
    <div className="overflow-x-auto text-white">
      <table className="min-w-full ">
        <thead className="">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Product
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              SKU
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Current Stock
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium  uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="">
          {inventory.map((item) => (
            <tr key={item.id} className="hover:border border-gray-400 rounded-xl overflow-hidden">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {item.product}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {item.sku}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {item.stock}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.stock === 0 ? (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Out of Stock
                  </span>
                ) : item.stock <= item.lowStock ? (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                    Low Stock
                  </span>
                ) : (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    In Stock
                  </span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-amber-600 hover:text-amber-900">Restock</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;