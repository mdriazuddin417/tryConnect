import React from "react";

const SubChild = ({ children }) => {
  return (
    <div className="lg:h-[100px] md:h-[100px] sm:h-[90px] h-[80px] px-4 flex justify-end items-center rounded-[25px] cursor-pointer bg-[#F5F5F5] shadow border border-gray-200">
      {children}
    </div>
  );
};

export default SubChild;
