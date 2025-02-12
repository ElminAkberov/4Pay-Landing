import React from "react";
import { useTranslation } from "react-i18next";

const Why4Pay = () => {
  const { t } = useTranslation();

  return (
    <div id="advantages">
      <div className="mt-52 text-white max-w-6xl mx-auto relative z-40">
        <h2 className="text-[48px] max-lg:text-[32px] font-bold text-center relative z-40">
          {t("why4pay.title")}
        </h2>
        <p className="text-[#BFC0C9] lg:px-[250px] max-md:text-[14px] text-center relative z-40">
          {t("why4pay.subtitle")}
        </p>
        <img
          src="/assets/img/Ellipse3.svg"
          className="absolute top-[20px] left-[-50px]"
          alt=""
        />
        <div className="grid grid-cols-3 max-[1200px]:grid-cols-1 gap-3 mt-20 relative">
          <div className="bg-[#121A1E] p-6 min-h-[350px] flex items-center rounded-xl">
            <div className="">
              <img src="/assets/icons/rocket.svg" alt="" />
              <h3 className="text-[32px] font-semibold py-3">
                {t("why4pay.quickStart")}
              </h3>
              <p className="text-[#BFC0C9] max-md:text-[14px] ">
                {t("why4pay.quickStartDescription")}
              </p>
            </div>
          </div>
          <div className="bg-[#121A1E] p-6 min-h-[350px] flex items-center rounded-xl">
            <div className="">
              <img src="/assets/icons/inter.svg" alt="" />
              <h3 className="text-[32px] font-semibold py-3 lg:pr-10">
                {t("why4pay.simpleIntegration")}
              </h3>
              <p className="text-[#BFC0C9] max-md:text-[14px]">
                {t("why4pay.simpleIntegrationDescription")}
              </p>
            </div>
          </div>
          <div className="bg-[#121A1E] p-6 min-h-[350px] flex items-center rounded-xl">
            <div className="">
              <img src="/assets/icons/rocket.svg" alt="" />
              <h3 className="text-[32px] font-semibold py-3">
                {t("why4pay.secureWithdrawals")}
              </h3>
              <p className="text-[#BFC0C9] max-md:text-[14px]">
                {t("why4pay.secureWithdrawalsDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why4Pay;
