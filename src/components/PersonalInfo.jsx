import React from "react";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col bg-amber-300 shadow-2xl p-5 rounded-lg font-base gap-3 w-full">
      <div className="text-xl font-base font-bold text-start col-span-full">
        <p className=" text-blue-500 text-start">Personal Info</p>
      </div>
      <div className="grid gap-3 grid-cols-2">
        <div className=" grid grid-cols-1">
          <p className=" text-sm md:text-lg text-blue-600 opacity-95 ">
            First Name:
          </p>
          <p className=" font-medium text-sm md:text-lg text-blue-500 font-heading">
            Lionel
          </p>
        </div>
        <div className=" grid grid-cols-1">
          <p className=" text-sm md:text-lg text-blue-600 opacity-95 ">
            Last Name:
          </p>
          <p className=" font-medium text-sm md:text-lg text-blue-500 font-heading">
            Messi
          </p>
        </div>
        <div className=" grid grid-cols-1">
          <p className=" text-sm md:text-lg text-blue-600 opacity-95 ">
            Nationality:{" "}
          </p>
          <p className=" font-medium text-sm md:text-lg text-blue-500 font-heading">
            Argentine
          </p>
        </div>

        <div className=" grid grid-cols-1">
          <p className=" text-sm md:text-lg text-blue-600 opacity-95 ">Age:</p>
          <p className=" font-medium text-sm md:text-lg text-blue-500 font-heading">
            37 yrs
          </p>
        </div>
        <div className=" grid grid-cols-1">
          <p className=" text-sm md:text-lg text-blue-600 opacity-95 ">Club:</p>
          <p className=" font-medium text-sm md:text-lg text-blue-500 font-heading me-1">
            Inter Miami
          </p>
        </div>
        <div className=" grid grid-cols-1">
          <p className=" text-sm md:text-lg text-blue-600 opacity-95 ">
            Trophies:
          </p>
          <p className=" font-medium text-sm md:text-lg text-blue-500 font-heading">
            44
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
