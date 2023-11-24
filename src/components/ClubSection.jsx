import React from "react";
import NavBtnGp from "./NavBtnGp";
import ClubAchievements from "./ClubAchievements";
import Slider from "react-slick";
import TrophyCard from "./TrophyCard";
import { useMessi } from "../MessiContext";

const ClubSection = () => {
  const { achievementsData } = useMessi();
  const settings = {
    class: "center",
    dots: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 700,
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
        breakpoint: 1024, // Convert md to pixels (and lg if you want the same)
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
      <div className="grid min-h-screen grid-cols-1 gap-5">
        <div className="animate__delay-3s col-span-full animate__animated animate__lightSpeedInRight ">
          <NavBtnGp type={"achievements"} />
        </div>
        <p className="text-3xl col-span-full animate__animated animate__bounceInDown  text-center text-blue-400 font-heading md:text-5xl">
          All Time Achievements
        </p>
        <div className="col-span-full animate__animated animate__bounceInLeft animate__delay-1s">
          <ClubAchievements />
        </div>

        <div className="animate__animated animate__fadeIn animate__delay-2s col-span-full">
          <Slider {...settings}>
            {achievementsData.map((el) => (
              <TrophyCard
                key={el.id}
                img={el.img}
                type={el.type}
                times={el.times}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ClubSection;
