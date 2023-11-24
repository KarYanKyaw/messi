import React from "react";
import ClubSection from "./ClubSection";
import SoloSection from "./SoloSection";

const Achievements = () => {
  return (
    <>
      <div className=" home-hero gap-10 flex flex-col overflow-x-hidden pt-6 px-10">
        <ClubSection />
        <hr className="border-t-1 pt-3 border-blue-900" />
        <SoloSection />
      </div>
    </>
  );
};

export default Achievements;
