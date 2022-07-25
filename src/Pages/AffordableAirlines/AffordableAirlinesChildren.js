import React from "react";

const AffordableAirlinesChildren = ({ setActive }) => {
  const handleActive = () => {
    setActive(true);
  };
  return (
    <div className="w-[80%] text-center mx-auto space-y-8">
      <div className="w-[80%] mx-auto  space-y-8">
        <h3 className="text-4xl text-8 font-semibold">
          Please check in for your upcoming flight.
        </h3>
        <p className="text-xl text-gray-700">
          As Alice, you have booked a vacation and you flying with Affordable
          Airlines. It’s time to check in for the flight.
        </p>
      </div>
      <div className="flex justify-center items-center text-white header-title">
        <span
          onClick={handleActive}
          className="bg-8 p-4 rounded-full cursor-pointer flex items-center"
        >
          Check in
        </span>
      </div>
    </div>
  );
};

export default AffordableAirlinesChildren;
