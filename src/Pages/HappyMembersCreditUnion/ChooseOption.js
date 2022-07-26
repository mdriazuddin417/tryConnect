import React from "react";
import { FiDownload } from "react-icons/fi";
import { GiKey } from "react-icons/gi";
const ChooseOption = ({ setActive1, setActive2 }) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="500"
      className="w-[80%] text-center mx-auto space-y-8"
    >
      <div className="lg:w-[70%] mx-auto  space-y-8">
        <h3 className="lg:text-4xl md:text-3xl text-[28px] text-3">
          Please choose an option.
        </h3>
        <p className="lg:text-xl md:text-lg text-[15px] text-gray-700">
          In this demonstration, you are an employee of the ficticious company
          SunCrest Medical, and they are offering you two digital credentials to
          prove your employement status. Alternatively, you can test a
          passwordless login experience.
        </p>
      </div>
      <div className="flex justify-center lg:gap-10 gap-3 items-center text-white header-title flex-wrap">
        <span
          onClick={() => setActive1(true)}
          className="bg-3 p-5 rounded-full cursor-pointer flex items-center"
        >
          <FiDownload className="text-3xl font-semibold mr-2" /> Financial
          Profile
        </span>

        <span
          onClick={() => setActive2(true)}
          className="bg-3 p-5 rounded-full cursor-pointer flex items-center"
        >
          <GiKey className="text-3xl font-semibold mr-2" />
          Set up passwordess login login
        </span>
      </div>
    </div>
  );
};

export default ChooseOption;
