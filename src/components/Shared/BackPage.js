import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BackPage = ({ text, bg }) => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate("/");
  };
  return (
    <div className={`py-8 ${bg} flex justify-between items-center px-6 `}>
      <span
        className={`text-2xl bg-white p-5 rounded-full font-bold text-[${text}] flex items-center gap-2 cursor-pointer hover:bg-gray-200 `}
        onClick={backPage}
      >
        <FiArrowLeft /> Go Back
      </span>
      <span className="text-white">
        Want to try this for real?{" "}
        <span className="font-bold underline ">Contact us</span>
      </span>
    </div>
  );
};

export default BackPage;
