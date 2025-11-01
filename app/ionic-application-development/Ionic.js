"use client";
import React from "react";

import loc from "../Assets/logo-c.gif";
import and from "../Assets/and.gif";
import app from "../Assets/ionic.webp";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { rangeData } from "../common/Service_comp";
import { corporateData } from "../common/Service_comp";
import WhatCanDo from "../components/WhatCanDo";
import GetNewInsight from "../components/GetNewInsight";

const Ionic = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              IONIC DEVELOPMENT SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Build amazing mobile apps quickly at low costs with our ionic
                development services to give your business the edge. Ionic is an
                HTML5 mobile app development framework used to build hybrid
                mobile apps. We are a leading ionic mobile app development
                company in India delivering the best in class services in
                building hybrid mobile apps using this framework.Get feature
                rich and impressive apps easily for all major platforms. App
                development through the Ionic framework is quicker, changes can
                be implemented faster, all at a much lower price point. Hybrid
                app development is only going to grow from here on in. .
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
            alt="Ionic Development"
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" px-5 md:px-12 xl:px-28  py-14">
        <h3 className="text-3xl lg:text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
          Why Ionic For Mobile App Development?
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          Get feature rich and impressive apps easily for all major platforms
        </p>
        <p className=" text-lg text-[#6a6a8e] mt-3">
          Building a hybrid mobile app with the help of Ionic framework has
          multiple advantages for both big and small businesses.
        </p>
        <div className="flex gap-10">
          <div className=" grid grid-cols-1 md:grid-cols-3 py-10 gap-10  text-lg text-[#6a6a8e]">
            {rangeData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.iconSix className={`text-4xl text-[${item.color}]`} />

                  <p className={`text-xl font-semibold text-[${item.color}]`}>
                    {item.titleSix}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.descriptionSix}</p>
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
      <div className="flex items-center max-lg:block gap-10 bg-[#f2f2f2]  max-sm:mt-2 px-5 md:px-12 xl:px-28 py-14">
        <div className="w-2/3 max-lg:w-full">
          <h1 className=" font-bold text-4xl text-[#050748] max-sm:text-2xl">
            Hybrid App Development Using Ionic Framework
          </h1>

          <div className="text-[#6a6a8e] mt-5 text-lg text-justify ">
            <p>
              The apps built with our Ionic app development services can deliver
              great results in terms of looks and functionality, yet have an
              uncomplicated structure. The apps look and function just as native
              apps would on their respective platforms, despite basically being
              a browser shell running with a native wrapper such as Cordova or
              PhoneGap.
            </p>
            <p className="mt-5">
              App development through the Ionic framework is quicker, changes
              can be implemented faster, all at a much lower price point. Hybrid
              app development is only going to grow from here on in. Future IT
              Touch Pvt. Ltd. is an certified company with extensive experience
              in providing mobile app development services. We realise the
              immense potential of this framework and are committed to providing
              the best quality of service to our customers at a reasonable price
              point .
            </p>
          </div>
        </div>
        <div className="w-1/3 max-lg:w-full max-lg:mt-10">
          <Image
            src={and}
            width={400}
            height={400}
            alt="Ionic Android Example"
            className="w-full"
          />
        </div>
      </div>

      <div className="bg-image-second  mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2 max-sm:hidden"></div>

          <div className="md:w-1/2 md:ml-4">
            <div class="flex gap-5 items-center ">
              <div class="text-white  ">
                <h5 className="text-lg font-semibold"> GET SUPPORT FOR</h5>
                <h3 className="text-5xl max-sm:text-3xl max-md:text-3xl  font-bold">
                  90 DAYS
                </h3>
              </div>

              <div>
                <Link href="/our-portfolio">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white text-nowrap font-semibold py-4  px-6 max-sm:px-3 rounded-md mr-4">
                    REQUEST A QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold mb-8">
          Why Choose Us?
        </h3>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10 text-lg text-[#6a6a8e]">
            {corporateData.map((item, index) => (
              <div
                key={index}
                className="flex  flex-col xl:flex-row items-start gap-5"
              >
                <div
                  className={`rounded-full p-4 bg-white border-2`}
                  style={{ borderColor: item.color }}
                >
                  <item.iconEight
                    className="text-4xl"
                    style={{ color: item.color }}
                  />
                </div>
                <div>
                  <p
                    className="text-xl font-bold"
                    style={{ color: item.color }}
                  >
                    {item.titleEight}
                  </p>
                  <p className="mt-2">{item.descriptionEight}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section (Image) */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={loc}
              width={400}
              height={400}
              alt="Why Choose Us Illustration"
              className="w-full lg:max-w-sm"
            />
          </div>
        </div>
      </div>

      <GetNewInsight />
    </>
  );
};

export default Ionic;
