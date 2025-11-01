"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import plan1 from "../Assets/plan-1.svg";
import plan2 from "../Assets/plan-2.svg";
import plan3 from "../Assets/plan-3.svg";
import Image from "next/image";
// import Login  from '../Forms/Login'
import { FaAngleRight, FaCheck, FaChevronRight, FaTimes } from "react-icons/fa";
import CommonBanner from "../components/CommonBanner";
import Login from "../components/Login";
import GetNewInsight from "../components/GetNewInsight";
const PricePackage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const PriceConversion = (usd, currency) => {
    const conversionRate = 83; // Conversion rate from USD to INR
    return currency === "INR"
      ? (usd * conversionRate).toFixed(2)
      : usd.toFixed(2);
  };

  const [currency, setCurrency] = useState("USD"); // State to track currency (USD/INR)

  // Toggle between USD and INR
  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === "USD" ? "INR" : "USD"));
  };

  const price1 = 150.99;
  const price2 = 220.99;
  const price3 = 350.99;

  const price4 = 99.99;
  const price5 = 149.99;
  const price6 = 259.99;

  const price7 = 319.99;
  const price8 = 499.99;
  const price9 = 599.99;

  return (
    <>
      <CommonBanner title="Pricing Plan" breadcrumb="Pricing Package" />

      <div className=" py-20 px-5 md:px-12 xl:px-28 bg-gradient-to-b from-teal-50 to-pink-100">
        <div className="text-center  lg:px-48  ">
          <span className="text-lg text-[#e60072]  font-medium">Pricing</span>
          <h1 className="text-4xl max-sm:text-2xl max-md:text-2xl font-bold mt-4 mb-8">
            Pricing Table Search Engine Optimization
          </h1>
          <p className="text-lg text-center text-[#6a6a8e] max-sm:px-5">
            Looking for a reputable SEO Expert ? SEO Experts Inc #1 recommended
            search engine optimization experts offering professional SEO
            services since 2017
          </p>
        </div>
        <div className="py-4 md:col-span-12 mt-10">
          <div className="flex justify-end">
            <button
              onClick={toggleCurrency}
              className="py-2 px-4 mb-4 bg-blue-500 text-white rounded-md"
            >
              Switch to {currency === "USD" ? "INR" : "USD"}
            </button>
          </div>

          <div className="grid sm-block md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:gap-10 max-md:gap-10 max-lg:gap-10">
            {/* Standard Package */}
            <div className="bg-white text-center rounded-xl py-10 px-5 relative shadow-main">
              <div className="border-b">
                <Image
                  src={plan1}
                  width={400}
                  height={400}
                  alt=""
                  className="w-24 mx-auto p-5 shadow-sm animation-custom bg-[#e9f8ff] rounded-full"
                />
                <h5 className="mt-5 text-lg text-[#6a6a8e] font-bold">
                  BASIC LEVEL
                </h5>
                <p className="text-[#ff1f8e] text-4xl font-bold my-4">
                  <sup>{currency === "USD" ? "$" : "₹"}</sup>{" "}
                  {PriceConversion(price1, currency)}
                </p>
                <p className="text-[#6a6a8e] mb-5">Monthly Package</p>
              </div>

              <ul className="text-center mb-4 rounded-b-lg bg-white mt-5 text-[#7c7c7c]">
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  10-12 Keywords optimized
                  <FaCheck className="w-9 h-9 p-2 bg-[#0086c5] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Off Page Optimization
                  <FaCheck className="w-9 h-9 p-2 bg-[#0086c5] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  On Page Optimization
                  <FaCheck className="w-9 h-9 p-2 bg-[#0086c5] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Social Media Optimization
                  <FaTimes className="w-9 h-9 p-2 bg-[#d9d9d9] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  SEO Ranking Weekly Reports
                  <FaTimes className="w-9 h-9 p-2 bg-[#d9d9d9] text-white rounded-full" />
                </li>

                <div className="text-center mx-auto w-full flex justify-center overflow-hidden">
                  <Link
                    href="#"
                    onClick={handleButtonClick}
                    className="bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] flex justify-center items-center absolute -bottom-6 text-white px-6 py-4 text-base font-semibold mx-auto rounded-full overflow-hidden"
                  >
                    Get Started <FaAngleRight className="ml-2" />
                    <span className="circle dkpr"></span>
                  </Link>
                </div>
              </ul>
            </div>

            {/* Premium Package */}
            <div className="bg-gradient-to-b from-[#c1eeff] to-[#f5faff] text-center rounded-xl py-10 px-5 relative shadow-main">
              <div className="border-b">
                <Image
                  src={plan2}
                  width={400}
                  height={400}
                  alt=""
                  className="w-24 mx-auto p-5 shadow-sm animation-custom bg-[#e9f8ff] rounded-full"
                />
                <h5 className="mt-5 text-lg text-[#6a6a8e] font-bold">
                  ADVANCE LEVEL
                </h5>
                <p className="text-[#ff1f8e] text-4xl font-bold my-4">
                  <sup>{currency === "USD" ? "$" : "₹"}</sup>{" "}
                  {PriceConversion(price2, currency)}
                </p>
                <p className="text-[#6a6a8e] mb-5">Monthly Package</p>
              </div>

              <ul className="text-center mb-4 rounded-b-lg mt-5 text-[#7c7c7c]">
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  15-22 Keywords optimized
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Off Page Optimization
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  On Page Optimization
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Social Media Optimization
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center py-4 px-5">
                  SEO Ranking Weekly Reports
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <div className="text-center mx-auto w-full flex justify-center overflow-hidden">
                  <Link
                    href="#"
                    onClick={handleButtonClick}
                    className="bg-gradient-to-r from-[#673ab7] to-[#2196f3] flex justify-center items-center absolute -bottom-6 text-white px-6 py-4 text-base font-semibold mx-auto rounded-full overflow-hidden"
                  >
                    Get Started <FaAngleRight className="ml-2" />
                    <span className="circle dkpr"></span>
                  </Link>
                </div>
              </ul>
            </div>

            {/* Enhanced Package */}
            <div className="bg-white text-center rounded-xl py-10 px-5 relative shadow-main">
              <div className="border-b">
                <Image
                  src={plan3}
                  width={400}
                  height={400}
                  alt=""
                  className="w-24 mx-auto p-5 shadow-sm animation-custom bg-[#e9f8ff] rounded-full"
                />
                <h5 className="mt-5 text-lg text-[#6a6a8e] font-bold">
                  ULTIMATE LEVEL
                </h5>
                <p className="text-[#ff1f8e] text-4xl font-bold my-4">
                  <sup>{currency === "USD" ? "$" : "₹"}</sup>{" "}
                  {PriceConversion(price3, currency)}
                </p>
                <p className="text-[#6a6a8e] mb-5">Monthly Package</p>
              </div>

              <ul className="text-center mb-4 rounded-b-lg bg-white mt-5 text-[#7c7c7c]">
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  22-23 Keywords optimized
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Off Page Optimization
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  On Page Optimization
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Social Media Optimization
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center py-4 px-5">
                  SEO Ranking Weekly Reports
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <div className="text-center mx-auto w-full flex justify-center overflow-hidden">
                  <Link
                    href="#"
                    onClick={handleButtonClick}
                    className="bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] flex justify-center items-center absolute -bottom-6 text-white px-6 py-4 text-base font-semibold mx-auto rounded-full overflow-hidden"
                  >
                    Get Started <FaAngleRight className="ml-2" />
                    <span className="circle dkpr"></span>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center  lg:px-48  pt-20">
          <span className="text-lg text-[#e60072]  font-medium">Pricing</span>
          <h1 className="text-4xl max-sm:text-2xl max-md:text-2xl font-bold mt-4 mb-8">
            Pricing Table - Website Design & Development
          </h1>
          <p className="text-lg text-center text-[#6a6a8e] max-sm:px-5">
            website design and development services have one goal in mind - to
            turn your website into a high-performing marketing tool for your
            business.
          </p>
        </div>
        <div className="py-4 md:col-span-12 mt-10">
          <div className="flex justify-end">
            <button
              onClick={toggleCurrency}
              className="py-2 px-4 mb-4 bg-blue-500 text-white rounded-md"
            >
              Switch to {currency === "USD" ? "INR" : "USD"}
            </button>
          </div>

          <div className="grid sm-block md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:gap-10 max-md:gap-10 max-lg:gap-10">
            {/* Standard Package */}
            <div className="bg-white text-center rounded-xl py-10 px-5 relative shadow-main">
              <div className="border-b">
                <Image
                  src={plan1}
                  width={100}
                  height={100}
                  alt="Basic Plan"
                  className="w-24 mx-auto p-5 shadow-sm animation-custom bg-[#e9f8ff] rounded-full"
                />
                <h5 className="mt-5 text-lg text-[#6a6a8e] font-bold">
                  BASIC PLAN
                </h5>
                <p className="text-[#ff1f8e] text-4xl font-bold my-4">
                  <sup>{currency === "USD" ? "$" : "₹"} </sup>
                  {PriceConversion(price4, currency)}
                </p>
                <p className="text-[#6a6a8e] mb-5">Small Business</p>
              </div>

              <ul className="text-center mb-4 rounded-b-lg bg-white mt-5 text-[#7c7c7c]">
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Hosting - Disk Space 200 MB
                  <FaCheck className="w-9 h-9 p-2 bg-[#0086c5] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  One Domain - Free
                  <FaCheck className="w-9 h-9 p-2 bg-[#0086c5] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  1 Creative Landing Page
                  <FaCheck className="w-9 h-9 p-2 bg-[#0086c5] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Search Optimization
                  <FaTimes className="w-9 h-9 p-2 bg-[#d9d9d9] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center py-4 px-5">
                  Advanced Settings
                  <FaTimes className="w-9 h-9 p-2 bg-[#d9d9d9] text-white rounded-full" />
                </li>
                <div className="text-center mx-auto w-full flex justify-center overflow-hidden">
                  <Link
                    href="#"
                    onClick={handleButtonClick}
                    className="bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] flex justify-center items-center absolute -bottom-6 text-white px-6 py-4 text-base font-semibold mx-auto rounded-full overflow-hidden"
                  >
                    Get Started <FaAngleRight className="ml-2" />
                    <span className="circle dkpr"></span>
                  </Link>
                </div>
              </ul>
            </div>

            {/* Premium Package */}
            <div className="bg-gradient-to-b from-[#c1eeff] to-[#f5faff] text-center rounded-xl py-10 px-5 relative shadow-main">
              <div className="border-b">
                <Image
                  src={plan2}
                  width={100}
                  height={100}
                  alt="Advance Plan"
                  className="w-24 mx-auto p-5 shadow-sm animation-custom bg-[#e9f8ff] rounded-full"
                />
                <h5 className="mt-5 text-lg text-[#6a6a8e] font-bold">
                  ADVANCE PLAN
                </h5>
                <p className="text-[#ff1f8e] text-4xl font-bold my-4">
                  <sup>{currency === "USD" ? "$" : "₹"} </sup>
                  {PriceConversion(price5, currency)}
                </p>
                <p className="text-[#6a6a8e] mb-5">
                  Great For Advance Business
                </p>
              </div>

              <ul className="text-center mb-4 rounded-b-lg mt-5 text-[#7c7c7c]">
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  SSD Disk Space 500 MB
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  One Domain - Free
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  10 Html Page
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Search Optimization
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center py-4 px-5">
                  Advanced Settings
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>

                <div className="text-center mx-auto w-full flex justify-center overflow-hidden">
                  <Link
                    href="#"
                    onClick={handleButtonClick}
                    className="bg-gradient-to-r from-[#673ab7] to-[#2196f3] flex justify-center items-center absolute -bottom-6 text-white px-6 py-4 text-base font-semibold mx-auto rounded-full overflow-hidden"
                  >
                    Get Started <FaAngleRight className="ml-2" />
                    <span className="circle dkpr"></span>
                  </Link>
                </div>
              </ul>
            </div>

            {/* Enhanced Package */}
            <div className="bg-white text-center rounded-xl py-10 px-5 relative shadow-main">
              <div className="border-b">
                <Image
                  src={plan3}
                  width={100}
                  height={100}
                  alt="Ultimate Plan"
                  className="w-24 mx-auto p-5 shadow-sm animation-custom bg-[#e9f8ff] rounded-full"
                />
                <h5 className="mt-5 text-lg text-[#6a6a8e] font-bold">
                  ULTIMATE PLAN
                </h5>
                <p className="text-[#ff1f8e] text-4xl font-bold my-4">
                  <sup>{currency === "USD" ? "$" : "₹"} </sup>
                  {PriceConversion(price6, currency)}
                </p>
                <p className="text-[#6a6a8e] mb-5">
                  Great For Ultimate Business
                </p>
              </div>

              <ul className="text-center mb-4 rounded-b-lg mt-5 text-[#7c7c7c]">
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  SSD Disk Space 1 GB
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  One Domain - Free
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  15 Page Dynamics
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Search Optimization
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center py-4 px-5">
                  Advanced Settings
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>

                <div className="text-center mx-auto w-full flex justify-center overflow-hidden">
                  <Link
                    href="#"
                    onClick={handleButtonClick}
                    className="bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] flex justify-center items-center absolute -bottom-6 text-white px-6 py-4 text-base font-semibold mx-auto rounded-full overflow-hidden"
                  >
                    Get Started <FaAngleRight className="ml-2" />
                    <span className="circle dkpr"></span>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center  lg:px-48 pt-20 ">
          <span className="text-lg text-[#e60072]  font-medium">Pricing</span>
          <h1 className="text-4xl max-sm:text-2xl max-md:text-2xl font-bold mt-4 mb-8">
            Pricing Table - Application Development
          </h1>
          <p className="text-lg text-center text-[#6a6a8e] max-sm:px-5">
            Developing a new mobile app for Android or iOS? Anticipate the
            challenges of mobile app development and tap into the cloud to
            enhance app functionality
          </p>
        </div>
        <div className="pt-4 md:col-span-12 mt-10">
          <div className="flex justify-end">
            <button
              onClick={toggleCurrency}
              className="py-2 px-4 mb-4  bg-blue-500 text-white rounded-md"
            >
              Switch to {currency === "USD" ? "INR" : "USD"}
            </button>
          </div>
          <div className="grid sm-block md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:gap-10 max-md:gap-10 max-lg:gap-10">
            {/* BASIC PLAN */}
            <div className=" bg-white text-center rounded-xl py-10 px-5 relative shadow-main">
              <div className="border-b ">
                <Image
                  src={plan1}
                  width={96}
                  height={96}
                  alt="Basic Plan"
                  className="w-24 mx-auto p-5 shadow-sm animation-custom bg-[#e9f8ff] rounded-full"
                />
                <h5 className="mt-5 text-lg text-[#6a6a8e] font-bold">
                  BASIC PLAN
                </h5>
                <p className="text-[#ff1f8e] text-4xl font-bold my-4">
                  <sup>{currency === "USD" ? "$" : "₹"} </sup>{" "}
                  {PriceConversion(price7, currency)}
                </p>
                <p className="text-[#6a6a8e]  mb-5">Small Business</p>
              </div>
              <ul className="text-center mb-4 rounded-b-lg bg-white mt-5 text-[#7c7c7c]">
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Maximum No of Screens: 7
                  <FaCheck className="w-9 h-9 p-2 bg-[#0086c5] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Maximum No of Api: 5
                  <FaCheck className="w-9 h-9 p-2 bg-[#0086c5] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Web Panel Login: 1
                  <FaCheck className="w-9 h-9 p-2 bg-[#0086c5] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Gateway Integration: No
                  <FaTimes className="w-9 h-9 p-2 bg-[#d9d9d9] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center py-4 px-5 ">
                  Advanced Settings
                  <FaTimes className="w-9 h-9 p-2 bg-[#d9d9d9] text-white rounded-full" />
                </li>
                <div className="text-center mx-auto w-full flex justify-center overflow-hidden">
                  <Link
                    href="#"
                    onClick={handleButtonClick}
                    className="bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] flex justify-center items-center absolute -bottom-6 text-white px-6 py-4 text-base font-semibold mx-auto rounded-full overflow-hidden"
                  >
                    Get Started <FaAngleRight className="ml-2" />
                    <span className="circle dkpr"></span>
                  </Link>
                </div>
              </ul>
            </div>

            {/* ADVANCE PLAN */}
            <div className="  bg-gradient-to-b from-[#c1eeff] to-[#f5faff] text-center rounded-xl py-10 px-5 relative shadow-main">
              <div className="border-b ">
                <Image
                  src={plan2}
                  width={96}
                  height={96}
                  alt="Advance Plan"
                  className="w-24 mx-auto p-5 shadow-sm animation-custom bg-[#e9f8ff] rounded-full"
                />
                <h5 className="mt-5 text-lg text-[#6a6a8e] font-bold">
                  ADVANCE PLAN
                </h5>
                <p className="text-[#ff1f8e] text-4xl font-bold my-4">
                  <sup>{currency === "USD" ? "$" : "₹"} </sup>{" "}
                  {PriceConversion(price8, currency)}
                </p>
                <p className="text-[#6a6a8e]  mb-5">
                  Great For Advance Business
                </p>
              </div>
              <ul className="text-center mb-4 rounded-b-lg  mt-5 text-[#7c7c7c]">
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Maximum No of Screens: 15
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Maximum No of Api: 12
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Web Panel Login: 1
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Gateway Integration: Yes
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center py-4 px-5 ">
                  Advanced Settings
                  <FaCheck className="w-9 h-9 p-2 bg-[#ffcd48] text-white rounded-full" />
                </li>
                <div className="text-center mx-auto w-full flex justify-center overflow-hidden">
                  <Link
                    href="#"
                    onClick={handleButtonClick}
                    className="bg-gradient-to-r from-[#673ab7] to-[#2196f3] flex justify-center items-center absolute -bottom-6 text-white px-6 py-4 text-base font-semibold mx-auto rounded-full overflow-hidden"
                  >
                    Get Started <FaAngleRight className="ml-2" />
                    <span className="circle dkpr"></span>
                  </Link>
                </div>
              </ul>
            </div>

            {/* ULTIMATE PLAN */}
            <div className=" bg-white text-center rounded-xl py-10 px-5 relative shadow-main">
              <div className="border-b ">
                <Image
                  src={plan3}
                  width={96}
                  height={96}
                  alt="Ultimate Plan"
                  className="w-24 mx-auto p-5 shadow-sm animation-custom bg-[#e9f8ff] rounded-full"
                />
                <h5 className="mt-5 text-lg text-[#6a6a8e] font-bold">
                  BASIC PLAN
                </h5>
                <p className="text-[#ff1f8e] text-4xl font-bold my-4">
                  <sup>{currency === "USD" ? "$" : "₹"} </sup>{" "}
                  {PriceConversion(price9, currency)}
                </p>
                <p className="text-[#6a6a8e]  mb-5">
                  Great For Ultimate Business
                </p>
              </div>
              <ul className="text-center mb-4 rounded-b-lg bg-white mt-5 text-[#7c7c7c]">
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Maximum No of Screens: 20
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Maximum No of Api: 18
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Web Panel Login: 1
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center border-b-2 py-4 px-5">
                  Gateway Integration: Yes
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <li className="flex justify-between items-center py-4 px-5 ">
                  Advanced Settings
                  <FaCheck className="w-9 h-9 p-2 bg-[#6fc713] text-white rounded-full" />
                </li>
                <div className="text-center mx-auto w-full flex justify-center overflow-hidden">
                  <Link
                    href="#"
                    onClick={handleButtonClick}
                    className="bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] flex justify-center items-center absolute -bottom-6 text-white px-6 py-4 text-base font-semibold mx-auto rounded-full overflow-hidden"
                  >
                    Get Started <FaAngleRight className="ml-2" />
                    <span className="circle dkpr"></span>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

       {isPopupOpen && (
         <Login handleClosePopup={handleClosePopup} isPopupOpen={isPopupOpen} />
      )}
    <GetNewInsight/>
    </>
  );
};

export default PricePackage;
