import { useForm } from "react-hook-form";
import {
  FiUpload,
  FiDollarSign,
  FiTag,
  FiAlignLeft,
  FiBox,
} from "react-icons/fi";

// Batman logo SVG component
const BatmanLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 0c-70.7 0-128 57.3-128 128 0 70.7 57.3 128 128 128 70.7 0 128-57.3 128-128C384 57.3 326.7 0 256 0zm0 208c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" />
    <path d="M256 256c-70.7 0-128 57.3-128 128v96c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-96c0-70.7-57.3-128-128-128z" />
    <path d="M96 160h32v32H96zM384 160h32v32h-32z" />
  </svg>
);

// Batwing divider SVG
const BatwingDivider = () => (
  <svg
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className="w-full h-16"
  >
    <path
      d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
      className="fill-current text-yellow-400"
    ></path>
  </svg>
);

const AddProductPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your product submission logic here
  };

  const productImage = watch("productImage");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Batman-themed header */}
      <div className="bg-black py-6 px-8 shadow-lg">
        <div className="flex items-center space-x-4">
          <BatmanLogo className="h-10 w-10 text-yellow-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            BATMAN PRODUCTS
          </h1>
        </div>
      </div>

      <BatwingDivider />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-yellow-500">
          <div className="bg-gradient-to-r from-black to-gray-900 p-6 border-b border-yellow-500">
            <h2 className="text-2xl font-bold text-yellow-400 flex items-center">
              <FiBox className="mr-2" />
              Add New Bat-Product
            </h2>
            <p className="text-gray-400">
              Fill in the details of your new Gotham-inspired product
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            {/* Product Image Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-yellow-400">
                Product Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-md bg-gray-900">
                <div className="space-y-1 text-center">
                  {productImage ? (
                    <img
                      src={URL.createObjectURL(productImage[0])}
                      alt="Preview"
                      className="mx-auto h-40 object-contain"
                    />
                  ) : (
                    <svg
                      className="mx-auto h-12 w-12 text-gray-500"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <div className="flex text-sm text-gray-400">
                    <label
                      htmlFor="productImage"
                      className="relative cursor-pointer bg-gray-800 rounded-md font-medium text-yellow-500 hover:text-yellow-400 focus-within:outline-none"
                    >
                      <span className="flex items-center">
                        <FiUpload className="mr-1" />
                        Upload an image
                      </span>
                      <input
                        id="productImage"
                        name="productImage"
                        type="file"
                        className="sr-only"
                        {...register("productImage", {
                          required: "Product image is required",
                        })}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
              </div>
              {errors.productImage && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.productImage.message}
                </p>
              )}
            </div>

            {/* Product Name */}
            <div className="space-y-2">
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-yellow-400"
              >
                <FiTag className="inline mr-1" />
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                className={`block w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                  errors.productName ? "border-red-500" : "border-gray-600"
                } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                placeholder="e.g. Batarang Mark II"
                {...register("productName", {
                  required: "Product name is required",
                  minLength: {
                    value: 3,
                    message: "Product name must be at least 3 characters",
                  },
                })}
              />
              {errors.productName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.productName.message}
                </p>
              )}
            </div>

            {/* Product Description */}
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-yellow-400"
              >
                <FiAlignLeft className="inline mr-1" />
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                className={`block w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                  errors.description ? "border-red-500" : "border-gray-600"
                } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                placeholder="Describe your product in detail..."
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                })}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Price and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price */}
              <div className="space-y-2">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-yellow-400"
                >
                  <FiDollarSign className="inline mr-1" />
                  Price
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400">$</span>
                  </div>
                  <input
                    type="number"
                    id="price"
                    step="0.01"
                    className={`block w-full pl-7 pr-12 py-3 rounded-lg bg-gray-700 border ${
                      errors.price ? "border-red-500" : "border-gray-600"
                    } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                    placeholder="0.00"
                    {...register("price", {
                      required: "Price is required",
                      min: {
                        value: 0.01,
                        message: "Price must be greater than 0",
                      },
                    })}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-400">USD</span>
                  </div>
                </div>
                {errors.price && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.price.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-yellow-400"
                >
                  Category
                </label>
                <select
                  id="category"
                  className={`block w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                    errors.category ? "border-red-500" : "border-gray-600"
                  } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                  defaultValue=""
                  {...register("category", {
                    required: "Category is required",
                  })}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="batarangs">Batarangs</option>
                  <option value="gadgets">Gadgets</option>
                  <option value="suits">Suits</option>
                  <option value="vehicles">Vehicles</option>
                  <option value="other">Other</option>
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.category.message}
                  </p>
                )}
              </div>
            </div>

            {/* Stock Quantity */}
            <div className="space-y-2">
              <label
                htmlFor="stock"
                className="block text-sm font-medium text-yellow-400"
              >
                Stock Quantity
              </label>
              <input
                type="number"
                id="stock"
                className={`block w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                  errors.stock ? "border-red-500" : "border-gray-600"
                } focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                placeholder="e.g. 100"
                {...register("stock", {
                  required: "Stock quantity is required",
                  min: {
                    value: 0,
                    message: "Stock cannot be negative",
                  },
                })}
              />
              {errors.stock && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.stock.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-black bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-200"
              >
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Bat-Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
