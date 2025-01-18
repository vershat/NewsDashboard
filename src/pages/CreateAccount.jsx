import React, { useRef } from "react";
import { Link } from "react-router-dom";
import BGImage from "../assets/img3.avif"; // Background image
import CreateAccImage from "../assets/Create.png"; // Ensure this file exists
import TogglePassword from "../components/TogglePassword";

const CreateAccount = ({ submitHandler, showError, PASSWORDERRORMESSAGE }) => {
  const fullnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Background Image */}
      <div
        className="w-1/2 hidden md:block"
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right Side: Create Account Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <img
          src={CreateAccImage}
          alt="Create Account"
          className="my-2 w-3/4 md:w-auto"
        />
        <form onSubmit={submitHandler} className="w-full max-w-md">
          {/* Full Name Input */}
          <input
            type="text"
            placeholder="Full Name"
            ref={fullnameRef}
            className="w-full bg-transparent border-2 px-3 py-2 rounded-md mt-2 focus:outline-none focus:border-kaddu-600"
            required
          />
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            className="w-full bg-transparent border-2 px-3 py-2 rounded-md mt-2 focus:outline-none focus:border-kaddu-600"
            required
          />
          {/* Password Input */}
          <TogglePassword passwordRef={passwordRef} passwordType="Password" />
          {showError && (
            <span className="text-xs text-red-500">{PASSWORDERRORMESSAGE}</span>
          )}
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-kaddu-500 text-white p-3 w-full border-2 mt-8 text-xl font-bold rounded-md hover:bg-kaddu-600"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-kaddu-600 font-semibold hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
