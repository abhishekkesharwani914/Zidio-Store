import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button } from "../../index.js";
import { useDispatch } from "react-redux";
import { login } from "../../Store/authSlice.js";

const SignPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data) {
      dispatch(
        login({ userType: data.accountType, userData: data })
      );
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center text-white h-screen">
      {/* Main container */}
      <div className="w-full overflow-hidden shadow-lg flex ">
        {/* Left side - T-shirt image */}
        <div className="w-1/2 h-full relative overflow-hidden hidden sm:block">
          <img
            src="https://images.unsplash.com/photo-1523585298601-d46ae038d7d3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Trendy T-shirt"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center w-full h-full px-12 ">
            <h2 className="text-white text-4xl font-extrabold text-center tracking-tighter uppercase ">
              Welcome to DUKE & VILLAN
            </h2>
            <h3 className="text-white text-xl text-center mt-2">
              Buy the latest trends or sell your own products — all in one
              place.
            </h3>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="sm:w-1/2 w-full h-full bg-black lg:px-40 px-20 flex flex-col justify-center border-r border-t border-b border-gray-800">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-1">Log In</h1>
            <p className="text-gray-500 text-sm">
              Access your account to check orders & offers
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              autocomplete="email"
              error={errors}
              name="email"
            />
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
              autocomplete="password"
              error={errors}
              name="password"
            />
            <div>
              <select
                {...register("accountType", { required: true })}
                className="bg-black w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-400"
              >
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            <Button children="Login" type="submit" />

            {/* 
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-500">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-orange-500 rounded border-gray-300 mr-2"
                />
                Remember me
              </label>
              <a href="#" className="text-orange-500 hover:underline">
                Forgot password?
              </a>
            </div> */}
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-500">
              New to DUKE & VILLAN?
              <Link
                to="/accounts/signup"
                className="text-blue-500 font-semibold hover:underline ml-2"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
