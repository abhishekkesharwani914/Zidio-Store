import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import image from "../../assets/image.jpg";
import { useForm } from "react-hook-form";
import { Input, Button } from "../../index.js";

function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "aryan3_",
      email: "aryan@gmail.com",
      firstName: "Aryan",
      lastName: "Mishra",
      gender: "male",
    },
  });
  const [isEdit, setIsEdit] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setIsEdit(false);
  };

  const editHandler = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div className="flex flex-col md:gap-10 overflow-hidden">
      <h1 className="text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
        My Profile
      </h1>
      <div className="flex gap-10 max-sm:flex-col justify-center items-center ">
        <div className="relative max-w-fit ">
          <div className="w-52 h-52 bg-blue-500 rounded-full relative overflow-hidden shadow-lg border-4 border-white">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <button
              className="absolute bottom-3 right-3  bg-opacity-80 rounded-full p-2 shadow hover:bg-blue-500 hover:text-white transition-colors"
              title="Edit Profile Picture"
            >
              <FaCamera size={18} />
            </button>
          </div>
        </div>
        <div className=" w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 relative text-xl"
          >
            {/* Username Field */}
            <Input
              label="Username:"
              type="username"
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters long",
                },
              })}
              error={errors}
              name="username"
              readOnly={isEdit ? false : true}
              className={
                isEdit
                  ? "px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                  : "border-none p-0"
              }
            />

            <Input
              label="Email:"
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
              readOnly={isEdit ? false : true}
              className={
                isEdit
                  ? "px-4  focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  : "border-none p-0"
              }
            />
            <Input
              label="First Name"
              type="text"
              placeholder="Enter Your first name"
              {...register("firstName", {
                required: "first name is required",
              })}
              error={errors}
              name="firstName"
              readOnly={isEdit ? false : true}
              className={
                isEdit
                  ? "px-4  focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  : "border-none p-0"
              }
            />
            <Input
              label="Last Name"
              type="text"
              placeholder="Enter Your last name"
              {...register("lastName", {
                required: "last name is required",
              })}
              error={errors}
              name="lastName"
              readOnly={isEdit ? false : true}
              className={
                isEdit
                  ? "px-4  focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  : "border-none p-0"
              }
            />
            {/* Gender Field */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">
                Gender:
              </label>
              <div className="flex gap-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="male"
                    {...register("gender", { required: "Gender is required" })}
                    // disabled={!isEdit}
                    className="accent-blue-600"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="female"
                    {...register("gender", { required: "Gender is required" })}
                    disabled={!isEdit}
                    className="accent-blue-600"
                  />
                  <span>Female</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="other"
                    {...register("gender", { required: "Gender is required" })}
                    disabled={!isEdit}
                    className="accent-blue-600"
                  />
                  <span>Other</span>
                </label>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>

            {isEdit && (
              <div className="flex items-center justify-center gap-3">
                <Button
                  children="Cancel"
                  type="button"
                  className="w-40"
                  onclick={editHandler}
                />
                <Button children="Save" type="submit" className="w-40" />
              </div>
            )}
          </form>
          {!isEdit && (
            <div className="flex items-center justify-center mt-5">
              <Button children="Edit" onclick={editHandler} className="w-40 " />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
