"use client";
import React from "react";

import gm from "../Assets/Haskell.webp";
import ec from "../Assets/ec.webp";
import d1 from "../Assets/Haskellwhy.webp";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import GetNewInsight from "../components/GetNewInsight";

const Haskell = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className="  relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl">
              Haskell AI/ML Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                AI and machine learning are huge topics in technology. In this
                series, we'll explore how Haskell's unique features as a
                language can be valuable in crafting better AI programs. In
                particular, we'll explore some advanced concepts in type safety,
                and apply these to the machine learning framework Tensor Flow.
                Haskell has strong abstraction capabilities and built-in memory
                management. Its code is highly reusable and easy to understand.
                This language is favored by many developers because it increases
                productivity.
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
            alt="Haskell AI/ML Development"
            className="w-80 h-72 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10 px-5 md:px-12 xl:px-28 py-14">
        <div className="w-2/3 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            Why Haskell AI/ML Solution
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              Haskell’s learning curve, however, is fairly steep when compared
              to other languages commonly used for AI development. Haskell is a
              lazy language, which means that values are evaluated only when
              needed. This often leads to difficulties in memory allocation.
            </p>
            <p>
              One of the most popular Haskell libraries for machine learning is
              HLearn. The library exploits the algebraic structures inherent in
              learning systems and contains several useful templates for
              implementation. Haskell also has a TensorFlow binding which can be
              used for deep learning.
            </p>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full">
          <Image
            src={d1}
            width={400}
            height={400}
            alt="Design 1"
            className="w-96 mt-5 h-60  max-sm:mb-3 max-lg:mx-auto"
          />
        </div>
      </div>

      <WhatCanDo />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Great at Abstraction and Highly Expressive
        </h3>

        <p className="text-xl text-justify text-[#6a6a8e] my-5">
          Haskell is perfect for abstract mathematics and creates highly
          expressive algorithms while maintaining great performance. Considering
          its key features, Haskell is good for projects that involve the
          creation of extensive neural networks. In spite of its obvious
          benefits though, it does not have the same level of support as other
          programming languages, making it hard to get support. However, it is
          notable that Facebook uses a Haskell ML model to fight spamming.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            On the other hand Haskell is an strictly typed programming language.
            In short we can say it is an functional programming language.
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Haskell is strictly typed language like java, c, c++ so it is very
            easy to check the error at compile time only.
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Haskell based on the lambda calculus, also every function we written
            in Haskell is a mathematical function, which leads to less error.
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            On the other hand Haskell is used by Wagon, thought-out and DoxIQ.
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Haskell stable release was come in year 2010 designed by Paul Hudak.
          </p>
          <p className="text-[#6a6a8e] text-lg flex  gap-3">
            <FaChevronRight className="text-[#df2466] mt-2 text-sm" />
            Functional programming language are more and more concurrent, hence
            provide better performance as well.
          </p>
        </div>
      </div>

      <RequestQuote />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-[#050748]">
            From Our Blog
          </h4>

          <div className="text-base sm:text-lg lg:text-xl text-justify text-[#6a6a8e]">
            <p className="text-[#e33f70] mb-4 font-medium">
              Why Haskell AI/ML Is Important to Your Business
            </p>
            <p>
              Nowadays, almost every business has experienced that it can
              succeed when its offerings are visible to their customers. For
              that reason, business owners invest in spending money on
              developing visually attractive websites and look for sophisticated
              SEO experts to differentiate themselves amidst the clutter.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src={ec}
            width={800}
            height={800}
            alt="Haskell AI/ML Example"
            className="border-[10px] sm:border-[14px] lg:border-[18px] border-[#dfdfdf] w-full  rounded-lg shadow-lg"
          />
        </div>
      </div>

      <GetNewInsight />
    </>
  );
};

export default Haskell;
