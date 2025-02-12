import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <form className="text-white mt-24 max-w-6xl mx-auto bg-[#121A1E] min-h-[650px] p-16 rounded-2xl relative max-md:px-2">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[48px] max-lg:text-[32px] font-bold text-center">
          {t("contactUs.title")}
        </h2>
        <p className="text-[#BFC0C9] max-md:text-[14px] text-center py-3 px-4">
          {t("contactUs.description")}
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-5">
        {/* <div className="mb-5">
          <label className="text-[12px]" htmlFor="name">
            {t("contactUs.nameLabel")}
          </label>
          <input
            type="text"
            required
            minLength={3}
            className="bg-[#1D2A39] w-full p-4 outline-none rounded-2xl"
            placeholder={t("contactUs.namePlaceholder")}
          />
        </div>
        <div className="">
          <label className="text-[12px]" htmlFor="phone">
            {t("contactUs.phoneLabel")}
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            inputMode="tel"
            pattern="[0-9+()]*"
            required
            placeholder={t("contactUs.phonePlaceholder")}
            className="bg-[#1D2A39] w-full p-4 outline-none rounded-2xl"
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9+()]/g, ""))
            }
          />
        </div> */}
        <div className="flex justify-center">
          <NavLink target="_blank" to={"https://t.me/q_fourpay"}>
            <button
              type="submit"
              className="w-fit min-w-[300px] max-md:min-w-[150px] bg-[#683DE5] p-4 px-5 font-semibold rounded-full text-[14px] cursor-pointer mt-20"
            >
              {t("contactUs.submitButton")}
            </button>
          </NavLink>
        </div>
      </div>
    </form>
  );
};

export default ContactUs;
