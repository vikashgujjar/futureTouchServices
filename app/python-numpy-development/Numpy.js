"use client";
import React from "react";

import phone from "../Assets/ec.webp";
import app from "../Assets/pd.webp";
import image from "../Assets/hhh (1).gif";
import Image from "next/image";
import { FaChevronRight, FaClock, FaMobile } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { corporateAndroid } from "../common/Service_comp";
import { ecommerceData } from "../common/Service_comp";
import { rangeAndroid } from "../common/Service_comp";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import GetNewInsight from "../components/GetNewInsight";

const Numpy = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Python Django Flask Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                As a developer, choosing the right framework for web development
                is crucial for a top notch website. Using the powerful, simple,
                and flexible Python-based Django framework, one can develop
                robust web solutions with just a few lines of code. Django has
                emerged as a prominent framework that is loaded with features.
                It is a server-side web framework that is written in Python and
                helps the developers in creating web apps quickly and
                efficiently. Out of all the modern day programming languages,
                Python and Django are preferred the most by the developers due
                to their robust programming structure.
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
                Call us - 7056937000
              </a>
            </div>
          </div>
          <Image
            src={app}
            alt="Python app preview"
            className="w-96 pt-0 max-lg:pt-10 lg:max-h-[325px] max-lg:mx-auto "
            width={384}
            height={384}
            priority
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10 px-5 md:px-12 xl:px-28 py-14">
        <div className="">
          <h3 className="text-3xl lg:text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
            What is Python?
          </h3>
          <p className=" text-lg text-[#6a6a8e] mt-5">
            Python is a popular general-purpose programming language that is
            used for a range of applications. It includes high-level data
            structures, dynamic typing, dynamic binding, and many more features.
            This open-source programming language utilizes a straightforward,
            yet, rich language structure, which makes it effortlessly
            decipherable. Python Development is one of the best and most
            effectively intelligible programming languages that can be clubbed
            effortlessly with other intense stages.
          </p>
          <div className="flex gap-10 mt-5">
            <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
              {corporateAndroid.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-5">
                    <item.iconFour
                      className={`text-3xl text-[${item.color}]`}
                    />

                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.titleFour}
                    </p>
                  </div>
                  <p className="mt-4 text-justify">{item.descriptionFour}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="w-full h-full bg-red-400"> */}
        <Image
          src={image}
          alt="Python blockchain animation"
          className="w-96 sticky top-0 h-96 pt-0 max-sm:pt-10 max-lg:mx-auto"
          width={384}
          height={384}
          priority
        />
        {/* </div> */}
      </div>

      <WhatCanDo
        title=" WHAT CAN WE DO FOR YOU?"
        desc="We would be happy to discuss the project with you in person"
      />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-4xl text-center lg:text-start max-sm:text-2xl max-md:text-3xl  text-[#050748] font-bold">
          Features of Python development
        </h3>
        <p className=" text-lg text-center lg:text-start text-[#6a6a8e] mt-5">
          These Python features make it stand out from all its peer programming
          languages:
        </p>
        <div className="flex gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5">
              <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                <FaMobile className="text-4xl text-[#e33f70]" />
              </div>
              <div className="ml-2">
                <p className="text-xl text-center lg:text-start font-bold text-[#e33f70]">
                  Future-ready Apps
                </p>
                <p className="mt-2 text-center lg:text-justify">
                  Adept with the latest industry trends and tools, our
                  developers craft advanced mobility solutions to cater to the
                  next-gen audience. Stay ahead of your competitors by engaging
                  our service.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row  items-center lg:items-start gap-5">
              <div className="rounded-full p-4 bg-white border-2 border-[#e33f70]">
                <FaClock className="text-4xl text-[#e33f70]" />
              </div>
              <div className="ml-2">
                <p className="text-xl text-center lg:text-start font-bold text-[#e33f70]">
                  Faster Time-to-Market
                </p>
                <p className="mt-2 text-center lg:text-justify">
                  With its extensive library of utility packages, UI building
                  blocks, and functions, Flutter actively helps in accelerating
                  the design process. While using Flutters, the developers need
                  not micro-optimize al.
                </p>
              </div>
            </div>
            {rangeAndroid.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col  lg:flex-row  items-center lg:items-start gap-5">
                  <div
                    className={`rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.iconThree
                      className={`text-4xl text-[${item.color}]`}
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-xl text-center lg:text-start font-bold text-[#e33f70]">
                      {item.titleThree}
                    </p>
                    <p className="mt-2 text-center lg:text-justify">
                      {item.descriptionThree}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RequestQuote />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-32 py-14">
        <h3 className="text-[27px] text-center lg:text-start text-[#050748] font-bold">
          Trusted Flutter App Development Company - Why Partner with Us
        </h3>
        <p className=" text-lg text-center lg:text-start text-[#6a6a8e]">
          As a reliable Flutter app development company in India, we guarantee
          you of the following:
        </p>
        <div className="flex flex-col xl:flex-row gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {ecommerceData.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col  xl:flex-row items-center  text-center lg:text-start lg:items-start gap-5">
                  <div
                    className={`rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.icon className={`text-4xl text-[${item.color}]`} />
                  </div>
                  <div className="ml-2">
                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.titleFive}
                    </p>
                    <p className="mt-2 text-center lg:text-justify">
                      {item.descriptionFive}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full xl:hidden   mt-10">
            <Image
              src={phone}
              alt="Python blockchain development phone preview"
              className="border-[18px] border-[#dfdfdf] w-full sticky top-0 "
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
      <GetNewInsight />
    </>
  );
};

export default Numpy;
