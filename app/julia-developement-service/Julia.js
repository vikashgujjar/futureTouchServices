"use client";
import React from "react";

import gm from "../Assets/Julia.webp";
import ec from "../Assets/ec.webp";
import d1 from "../Assets/juliad.webp";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import GetNewInsight from "../components/GetNewInsight";
import CommonTechBlog from "../components/CommonTechBlog";

const Julia = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className="  relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              JULIA DEVELOPMENT SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Julia is a relatively new programming language that has been
                gaining traction in the Machine Learning world. As it is getting
                more and more popular, I wanted to do this article to give you
                an in-depth overview of why and how to get started with Machine
                Learning in Julia. The main advantage of Julia over other
                Machine Learning languages is speed. Two main reasons for
                Julia’s speed advantage are, firstly, that it is a compiled
                language. Secondly, it has been designed for parallelism.
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
            alt="Julia Development Services"
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10 px-5 md:px-12 xl:px-28 py-14">
        <div className="w-2/3 max-lg:w-full pt-5">
          <h4 className="text-4xl font-bold mb-3 text-[#050748] ">
            Julia Web Development Company
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              The resources for Machine Learning in Julia are still relatively
              distributed over different packages. Julia being not (yet) as
              popular as other programming languages for Machine Learning, it
              can sometimes be a bit of work to find specific models. It can
              also be more effort to find (or write) certain basic data
              preparation functions that are easily available in Python and R.
              The good news is that there are initiatives to regroup Machine
              Learning models in larger libraries. At this point, there are two
              libraries that are seriously competing for becoming the go-to
              Machine Learning library in Julia: MLJ and Scikit Learn.
            </p>
          </div>
        </div>

        <div className=" w-1/3 max-lg:w-full max-sm:mt-10">
          <Image
            src={d1}
            width={400}
            height={400}
            alt="Design 1"
            className="w-96 h-60  max-sm:mb-3 max-lg:mx-auto"
          />
        </div>
      </div>

      <WhatCanDo />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28  py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Why Julia programming language stands apart from existing
          frontrunners?
        </h3>
        <p className=" text-lg text-[#6a6a8e] text-justify my-5">
          Top tech giants like Amazon, Google Maps, Netflix, Siri, & more come
          under the hats of machine learning technology. With a plethora of
          data-driven prediction models & solutions, the innovation of Julia
          adds fuel in the fire in terms of speeding up the optimization process
          for increased ROI. ML is predicted to achieve excellent growth rate
          with a CAGR of 43% between the year 2019-24 in combination with
          Julialang.
        </p>
        <p className=" text-lg text-[#6a6a8e] text-justify my-5">
          Since its launch in 2012, Julia came out as a high-level
          general-purpose open-source programming language developed to perform
          high-end computations. If you’re new to this programming language then
          this brief introduction will definitely keep you engaged for the next
          few minutes. Julia stockpiles feature like multiple dispatch, built-in
          package, distributed computing, multiple dispatch, & other add-ons.
          Though it merges C, Python, MATLAB, Ruby, & R, it gained popularity
          within a shorter span of time, particularly for this reason.
        </p>
      </div>

      <RequestQuote />

      <CommonTechBlog
        img={ec}
        title=" Why Custom AI/ML Solution Is Important to Your Business"
        desc=" Nowadays, almost every business has experienced that it can
              succeed when its offerings are visible to their customers. For
              that reason, business owners invest in spending money on
              developing visually attractive websites and look for sophisticated
              SEO experts to differentiate themselves amidst the clutter."
      />

      <GetNewInsight />
    </>
  );
};

export default Julia;
