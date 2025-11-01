"use client";
import React from "react";

import gm from "../Assets/solidity.webp";
import ec from "../Assets/ec.webp";
import d1 from "../Assets/ptndev.webp";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import WhatCanDo from "../components/WhatCanDo";
import GetNewInsight from "../components/GetNewInsight";

const Customer = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Customer Polls Blockchain Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Future IT Touch Pvt. Ltd. provides blockchain dedicated teams to
                help our clients in getting top-notch and secure solutions
                tailored to their specific needs. We help business owners to
                translate their ideas into blockchain solutions, assist in
                polishing and reviewing existing blockchain applications.
                Whether you need to develop your blockchain solution from
                scratch or looking for ways to improve your existing
                implementations, you can always outsource this work to us. Being
                a blockchain app development company, Future IT Touch Pvt. Ltd.
                makes sure that each solution delivered ensures significant
                reduction in attack vulnerability. Our team has deep expertise
                in strengthening critical network and hardware requirements, as
                well as fixing data tampering issues by developing robust
                blockchain solutions.
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
            src={gm}
            width={400}
            height={400}
            alt="Customer Polls Blockchain Development"
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10 px-5 md:px-12 xl:px-28 py-14">
        <div className="w-2/3 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            Why Blockchain Development Solution
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              Blockchain is bringing a radical change in the business world with
              its characteristics of decentralization, immutability,
              transparency, and distributed ledger. We, with a clear
              understanding of its growing potential and experience of
              integrating blockchain into mobility solutions, are offering the
              best of both the worlds to startups and enterprises. From the
              development of a Smart Contract and Cryptocurrencies, Auditing the
              processes before they go live on the unaltered system and helping
              Start-ups raise an ICO, we have done it all.
            </p>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full">
          <Image
            src={d1}
            width={400}
            height={400}
            alt="Design 1"
            className="w-96 mt-5  h-60  max-sm:mb-3 max-lg:mx-auto "
          />
        </div>
      </div>

      <WhatCanDo
        title=" Various Types of Blockchain:"
        desc="We would be happy to discuss the project with you in person"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#f2f2f2] px-5 sm:px-10 lg:px-20 xl:px-32 py-14 items-center">
        <div className="col-span-7">
          <h4 className="text-4xl font-bold my-5 text-[#050748] ">
            From Our Blog
          </h4>

          <div className="text-xl text-justify text-[#6a6a8e] ">
            <p className="text-[#e33f70] mb-4">
              Why Blockchain development of cryptocurrency trading
            </p>
            <p>
              Future IT Touch Pvt. Ltd. offers the development of cryptocurrency
              trading platforms as well as OEM-white-labeled crypto exchanges on
              the basis of MetaTrader. We provide customers onboarding process,
              support of cryptocurrency deposits/withdrawals, trading dashboard
              development, integration with order matching engine. On average we
              ensure the support of up to 10 cryptocurrencies.
            </p>
          </div>
        </div>

        <div className="col-span-5 max-lg:mt-10">
          <Image
            src={ec}
            width={400}
            height={400}
            alt="Blockchain Example"
            className="border-[18px] w-full border-[#dfdfdf]"
          />
        </div>
      </div>

      <GetNewInsight />
    </>
  );
};

export default Customer;
