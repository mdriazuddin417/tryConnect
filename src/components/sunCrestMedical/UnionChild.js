import React from "react";
import { GiUnstableOrb } from "react-icons/gi";

const UnionChild = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <span className="text-white text-4xl">
        <GiUnstableOrb />
      </span>
      <div className="text-white">
        <h3 className="header-title">Happy Members Credit Union</h3>
        <p className="header-info">
          Get your financial statement as a digital credential
        </p>
      </div>
    </div>
  );
};

export default UnionChild;
