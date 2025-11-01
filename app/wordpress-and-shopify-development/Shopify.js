"use client";
import React from "react";

import gm from "../Assets/wsj.webp";
import ec from "../Assets/ec.webp";
import d1 from "../Assets/joomla.webp";
import Image from "next/image";
import {
  FaChevronRight,
  FaCog,
  FaHeadset,
  FaJoomla,
  FaLaptop,
  FaLaptopCode,
  FaNetworkWired,
  FaSignInAlt,
  FaSwimmer,
} from "react-icons/fa";
import Link from "next/link";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import GetNewInsight from "../components/GetNewInsight";
import CommonTechBlog from "../components/CommonTechBlog";

const Shopify = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className="  relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              WORDPRESS AND SHOPIFY DEVELOPMENT
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                We are a full-fledged, on-time and on-budget Joomla website
                design company in India. Hire our Joomla developers to build a
                wide variety of websites namely an eCommerce store, a directory
                site, a gallery site or a membership site at quite reasonable
                prices. We design and develop powerful websites with Joomla CMS
                customization. Our Joomla template design, is also considered
                among the best within the industry. Get in touch with us to know
                details about the Joomla development services we offer. .
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
            alt="Wordpress and Shopify Development"
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto "
          />
        </div>
      </div>

      <div
        className="    flex max-lg:block gap-10  px-5 md:px-12 xl:px-28 py-14
"
      >
        <div className="w-2/3 max-lg:w-full pt-5">
          <h4 className="text-4xl max-sm:text-2xl font-bold mb-3 text-[#050748] ">
            Joomla Web Development Company
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              Being a reputable Joomla web development company in India, we have
              been serving clients across various business verticals. Using the
              latest version of this amazing CMS and its user friendly features
              & extensions, we have created a loyal chain of satisfied
              clientele. Our experienced Joomla developers have thorough
              technical knowledge and expertise in developing functional
              websites to meet the specific business requirements of our
              clients. We also provide customization services of existing Joomla
              website, Joomla version upgrade and post deployment maintenance &
              support. Avail our Joomla web development services and allow us to
              provide you with an enhanced Joomla experience.
            </p>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full">
          <Image
            src={d1}
            width={400}
            height={400}
            alt="Joomla Design"
            className="w-96  max-sm:mb-3  max-lg:mx-auto"
          />
        </div>
      </div>

      <WhatCanDo />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Our Joomla Website Development Services
        </h3>
        <p className=" text-lg text-[#6a6a8e] mt-5">
          As a highly experienced Joomla website development company in India,
          we provide every possible service with this CMS platform. Check out
          the list of our services:
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-10  text-lg text-[#e33f70]">
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <FaLaptop className="text-4xl" />
            <p className="text-xl ">Joomla Website Development</p>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <FaNetworkWired className="text-4xl" />
            <p className="text-xl ">Joomla Theme Customization</p>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <FaJoomla className="text-4xl" />
            <p className="text-xl ">Custom Modules Development</p>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <FaLaptopCode className="text-4xl" />
            <p className="text-xl ">Joomla Application Development</p>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <FaSwimmer className="text-4xl" />
            <p className="text-xl ">Joomla Extension Integration</p>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <FaHeadset className="text-4xl" />
            <p className="text-xl ">Joomla Website Maintenance</p>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <FaCog className="text-4xl" />
            <p className="text-xl ">Joomla Customization Services</p>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <FaSignInAlt className="text-4xl" />
            <p className="text-xl ">Joomla Migration Services</p>
          </div>
        </div>
      </div>

      <RequestQuote />

      <CommonTechBlog
        img={ec}
        title="            Why Custom CMS Website Design Is Important to Your Business
"
        desc="  Nowadays, almost every business has experienced that it can
              succeed when its offerings are visible to their customers. For
              that reason, business owners invest in spending money on
              developing visually attractive websites and look for sophisticated
              SEO experts to differentiate themselves amidst the clutter."
      />

      <GetNewInsight />
    </>
  );
};

export default Shopify;
