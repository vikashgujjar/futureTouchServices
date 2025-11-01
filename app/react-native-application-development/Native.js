"use client";
import React from "react";

import gm from "../Assets/reactnative.webp";
import ec from "../Assets/cod.webp";
import d1 from "../Assets/Reactbft.webp";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { developmentData } from "../common/Service_comp";
import Link from "next/link";
import Head from "next/head";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import GetNewInsight from "../components/GetNewInsight";
import CommonTechBlog from "../components/CommonTechBlog";

const Native = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:h-[440px] max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              React Native App Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                React Native is a JavaScript framework for creating natively
                rendering mobile applications for iOS and Android, that is based
                on React, Facebook’s JavaScript library for building user
                interfaces. React Native app is completely focused on mobile
                platforms to embed the real look and feel of the mobile app with
                its native functionality. It enables web developers to craft
                applications that really feel Native. Due to standard methods,
                it is quite possible to use the same code between platforms.
                React Native applications are written with a mix of JavaScript
                and XML-Esque markup, known as JSX. React Native “bridge”
                invokes the native rendering APIs based on respective platforms.
                React Native also exposes JavaScript interfaces for platform
                APIs, so React Native apps can access platform features like the
                phone camera, or the user’s location.
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
            src={gm}
            width={400}
            height={400}
            alt="React Native App Development"
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div
        className="    flex max-lg:block gap-10  px-5 md:px-12 xl:px-28 py-14
"
      >
        <div className="w-3/5 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            React Native App Development – Characteristics
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              We are a leading React development company in India building
              dynamic, attractive, feature-rich, and secure web and mobile
              applications. Whether you want to build a new web or mobile
              application or integrate React into the existing one, our expert
              React developer craft the best solutions for you. Our premier
              React web and mobile application development services build
              robust, attractive, SEO friendly and secure web applications at
              reasonable rates..
            </p>
          </div>
          <div className="flex gap-3 mt-5">
            <button className="flex items-center bg-[#00a2ff] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700">
              Quick Enquiry
            </button>
            <button className="flex items-center border-[#00a2ff] bg-dark-200 justify-center border text-[#f246a7] py-2  px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-[#00a2ff]">
              See Our Work
            </button>
          </div>
        </div>

        <div className=" w-2/5 max-lg:w-full max-sm:mt-10">
          <Image
            src={d1}
            width={400}
            height={400}
            alt="Design 1"
            className="w-full h-80 max-sm:mb-3  max-lg:mx-auto"
          />
        </div>
      </div>

      <WhatCanDo />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Hire React developers
        </h3>
        <p className=" text-lg text-[#6a6a8e] my-5">
          By leveraging the simple and flexible JavaScript based framework of
          React, our expert React developers build attractive and feature rich
          web and mobile applications quickly and efficiently. The dynamic React
          based web and mobile applications delivered by the React services of
          Webguru are easy to manage, support third party API integration, and
          render a great performance. Hire React developers of Webguru and turn
          your website into an attractive and engaging digital interface.
        </p>
        <h3 className="text-2xl text-[#050748] font-semibold">
          Advantages of React Web and Mobile App Development
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
          {developmentData.map((item, index) => (
            <div className="Development-text" key={index}>
              <div className="flex gap-3 items-center">
                <item.iconFour className="text-4xl text-[#e33f70]" />
                <p className="ml-2 text-lg text-[#e33f70]">{item.titleFour}</p>
              </div>
              <p className="mt-4">{item.descriptionFour}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl text-[#050748] mt-14 font-semibold">
          React Development Company
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          The web and mobile apps developed by Webguru, the premier React
          development company using the React framework are lightweight and
          compatible with all modern browsers, operating systems and devices. As
          a leading React web and mobile app development company, the Future IT
          Touch Pvt. Ltd. understands your business needs and delivers robust,
          feature rich and secure web/mobile applications within the turnaround
          time. Talk to our expert React web and mobile application developer
          about your business requirement. We will be happy to deliver a great
          online experience for your customers.
        </p>
      </div>

      <RequestQuote />

      <CommonTechBlog
        img={ec}
        title=" What Are The Advantages Of Using The React Framework?"
        desc="  The rapidly changing digital landscape requires the building of
              rich and engaging frontend web applications quickly and
              efficiently. This needs choosing a framework that is simple, easy
              to use/reuse, flexible, and allows minimal coding. Among the many
              open source frameworks available, React aka React or React.js fits
              the bill perfectly to build robust, attractive, feature rich,
              scalable, and secure Single Page Applications (SPA)."
      />

      <GetNewInsight />
    </>
  );
};

export default Native;
