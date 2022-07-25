import React from "react";
import AirlinesParent from "./AirlinesParent";
import Footer from "./Footer";
import LargeLoans from "./LargeLoans";
import LoftyLabs from "./LoftyLabs";
import Medical from "./Medicals";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-16 items-center pb-10 pt-16">
        <Medical />
        <LoftyLabs />
        <LargeLoans />
        <AirlinesParent />
      </div>
      <Footer />
    </>
  );
};

export default Home;
