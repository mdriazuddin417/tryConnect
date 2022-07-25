import React from "react";
import { FiDownload } from "react-icons/fi";
import { GiKey } from "react-icons/gi";

const Choose = ({ setActive1, setActive2, setActive3 }) => {
  return (
    <div className="w-[80%] text-center mx-auto space-y-8">
      <div className="w-[70%] mx-auto  space-y-8">
        <h3 className="text-4xl text-[#e0725a] font-semibold">
          Please choose an option.
        </h3>
        <p className="text-xl text-gray-700">
          In this demonstration, you are an employee of the ficticious company
          SunCrest Medical, and they are offering you two digital credentials to
          prove your employement status. Alternatively, you can test a
          passwordless login experience.
        </p>
      </div>
      <div className="flex justify-between items-center text-white header-title">
        <span
          onClick={() => setActive1(true)}
          className="bg-1 p-4 rounded-full cursor-pointer flex items-center"
        >
          <FiDownload className="text-3xl font-semibold mr-2" /> Staff Passport
        </span>
        <span
          onClick={() => setActive2(true)}
          className="bg-1 p-4 rounded-full cursor-pointer flex items-center"
        >
          <FiDownload className="text-3xl font-semibold mr-2" /> Proof of
          Employment
        </span>
        <span
          onClick={() => setActive3(true)}
          className="bg-1 p-4 rounded-full cursor-pointer flex items-center"
        >
          <GiKey className="text-3xl font-semibold mr-2" /> Set up passwordless
          login
        </span>
      </div>
    </div>
  );
};

export default Choose;
