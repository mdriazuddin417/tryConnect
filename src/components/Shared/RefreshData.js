import React, { useState } from "react";
import Loading from "./Loading";
import code from "../../image/code.png";
const RefreshData = ({ setActive, bg }) => {
  const [open, setOpen] = useState(true);
  setTimeout(() => {
    setOpen(false);
  }, 1000);
  return (
    <>
      <div className="flex justify-center items-center">
        {open ? <Loading /> : <img src={code} alt="" className="w-36" />}
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
