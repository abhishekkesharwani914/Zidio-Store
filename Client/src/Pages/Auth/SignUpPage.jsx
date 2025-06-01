import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input, Button } from "../../index.js";
import { userRegister } from "../../api/authApi.js";
import { ToastContainer, toast, Bounce } from "react-toastify";
const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    
    const [response, error] = await userRegister(data);
    console.log(response);
    console.log(data);

    if (response?.success) {
      toast.success("Account created successfully!");
    }
    if (response?.message === "User already exist") {
      toast.info("User already exists. Please log in instead.");
    }
    if (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center text-white h-screen">
      <div className="flex w-full overflow-hidden shadow-lg">
        {/* Left side - T-shirt image */}
        <div className="w-1/2 h-full relative overflow-hidden hidden sm:block">
          <img
            src="https://images.unsplash.com/photo-1523585298601-d46ae038d7d3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Trendy T-shirt"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center flex-col w-full h-full px-12">
            <h2 className="text-white  font-extrabold text-center px-4 uppercase text-5xl tracking-tighter">
              Join DUKE & VILLAN
            </h2>
            <h3 className="text-white text-xl text-center px-4">
              Buy the latest trends or sell your own products — all in one
              place.
            </h3>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="sm:w-1/2 w-full h-full bg-black px-40 flex flex-col justify-center border-r border-t border-b border-gray-800">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-1">Sign Up</h1>
            <p className="text-gray-500 text-sm">
              Create an account to start shopping
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            {/* Username Field */}
            <Input
              type="userName"
              placeholder="UserName"
              {...register("userName", {
                required: "UserName is required",
                minLength: {
                  value: 3,
                  message: "UserName must be at least 3 characters long",
                },
              })}
              error={errors}
              name="userName"
            />

            {/* Email Field */}
            <Input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "Email must be a valid @gmail.com address",
                },
              })}
              error={errors}
              name="email"
            />

            {/* Password Field */}
            <Input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must contain at least one letter and one number",
                },
              })}
              error={errors}
              name="password"
            />

            <div>
              <select
                {...register("userType", { required: true })}
                className="bg-black w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-400">
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            {/* Submit Button */}
            <Button children="Create Account" type="submit" />
          </form>

          <div className="mt-4 text-center text-sm">
            <p className="text-gray-500">
              Already have an account?
              <Link
                to="/accounts/login"
                className="text-blue-500 font-semibold hover:underline ml-2">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SignupPage;
