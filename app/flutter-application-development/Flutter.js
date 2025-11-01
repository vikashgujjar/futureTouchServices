"use client";
import React from "react";

import phone from "../Assets/flt.webp";
import app from "../Assets/Flutter.webp";
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

const Flutter = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className="  relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Flutter App Development Services
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Flutter is Google’s open-source UI toolkit that helps the
                developers to build dynamic and feature-rich applications for
                both Android and iOS platforms. At Future IT Touch Pvt. Ltd., we
                craft industry-standard cross-platform applications to
                streamline your business. Our next-gen Flutter app development
                services ensure future-ready applications for Android and iOS
                devices. As an experienced mobile app development agency, we
                offer end-to-end Flutter development services to craft
                expressive, agile, and flexible applications.
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
            alt="Flutter App Development"
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>
      <div
        className="flex max-lg:block gap-10 px-5 md:px-12 xl:px-28 py-14
"
      >
        <div className="">
          <h3 className="text-3xl lg:text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
            Our Suite of Flutter Development Services
          </h3>
          <p className=" text-lg text-[#6a6a8e] mt-5">
            As an experienced mobile app development agency, we offer end-to-end
            Flutter development services to craft expressive, agile, and
            flexible applications. Our solution is available at a competitive
            rate. Take a look at our range of services:
          </p>
          <div className="flex gap-10 mt-5">
            <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
              {corporateAndroid.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-5">
                    <item.icon className={`text-4xl text-[${item.color}]`} />

                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-4 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Image
          src={image}
          width={400}
          height={400}
          alt="Flutter Example"
          className="w-96 h-96 pt-0 max-lg:pt-10  max-lg:mx-auto"
        />
      </div>

      <WhatCanDo />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-4xl max-sm:text-2xl max-md:text-3xl  text-[#050748] font-bold">
          Advantages of App Development with Flutter
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          Our app development with Flutter has earned appreciation from a global
          clientele. Here are some of the advanced features of our Flutter
          solutions.
        </p>
        <div className="flex gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {/* <div className="flex flex-col lg:flex-row items-start gap-5">
                  <div
                    className="rounded-full p-4 bg-white border-2 border-[#e33f70]"
                  >
                    <FaMobile className="text-4xl text-[#e33f70]" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xl font-bold text-[#e33f70]">
                    Future-ready Apps
                    </p>
                    <p className="mt-2 text-justify">Adept with the latest industry trends and tools, our developers craft advanced mobility solutions to cater to the next-gen audience. Stay ahead of your competitors by engaging our service.</p>
                  </div>
                </div>
          <div className="flex flex-col lg:flex-row items-start gap-5">
                  <div
                    className="rounded-full p-4 bg-white border-2 border-[#e33f70]"
                  >
                    <FaClock className="text-4xl text-[#e33f70]" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xl font-bold text-[#e33f70]">
                    Faster Time-to-Market
                    </p>
                    <p className="mt-2 text-justify">With its extensive library of utility packages, UI building blocks, and functions, Flutter actively helps in accelerating the design process. While using Flutters, the developers need not micro-optimize al.</p>
                  </div>
            </div> */}
            {rangeAndroid.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.icon className={`text-4xl text-[${item.color}]`} />

                  <p className={`text-xl font-bold text-[${item.color}]`}>
                    {item.title}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RequestQuote />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Trusted Flutter App Development Company - Why Partner with Us
        </h3>
        <p className=" text-lg text-[#6a6a8e]">
          As a reliable Flutter app development company in India, we guarantee
          you of the following:
        </p>
        <div className="flex max-lg:block gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {ecommerceData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.icon className={`text-4xl text-[${item.color}]`} />

                  <p className={`text-xl font-bold text-[${item.color}]`}>
                    {item.title}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full mt-10">
            <Image
              src={phone}
              width={800}
              height={800}
              alt="Flutter Phone Example"
              className="border-[18px] border-[#dfdfdf]"
            />
          </div>
        </div>
      </div>
      <GetNewInsight />
    </>
  );
};

export default Flutter;
