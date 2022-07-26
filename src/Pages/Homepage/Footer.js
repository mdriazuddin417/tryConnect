import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#777777] text-white py-8 lg:text-[15px]  text-sm flex justify-between px-5 items-start">
      <div className="space-y-1">
        <h3>
          Check out our{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
        </h3>
        <h3>
          Read our End User License Agreements for{" "}
          <span className="underline cursor-pointer">iOS</span> and{" "}
          <span className="underline cursor-pointer">Android</span>
        </h3>
        <h3>
          © Copyright 2022, Evernym Inc. All Rights Reserved. Connect.Me is a
          registered trademark of Evernym Inc.
        </h3>
      </div>
      <p>Built by Riaz</p>
    </div>
  );
};

export default Footer;
