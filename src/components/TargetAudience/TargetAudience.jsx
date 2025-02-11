import React from "react";

const TargetAudience = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto mt-52 text-white relative bg-[#1A222B] p-16 ">
        <div className="lg:flex gap-10">
          <div className="lg:w-1/2 lg:mx-auto max-lg:flex flex-col items-center justify-center max-lg:text-center">
            <h3 className="text-[32px] font-semibold">Кому подойдет 4Pay?</h3>
            <p className="text-[#BFC0C9] max-md:text-[14px]  lg:pr-16 py-4">
              Наш платежный агрегатор создан для разных сегментов бизнеса,
              помогая предпринимателям быстро и безопасно принимать платежи и
              выводить средства..
            </p>
            <button className="w-fit  mt-4 min-w-[300px] bg-[#72E484] p-4 px-5 font-semibold text-black rounded-full text-[14px] cursor-pointer">
              Связаться с нами
            </button>
          </div>
          <div className="lg:w-1/2 max-lg:mt-10">
            <div className="p-4 px-8 bg-[#1D2A39] flex items-center mb-3 gap-x-3 rounded-full">
              <img src="/assets/icons/star.svg" alt="" />
              <p>Интернет-магазины и маркетплейсы</p>
            </div>
            <div className="p-4 px-8 bg-[#1D2A39] flex items-center mb-3 gap-x-3 rounded-full">
              <img src="/assets/icons/star.svg" alt="" />
              <p>Фрилансеры и SaaS</p>
            </div>
            <div className="p-4 px-8 bg-[#1D2A39] flex items-center mb-3 gap-x-3 rounded-full">
              <img src="/assets/icons/star.svg" alt="" />
              <p>Сервисы подписки</p>
            </div>
            <div className="p-4 px-8 bg-[#1D2A39] flex items-center  gap-x-3 rounded-full">
              <img src="/assets/icons/star.svg" alt="" />
              <p>Онлайн-сервисы и платформы</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
