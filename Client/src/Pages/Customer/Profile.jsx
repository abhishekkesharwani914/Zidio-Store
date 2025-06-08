import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../index.js";
import { updateUser } from "../../api/userDataApi.js";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { fetchData } from "./Dashboard.jsx";
import { update } from "../../Store/authSlice.js";

function Profile() {
  const userId = useSelector((state) => state.auth.userData?.id);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchData(userId);
      if (userData) {
        dispatch(update(userData));
      }
    };
    getUser();
  }, [isEdit]);

  const userData = useSelector((state) => state.auth.userData);
  const [profilePic, setProfilePic] = useState(userData?.profilePic || "");

  // Form state
  const [formData, setFormData] = useState({
    username: userData?.userName || "",
    name: userData?.name || "",
    email: userData?.email || "",
    phone: userData?.phone || "", // Changed from 'mobile' to 'phone' to match backend
    profilePic: userData?.profilePic || "",
  });

  const [originalData, setOriginalData] = useState({ ...formData });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create payload with only changed fields
    const changedFields = {};
    for (const key in formData) {
      if (formData[key] !== originalData[key]) {
        changedFields[key] = formData[key];
      }
    }

    // Skip API call if no changes
    if (Object.keys(changedFields).length === 0) {
      setIsEdit(false);
      return;
    }

    // Transform data structure to match backend expectations
    const payload = {
      ...changedFields,
      userId: userId,
    };

    const [response, error] = await updateUser(payload);
    console.log(response);
    if (error) {
      toast.error("Update failed:", error);
      return;
    }
    if (response) {
      toast.success(response?.message);
    }

    setIsEdit(false);
    setOriginalData(formData);
  };

  const toggleEdit = () => {
    if (isEdit) {
      // Reset to original data when canceling
      setFormData(originalData);
      setProfilePic(originalData.profilePic);
    }
    setIsEdit(!isEdit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      setProfilePic(ev.target.result);
      setFormData((prev) => ({ ...prev, profilePic: ev.target.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-10 min-h-screen py-10 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tighter drop-shadow-lg">
        My Profile
      </h1>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-center w-full max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="relative group">
          <div className="w-40 h-40 md:w-52 md:h-52 bg-neutral-800 rounded-full overflow-hidden shadow-xl border-4 border-white flex items-center justify-center">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-black bg-yellow-400 font-extrabold text-6xl">
                {userData?.userName?.charAt(0).toUpperCase() || "?"}
              </div>
            )}
            {isEdit && (
              <>
                <label
                  htmlFor="profile-upload"
                  className="absolute bottom-3 right-3 bg-yellow-400 text-black rounded-full p-2 shadow-lg cursor-pointer hover:bg-yellow-300 transition-colors flex items-center"
                  title="Change Profile Picture">
                  <FaCamera size={18} />
                  <input
                    id="profile-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                  <span className="text-xs text-white font-semibold">Edit</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Profile Form */}
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-neutral-900 rounded-2xl shadow-lg p-6 md:p-10 border border-yellow-400/10">
            {[
              { field: "username", label: "Username" },
              { field: "name", label: "Full Name" },
              { field: "email", label: "Email", type: "email" },
              { field: "phone", label: "Phone", type: "tel" }, // Changed from 'mobile' to 'phone'
            ].map(({ field, label, type = "text" }) => (
              <div key={field} className="space-y-2">
                <label className="block text-sm font-medium text-neutral-300">
                  {label}
                </label>
                <input
                  type={type}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  readOnly={!isEdit}
                  className={`w-full rounded-lg bg-neutral-800 text-white p-3 ${
                    isEdit
                      ? "border border-neutral-600 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                      : "border-none bg-transparent p-0"
                  }`}
                />
              </div>
            ))}

            <div className="flex items-center justify-center gap-4 mt-6">
              {isEdit ? (
                <>
                  <Button type="button" className="w-32" onclick={toggleEdit}>
                    Cancel
                  </Button>
                  <Button type="submit" className="w-32">
                    Save
                  </Button>
                </>
              ) : (
                <Button type="button" className="w-40" onclick={toggleEdit}>
                  Edit Profile
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default Profile;
