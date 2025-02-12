import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      title: "Как подключить 4Pay для моего бизнеса?",
      answer:
        "Подключение займет всего 1 день. Оставьте заявку, пройдите простую регистрацию, выберите нужные платежные методы и получите доступ к личному кабинету.",
    },
    {
      title: "Какие способы оплаты поддерживает 4Pay?",
      answer:
        "Подключение займет всего 1 день. Оставьте заявку, пройдите простую регистрацию, выберите нужные платежные методы и получите доступ к личному кабинету.",
    },
    {
      title: "Как быстро зачисляются платежи?",
      answer:
        "Подключение займет всего 1 день. Оставьте заявку, пройдите простую регистрацию, выберите нужные платежные методы и получите доступ к личному кабинету.",
    },
    {
      title: "Какие комиссии у 4Pay?",
      answer:
        "Подключение займет всего 1 день. Оставьте заявку, пройдите простую регистрацию, выберите нужные платежные методы и получите доступ к личному кабинету.",
    },
  ];
  return (
    <div>
      <div className="text-white mt-24 max-w-4xl mx-auto px-3">
        <div>
          <h2 className="text-[48px] max-lg:text-[32px] font-bold  text-center">
            FAQ
          </h2>
          <p className="text-[#BFC0C9] max-md:text-[14px] text-center">
            Здесь мы собрали ответы на самые популярные вопросы о 4Pay. Если у
            вас остались <br /> вопросы, свяжитесь с нашей поддержкой — мы
            всегда готовы помочь!
          </p>
        </div>
        <div className="mt-10 relative">
          <ul className="">
            {faqs.map((faq, index) => (
              <li key={index} className="border-b border-b-[#0E84214D] py-3">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="text-[20px]">
                    {index + 1}. {faq.title}
                  </div>
                  <FaChevronDown
                    size={20}
                    color="#72E484"
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-[#BFC0C9] max-md:text-[14px] py-2">
                    {faq.answer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
