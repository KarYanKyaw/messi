import React from "react";
import ClubSection from "./ClubSection";
import SoloSection from "./SoloSection";

const Achievements = () => {
  return (
    <>
      <div className=" home-hero gap-16 md:gap-10 flex flex-col overflow-x-hidden py-9 px-10">
        <ClubSection />

        <div className=" bg-blue-400 p-3 md:text-xl text-lg rounded font-heading text-amber-300">
          <p className="text-amber-200"> Random Fact:</p>
          <p>
            "Messi is the most decorated player with 44 trophies, which is more
            than any other player."
          </p>
        </div>

        <SoloSection />
      </div>
    </>
  );
};

export default Achievements;
