import React, { useRef } from "react";
import BGImage from "../assets/img3.avif"; // Ensure this path is correct
import Logo from "../assets/logo.jpg"; // Ensure this path is correct
import TogglePassword from "../components/TogglePassword";

const ResetPassword = ({ submitHandler }) => {
  const newpasswordRef = useRef();
  const confirmpasswordRef = useRef();

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Background Image */}
      <div
        className="hidden md:block w-1/2"
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right Side: Reset Password Form */}
      <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center items-center">
        <img src={Logo} alt="Logo" className="w-39 h-32 mb-4" />
        <form onSubmit={submitHandler} className="w-full max-w-md">
          {/* New Password Input */}
          <TogglePassword passwordRef={newpasswordRef} passwordType="New Password" />

          {/* Confirm Password Input */}
          <TogglePassword passwordRef={confirmpasswordRef} passwordType="Confirm Password" />

          {/* Reset Password Button */}
          <button
            type="submit"
            className="bg-kaddu-500 text-black p-3 w-full border-2 mt-8 text-xl font-bold rounded-md hover:bg-kaddu-600"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
