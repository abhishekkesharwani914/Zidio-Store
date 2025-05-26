import React, { useState, useCallback } from "react";

const FileUploaded = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    if (files) {
      const imageUrls = files.map((file) => URL.createObjectURL(file));
      setImage(imageUrls);
      console.log(imageUrls);
    }
  };
  console.log(image);

  return (
    <div className="p-4">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      {image &&
        image.map((image) => (
          <div className="mt-4">
            <img
              src={image}
              alt="Selected"
              className="max-w-full h-auto rounded"
            />
          </div>
        ))}
    </div>
  );
};

export default FileUploaded;
