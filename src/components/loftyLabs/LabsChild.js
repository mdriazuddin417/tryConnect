import React from "react";
import { GiDiscGolfBag } from "react-icons/gi";

const LabsChild = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <span className="text-white text-4xl">
        <GiDiscGolfBag />
      </span>
      <div className="text-white">
        <h3 className="header-title">Lofty Labs</h3>
        <p className="header-info ">
          Passport required. Get your COVID19 test here.
        </p>
      </div>
    </div>
  );
};

export default LabsChild;
