import React from "react";
import { FiDownload } from "react-icons/fi";
import { GiKey } from "react-icons/gi";

const Choose = ({ setActive1, setActive2, setActive3 }) => {
  return (
    <div className="w-[80%] text-center mx-auto ">
      <div className=" w-full mx-auto  lg:space-y-8 md:space-y-5 space-y-12">
        <h3 className="lg:text-4xl md:text-3xl text-[28px] text-1 ">
          Please choose an option.
        </h3>
        <p className="lg:text-xl md:text-lg text-[15px] text-gray-700">
          In this demonstration, you are an employee of the ficticious company
          SunCrest Medical, and they are offering you two digital credentials to
          prove your employement status. Alternatively, you can test a
          passwordless login experience.
        </p>

        <div className="flex lg:justify-between justify-center   gap-2 items-center text-white header-title flex-wrap ">
          <span
            onClick={() => setActive1(true)}
            className="bg-1 p-5 rounded-full cursor-pointer flex items-center"
          >
            <FiDownload className="text-3xl font-semibold mr-2" /> Staff
            Passport
          </span>
          <span
            onClick={() => setActive2(true)}
            className="bg-1 p-5 rounded-full cursor-pointer flex items-center"
          >
            <FiDownload className="text-3xl font-semibold mr-2" /> Proof of
            Employment
          </span>
          <span
            onClick={() => setActive3(true)}
            className="bg-1 p-5 rounded-full cursor-pointer flex items-center"
          >
            <GiKey className="text-3xl font-semibold mr-2" /> Set up
            passwordless login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Choose;
