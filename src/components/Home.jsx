import React from "react";
import HomeInfo from "./HomeInfo";
import NavBtnGp from "./NavBtnGp";

const Home = () => {
  return (
    <>
      <div className="min-h-screen overflow-hidden flex items-center home-hero">
        <div className="container px-10 md:px-24">
          <div className="grid gap-5 items-center md:gap-5 grid-cols-5 md:grid-cols-12">
            <div className="col-span-full order-2 md:order-1 select-none md:col-span-4 animate__animated  animate__bounceInDown">
              <div className="messi-img group flex items-center justify-center">
                <img
                  className="md:rounded-2xl group-hover:scale-[1.055] duration-200 md:h-80   md:w-80  h-64 w-64 object-contain  rounded-full shadow-2xl"
                  src="https://media.architecturaldigest.com/photos/637949b3407644b8cdc8947f/1:1/w_2896,h_2896,c_limit/1442809583"
                  alt=""
                />
              </div>
            </div>
            <div className="flex select-none gap-8 col-span-full order-2 animate__animated animate__delay-1s animate__fadeIn items-center md:col-span-7">
              <HomeInfo />
            </div>
            <div className=" col-span-full animate__delay-2s md:order-3 justify-around order-1 animate__animated animate__lightSpeedInRight md:col-span-1 ">
              <NavBtnGp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
