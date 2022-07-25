import React from "react";
import Loading from "./Loading";

const RefreshData = ({ setActive, bg }) => {
  return (
    <>
      <div>
        <Loading />
      </div>
      <div className="flex justify-center items-center text-white ">
        <button
          onClick={() => setActive(false)}
          className={`${bg} px-4 py-3 text-3xl rounded-full flex justify-center gap-2`}
        >
          ✖ Cancel
        </button>
      </div>
    </>
  );
};

export default RefreshData;
