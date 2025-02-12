import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black p-[50px] mt-24 text-[#F5F5F5] relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
          <div className="">
            <img src="/assets/logo/footer.svg" alt="" />
            <p className="max-md:text-[14px] py-4  md:pr-[150px]">
              Принимайте платежи и отправляйте выплаты с 4Pay уже сегодня!
            </p>
            <div className="flex gap-x-4">
              <img src="/assets/icons/insta.svg" alt="" />
              <img src="/assets/icons/face.svg" alt="" />
              <img src="/assets/icons/yt.svg" alt="" />
              <img src="/assets/icons/X.svg" alt="" />
            </div>
          </div>
          <div className="">
            <h3 className="text-white text-[20px]">Навигация</h3>
            <div className="py-3">
              <NavLink>Возможности</NavLink>
            </div>
            <div className="py-3">
              <NavLink>Преимущества</NavLink>
            </div>
            <div className="py-3">
              <NavLink>Кому подойдет</NavLink>
            </div>
            <div className="py-3">
              <NavLink>FAQ</NavLink>
            </div>
            <div className="py-3">
              <NavLink>Связаться с нами</NavLink>
            </div>
          </div>
          <div className="">
            <h3 className="text-white text-[20px]">Источники</h3>
            <div className="py-3">
              <NavLink>Документация API</NavLink>
            </div>
            <div className="py-3">
              <NavLink>Условия использования</NavLink>
            </div>

            <div className="py-3">
              <NavLink>Требования</NavLink>
            </div>
            <select className="bg-[#0B1113] w-[250px] max-md:w-[150px] p-3 rounded-xl outline-none" name="lang" id="lang">
              <option value="RU">Русский</option>
              <option value="EN">English</option>
            </select>
          </div>
        </div>
      </div>
        <div className="flex justify-between flex-wrap my-5 gap-6 items-center w-full">
            <img src="/assets/icons/p1.svg" className="cursor-pointer" alt="" />
            <img src="/assets/icons/p2.svg" className="cursor-pointer" alt="" />
            <img src="/assets/icons/p3.svg" className="cursor-pointer" alt="" />
            <img src="/assets/icons/p4.svg" className="cursor-pointer" alt="" />
            <img src="/assets/icons/p5.svg" className="cursor-pointer" alt="" />
            <img src="/assets/icons/p6.svg" className="cursor-pointer" alt="" />
            <img src="/assets/icons/p7.svg" className="cursor-pointer" alt="" />
        </div>
        <p className="text-center">{new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
};

export default Footer;
