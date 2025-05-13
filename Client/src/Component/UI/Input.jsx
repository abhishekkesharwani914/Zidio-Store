import React, { useId, useState } from "react";

const Input = React.forwardRef(function Input(
  {
    label,
    type = text,
    className = "px-4  focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    readOnly = false,
    ...props
  },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);

  if (type === "password") {
    if (showPassword) {
      type = "text";
    } else {
      type: "password";
    }
  }
  const id = useId();
  return (
    <div>
      <div className="relative">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          type={type}
          className={`w-full py-2 border border-gray-200 rounded-lg  outline-none transition placeholder-gray-400 ${className}`}
          ref={ref}
          {...props}
          readOnly={readOnly}
        />
        {type === "password" || type === "text" ? (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Toggle state
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        ) : (
          ""
        )}
      </div>
      {props?.error[props?.name] && (
        <p className="text-red-500 text-sm mt-2">
          {props?.error[props?.name]?.message}
        </p>
      )}
    </div>
  );
});

export default Input;
