import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { t } = useTranslation();

  const faqs = t("faq.questions", { returnObjects: true });

  return (
    <div>
      <div className="text-white mt-24 max-w-4xl mx-auto px-3">
        <div>
          <h2 className="text-[48px] max-lg:text-[32px] font-bold text-center">
            {t("faq.title")}
          </h2>
          <p className="text-[#BFC0C9] max-md:text-[14px] text-center">
            {t("faq.description")}
          </p>
        </div>
        <div className="mt-10 relative">
          <ul>
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
