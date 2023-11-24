import React from "react";
import { useMessi } from "../MessiContext";

const SoloAchievements = () => {
  const { personalAchievements } = useMessi();
  return (
    <>
      <div className="text-xl mb-5 font-heading text-start col-span-full">
        <p className=" text-blue-400 text-start">Personal Achievements</p>
      </div>
      <div className="bg-slate-700 p-3 rounded-lg">
        <div className="grid gap-3 grid-cols-3 md:grid-cols-7">
          {personalAchievements.map((el) => (
            <div key={el.id} className="grid shadow grid-cols-1">
              <p className="text-xs md:text-base text-blue-300 opacity-95 ">
                {el.type}
              </p>
              <p className=" font-medium text-sm md:text-lg text-blue-400 font-heading">
                {el.times}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SoloAchievements;
