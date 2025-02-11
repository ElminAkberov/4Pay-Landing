import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import Why4Pay from "../../components/Why4Pay/Why4Pay";
import TargetAudience from "../../components/TargetAudience/TargetAudience";

const Home = () => {
  return (
    <menu className="bg-[#1B2332]  px-2">
      <div className="">
        <img
          src="/assets/img/Ellipse1.svg"
          className="absolute right-0"
          alt=""
        />
        <img
          src="/assets/img/Ellipse2.svg"
          className="absolute left-0"
          alt=""
        />
        <HeroSection />
        <Features />
        <Why4Pay />
        <TargetAudience />
        <div className="">
          
        </div>
      </div>
    </menu>
  );
};

export default Home;
