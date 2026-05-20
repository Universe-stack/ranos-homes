"use client"
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const faqs = [
  {
    question: 'The expense windows adapted sit. Wrong widen drawn.',
    answer:
      'Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.',
  },
  {
    question: 'Six curiosity day assurance bed necessary?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
  },
  {
    question: 'Produce say the ten moments parties?',
    answer:
      'Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
  },
  {
    question: 'Simple innate summer fat appear basket his desire joy?',
    answer:
      'Maecenas eget consectetur ex. Pellentesque ac velit egestas, convallis sem sit amet, dictum erat.',
  },
  {
    question: 'Outward clothes promise at gravity do excited?',
    answer:
      'Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* FAQ List */}
      <div className="md:col-span-2 bg-white rounded-none p-8 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black">Frequently<br />asked questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="border border-gray-200 rounded-none bg-[#fafbfc]"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="font-medium text-base text-black">
                  {faq.question}
                </span>
                <span className="ml-4 text-xl text-gray-400">
                  {openIndex === idx ? '-' : '+'}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-gray-500 text-sm animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Side Card */}
      <div className="bg-white rounded-none p-8 shadow-sm flex flex-col items-center justify-center min-h-85">
        <div className="w-12 h-12 bg-gray-100 rounded-none flex items-center justify-center mb-6">
          <FaWhatsapp className="text-green-500 text-2xl" />
        </div>
        <div className="text-center mb-8">
          <div className="font-semibold text-black mb-4">Do you have more questions?</div>
          <div className="text-gray-500 text-sm mb-6">Reach out to our support, and our management team will get in touch. Meet the right platform for help now.</div>
        </div>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-none transition-colors text-sm shadow-md">
          Talk to us Directly
        </button>
      </div>
    </section>
  );
}
