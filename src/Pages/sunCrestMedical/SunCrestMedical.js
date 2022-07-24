import React from "react";
import { GiMedicalDrip } from "react-icons/gi";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Choose from "./Choose";

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
              <h3 className="header-title">SunCrest Medical</h3>
              <p className="header-info ">
                Get Proof of Employment and Staff Passport credentials here
              </p>
            </div>
          </div>
        </div>
      </div>
      <Choose />
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
