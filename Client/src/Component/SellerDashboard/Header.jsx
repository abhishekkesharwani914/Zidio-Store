import { FiSearch, FiBell, FiSettings } from 'react-icons/fi';

const Header = () => {
  return (
    <header className=" shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="relative w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <FiBell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-amber-500 rounded-full"></span>
          </button>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FiSettings className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white font-medium">
              AM
            </div>
            <span className="hidden md:inline text-sm font-medium text-gray-700">Aryan</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;