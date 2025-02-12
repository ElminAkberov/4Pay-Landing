import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const TargetAudience = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="max-w-[1400px] mx-auto mt-52 text-white relative bg-[#1A222B] p-16 rounded-3xl">
        <div className="lg:flex gap-10">
          <div className="lg:w-1/2 lg:mx-auto max-lg:flex flex-col items-center justify-center max-lg:text-center">
            <h3 className="text-[32px] font-semibold">
              {t("targetAudience.title")}
            </h3>
            <p className="text-[#BFC0C9] max-md:text-[14px] lg:pr-16 py-4">
              {t("targetAudience.description")}
            </p>
            <NavLink target="_blank" to={"https://t.me/q_fourpay"}>
              <button className="w-fit mt-4 min-w-[300px] max-md:min-w-[150px] bg-[#72E484] p-4 px-5 font-semibold text-black rounded-full text-[14px] cursor-pointer">
                {t("targetAudience.contactUs")}
              </button>
            </NavLink>
          </div>
          <div className="lg:w-1/2 max-lg:mt-10">
            <div className="p-4 px-8 bg-[#1D2A39] flex items-center mb-3 gap-x-3 rounded-full">
              <img src="/assets/icons/star.svg" alt="" />
              <p>{t("targetAudience.audiences.ecommerce")}</p>
            </div>
            <div className="p-4 px-8 bg-[#1D2A39] flex items-center mb-3 gap-x-3 rounded-full">
              <img src="/assets/icons/star.svg" alt="" />
              <p>{t("targetAudience.audiences.freelancers")}</p>
            </div>
            <div className="p-4 px-8 bg-[#1D2A39] flex items-center mb-3 gap-x-3 rounded-full">
              <img src="/assets/icons/star.svg" alt="" />
              <p>{t("targetAudience.audiences.subscriptions")}</p>
            </div>
            <div className="p-4 px-8 bg-[#1D2A39] flex items-center gap-x-3 rounded-full">
              <img src="/assets/icons/star.svg" alt="" />
              <p>{t("targetAudience.audiences.onlinePlatforms")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
