import React from "react";
import AirlinesParent from "./AirlinesParent";
import LargeLoans from "./LargeLoans";
import LoftyLabs from "./LoftyLabs";
import Medical from "./Medicals";

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-16 items-center py-20">
      <Medical />
      <LoftyLabs />
      <LargeLoans />
      <AirlinesParent />
    </div>
  );
};

export default Home;
