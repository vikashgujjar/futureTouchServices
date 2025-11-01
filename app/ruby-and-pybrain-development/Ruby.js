"use client";
import React from "react";

import gm from "../Assets/ruby.webp";
import ec from "../Assets/rubyb.webp";
import d1 from "../Assets/rubywhy.webp";
import Image from "next/image";
import { developmentData } from "../common/Service_comp";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import CommonTechBlog from "../components/CommonTechBlog";
import GetNewInsight from "../components/GetNewInsight";

const Ruby = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              RUBY & PYBRAIN DEVELOPMENT SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Technology is becoming advanced, and with the latest development
                in technology, Machine Learning is on the rise. As we know,
                machine learning is nothing but a type of artificial
                intelligence that makes the computer self-sufficient to learn
                new things without being explicitly programmed. The rapidly
                growing market has resulted in successful web applications and
                services such as Netflix, Amazon, Facebook, Spotify, etc. So,
                the question is when you are looking for such kind of output and
                development to enhance your startup, is AI with Ruby on Rails or
                Machine Learning with Ruby on Rails a perfect choice?
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <Link
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </Link>
              <a
                href="tel:+917056937000"
                className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading "
              >
                Call us-7056937000
              </a>
            </div>
          </div>
          <Image
            src={gm}
            width={400}
            height={400}
            alt="Ruby & Pybrain Development Services"
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10 px-5 md:px-12 xl:px-28 py-14">
        <div className="w-2/3 pt-5 max-lg:w-full">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            How would you better define Machine Learning?
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              Machine learning and data science are the two sides of the same
              coin. You can’t work on one of them by avoiding the other. The
              machine learning automatically behaves by predicting the unknown
              results depending upon the related data sources. The uncertainty
              is almost diminished as the predictions are based on the
              behavioral actions of the users, and hence, the recommendations
              are also correctly displayed. When the computer itself gains the
              ability to smartly learn the mindset of the person using the
              application or web solution, it is called as AI learning or
              machine learning in a layman’s language.
            </p>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full">
          <Image
            src={d1}
            width={400}
            height={400}
            alt="Design 1"
            className="w-96  max-sm:mb-3 max-lg:mx-auto"
          />
        </div>
      </div>

      <WhatCanDo />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Why Use Python for AI and Machine Learning?
        </h3>
        <p className=" text-lg text-[#6a6a8e] my-5">
          AI based projects are completely different from traditional software
          developments. The significant difference lies in the tech stack, as
          AI-based projects require deep research. To implement your AI
          aspirations, a stable and flexible language like Python makes great
          sense.
        </p>
        <h3 className="text-2xl text-[#050748] font-semibold">
          Advantages of React Web and Mobile App Development
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
          {developmentData.map((item, index) => (
            <div className="Development-text" key={index}>
              <div className="flex gap-3 items-center">
                <item.iconFour className="text-4xl text-[#e33f70]" />
                <p className="ml-2 text-xl font-semibold text-[#e33f70] ">
                  {item.titleFive}
                </p>
              </div>
              <p className="mt-4">{item.descriptionFive}</p>
            </div>
          ))}
        </div>
      </div>

      <RequestQuote />

      <CommonTechBlog
        img={ec}
        title="  What Are The Advantages Of Using The Ruby Framework?
    "
        desc="  Native developers are going crazy in the discussion of Ruby vs.
              Python and Python over Ruby because it is one of the most
              preferred and convenient programming languages for developing data
              sciences, machine learning, and AI-based solutions. Python is
              offering a far more convenient then Ruby machine learning gem. At
              Bacancy Technology we are globally renowned Python developers, and
              we have proven expertise in building Python based Machine Learning
              and Artificial Intelligence modules. If you are still wondering
              why you should opt Python and not Ruby on Rails for Machine
              Learning, then get in touch with our expert to discuss in detail."
      />

      <GetNewInsight />
    </>
  );
};

export default Ruby;
