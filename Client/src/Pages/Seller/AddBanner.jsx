import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddBanner = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagesPreviews, setImagesPreviews] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      images: [],
    },
  });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);

    setImagesPreviews([]);

    files.forEach((file, index) => {
      const img = new Image();
      const url = URL.createObjectURL(file);

      img.onload = () => {
        setImagesPreviews((prev) => [
          ...prev,
          {
            url: url,
            width: img.width,
            height: img.height,
            name: file.name,
          },
        ]);
      };

      img.src = url;
    });

    setValue("images", files);
  };
  console.log(imagesPreviews);

  const removeImage = (index) => {
    const newImages = [...selectedImages];
    const newPreviews = [...imagesPreviews];

    newImages.splice(index, 1);
    newPreviews.splice(index, 1);

    setSelectedImages(newImages);
    setImagesPreviews(newPreviews);
    setValue("images", newImages);
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Add your product submission logic here
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="min-h-screen text-white">
      <div className=" rounded-2xl shadow-xl">
         <h2 className="text-4xl font-bold uppercase tracking-tighter">
          Add banners
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-8">
          {/* Product Images */}
          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-200">
              Product Images
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-40 border-2 border-dashed border-white rounded-lg cursor-pointer transition-all items-center justify-center">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="pt-1 text-lg tracking-wider text-gray-400">
                    Select images
                  </p>
                </div>
                <input
                  type="file"
                  className="opacity-0"
                  multiple
                  accept="image/*"
                  {...register("images", {
                    required: "At least one image is required",
                    onChange: (e) => handleImageChange(e),
                  })}
                />
              </label>
            </div>

            {/* Image Previews */}
            {imagesPreviews.length > 0 && (
              <div className="grid grid-cols-5 gap-4 mt-4">
                {imagesPreviews.map((preview, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={preview.url}
                      alt={`Preview ${index + 1}`}
                      className={`w-[${preview.width}px] h-[${preview.height}px] object-cover rounded-lg`}
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 rounded-xl font-medium
                       bg-gradient-to-r from-yellow-400 to-yellow-500 
                       hover:from-yellow-500 hover:to-yellow-600
                       text-black transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-yellow-400/50
                       disabled:opacity-50 disabled:cursor-not-allowed
                       flex items-center justify-center space-x-2">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Adding Product...</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span>Add Product</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddBanner;
