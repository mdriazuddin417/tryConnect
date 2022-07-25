import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BackPage = ({ text, bg }) => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate("/");
  };
  return (
    <div
      className={`py-8 ${bg} md:flex lg:flex justify-between items-center px-6 grid grid-cols-1 gap-3 text-center flex-row-reverse`}
    >
      <span className="text-white">
        Want to try this for real?{" "}
        <span className="font-bold underline cursor-pointer ">Contact us</span>
      </span>
      <span
        className={`lg:text-2xl text-xl bg-white p-5 rounded-full font-bold ${text} flex items-center gap-4 cursor-pointer hover:bg-gray-200 justify-center`}
        onClick={backPage}
      >
        <FiArrowLeft /> Go Back
      </span>
    </div>
  );
};

export default BackPage;
