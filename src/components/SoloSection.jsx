import React from "react";
import { useMessi } from "../MessiContext";
import Slider from "react-slick";
import TrophyCard from "./TrophyCard";
import SoloAchievements from "./SoloAchievements";
import ExploreBtn from "./ExploreBtn";

const SoloSection = () => {
  const { personalAchievements } = useMessi();
  const settings = {
    class: "center",
    dots: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 640, // Convert sm to pixels
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "44px",
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "44px",
        },
      },
    ],
  };
  return (
    <>
      <div className="grid grid-cols-1  min-h-screen gap-3">
        <div className="col-span-full animate__animated animate__bounceInLeft animate__delay-1s">
          <SoloAchievements />
        </div>
        <div className="animate__animated animate__fadeIn animate__delay-2s col-span-full">
          <Slider {...settings}>
            {personalAchievements.map((el) => (
              <TrophyCard
                img={el.img}
                key={el.id}
                type={el.type}
                times={el.times}
              />
            ))}
          </Slider>
        </div>
        <div className="py-2 text-xs flex justify-center items-center w-full text-center text-slate-900  font-base bg-slate-400">
          All images copy right reserved to rightful owners.
        </div>
      </div>
    </>
  );
};

export default SoloSection;
