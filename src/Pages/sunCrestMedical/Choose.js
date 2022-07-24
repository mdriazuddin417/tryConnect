import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const Choose = () => {
  return (
    <div className="w-[80%] text-center mx-auto space-y-8">
      <div className="w-[80%] mx-auto  space-y-8">
        <h3 className="text-4xl text-[#e0725a] font-semibold">
          Please choose an option.
        </h3>
        <p className="text-2xl">
          In this demonstration, you are an employee of the ficticious company
          SunCrest Medical, and they are offering you two digital credentials to
          prove your employement status. Alternatively, you can test a
          passwordless login experience.
        </p>
      </div>
      <div className="flex justify-between items-center text-white header-title">
        <span className="bg-1 p-4 rounded-full cursor-pointer flex items-center">
          <FiArrowLeft className="text-3xl font-semibold" /> Staff Passport
        </span>
        <span className="bg-1 p-4 rounded-full cursor-pointer flex items-center">
          <FiArrowLeft className="text-3xl font-semibold" /> Proof of Employment
        </span>
        <span className="bg-1 p-4 rounded-full cursor-pointer flex items-center">
          <FiArrowLeft className="text-3xl font-semibold" /> Set up passwordless
          login
        </span>
      </div>
    </div>
  );
};

export default Choose;
