"use client";
import React, { useState } from "react";
import app from "../Assets/pp.webp";
import Image from "next/image";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

const Privacy = () => {
  // Meta tags and title for Next.js
  const faqs = [
    {
      question: "1. Personally Identifiable Information",
      answer:
        " There are several opportunities on our website for you to provide us with personally-identifiable information about you (such as name, email address and contact number). ",
      li: " If you choose to share any personal information with us, we may store it and use it to provide you with an idualized user experience. ",
      liTwo:
        " We will not obtain personally-identifying information about you without your consent. ",
    },

    {
      question: "2. Non-personal Identification Information",
      answer:
        "If you are browsing our site anonymously, we will collect some non-identifying information which helps us measure which pages of our website are visited and how often visitors use the platform.This information includes your IP address,   time and date, pages entered, and time spent on individual pages. Your IP address is not linked to anything personally identifiable. ",
    },

    {
      question: "3. Information Use",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon fficia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
    },
  ];
  const faqsecond = [
    {
      question: "4. Cookies",
      answer:
        "In order to provide you with the best, tailored experience, our site will need to place 'cookies', on your computer. We use temporary cookies which we store on your browser for a certain period of time.",
      li: " If you visit our site again, it is automatically recognized that you have already been with us and which inputs and settings you have made so that you do not have to enter them again. This information is used to improve the user experience through website upgrades.",
      liTwo:
        "We also use cookies for other purposes, such as web analytics. These cookies are also automatically deleted after a defined period of time. Although most web browsers automatically accept cookies, many browsers settings can be set to decline cookies or alert you when a website is attempting to place a cookie on your computer.",
      liThree:
        " However, some of our services may not function properly if you disable cookies ",
      bgColor: "#f9efff", // Adding bgColor property for index 2
      bgColorTwo: "#c7ecff", // Adding bgColor property for index 2
    },

    {
      question: "5. Google Analytics",
      answer:
        "We use Google Analytics to understand how our website is being used in order to improve the user experience. No personal information is collected or stored, the data is totally anonymous. The information collected is the number of peole visting the site, how they got there, and what they click on. We do not allow Google to use or share our analytics data.",
      bgColor: "#f9efff", // Adding bgColor property for index 2
      bgColorTwo: "#c7ecff", // Adding bgColor property for index 2
    },

    {
      question: "6. Social Media Buttons/ Pages",
      answer:
        "Our website includes social media buttons/pages from social media networks Facebook, Twitter, Instagram, and LinkedIn.",
      li: " If you visit one of our social media pages and are logged into the respective social media network, the provider of the respective social media network receives the information that your browser has called the corresponding page on        our website, even if you do not have a profile on the respective social media network or are not logged in there, the information (including your IP address) is transmitted directly from your browser to a server of the respective      provider.",
      liTwo:
        "For more information on the purpose and scope of data collection and processing by the providers of the respective social media network, the provider identification, a contact option, and your rights and settings regarding data protection, please refer to the respective privacy policies of the providers of the social media networks ",
      bgColor: "#f9efff", // Adding bgColor property for index 2
      bgColorTwo: "#c7ecff", // Adding bgColor property for index 2
    },
  ];
  const faqThird = [
    {
      question: "7. Payment Processing ",
      answer:
        "For certain services, including application processing and related fees, a minimum payment of ₹10,000 is required. This amount must be paid as per the terms of service provided at the time of application. Payments collected are securely processed and we adhere to privacy and data protection laws in handling any financial data.",
      // li: " If we conclude an employment contract with an applicant, the data transmitted will be processed in order to carry out the employment relationship in compliance with the statutory provisions."
    },
    {
      question: "8. Applications ",
      answer:
        "We collect and process personal data of applicants for the purpose of processing the application process. If an applicant submits his or her application documents electronically, they are processed electronically.",
      li: " If we conclude an employment contract with an applicant, the data transmitted will be processed in order to carry out the employment relationship in compliance with the statutory provisions.",
    },

    {
      question: "9. Children's Privacy ",
      answer:
        "Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us.",
      li: " If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.",
    },

    {
      question: "10. Data Security",
      answer:
        "We take organizational, contractual and technical security measures in accordance with the state of the art to ensure that the provisions of the data protection laws are complied with and to protect the data processed by us against accidental or intentional manipulation, loss, destruction or against access by unauthorized persons.",
      li: "Our website uses SSL encryption for security reasons and to protect the transmission of confidential content, such as orders, inquiries or payment data, which you send to us. ",
    },
    {
      question: "11. Amendments to this Privacy Policy",
      answer:
        "We reserve the right to amend this Privacy Policy from time to time so that it always complies with current legal requirements or in order to implement changes to our services.",
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
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Privacy Policy
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                This document governs the privacy policy of future touch in a
                way it receives, manages and retains information collected from
                users of the site. We recognize that privacy and confidentiality
                are important to our clients. This page describes in detail the
                privacy practices that apply to our services.
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
                <Link href="tel:+917056937000">Call us - 7056937000</Link>
              </button>
            </div>
          </div>
          <Image
            src={app}
            width={400}
            height={400}
            alt="Privacy Policy Illustration"
            className="w-60 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="px-4  sm:px-6 md:px-12 xl:px-28 pt-5">
        <div className="container mx-auto  text-justify text-lg text-[#6a6a8e]">
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

      <div className="px-4  sm:px-6 md:px-12 xl:px-28 pt-5">
        <div className="conatiner mx-auto text-justify text-lg text-[#6a6a8e]">
          {faqsecond.map((faq, index) => (
            <div
              key={index}
              className={`border bg-gradient-to-t my-5 from-[${faq.bgColor}] to-[${faq.bgColorTwo}] border-[#d4f0ff] rounded-lg px-4 py-3`}
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

      <div className="px-4  sm:px-6 md:px-12 xl:px-28 pt-5">
        <div className="container mx-auto text-justify text-lg text-[#6a6a8e]">
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

export default Privacy;
