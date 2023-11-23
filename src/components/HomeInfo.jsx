import React from "react";
import ExploreBtn from "./ExploreBtn";

const HomeInfo = () => {
  return (
    <>
      <div className="home-info bg-slate-700 p-3 rounded-lg flex flex-col gap-3 md:text-start">
        <p className="text-3xl md:text-5xl font-heading text-blue-400">
          Leo Messi
        </p>
        <p className=" text-base italic text-blue-50">Argentine Footballer</p>
        <p className="text-sm md:text-lg mb-2 text-blue-300 font-medium font-base">
          Lionel Messi, born June 24, 1987, in Rosario, Argentina, is a football
          legend. In 2022, he led Argentina to a historic FIFA World Cup
          victory, showcasing his extraordinary talent and securing his legacy
          as one of the greatest players in the sport's history.
        </p>
        <ExploreBtn />
      </div>
    </>
  );
};

export default HomeInfo;
