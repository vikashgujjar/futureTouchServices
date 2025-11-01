"use client";
import React, { useState } from "react";
import app from "../Assets/tc.webp";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const TermsCondition = () => {
  // Meta tags and title for Next.js
  // ...existing code...
  const faqs = [
    {
      question: "1. Description of Services.",
      answer:
        " Future IT Touch Pvt. Ltd. may provide Client with one or more services, included but not limited to,    following: Website Design & Development and affiliated products/services, Internet Marketing, Mobile Application Development, Content Development, and/ or Maintenance and Support Services. Unless explicitly stated otherwise, any new feature that augments or enhances the Services shall be considered to be part of the Services. Future IT Touch Pvt. Ltd.            reserves the right to modify, suspend or discontinue the Services (or any part thereof), based on non-cooperation, non ment, or unwanted delay from client, at any time, without notice. Client expressly agrees that Client, or any related third party, shall not hold Future IT Touch Pvt. Ltd. or its suppliers liable for any losses, damages or consequences whatsoever from such modification, suspension or discontinuation of the Services.There are several opportunities on our website for you to provide us with personally-identifiable information about you (such as name, email address and contact number). ",
    },

    {
      question: "2. Acceptance",
      answer:
        "It is not necessary for any Client to have signed an acceptance of these terms and conditions for them to apply. If a Client accepts a quote then the Client will be deemed to have satisfied themselves as to the terms applying and have accepted these terms and conditions in full.  Please read these terms and conditions carefully. Any purchase/payment of an advance fee or use of our services implies that you have read and accepted our terms and conditions.",
    },

    {
      question: "3. Database, E-Commerce & Application Development",
      answer:
        "Future IT Touch Pvt. Ltd. is not liable for any losses caused by any software that is created for the         client. Though we take every care to ensure the products are accurate and error-free, the ultimate responsibility remains with the Client to ensure that all products and software are functioning properly before use.",
      li: " Where site and applications are developed on servers that are not provided by Future Touch, the Client will be responsible to provide and/ or seek any information, support,additional software and/ or co-operation relating to the server required for application to be developed correctly. For developing large applications, the Client will be        responsible for providing a suitable testing environment, identical to the Client’s final production environment..",
      liTwo:
        "Any application or programming pertaining to a website developed by Future IT Touch Pvt. Ltd., the Client is expected to fully test them before making the same generally available for use. Future IT Touch Pvt. Ltd. will endeavour but not obliged to correct errors, “bugs” or other issues are found in the website developed by us after the site is live to meet the standards of site’s function outlined in the brief. ",
    },
  ];
  const faqsecond = [
    {
      question: "4. Charges",
      answer:
        "Charges for services to be provided by Future IT Touch Pvt. Ltd. are defined in the project quotation that the Client receives via e-mail. Quotations are valid for a period of 30 days unless alternate timescales have been agreed beforehand with the Client. Future IT Touch Pvt. Ltd. reserves the right to alter or decline to provide a quotation after expiry of the valid timescale.",
      li: "Unless agreed otherwise with the Client, all website design services require an advance payment of a minimum of fifty (50) percent of the project quotation total before work will commence. A second charge of thirty (30) percent is required after the development stage, with the remaining twenty (20) percent of the project quotation total due upon completion of the work, prior to upload to the server or release of materials. Charges for web/app development do not cover the release of source Photoshop or Flash files; if the Client requires these items then a separate quotation can be prepared.",
      liTwo:
        " Payment for services is due by cheque or bank transfer. Bank details will be made available on invoices. ",
      bgColor: "#f9efff", // Adding bgColor property for index 2
      bgColorTwo: "#c7ecff", // Adding bgColor property for index 2
    },

    {
      question: "5. Development Process",
      answer:
        " Database Implementation – Entry of data for database applications is considered the client’s responsibility. Entry of data by Future IT Touch Pvt. Ltd. is billable unless otherwise provided for in the customer’s contract.",
      li: "Training – For websites with administrative control panels or content management systems, two (2) one-hour training sessions will be provided. ",
      liTwo:
        " Technical Support – We offer local and long-distance phone support to our clients. We do not normally bill for technical support depending on the source of the problem, its severity, and our time invested. If Future IT Touch Pvt. Ltd. is not the source of the problem, technical support may be billable.",
      bgColor: "#f9efff", // Adding bgColor property for index 2
      bgColorTwo: "#c7ecff", // Adding bgColor property for index 2
    },

    {
      question: "6. Training and Tutorials",
      answer:
        "Because customer service is an integral part of our business strategy, all of our projects include a one-time complimentary training session for our clients to better make use of their new web technology. Additional training hours can be purchased at our standard hourly rate or applied against your existing maintenance contract.",
      li: " If you visit one of our social media pages and are logged into the respective social media network, the provider of the respective social media network receives the information that your browser has called the corresponding page on our website, even if you do not have a profile on the respective social media network or are not logged in there, the information (including your IP address) is transmitted directly from your browser to a server of the respective provider.",
      bgColor: "#f9efff", // Adding bgColor property for index 2
      bgColorTwo: "#c7ecff", // Adding bgColor property for index 2
    },
  ];
  const faqThird = [
    {
      question: "7.  Client Review ",
      answer:
        "On completion of the work, you will be notified and have the opportunity to review it. You must notify us in writing of any unsatisfactory points within 7 days of such notification. Any of the work which has not been reported in writing to us as unsatisfactory within the 7-day review period will be deemed to have been approved. Once approved, or deemed approved, work cannot subsequently be rejected, and the contract will be deemed to have been completed, and the pending balance of the project price will become due.",
      li: " If you reject any of our work within the 7-day review period or do not approve subsequent work performed by us to remedy any points recorded as being unsatisfactory, and we, acting reasonably, consider that you have been unreasonable in any rejection of the work, we can elect to treat this contract as at an end and take measures to recover payment for the completed work.",
    },

    {
      question: "8.  Project Schedule and Content Control ",
      answer:
        "In the majority of projects, Future IT Touch Pvt. Ltd. will install and publicly post or supply the Client's website by the date specified in the project proposal. If no such date is specified, the timescale shall be within two weeks of the date initial payment is received from the Client unless a delay is specifically requested by the Client and agreed by Future IT Touch Pvt. Ltd.. An alternate timescale can be agreed during the initial project discussion.",
      li: " In return, the Client agrees to delegate a single individual as the first-point-of-cal to aid Future IT Touch Pvt. Ltd. with completing the project in a satisfactory and expedient manner.",
      liTwo:
        "During the project, Future IT Touch Pvt. Ltd. will require the Client to provide copy and images. If content is not provided within two (2) weeks of an official request by email, then Future IT Touch Pvt. Ltd. reserves the right to advise the Client of a revision to the final payment fee based on new or revised pricing schedules that may be introduced from time to time. If content is not provided within three (3) weeks from the original email request, then the Client is considered to be in default of the project, the project will be terminated, and the Client sent the final invoice for immediate payment. Future IT Touch Pvt. Ltd. will agree, at its discretion, to recommence the project after an agreement is reached on a new quotation document and once the original fees have been paid.",
    },

    {
      question: "9. Project Schedule and Content Control",
      answer:
        "In the majority of projects, Future IT Touch Pvt. Ltd. will install and publicly post or supply the Client's Web site by the date specified in the project proposal. If no such date is specified, the timescale shall be within two weeks of the date initial payment is received from the Client, unless a delay is specifically requested by the Client and agreed by Future IT Touch Pvt. Ltd.. An alternate timescale can be agreed during the initial project discussion..",
      li: "In return, the Client agrees to delegate a single individual as 'first-point-of-call' to aid Future IT Touch Pvt. Ltd. with completing the project in a satisfactory and expedient manner. ",
      liTwo:
        "During the project, Future IT Touch Pvt. Ltd. will require the Client to provide copy and images. If content is not provided within two (2) weeks of an official request by email then Future IT Touch Pvt. Ltd. reserves the right to advise the Client of a revision to the final payment fee based on new or revised pricing schedules that may be introduced from time to time. If content is not provided within three (3) weeks from the original email request then the Client is considered to be in default of the project, the project will be terminated and the Client sent the final invoice for immediate payment. Future IT Touch Pvt. Ltd. will agree, at its discretion, to recommence the project after agreement is reached on a new quotation document and once the original fees have been paid. ",
    },
    {
      question: "10. Payment",
      answer:
        "Final payment is due regardless of whether all content for the pages has been sent by the client. This provision is in place to encourage the client to get content submitted promptly so that their project can go live. It also ensures that Future IT Touch Pvt. Ltd. gets paid for performing their duty under the proposal, despite tardy content from the client. After payment, Future IT Touch Pvt. Ltd. will still post pre-agreed outstanding content AT NO CHARGE for 2 months. In the event an “under construction” page is posted due to missing content, Future IT Touch Pvt. Ltd. will post ONE copy of any pre-agreed text/pictures on existing pages only, for up to 2 months after publish date. After the two months have expired, content posted to site will be billable at our current regular hourly rate. In the event that design and navigation changes are requested after they have been specifically approved by the client, these changes will be billable at our current regular hourly rate.",
      li: "Project can only be cancelled within 3 days after signing the project agreement. If there is a refund, client will get refund within 10 days of the claim.",
      liTwo:
        'Invoices will be provided by Future IT Touch Pvt. Ltd. upon completion of the work for Web Development and Design and any associated services. Invoices are normally sent via email; however, the Client may elect to receive hard copy invoices. Invoices are due within fifteen (15) days of receipt after which a reminder will be sent to the Client. If the invoice has not been settled after thirty (30) days then Future IT Touch Pvt. Ltd. will consider the account to be in default." ',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [activeIndexSecond, setActiveIndexSecond] = useState(null);

  const toggleAnswerSecond = (index) => {
    setActiveIndexSecond(activeIndexSecond === index ? null : index);
  };
  const [activeIndexThird, setActiveIndexThird] = useState(null);

  const toggleAnswerThird = (index) => {
    setActiveIndexThird(activeIndexThird === index ? null : index);
  };
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 "></div>

      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex max-sm:block max-lg:block max-sm:px-5 max-lg:px-10  max-sm:py-7 gap-10  pt-12 max-pt-1 px-5 md:px-12 lg:px-35  max-lg:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Terms & Conditions
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Please read our terms and conditions carefully. By using our
                services you are deemed to agree & accept our terms and
                conditions and privacy policy.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <Link
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </Link>
              <button className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading ">
                Call us-7056937000
              </button>
            </div>
          </div>
          <Image
            src={app}
            width={400}
            height={400}
            alt="Terms & Conditions"
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-12 xl:px-28">
        <div className="container mx-auto pt-10  text-justify text-lg text-[#6a6a8e]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border my-5 border-[#d4f0ff] rounded-lg px-4 py-3"
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
                  {faq.answer} <br /> {faq.li} <br /> {faq.liTwo} <br />{" "}
                  {faq.liThree}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-12 xl:px-28">
        <div className=" container mx-auto pt-10 text-justify text-lg text-[#6a6a8e]">
          {faqsecond.map((faq, index) => (
            <div
              key={index}
              className="border bg-gradient-to-t my-5 from-[#f9efff] to-[#c7ecff] border-[#d4f0ff] rounded-lg px-4 py-3"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswerSecond(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-2xl font-bold text-[#00baff]">
                  {activeIndexSecond === index ? (
                    <FaMinusCircle />
                  ) : (
                    <FaPlusCircle />
                  )}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-max-height ease-in-out duration-1000 ${
                  activeIndexSecond === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="mt-3">
                  {faq.answer} <br /> {faq.li} <br /> {faq.liTwo} <br />{" "}
                  {faq.liThree}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-12 xl:px-28">
        <div className="container mx-auto pt-10 text-justify text-lg text-[#6a6a8e]">
          {faqThird.map((faq, index) => (
            <div
              key={index}
              className="border my-5 border-[#d4f0ff] rounded-lg px-4 py-3"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswerThird(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-2xl font-bold text-[#00baff]">
                  {activeIndexThird === index ? (
                    <FaMinusCircle />
                  ) : (
                    <FaPlusCircle />
                  )}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-max-height ease-in-out duration-1000 ${
                  activeIndexThird === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="mt-3">
                  {faq.answer} <br /> {faq.li} <br /> {faq.liTwo} <br />{" "}
                  {faq.liThree}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TermsCondition;
