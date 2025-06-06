import React from "react";
import { useForm, Controller } from "react-hook-form";
import { VerifyAccount } from "../api/authApi";
import { toast } from "react-toastify";

const OTP_LENGTH = 6;

const OTPVerification = ({
  setVerificationPopup,
  userID,
  VerificationHandler,
}) => {
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      otp: Array(OTP_LENGTH).fill(""),
    },
  });

  const otpValues = watch("otp");

  // Focus next input on entry, previous on backspace
  const handleInput = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setValue(`otp.${idx}`, value);

    if (value && idx < OTP_LENGTH - 1) {
      document.getElementById(`otp-input-${idx + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otpValues[idx] && idx > 0) {
      document.getElementById(`otp-input-${idx - 1}`)?.focus();
    }
  };

  const onSubmit = async (data) => {
    const otp = data.otp.join("");
    const [response, error] = await VerifyAccount({ otp, userID });
    console.log(response, error);
    if (response && response.success) {
      toast.success("OTP verified successfully!");
      setVerificationPopup(false);
    }
    if (error) {
      toast.error(error?.message || "An error occurred. Please try again.");
      setVerificationPopup(false);
    }
    if (response && !response.success) {
      setVerificationPopup(false);
      toast.error(response?.message || "Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 min-h-screen w-full">
      <div className="bg-neutral-900 shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-md mx-auto flex flex-col justify-center border border-yellow-400/10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-white mb-4 tracking-tight">
          Verify Your OTP
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Enter the 6-digit OTP sent to your email.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="flex justify-center gap-2 mb-6">
            {Array.from({ length: OTP_LENGTH }).map((_, idx) => (
              <Controller
                key={idx}
                name={`otp.${idx}`}
                control={control}
                rules={{ required: true, pattern: /^[0-9]$/ }}
                render={({ field }) => (
                  <input
                    {...field}
                    id={`otp-input-${idx}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className={`w-11 h-11 md:w-14 md:h-14 border-2 rounded-lg text-center text-xl font-bold transition-all duration-150 focus:outline-none focus:ring-2 ${
                      errors.otp && errors.otp[idx]
                        ? "border-red-400 focus:ring-red-400"
                        : "border-yellow-400 focus:ring-yellow-400"
                    } bg-black text-white shadow-sm`}
                    onChange={(e) => handleInput(e, idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    autoFocus={idx === 0}
                  />
                )}
              />
            ))}
          </div>
          {errors.otp && (
            <p className="text-center text-red-400 text-xs mb-2">
              Please enter all 6 digits.
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black py-2 md:py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-300 transition duration-200 shadow-lg">
            {isSubmitting ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          Didn’t receive the code?{" "}
          <button
            type="button"
            className="text-yellow-400 hover:underline font-semibold"
            onClick={VerificationHandler}>
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;
