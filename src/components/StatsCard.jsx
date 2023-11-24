import React from "react";

const StatsCard = ({ id, numbers, types }) => {
  return (
    <>
      <div
        key={id}
        className="border-2 col-span-1 select-none cursor-pointer hover:scale-[1.05] border-blue-400 rounded flex items-center justify-start md:justify-center ps-3 w-[140px] h-[80px] md:w-[280px] md:h-[130px] bg-blue-400 duration-500"
      >
        <div className="">
          <p className="text-lg md:text-3xl text-amber-300 font-heading ">
            {numbers}
          </p>
          <p className="text-sm md:text-lg text-amber-100 font-medium">
            {types}
          </p>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
