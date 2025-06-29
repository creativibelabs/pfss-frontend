"use client"
import React, { useState } from 'react';
import CircleIcon from '../icons/CircleIcon';
import { ChevronDown } from 'react-feather';

const faqs = [
  {
    question: 'What is a Payment Gateway?',
    answer:
      'No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charge.',
  },
  {
    question: 'What is a Payment Gateway?',
    answer:
      'No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charge.',
  },
  {
    question: 'What is a Payment Gateway?',
    answer:
      'No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charge.',
  },
  {
    question: 'What is a Payment Gateway?',
    answer:
      'No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charge.',
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="w-full flex flex-col items-center justify-start px-2 mt-18"
    >
      <div className="w-full max-w-5xl flex flex-col gap-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`rounded-[16px] border border-emerald-700 transition-all duration-300 ${
              openIndex === idx ? 'bg-emerald-900/60' : 'bg-emerald-900/30'
            }`}
          >
            <button
              className="w-full flex items-center gap-4 px-6 py-5 text-left focus:outline-none"
              onClick={() => handleToggle(idx)}
            >
              <span className="flex-shrink-0">
                <CircleIcon />
              </span>
              <span className="text-lg md:text-xl font-semibold text-white flex-1">
                {faq.question}
              </span>
              <span
                className={`transition-transform duration-300 cursor-pointer ${
                  openIndex === idx ? 'rotate-180 text-white' : 'rotate-0 text-[#43E1A9]'
                }`}
              >
                <ChevronDown size={28} />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 px-6 ${
                openIndex === idx
                  ? 'max-h-40 opacity-100 py-2'
                  : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <p className="text-white text-base md:text-[15px] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
