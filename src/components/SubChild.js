import React from "react";

const SubChild = ({ children }) => {
  return (
    <div className="h-[100px] pb-2 flex lg:justify-end md:justify-end justify-center lg:items-center md:items-center items-end lg:rounded-[25px] md:rounded-[25px] rounded-bl-[25px] rounded-br-[25px] cursor-pointer bg-[#F5F5F5] shadow border border-gray-200 mt-[-15px] lg:mt-0 md:mt-0 lg:px-4 md:px-4 lg:text-md text-sm z-0">
      {children}
    </div>
  );
};

export default SubChild;
