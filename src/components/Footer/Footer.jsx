import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <footer className="bg-black p-[50px] mt-24 text-[#F5F5F5] relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
          <div className="">
            <img src="/assets/logo/footer.svg" alt="Footer Logo" />
            <p className="max-md:text-[14px] py-4 md:pr-[150px]">
              {t("footer.description")}
            </p>
            <div className="flex gap-x-4">
              <img src="/assets/icons/insta.svg" alt="Instagram" />
              <img src="/assets/icons/face.svg" alt="Facebook" />
              <img src="/assets/icons/yt.svg" alt="YouTube" />
              <img src="/assets/icons/X.svg" alt="X (formerly Twitter)" />
            </div>
          </div>
          <div className="">
            <h3 className="text-white text-[20px]">{t("footer.navigation")}</h3>
            <div className="py-3">
              <a href="#features">{t("footer.features")}</a>
            </div>
            <div className="py-3">
              <a href="#advantages">{t("footer.advantages")}</a>
            </div>
            <div className="py-3">
              <a href="#target">{t("footer.targetAudience")}</a>
            </div>
            <div className="py-3">
              <a href="#fag">{t("footer.faq")}</a>
            </div>
            <div className="py-3">
              <a href="#contactUs">{t("footer.contactUs")}</a>
            </div>
          </div>
          <div className="">
            <h3 className="text-white text-[20px]">{t("footer.resources")}</h3>
            <div className="py-3">
              <NavLink>{t("footer.apiDocs")}</NavLink>
            </div>
            <div className="py-3">
              <NavLink>{t("footer.terms")}</NavLink>
            </div>
            <div className="py-3">
              <NavLink>{t("footer.requirements")}</NavLink>
            </div>
            <select
              className="bg-[#0B1113] w-[250px] max-md:w-[150px] p-3 rounded-xl outline-none"
              name="lang"
              id="lang"
              onChange={changeLanguage}
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap my-5 gap-6 items-center w-full">
        <img
          src="/assets/icons/p1.svg"
          className="cursor-pointer"
          alt="Partner 1"
        />
        <img
          src="/assets/icons/p2.svg"
          className="cursor-pointer"
          alt="Partner 2"
        />
        <img
          src="/assets/icons/p3.svg"
          className="cursor-pointer"
          alt="Partner 3"
        />
        <img
          src="/assets/icons/p4.svg"
          className="cursor-pointer"
          alt="Partner 4"
        />
        <img
          src="/assets/icons/p5.svg"
          className="cursor-pointer"
          alt="Partner 5"
        />
        <img
          src="/assets/icons/p6.svg"
          className="cursor-pointer"
          alt="Partner 6"
        />
        <img
          src="/assets/icons/p7.svg"
          className="cursor-pointer"
          alt="Partner 7"
        />
      </div>
      <p className="text-center">
        {new Date().getFullYear()} {t("footer.allRightsReserved")}
      </p>
    </footer>
  );
};

export default Footer;
