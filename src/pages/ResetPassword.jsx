import React, { useRef } from "react";
import BGImage from "../assets/img3.avif";
import TogglePassword from "../components/TogglePassword.jsx";

const ResetPassword = ({ submitHandler }) => {
  const newpasswordRef = useRef();
  const confirmpasswordRef = useRef();

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
        <img src={Logo} alt="Logo" />
        <form onSubmit={submitHandler} className="w-full">
          <TogglePassword passwordRef={newpasswordRef} passwordType={"New Password"} />
          <TogglePassword passwordRef={confirmpasswordRef} passwordType={"Confirm Password"} />
          <button type="submit" className="bg-kaddu-500 p-3 w-full border-2 mt-8 text-xl font-bold">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
