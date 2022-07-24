import React from "react";
import { GiMedicalDrip } from "react-icons/gi";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SunCrestMedical = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate("/");
  };
  return (
    <div className="h-screen flex flex-col justify-between ">
      <div className="p-5">
        <div className="section bg-1 ">
          <div className="flex justify-center items-center gap-5">
            <span className="text-white text-4xl">
              <GiMedicalDrip />
            </span>
            <div className="text-white">
              <h3 className="text-2xl font-bold">SunCrest Medical</h3>
              <p className="text-sm ">
                Get Proof of Employment and Staff Passport credentials here
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] text-center mx-auto space-y-8">
        <div className="w-[80%] mx-auto  space-y-8">
          <h3 className="text-4xl text-[#e0725a] font-semibold">
            Please choose an option.
          </h3>
          <p className="text-2xl">
            In this demonstration, you are an employee of the ficticious company
            SunCrest Medical, and they are offering you two digital credentials
            to prove your employement status. Alternatively, you can test a
            passwordless login experience.
          </p>
        </div>
        <div className="flex justify-between items-center text-white text-2xl font-bold">
          <span className="bg-1 p-4 rounded-full">Staff Passport</span>
          <span className="bg-1 p-4 rounded-full">Proof of Employment</span>
          <span className="bg-1 p-4 rounded-full">
            Set up passwordless login
          </span>
        </div>
      </div>
      <div className="py-8 bg-1 flex justify-between items-center px-6 ">
        <span
          className="text-2xl bg-white p-5 rounded-full font-bold text-[#e0725a] flex items-center gap-2 cursor-pointer"
          onClick={backPage}
        >
          <FiArrowLeft /> Go Back
        </span>
        <span className="text-white">
          Want to try this for real?{" "}
          <span className="font-bold underline ">Contact us</span>
        </span>
      </div>
    </div>
  );
};

export default SunCrestMedical;
