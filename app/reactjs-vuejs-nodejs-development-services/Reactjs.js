"use client";
import React from "react";

import loc from "../Assets/logo-c.gif";
import app from "../Assets/vjs.webp";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import { corporateAndroid } from "../common/Service_comp";
import { rangeData } from "../common/Service_comp";
import { corporateData } from "../common/Service_comp";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import GetNewInsight from "../components/GetNewInsight";

const Reactjs = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className="  relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Node JS, React JS, Next Js Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Node JS is considered as the perfect solution for developing
                data-intesive, real-time web and mobile apps. Based on
                JavaScript, Node JS can be used at the backend, making
                development simpler and easier. As a leading Node JS development
                company in India, we utilise this framework to develop high
                traffic-driven real-time applications, network applications and
                mobile applications of all sizes and scale. Avail our
                results-driven Node JS development services at a competitive
                rate.
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
            alt="Reactjs Vuejs Nodejs Development"
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-3xl lg:text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
          Benefits of Node JS, Angular Js Development
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          Node JS development has a wide array of benefits including the
          following:
        </p>
        <div className="flex gap-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10  text-lg text-[#6a6a8e]">
            {rangeData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.icon className={`text-4xl text-[${item.color}]`} />

                  <p className={`text-xl font-bold text-[${item.color}]`}>
                    {item.titleTwo}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.descriptionTwo}</p>
              </div>
            ))}
          </div>
        </div>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          Node JS stands out as a technically advanced application development
          platform for both small and large scale businesses. Opt for our Node
          JS development services for robust and fast-operating web and mobile
          applications.
        </p>
      </div>

      <WhatCanDo />
      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Our Node JS Development Services
        </h3>

        <p className=" text-lg text-[#6a6a8e] mt-5">
          Our range of Node JS development services offers you turnkey web
          solutions including the following:
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
          {corporateAndroid.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-5">
                <item.icon className={`text-4xl text-[${item.color}]`} />

                <p className={`text-xl font-bold text-[${item.color}]`}>
                  {item.titleThree}
                </p>
              </div>
              <p className="mt-4 text-justify">{item.descriptionThree}</p>
            </div>
          ))}
        </div>
      </div>

      <RequestQuote />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Partner with a Trusted Node JS Development Company
        </h3>
        <p className=" text-lg text-[#6a6a8e] my-5">
          As a reliable Node JS development company, we ensure you of the
          following:
        </p>
        <div className="flex flex-col lg:flex-row gap-10  max-sm:mt-2">
          <div className="w-2/3 md:w-full grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {corporateData.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col lg:flex-row items-center gap-5">
                  <item.iconSix className={`text-4xl text-[${item.color}]`} />

                  <p className={`text-xl font-bold text-[${item.color}]`}>
                    {item.titleSix}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.descriptionSix}</p>
              </div>
            ))}
          </div>
          <div className="lg:w-1/3 max-sm:w-full mt-10">
            <Image
              src={loc}
              width={400}
              height={400}
              alt="Reactjs Vuejs Nodejs Logo"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <GetNewInsight />
    </>
  );
};

export default Reactjs;
