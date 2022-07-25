import React from "react";

const LoftyLabsChildren = ({ setActive1 }) => {
  return (
    <div className="w-[80%] text-center mx-auto space-y-8">
      <div className="w-[70%] mx-auto  space-y-8">
        <h3 className="text-4xl text-4 font-semibold">
          Get your COVID19 antibody test here.
        </h3>
        <p className="text-xl text-gray-700">
          In order to travel these days, you, as Alice, must have a recent
          COVID19 test.
        </p>
      </div>
      <div className="flex justify-center items-center text-white header-title">
        <span
          onClick={() => setActive1(true)}
          className="bg-4 p-4 rounded-full cursor-pointer flex items-center"
        >
          Get my test results
        </span>
      </div>
    </div>
  );
};

export default LoftyLabsChildren;
