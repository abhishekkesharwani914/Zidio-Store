import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const AddNewAddress = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id); // This will log the ID from the URL
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      country: "India",
      firstName: "",
      lastName: "",
      mobile: "",
      pinCode: "",
      city: "",
      state: "",
      street: "",
      locality: "",
      landmark: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Add your submission logic here
    navigate("/user-account/address");
  };

  return (
    <div className=" w-[90%]">
      <h2 className="text-6xl font-bold text-white mb-6 uppercase tracking-tighter ">
        Add New Address
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Country (readonly) */}
        <div>
          <label className="block text-lg font-medium text-white mb-1">
            Country *
          </label>
          <input
            {...register("country")}
            readOnly
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-white"
          />
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-lg font-medium text-white mb-1">
              First Name *
            </label>
            <input
              {...register("firstName", { required: "First name is required" })}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
            />
            {errors.firstName && (
              <p className="mt-1 text-lg text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-lg font-medium text-white mb-1">
              Last Name *
            </label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
            />
            {errors.lastName && (
              <p className="mt-1 text-lg text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-lg font-medium text-white mb-1">
            Mobile Number *
          </label>
          <input
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^\+?[0-9\s-]+$/,
                message: "Invalid mobile number",
              },
            })}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.mobile ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
          />
          {errors.mobile && (
            <p className="mt-1 text-lg text-red-600">{errors.mobile.message}</p>
          )}
        </div>

        {/* PIN Code */}
        <div>
          <label className="block text-lg font-medium text-white mb-1">
            PIN Code *
          </label>
          <input
            {...register("pinCode", {
              required: "PIN code is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Must be 6 digits",
              },
            })}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.pinCode ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
          />
          {errors.pinCode && (
            <p className="mt-1 text-lg text-red-600">
              {errors.pinCode.message}
            </p>
          )}
        </div>

        {/* City & State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-lg font-medium text-white mb-1">
              City *
            </label>
            <input
              {...register("city", { required: "City is required" })}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
            />
            {errors.city && (
              <p className="mt-1 text-lg text-red-600">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-medium text-white mb-1">
              State *
            </label>
            <input
              {...register("state", { required: "State is required" })}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.state ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
            />
            {errors.state && (
              <p className="mt-1 text-lg text-red-600">
                {errors.state.message}
              </p>
            )}
          </div>
        </div>

        {/* Street Address */}
        <div>
          <label className="block text-lg font-medium text-white mb-1">
            Flat no/Building, Street name *
          </label>
          <input
            {...register("street", { required: "Street address is required" })}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.street ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
          />
          {errors.street && (
            <p className="mt-1 text-lg text-red-600">{errors.street.message}</p>
          )}
        </div>

        {/* Locality */}
        <div>
          <label className="block text-lg font-medium text-white mb-1">
            Area/Locality *
          </label>
          <input
            {...register("locality", { required: "Locality is required" })}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.locality ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
          />
          {errors.locality && (
            <p className="mt-1 text-lg text-red-600">
              {errors.locality.message}
            </p>
          )}
        </div>

        {/* Landmark (Optional) */}
        <div>
          <label className="block text-lg font-medium text-white mb-1">
            Landmark (Optional)
          </label>
          <input
            {...register("landmark")}
            placeholder="Nearby famous place, shop, etc."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Saving..." : "Save Address"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewAddress;
