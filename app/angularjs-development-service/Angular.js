"use client";
import React from "react";

import app from "../Assets/aglr.webp";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import { rangeData } from "../common/Service_comp";
import { androidData } from "../common/Service_comp";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import GetNewInsight from "../components/GetNewInsight";

const Angular = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-[400px] max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              ANGULAR DEVELOPMENT SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Angular, an open source web development framework from Google,
                is used to build Single-Page Applications (SPAs). With the power
                of analyzing the page DOM and use of Angular-specific element
                attributes, Angular delivers cleaner codes which are easy to
                understand and less prone to error. A reputed Web and Mobile App
                Development Company in India, Future IT Touch Pvt. Ltd.
                leverages the power of MEAN Stack (MongoDB, Express Framework,
                Angular, and NodeJs) to develop dynamic and robust web
                applications. Avail our Angular development services for
                building secure and functional web & mobile applications those
                are easy to maintain.
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
            alt="Angular Development"
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" px-5 md:px-12 xl:px-28  py-14">
        <h3 className="text-3xl lg:text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
          Angular Web Development Services
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          We are a leading Angular development company in India providing
          scalable, dynamic and secure web applications. Whether you want to
          build a web app from scratch or extend the features of your existing
          website - we can craft the perfect solution for you. The Angular
          developers at Future IT Touch Pvt. Ltd. create feature-rich and
          sophisticated web applications at cost-effective rates. Avail our
          Angular web development services to get an interactive, functionally
          rich and user-friendly web application without any hassles. Take a
          look at our range of services:
        </p>
        <div className="flex gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {rangeData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.icon className={`text-4xl text-[${item.color}]`} />

                  <p className={`text-xl font-bold text-[${item.color}]`}>
                    {item.titleFive}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.descriptionFive}</p>
              </div>
            ))}
          </div>
        </div>
        <p className=" text-lg text-[#6a6a8e] mt-10 text-justify">
          Node JS stands out as a technically advanced application development
          platform for both small and large scale businesses. Opt for our Node
          JS development services for robust and fast-operating web and mobile
          applications.
        </p>
      </div>

      <WhatCanDo />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-4xl max-sm:text-2xl max-md:text-3xl  text-[#050748] font-bold">
          Our Node JS Development Services
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          Our range of Node JS development services offers you turnkey web
          solutions including the following:
        </p>
        <div className="flex gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {androidData.map((item, index) => (
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
          Reap the Benefits of Angular for Web App Development
        </h3>

        <div className="gap-10 mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-5 gap-10  text-lg text-[#6a6a8e]">
            {androidData.map((item, index) => (
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
        <p className=" text-lg text-[#6a6a8e] mt-10 text-justify">
          Web & mobile apps developed using Angular Framework are compatible
          with all browsers and devices. Future IT Touch Pvt. Ltd. is an
          certified company with a team strength of 100+ developers, analysts
          and project managers. Our team stays with you from start to finish of
          the Angular web & mobile app development projects to ensure a delivery
          that matches your business requirements precisely. Talk to our expert
          Angular web application developer for your business requirement. We
          will be happy to assist you.
        </p>
      </div>
      <GetNewInsight />
    </>
  );
};

export default Angular;
