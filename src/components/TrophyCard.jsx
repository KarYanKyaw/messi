import React from "react";

const TrophyCard = ({ img, id, times, type }) => {
  return (
    <div
      key={id}
      className="flex p-3 rounded-lg bg-yellow-500 flex-col gap-3 h-52 w-52"
    >
      <div className=" h-32 w-full">
        <img
          src={img}
          alt=""
          className=" object-contain h-full w-full"
        />
      </div>
      <p className="text-center font-heading text-yellow-900">
        {times} {type}
      </p>
    </div>
  );
};

export default TrophyCard;
