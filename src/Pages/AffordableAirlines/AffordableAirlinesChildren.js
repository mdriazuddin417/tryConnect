import React from "react";

const AffordableAirlinesChildren = ({ setActive }) => {
  const handleActive = () => {
    setActive(true);
  };
  return (
    <div
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="500"
      className="w-[80%] text-center mx-auto space-y-8"
    >
      <div className="lg:w-[80%] mx-auto  space-y-8">
        <h3 className="lg:text-4xl md:text-3xl text-[28px] text-8">
          Please check in for your upcoming flight.
        </h3>
        <p className="lg:text-xl md:text-lg text-[15px] text-gray-700">
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
