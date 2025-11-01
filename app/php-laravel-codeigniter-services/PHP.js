"use client";
import React from "react";

import gm from "../Assets/php.webp";
import Image from "next/image";
import d1 from "../Assets/logo-gif.gif";
import loc from "../Assets/logo-c.gif";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { corporateData } from "../common/Service_comp";
import { corporateAndroid } from "../common/Service_comp";
import { rangeAndroid } from "../common/Service_comp";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import GetNewInsight from "../components/GetNewInsight";

const PHP = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              PHP-Laravel, Codeigniter SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Laravel/MySQL/PHP retains its immense value even after so many
                years of its inception. Being easy to code and manage with
                strong features and capabilities of developing robust custom web
                applications, PHP/Laravel inevitably stands out from other
                programming languages of today. Being an open-source platform,
                it helps developers create cost-effective and customized
                solutions to meet the specific needs of the client. Avail our
                custom PHP/Laravel development services to build robust and
                secure web applications.
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
            alt="PHP, Laravel, Codeigniter Service"
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
            priority
          />
        </div>
      </div>
      <div className="flex max-lg:block gap-10 px-5 md:px-12 xl:px-28 py-14">
        <div className="w-2/3 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            PHP has its own advantages when it comes to development-
          </h4>

          <div className="text-lg text-justify text-[#6a6a8e] ">
            <p>
              We follow a Customer-centric approach to building a website for
              your business which brings extreme ease of navigation for the
              visitors. This reduces the bounce rate as users can easily browse
              what they are looking for. Our developers know well how crucial a
              website appearance is for your business. Empathizing the same,
              they create custom websites composed of high-quality images,
              authentic logo, and relevant content. Custom PHP development is
              our USP to get your website listed in the initial pages of search
              results. This proliferates the website ranking on different search
              engines to reinforce a rigid business identity over the web.
            </p>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full max-lg:mx-auto">
          <Image
            src={d1}
            width={400}
            height={400}
            alt="Design 1"
            className="w-96 h-80 max-sm:mb-3 max-lg:mx-auto"
            priority
          />
        </div>
      </div>

      <WhatCanDo />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-4xl max-sm:text-2xl max-md:text-3xl  text-[#050748] font-bold">
          PHP Programming Services for Diverse Business Verticals
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          We offer comprehensive PHP programming services to meet your business
          requisites.
        </p>
        <div className="flex gap-10 mt-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {rangeAndroid.map((item, index) => (
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
      </div>

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Advantage of Engaging our PHP Development Services
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          If you are looking for efficient PHP development services) Future IT
          Touch Pvt. Ltd. can be the right choice for you. From eCommerce Portal
          Development to Property Listing Website, Social Networking to Online
          Job Portals, our experienced PHP developers have the expertise to
          build and deliver custom PHP development solutions effectively and on
          time. Hire PHP developers for development and maintenance of web
          applications in Major MVC Frameworks including CakePHP, Laravel,
          CodeIgniter.
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-10 gap-10  text-lg text-[#6a6a8e]">
          {corporateAndroid.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-5">
                <item.iconTwo className={`text-4xl text-[${item.color}]`} />

                <p className={`text-xl font-bold text-[${item.color}]`}>
                  {item.titleTwo}
                </p>
              </div>
              <p className="mt-4 text-justify">{item.descriptionTwo}</p>
            </div>
          ))}
        </div>
      </div>

      <RequestQuote />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Why Choose Us as Your Trusted PHP Programming Company India
        </h3>
        <p className=" text-lg text-[#6a6a8e] my-5">
          As a leading PHP programming company India, we guarantee you of the
          following:
        </p>
        <div className="flex max-lg:block gap-10  max-sm:mt-2">
          <div className="w-2/3 max-lg:w-full  grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            {corporateData.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col lg:flex-row items-start gap-5">
                  <div
                    className={` rounded-full p-4 bg-white border-2 border-[${item.color}]`}
                  >
                    <item.iconFive
                      className={`text-4xl text-[${item.color}]`}
                    />
                  </div>
                  <div className="ml-2">
                    <p className={`text-xl font-bold text-[${item.color}]`}>
                      {item.titleFive}
                    </p>
                    <p className="mt-2">{item.descriptionFive}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/3 mt-10 max-lg:w-full ">
            <Image
              src={loc}
              width={400}
              height={400}
              alt="Location"
              className="w-full max-h-[350px]  "
              priority
            />
          </div>
        </div>
      </div>

      <GetNewInsight />
    </>
  );
};

export default PHP;
