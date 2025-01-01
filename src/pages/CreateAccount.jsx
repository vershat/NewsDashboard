import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import BGImage from "../assets/img3.avif";

import TogglePassword from "../components/TogglePassword.jsx";

const CreateAccount = ({ submitHandler, showError, PASSWORDERRORMESSAGE }) => {
  const fullnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div
      className="bg-kaddu-500 flex min-h-screen justify-between"
      style={{
        backgroundImage: `url(${BGImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hidden md:block w-1/2"></div>
      <div className="w-full md:w-2/5 m-4 md:m-8 bg-white flex flex-col justify-evenly items-center rounded-3xl p-4 md:p-10">
        <img src={CreateAcc} alt="Create Account" className="my-2 w-3/4 md:w-auto" />
        <form onSubmit={submitHandler} className="w-full">
          <input
            type="text"
            placeholder="Full Name"
            ref={fullnameRef}
            className="w-full bg-transparent border-2 px-3 py-2 rounded-md mt-2"
          />
          <input
            type="text"
            placeholder="Email"
            ref={emailRef}
            className="w-full bg-transparent border-2 px-3 py-2 rounded-md mt-2"
          />
          <TogglePassword passwordRef={passwordRef} passwordType={"Password"} />
          {showError && <span className="text-xs text-red-500">{PASSWORDERRORMESSAGE}</span>}
          <button type="submit" className="bg-kaddu-500 p-3 w-full border-2 mt-8 text-xl font-bold">
            Create Account
          </button>
        </form>
        <div>
          Already have an account? <Link to="/login" className="text-kaddu-600">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
