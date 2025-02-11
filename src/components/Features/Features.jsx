import React from "react";

const Features = () => {
  return (
    <div>
      <div className="min-[500px]:mt-52 text-white max-w-6xl mx-auto ">
        <h2 className="text-[48px] max-lg:text-[32px] font-bold  text-center">
          Широкий выбор способов оплаты
        </h2>
        <p className="text-[#BFC0C9] max-md:text-[14px] text-center">
          Мы предлагаем удобные и надежные методы приема платежей и вывода{" "}
          <br />
          средств, чтобы ваш бизнес мог работать без границ. Выбирайте
          подходящий <br /> способ и получайте деньги быстро и безопасно.
        </p>

        <div className="lg:grid grid-cols-3 max-lg:grid-cols-1 mt-10 gap-3">
          <div className="bg-[#121A1E] p-[40px] flex lg:justify-center w-full rounded-xl items-center min-h-[350px] lg:col-span-2">
            <div className="">
              <img src="/assets/icons/p2p.svg" alt="" />
              <h4 className="text-[32px] font-semibold py-3">P2P</h4>
              <p className="text-[#BFC0C9] max-md:text-[14px]">
                Совершайте мгновенные переводы другим людям с помощью банковских
                кард Visa, MasterCard и Мир.
              </p>
            </div>
          </div>
          <div className="bg-[#683DE5] rounded-xl p-[40px] flex lg:justify-center items-center min-h-[350px] max-lg:my-3 w-full">
            <div className="">
              <img src="/assets/icons/eCom.svg" alt="" />
              <h4 className="text-[32px] font-semibold py-3">eCom</h4>
              <p className="text-[#BFC0C9] max-md:text-[14px]">
                Принимайте платежи от ваших клиентов с помощью банковских кард
                Visa, MasterCard и Мир.
              </p>
            </div>
          </div>
          <div className="bg-[#72E48433] rounded-xl p-[40px] flex lg:justify-center items-center min-h-[350px] max-lg:my-3 w-full">
            <div className="">
              <img src="/assets/icons/sber.svg" alt="" />
              <h4 className="text-[32px] font-semibold py-3">Сбербанк</h4>
              <p className="text-[#BFC0C9] max-md:text-[14px]">
                Прием платежей от ваших клиентов с помощью QR-кода СберБанка
              </p>
            </div>
          </div>
          <div className="bg-[#121A1E] p-[40px] flex lg:justify-center w-full rounded-xl items-center min-h-[350px] lg:col-span-2">
            <div className="">
              <img src="/assets/icons/cpb.svg" alt="" />
              <h4 className="text-[32px] font-semibold py-3">СПБ </h4>
              <p className="text-[#BFC0C9] max-md:text-[14px]">
                Выводите средства моментально на карту, банковский счет или
                электронный кошелек.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
