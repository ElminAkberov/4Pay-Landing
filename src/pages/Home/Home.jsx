import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import Why4Pay from "../../components/Why4Pay/Why4Pay";
import TargetAudience from "../../components/TargetAudience/TargetAudience";
import Faq from "../../components/FAQ/Faq";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = () => {
  return (
    <menu className="bg-[#1B2332]  ">
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
        <div className="px-2">
          <HeroSection />
        </div>
        <div className="px-2">
          <Features />
        </div>
        <div className="px-2">
          <Why4Pay />
        </div>
        <div className="relative">
          <img
            src="/assets/img/Ellipse4.svg"
            className="absolute left-0 top-5"
            alt=""
          />
          <div className="px-2">
            <TargetAudience />
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/img/Ellipse5.svg"
            className="absolute right-0 top-0"
            alt=""
          />
        </div>
        <div className="px-2">
          <Faq />
        </div>
        <div className="px-2 relative z-50">
          <ContactUs />
        </div>
        <div className="relative">
          <img
            src="/assets/img/Ellipse6.svg"
            className="absolute left-0 top-[-350px]"
            alt=""
          />
        </div>
      </div>
    </menu>
  );
};

export default Home;
