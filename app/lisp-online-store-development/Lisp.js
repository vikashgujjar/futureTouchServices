"use client";
import React from "react";

import gm from "../Assets/lisp.webp";
import ec from "../Assets/ec.webp";
import d1 from "../Assets/lispwhy.webp";
import Image from "next/image";
import { FaChevronRight, FaDotCircle } from "react-icons/fa";
import Link from "next/link";
import WhatCanDo from "../components/WhatCanDo";
import GetNewInsight from "../components/GetNewInsight";
import CommonTechBlog from "../components/CommonTechBlog";

const Lisp = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              lisp Online Store Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                LISP or List Processor language remains the principal la+nguage
                for AI work in the United States. LISP was invented at the
                Massachusetts Institute of Technology (MIT) by John McCarthy,
                who coined the term “artificial intelligence”. Lisp is the
                second-oldest high-level programming language in use today, and
                has become the programming language of choice for AI
                applications after its publication in 1960. LISP operates on
                Read–Eval–Print Loop (REPL), also known as an interactive top
                level or language shell, in an interactive computer programming
                environment that codes, compiles, and runs the code in 30+
                programming languages including JavaScript and Python.
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
            alt="Lisp Online Store Development"
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10 px-5 md:px-12 xl:px-28 py-14">
        <div className="w-2/3 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            Why lisp For AI/ML Solution
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              LISP is used more by compilers than interpreters as it supports
              efficient and fast coding. Common adopters of LISP include
              Grammarly, a popular cloud-based free interactive writing platform
              to make messages, documents, and posts clear, mistake-free, and
              effective.
            </p>
            <ul class="list-none mt-10">
              <li className="flex gap-2 items-center">
                <FaDotCircle className="text-[#e33f70]" />
                Recursion is used as the control structure, not iteration (loop)
                as in imperative languages.
              </li>
              <li className="flex gap-2 items-center">
                <FaDotCircle className="text-[#e33f70]" />
                It is an ideal option for processing symbolic information.
              </li>
              <li className="flex gap-2 items-center">
                <FaDotCircle className="text-[#e33f70]" />
                It can be used to develop superior prototypes and create new
                objects dynamically.
              </li>
            </ul>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full ">
          <Image
            src={d1}
            width={400}
            height={400}
            alt="Design 1"
            className="w-96 mt-10 h-60  max-sm:mb-3  max-lg:mx-auto "
          />
        </div>
      </div>

      <WhatCanDo />

      <CommonTechBlog
        img={ec}
        title=" Why Custom AI/ML Solution Is Important to Your Business"
        desc=" Nowadays, almost every business has experienced that it can succeed when
        its offerings are visible to their customers. For that reason, business
        owners invest in spending money on developing visually attractive
        websites and look for sophisticated SEO experts to differentiate
        themselves amidst the clutter."
      />
      <GetNewInsight />
    </>
  );
};

export default Lisp;
