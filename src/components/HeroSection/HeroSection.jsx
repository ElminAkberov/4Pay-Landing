import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="relative text-center min-[500px]:mb-52 text-white max-w-6xl mx-auto h-[100vh] flex flex-col items-center justify-center ">
        <div className="bg-[#151E29] flex items-center gap-x-2 p-1 px-2  rounded-full text-[#BFC0C9] w-fit text-[14px]">
          <div className="bg-[#72E484] rounded-full min-w-2 min-h-2 "></div>
          <p>Платежная система для всех сегментов бизнеса</p>
          <div className="bg-[#72E484] rounded-full min-w-2 min-h-2"></div>
        </div>
        <h1 className="text-[64px] font-bold max-lg:text-[48px] max-md:text-[32px] px-2">
          <span className="text-[#72E484]">Быстрый</span> приём платежей для
          вашего бизнеса
        </h1>
        <p className="text-[#BFC0C9] max-md:text-[14px]">
          Все популярные методы оплаты для вашего бизнеса. Быстрое подключение и{" "}
          <br /> надежные выплаты по всему миру.
        </p>
        <button className="w-fit max-md:text-[14px] mt-4 bg-[#72E484] p-2 px-3 font-semibold text-black rounded-full text-sm cursor-pointer">
          Связаться с нами
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
