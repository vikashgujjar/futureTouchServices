"use client";
import React from "react";

import loc from "../Assets/logo-g.webp";
import and from "../Assets/and.gif";
import app from "../Assets/gam2d3d.webp";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import { rangeData } from "../common/Service_comp";
import { corporateData } from "../common/Service_comp";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import GetNewInsight from "../components/GetNewInsight";

const Unity = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              2D & 3D Game Development Services
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Unity 2D/3D games development is taking the gaming world by
                storm through technological advances and innovation. We have an
                exclusive and highly skilled team dedicated to unity 2D/3D game
                development for last 7 years in this sphere. We are the only
                company providing Unity 2D/3D game development in New York –
                Canada. Team of Future IT Touch Pvt. Ltd. support for high end
                gaming solution with standard parameters of the gaming world
                reached a commendable height driven by the demands of a quality
                conscious user. Unity 3D games have had a revolutionary
                breakthrough in the domain of mobile game development
                frameworks. Unity lets you work on various platforms such as
                iOS, android, windows, Linux, Xbox etc.
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
            width={400}
            height={400}
            alt="Unity 2D/3D Game Development"
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="px-5 md:px-12 xl:px-32 py-14">
        <h3 className="text-3xl lg:text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
          Why For Mobile App Development?
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
      <div className="flex items-center max-lg:block gap-10 bg-[#f2f2f2]  max-sm:mt-0 px-5 md:px-12 xl:px-32 py-14">
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
              PhoneGap. .
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
        <div className="w-1/3 max-lg:w-full">
          <Image
            src={and}
            width={400}
            height={400}
            alt="Unity Android Example"
            className="w-full max-lg:mt-10 !max-h-[250px]"
          />
        </div>
      </div>

      <RequestQuote />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">Why Choose Us?</h3>
        <div className="flex max-lg:block gap-10  max-sm:mt-2">
          <div className="w-2/3 max-lg:w-full grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {corporateData.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col lg:flex-row items-start gap-5">
                  <div
                    className={` rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.iconEight
                      className={`text-4xl text-[${item.color}]`}
                    />
                  </div>
                  <div className="ml-2">
                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.titleEight}
                    </p>
                    <p className="mt-2">{item.descriptionEight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/3 max-lg:w-full max-lg:mt-10">
            <Image
              src={loc}
              width={400}
              height={400}
              alt="Unity Logo"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <GetNewInsight />
    </>
  );
};

export default Unity;
