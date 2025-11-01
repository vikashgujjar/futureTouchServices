"use client";
import React from "react";

import Image from "next/image";
import cwd from "../Assets/swift.webp";
import ec from "../Assets/or.gif";
import mrk from "../Assets/benefits-of-swift.webp";
import {
  FaChevronRight,
  FaGetPocket,
  FaHeadset,
  FaSearchLocation,
  FaTimesCircle,
} from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { cuttingData, corporateData } from "../common/Service_comp";
import loc from "../Assets/logo-c.gif";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import GetNewInsight from "../components/GetNewInsight";

const Swift = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              SWIFT MOBILE APP DEVELOPMENT SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify  max-lg:text-base">
              <p>
                Introduced by Apple for the development of iOS and Mac Apps,
                Swift is an efficient and feature-rich high-level programming
                language. The iOS apps built on Swift run very fast and are
                quite interactive. Besides developing new apps for a range of
                platforms namely, iOS, macOS, watchOS, tvOS, Swift can also be
                used in revamping existing apps. Future IT Touch Pvt. Ltd. has a
                dedicated team of skilled and experienced iOS app developers who
                are well versed in the language to develop a wide variety of
                apps swiftly. Our Swift mobile app development services are
                customized to your specific business requisites.
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
            src={cwd}
            width={400}
            height={400}
            alt=""
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" px-5 md:px-12 xl:px-28  py-14">
        <h3 className="text-4xl text-[#050748] font-bold">
          Business Benefits Of Swift App Development
        </h3>
        <p className="mt-5 text-lg  text-[#6a6a8e] text-justify">
          According to Tim Cook, Swift is the next big programming language
          developers will be building apps in. Designed for the enterprises,
          this language is easier to read for developers, almost like English.
          Furthermore, the language is comparatively new in the market, making
          it all the more desirable by developers and enterprises alike.
        </p>
        <p className="mt-5 text-lg  text-[#6a6a8e]">
          See how businesses can benefit from Swift app development:
        </p>
        <div className="flex max-lg:block gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {cuttingData?.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-2">
                  <div className="rounded-full ">
                    <item.iconSeven className="text-3xl text-[#e33f70]" />{" "}
                  </div>
                  <p className=" text-lg text-[#e33f70]">{item.titleSeven}</p>
                </div>
                <div className="pt-3">
                  <p>{item.descriptionSeven}</p>
                </div>
              </div>
            ))}
          </div>

          <Image
            src={mrk}
            width={400}
            height={400}
            alt=""
            className="w-96 h-80 mt-10 mx-auto"
          />
        </div>
      </div>
      <WhatCanDo />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Our Swift App Development Services
        </h3>
        <p className="mb-6 text-[#6a6a8e] mt-5 text-lg text-justify">
          Future IT Touch Pvt. Ltd. provides end-to-end Swift app development
          services to clients across diverse industry verticals spanning small
          startups and mid-level companies to large scale enterprises. We use
          the interactive programming tool to develop amazing applications on
          the iOS platform. We also use the highly functional programming
          language to reduce development speed and bring down overhead costs of
          your business. Our Swift app development services include:
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-4 pt-10 gap-12  text-lg text-[#6a6a8e]">
          <div className="flex items-start gap-3">
            <FaSearchLocation className="text-4xl text-[#e33f70]" />
            <p className="">Mapping of iOS7 Apps to iOS8 or 9</p>
          </div>
          <div className="flex items-start gap-3">
            <FaTimesCircle className="text-4xl text-[#e33f70]" />
            <p className="">Converting Objective C Apps to Swift</p>
          </div>
          <div className="flex items-start gap-3">
            <FaGetPocket className="text-4xl text-[#e33f70]" />
            <p className="">Socket Development With Swift</p>
          </div>

          <div className="flex items-start gap-3">
            <FaHeadset className="text-4xl text-[#e33f70]" />
            <p className="">Swift Apps Maintenance & Support</p>
          </div>
        </div>

        <h3 className="text-2xl text-[#050748] mt-16 font-semibold">
          An overview our Swift app development process:
        </h3>
        <div className=" grid grid-cols-1 md:grid-cols-3 pt-10 gap-12  text-lg text-[#6a6a8e]">
          {cuttingData.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col lg:flex-row items-start gap-5">
                <item.iconEight className={`text-3xl text-[${item.color}]`} />
                <p className={`text-xl text-[${item.color}]`}>
                  {item.titleEight}
                </p>
              </div>
              <p className="mt-2">{item.descriptionEight}</p>
            </div>
          ))}
        </div>
      </div>

      <RequestQuote />
      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Check Out Other Reasons Why You Should Hire Swift iOS App Developers
          From Us:
        </h3>

        <div className="flex max-lg:block gap-10 mt-10 max-sm:mt-2">
          <div className="w-2/3 max-lg:w-full grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {corporateData.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col lg:flex-row items-start gap-5">
                  <div
                    className={` rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.iconSeven
                      className={`text-4xl text-[${item.color}]`}
                    />
                  </div>
                  <div className="ml-2">
                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.titleSeven}
                    </p>
                    <p className="mt-2">{item.descriptionSeven}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/3 max-lg:w-full mt-10">
            <Image
              src={loc}
              width={400}
              height={400}
              alt=""
              className="w-full "
            />
          </div>
        </div>
      </div>
      <GetNewInsight />
    </>
  );
};

export default Swift;
