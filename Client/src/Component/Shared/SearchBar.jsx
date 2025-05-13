import { useState, useEffect, useRef } from "react";

const SearchBar = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Classic White Tee",
      category: "Men",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      name: "Graphic Print T-Shirt",
      category: "Women",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    },
    {
      id: 3,
      name: "Oversized Black T-Shirt",
      category: "Unisex",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573",
    },
  ];

  // Simulate search delay
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  // Filter products
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setRecentSearches((prev) => [
        searchQuery,
        ...prev.filter((item) => item !== searchQuery).slice(0, 4),
      ]);
      onClose();
      console.log("Searching for:", searchQuery);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 pt-20 overflow-y-auto"
      ref={searchRef}
    >
      <div className="max-w-4xl mx-auto px-4 pb-10">
        {/* Search input */}
        <form onSubmit={handleSearch} className="relative mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for t-shirts, categories..."
              autoFocus
              className="w-full bg-gray-800 text-white text-lg p-5 pl-14 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <button
              type="submit"
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        </form>

        {/* Search content */}
        <div className="space-y-8">
          {searchQuery ? (
            isLoading ? (
              <div className="flex justify-center py-10">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <a
                    key={product.id}
                    href="#"
                    className="group flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-200"
                  >
                    <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <img
                        src={`${product.image}?w=200&h=200&auto=format&fit=crop`}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white truncate">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {product.category}
                      </p>
                      <p className="text-blue-400 font-medium mt-1">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-gray-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xl text-gray-300 mb-2">
                  No results found for "{searchQuery}"
                </p>
                <p className="text-gray-500">
                  Try different keywords or browse our categories
                </p>
              </div>
            )
          ) : (
            <>
              {/* Recent searches */}
              {recentSearches.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">
                    Recent Searches
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(search)}
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-white transition-colors duration-200 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular categories */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">
                  Popular Categories
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "All Products", icon: "🛍️" },
                    { name: "New Arrivals", icon: "🆕" },
                    { name: "Best Sellers", icon: "🔥" },
                    { name: "On Sale", icon: "💰" },
                  ].map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSearchQuery(category.name)}
                      className="p-5 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-200 flex flex-col items-center"
                    >
                      <span className="text-2xl mb-2">{category.icon}</span>
                      <span className="text-white">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending products */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">
                  Trending Now
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setSearchQuery(product.name)}
                      className="group relative rounded-xl overflow-hidden"
                    >
                      <img
                        src={`${product.image}?w=300&h=300&auto=format&fit=crop`}
                        alt={product.name}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <div>
                          <p className="text-white font-medium text-sm">
                            {product.name}
                          </p>
                          <p className="text-blue-300 text-sm">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
