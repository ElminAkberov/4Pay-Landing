import React from "react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  return (
    <div id="features">
      <div className="min-[500px]:mt-52 text-white max-w-6xl mx-auto ">
        <h2 className="text-[48px] max-lg:text-[32px] font-bold  text-center">
          {t("wide_payment_methods")}
        </h2>
        <p className="text-[#BFC0C9] max-md:text-[14px] text-center px-[50px]">
          {t("payment_methods_description")}
        </p>

        <div className="lg:grid grid-cols-3 max-lg:grid-cols-1 mt-10 gap-3">
          <div className="bg-[#121A1E] p-[40px] flex lg:justify-center w-full rounded-xl items-center min-h-[350px] lg:col-span-2">
            <div className="">
              <img src="/assets/icons/p2p.svg" alt="" />
              <h4 className="text-[32px] font-semibold py-3">{t("p2p")}</h4>
              <p className="text-[#BFC0C9] max-md:text-[14px]">
                {t("p2p_description")}
              </p>
            </div>
          </div>
          <div className="bg-[#683DE5] rounded-xl p-[40px] flex lg:justify-center items-center min-h-[350px] max-lg:my-3 w-full">
            <div className="">
              <img src="/assets/icons/eCom.svg" alt="" />
              <h4 className="text-[32px] font-semibold py-3">eCom</h4>
              <p className="text-[#BFC0C9] max-md:text-[14px]">
                {t("ecom_description")}
              </p>
            </div>
          </div>
          <div className="bg-[#72E48433] rounded-xl p-[40px] flex lg:justify-center items-center min-h-[350px] max-lg:my-3 w-full">
            <div className="">
              <img src="/assets/icons/sber.svg" alt="" />
              <h4 className="text-[32px] font-semibold py-3">
                {t("sberbank")}
              </h4>
              <p className="text-[#BFC0C9] max-md:text-[14px]">
                {t("sberbank_description")}
              </p>
            </div>
          </div>
          <div className="bg-[#121A1E] p-[40px] flex  w-full rounded-xl items-center min-h-[350px] lg:col-span-2">
            <div className="">
              <img src="/assets/icons/cpb.svg" alt="" />
              <h4 className="text-[32px] font-semibold py-3"> {t("spb")} </h4>
              <p className="text-[#BFC0C9] max-md:text-[14px]">
                {t("spb_description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
