import React from "react";

const Why4Pay = () => {
  return (
    <div>
      <div className="mt-52 text-white max-w-6xl mx-auto relative ">
        <h2 className="text-[48px] max-lg:text-[32px] font-bold  text-center">
          Почему выбирают 4Pay?
        </h2>
        <p className="text-[#BFC0C9] max-md:text-[14px] text-center">
          Мы поддерживаем все популярные способы оплаты, обеспечиваем быстрые
          транзакции <br /> и гарантируем высокий уровень безопасности.
        </p>
        <img
          src="/assets/img/Ellipse3.svg"
          className="absolute top-[20px] left-[-50px] "
          alt=""
        />
        <div className="grid grid-cols-3 max-[1200px]:grid-cols-1 gap-3 mt-20 relative">
          <div className="bg-[#121A1E] p-6 min-h-[350px] flex items-center rounded-xl">
            <div className="">
              <img src="/assets/icons/rocket.svg" alt="" />
              <h3 className="text-[32px] font-semibold py-3">Быстрый старт</h3>
              <p className="text-[#BFC0C9] max-md:text-[14px] ">
                Подключите прием платежей за 1 день без сложных интеграций.
              </p>
            </div>
          </div>
          <div className="bg-[#121A1E] p-6 min-h-[350px] flex items-center rounded-xl">
            <div className="">
              <img src="/assets/icons/inter.svg" alt="" />
              <h3 className="text-[32px] font-semibold py-3">
                Простая <br /> интеграция
              </h3>
              <p className="text-[#BFC0C9] max-md:text-[14px] ">
                Наш API позволяет легко подключить платежи к вашему сайту,
                маркетплейсу или мобильному приложению.
              </p>
            </div>
          </div>
          <div className="bg-[#121A1E] p-6 min-h-[350px] flex items-center rounded-xl">
            <div className="">
              <img src="/assets/icons/rocket.svg" alt="" />
              <h3 className="text-[32px] font-semibold py-3">
                Безопасные выводы средств
              </h3>
              <p className="text-[#BFC0C9] max-md:text-[14px] ">
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

export default Why4Pay;
