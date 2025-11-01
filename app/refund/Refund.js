"use client";
import React, { useState } from "react";

import Link from "next/link";
import Head from "next/head";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import CommonBanner from "../components/CommonBanner";

const Refund = () => {
  // Meta tags and title for Next.js
  const faqs = [
    {
      question: "Refund and Cancellation Policy",
      answer:
        "Our focus is complete customer satisfaction. In the event, if you are displeased with the services provided, we will refund back the money, provided the reasons are genuine and proved after investigation. Project can only be cancelled within 3 days after signing the project agreement. If there is a refund, client will get refund within 10 days of the claim Please read the fine prints of each deal before buying it, it provides all the details about the services or the product you purchase.",
      li: "In case of dissatisfaction from our services, clients have the liberty to cancel their projects and request a refund from us. Our Policy for the cancellation and refund will be as follows:",
    },

    {
      question: "Cancellation Policy",
      answer: "For Cancellations please contact the us via contact us link. ",
      li: "Requests received later than 3 business days prior to the end of the current service period will be treated as cancellation of services for the next service period.",
    },

    {
      question: "Refund Policy",
      answer:
        "We will try our best to create the suitable design concepts for our clients.",
      li: "In case any client is not completely satisfied with our products we can provide a refund. ",
      liTwo:
        "If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase and in case of payment gateway name payments refund will be made to the same account.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <CommonBanner title="Refund Policy" breadcrumb="Refund Policy" />

      <div className="px-5 md:px-12 xl:px-28  py-14 pt-5">
        <div className="container mx-auto  text-justify text-lg text-[#6a6a8e]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#d4f0ff] rounded-lg px-4 my-5 py-3"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-2xl font-bold text-[#00baff]">
                  {activeIndex === index ? <FaMinusCircle /> : <FaPlusCircle />}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-max-height ease-in-out duration-1000 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="mt-3">
                  {faq.answer} <br /> {faq.li} <br /> {faq.liTwo}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Refund;
