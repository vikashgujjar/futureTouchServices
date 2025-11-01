"use client";
import React from "react";

import gm from "../Assets/block.webp";
import ec from "../Assets/ec.webp";
import d1 from "../Assets/Blockwhat.webp";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import WhatCanDo from "../components/WhatCanDo";
import GetNewInsight from "../components/GetNewInsight";

const Cblock = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-[410px] max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl">
              C++ Blockchain Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                C++ is a general-purpose programming language that has
                object-oriented and generic programming features Of the
                blockchain software projects, Bitcoin, Ethereum and ripple are
                written in C++ and Go. Other platforms that are also employing
                the C++ programming language include the Linux Foundation’s
                Hyperledger Project and SONM, also known as the Supercomputer
                Organized by Network Mining. The most important reason is that
                the original Satoshi codebase was written in C++. A system like
                Bitcoin has extremely strong requirements about consistency in
                behaviour: all nodes on the network must accept and reject the
                exact same blocks, or we risk a fork. The first choice to avoid
                bugs that risk introducing inconsistency is to not rewrite the
                code from scratch.
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
            alt="C++ Blockchain Development"
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10 px-5 md:px-12 xl:px-28 py-14">
        <div className="w-2/3 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            What is C++? Blockchain
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              C++ is one of the earliest known coding languages, introduced back
              in 1985 by Bjarne Stroustrup. It is an object-oriented programming
              language. You can package data and functions into “objects” that
              can be used over and over. This saves you the need to generate new
              code every time.
            </p>
            <p>
              C++ originated from the older C language which was a
              process-oriented language. So while it had clear advantages from
              being object-oriented, it still maintained much of the efficiency
              and flexibility of C.
            </p>

            <p>
              It is also just as secure, which is a cornerstone of blockchain
              technology.
            </p>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full">
          <Image
            src={d1}
            width={400}
            height={400}
            alt="Design 1"
            className="w-96 mt-5  h-60  max-sm:mb-3 max-lg:mx-auto"
          />
        </div>
      </div>

      <WhatCanDo />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#f2f2f2] px-5 md:px-12 xl:px-32 py-14 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-5 text-[#050748]">
            From Our Blog
          </h4>

          <div className="text-base sm:text-lg lg:text-xl text-justify text-[#6a6a8e]">
            <p className="text-[#e33f70] mb-4 font-medium">
              Why C++ Blockchain Is Important to Your Business
            </p>
            <p>
              Blockchain will undoubtedly be the next big thing after internet.
              But, are the companies really care about blockchain? If you’re not
              living under the rock, you must be getting the latest buzz of
              blockchain on your social media feed and news. No, it’s not a hype
              that will fad, but it is already a big thing which will change the
              business models of tech giants Google, Facebook and Amazon,
              according to the executive director of Hyperledger, Brian
              Behlendorf.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 lg:mt-0 mt-6 flex justify-center lg:justify-end">
          <Image
            src={ec}
            width={800}
            height={800}
            alt="C++ Blockchain Example"
            className="border-[12px]  sm:border-[16px] lg:border-[18px] border-[#dfdfdf] w-full "
          />
        </div>
      </div>

      <GetNewInsight />
    </>
  );
};

export default Cblock;
