import React from "react";

const ContactUs = () => {
  return (
    <form className="text-white mt-24 max-w-6xl mx-auto  bg-[#121A1E] min-h-[650px] p-16 rounded-2xl relative max-md:px-2">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[48px] max-lg:text-[32px] font-bold  text-center">
          Свяжитесь с нами
        </h2>
        <p className="text-[#BFC0C9] max-md:text-[14px] text-center py-3 px-4">
          Мы предлагаем удобные и надежные методы приема платежей и вывода
          средств, чтобы ваш бизнес мог работать без границ. Выбирайте
          подходящий способ и получайте деньги быстро и безопасно.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-5">
        <div className="mb-5">
          <label className="text-[12px]" htmlFor="name">
            Имя Фамилия
          </label>
          <input
            type="text"
            required
            minLength={3}
            className="bg-[#1D2A39] w-full p-4 outline-none rounded-2xl"
            placeholder="Ввести"
          />
        </div>
        <div className="">
          <label className="text-[12px]" htmlFor="phone">
            Номер Телефона
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            inputMode="tel"
            pattern="[0-9+()]*"
            required
            placeholder="Номер телефона"
            className="bg-[#1D2A39] w-full p-4 outline-none rounded-2xl"
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9+()]/g, ""))
            }
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-fit min-w-[300px] max-md:min-w-[150px] bg-[#683DE5] p-4 px-5 font-semibold  0 rounded-full text-[14px] cursor-pointer mt-20"
          >
            Связаться с нами
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactUs;
