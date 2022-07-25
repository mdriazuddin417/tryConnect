import React from "react";
import { FiDownload } from "react-icons/fi";

const Parcadias = ({ setActive }) => {
  return (
    <div className="w-[80%] text-center mx-auto space-y-8">
      <div className="lg:w-[70%] mx-auto  space-y-8">
        <h3 className="lg:text-4xl md:text-3xl text-[28px] text-2 ">
          Welcome to Parcadia’s Passport Office.
        </h3>
        <p className="lg:text-xl md:text-lg text-[15px] text-gray-700">
          You are a citizen of the ficticious nation, Parcadia. It is a
          technologically advanced nation, and they only issue passports
          digitally. Get yours now.
        </p>
      </div>
      <div className="flex justify-center items-center text-white header-title">
        <span
          onClick={() => setActive(true)}
          className="bg-2 p-4 rounded-full cursor-pointer flex items-center"
        >
          <FiDownload className="text-3xl font-semibold mr-2" />
          Passport
        </span>
      </div>
    </div>
  );
};

export default Parcadias;
