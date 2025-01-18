import React, { useRef } from "react";
import { Link } from "react-router-dom";
import BGImage from "../assets/img3.avif";

const ForgotPassword = ({ submitHandler }) => {
  const emailRef = useRef();

  return (
    <div className="flex h-screen">
      {/* Left Section (Image) */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BGImage})`,
        }}
      ></div>

      {/* Right Section (Form) */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 bg-white">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md bg-gray-50 p-6 rounded-md shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Forgot Password</h2>
          <input
            type="email"
            placeholder="Enter your email"
            ref={emailRef}
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          />
          <button
            type="submit"
            className="w-full bg-kaddu-600 text-white p-3 rounded-md font-semibold hover:bg-kaddu-700"
          >
            Send Email
          </button>
          <Link
            to="/login"
            className="block text-center mt-4 text-kaddu-600 underline hover:text-kaddu-700"
          >
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
