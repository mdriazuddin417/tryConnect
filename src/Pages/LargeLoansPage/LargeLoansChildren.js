import React from "react";

const LoftyLabsChildren = ({ setActive }) => {
  const handleActive = () => {
    setActive(true);
  };
  return (
    <div className="w-[80%] text-center mx-auto space-y-8">
      <div className="lg:w-[70%] mx-auto  space-y-8">
        <h3 className="lg:text-4xl md:text-3xl text-[28px] text-6">
          Welcome to Large Loans.
        </h3>
        <p className="lg:text-xl md:text-lg text-[15px] text-gray-700">
          As Alice, you have decided to go with Large Loans as your mortgage
          lender.
        </p>
      </div>
      <div className="flex justify-center items-center text-white header-title">
        <span
          onClick={handleActive}
          className="bg-6 p-5 rounded-full cursor-pointer flex items-center"
        >
          Apply for a mortgage loan
        </span>
      </div>
    </div>
  );
};

export default LoftyLabsChildren;
