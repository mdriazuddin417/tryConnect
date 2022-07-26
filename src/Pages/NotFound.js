import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../image/error.png";
const NotFound = () => {
  const navigate = useNavigate();
  const errorPanhandle = () => {
    navigate("/");
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src={error} alt="" />
      <button
        className="mt-5 bg-blue-800 text-white text-4xl lg:px-5 px-4 lg:py-4 py-3 rounded-full"
        onClick={errorPanhandle}
      >
        Return Home
      </button>
    </div>
  );
};

export default NotFound;
