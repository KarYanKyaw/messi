import React from "react";
import NavBtnGp from "./NavBtnGp";
import StatsCard from "./StatsCard";
import { useMessi } from "../MessiContext";
import PersonalInfo from "./PersonalInfo";

const Stats = () => {
  const { statsData } = useMessi();
  console.log(statsData);
  return (
    <>
      <div className="min-h-screen overflow-hidden flex md:items-center pt-5 md:py-0 home-hero">
        <div className="container px-10 md:px-24">
          <div className="grid gap-5 items-center md:gap-7 grid-cols-5 md:grid-cols-12">
            <p className="text-4xl animate__animated animate__bounceInDown col-span-full text-center text-blue-400 order-2 md:order-1 font-heading md:text-5xl">
              All Time Statistics
            </p>
            <div className="col-span-full w-full order-3 md:order-2 animate__delay-1s select-none md:col-span-4 animate__animated animate__bounceInLeft">
              <PersonalInfo />
            </div>
            <div className=" select-none col-span-full order-3 animate__animated animate__delay-2s animate__fadeIn  md:col-span-7">
              <div className="grid grid-cols-2 gap-3 ">
                {statsData.map((el) => (
                  <StatsCard key={el.id} types={el.type} numbers={el.numbers} />
                ))}
              </div>
            </div>
            <div className=" col-span-full animate__delay-3s md:order-3 justify-around order-1 animate__animated animate__lightSpeedInRight md:col-span-1 ">
              <NavBtnGp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
