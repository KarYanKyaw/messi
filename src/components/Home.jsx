import React from "react";
import HomeInfo from "./HomeInfo";
import NavBtnGp from "./NavBtnGp";
import Image from "./Image";

const Home = () => {
  return (
    <>
      <div className="min-h-screen overflow-hidden flex md:items-center  pt-5 md:py-0 home-hero">
        <div className="container px-10 md:px-24">
          <div className="grid gap-5 items-center md:gap-5 grid-cols-5 md:grid-cols-12">
            <div className="col-span-full order-2 md:order-1 select-none md:col-span-4 animate__animated  animate__bounceInDown">
              <Image />
            </div>
            <div className="flex select-none gap-8 col-span-full order-2 animate__animated animate__delay-1s animate__fadeIn items-center md:col-span-7">
              <HomeInfo />
            </div>
            <div className=" col-span-full animate__delay-2s md:order-3 justify-around order-1 animate__animated animate__lightSpeedInRight md:col-span-1 ">
              <NavBtnGp type={"home"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
