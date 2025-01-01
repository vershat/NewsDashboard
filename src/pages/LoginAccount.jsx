import React, { useRef } from "react";
import { Link } from "react-router-dom";
import BGImage from "../assets/img3.avif";
import TogglePassword from "../components/TogglePassword.jsx";

const LoginAccount = ({ submitHandler }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div
      className="bg-kaddu-500 flex h-screen justify-between"
      style={{
        backgroundImage: `url(${BGImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hidden md:block w-1/2"></div>
      <div className="w-full md:w-2/5 bg-white p-8 flex flex-col justify-evenly items-center">
        {/* Replacing the logo with the heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back! Manage Your News and Payouts
          </h1>
          <p className="text-gray-500 mt-2">
            Please log in to continue to your personalized dashboard.
          </p>
        </div>
        
        <form onSubmit={submitHandler} className="w-full">
          <input
            type="text"
            placeholder="Email"
            ref={emailRef}
            className="w-full border-2 rounded-md px-3 py-2 mt-2"
          />
          <TogglePassword passwordRef={passwordRef} passwordType={"Password"} />
          <button
            type="submit"
            className="bg-kaddu-500 p-3 w-full border-2 mt-8 text-xl font-bold"
          >
            Login
          </button>
        </form>
        
        <Link to="/forgot-password" className="text-kaddu-600">Forgot Password?</Link>
        <div>
          Don't have an account? <Link to="/signup" className="text-kaddu-600">Create Now</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginAccount;
