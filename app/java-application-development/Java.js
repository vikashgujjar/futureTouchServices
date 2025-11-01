"use client";
import React from "react";

import gm from "../Assets/java.webp";
import ec from "../Assets/cod.webp";
import d1 from "../Assets/javawhy.webp";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import m from "../Assets/m.webp";
import mi from "../Assets/mi.webp";
import m1 from "../Assets/m1.webp";
import m2 from "../Assets/m2.webp";
import h from "../Assets/h.webp";
import h1 from "../Assets/h1.webp";
import h2 from "../Assets/h2.webp";
import h3 from "../Assets/h3.webp";
import Link from "next/link";
import Head from "next/head";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import GetNewInsight from "../components/GetNewInsight";
import CommonTechBlog from "../components/CommonTechBlog";

const Java = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className="relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Java Blockchain Development Services
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                If you are coming from a technical background, it makes sense to
                build on that knowledge and see what blockchain brings to the
                table. In the end, blockchain is a new technology, but it
                contains a combination of existing technologies with human
                behavior fueled by network effects. It is worth stating that the
                popular technologies such as Java, .NET, and relational
                databases are not common in the blockchain space. This space is
                primarily dominated by C, Go, Rust on the server side, and
                JavaScript on the client side. But if you know Java, there are a
                few projects and components written in Java that can be used as
                a leveraged entry point to the blockchain space.
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
            alt="Java Blockchain Development Services"
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10 px-5 md:px-12 xl:px-28 py-14">
        <div className="w-3/5  max-lg:w-full">
          <h4 className="text-4xl font-bold  mb-3 text-[#050748] ">
            Why Java Application Development Services?
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              Java offers multiple advanced features to satisfy the demand of a
              scripting and client-side programming language which allows web
              pages to be interactive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            <div className="flex items-center gap-5">
              <Image
                src="/Assets/h.webp"
                width={40}
                height={40}
                alt="Platform-independent and Easy-to-adopt"
                className="text-3xl text-[#e33f70]"
              />

              <p className=" text-lg text-[#e33f70]">
                Platform-independent and Easy-to-adopt
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/Assets/h1.webp"
                width={40}
                height={40}
                alt="Trouble-free connectivity features"
                className="text-3xl text-[#e33f70]"
              />

              <p className="text-lg text-[#e33f70]">
                Trouble-free connectivity features
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/Assets/h2.webp"
                width={40}
                height={40}
                alt="Provides solution in reduced time"
                className="text-3xl text-[#e33f70]"
              />

              <p className="text-lg text-[#e33f70]">
                Provides solution in reduced time
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/Assets/h3.webp"
                width={40}
                height={40}
                alt="Allows you to create modular programs and reusable code"
                className="text-3xl text-[#e33f70] max-w-36"
              />

              <p className="text-lg text-[#e33f70]">
                Allows you to create modular programs and reusable code
              </p>
            </div>
          </div>
        </div>

        <div className=" w-2/5 max-lg:w-full">
          <Image
            src={d1}
            width={400}
            height={400}
            alt="Design 1"
            className="w-full h-80 max-sm:mb-3 max-lg:mx-auto"
          />
        </div>
      </div>

      <WhatCanDo />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 pb-10  pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
          <div className="">
            <div className="Development-text">
              <div className="flex items-center">
                <Image
                  src={m}
                  width={400}
                  height={400}
                  alt="Stable programming"
                  className="rounded-full w-12"
                />
                <p className="ml-2 text-lg text-[#e33f70]">
                  Stable programming
                </p>
              </div>
              <p>
                Java app development provides Java developers with stable and
                customized{" "}
              </p>
            </div>
            <div className="Development-text mt-5">
              <div className="flex items-center">
                <Image
                  src={m1}
                  width={400}
                  height={400}
                  alt="Dynamic design"
                  className="rounded-full w-12"
                />
                <p className="ml-2 text-lg text-[#e33f70]">Dynamic design</p>
              </div>
              <p>
                Java development allows developers to create secure and dynamic
                designs for your application.
              </p>
            </div>
            <div className="Development-text mt-5">
              <div className="flex items-center">
                <Image
                  src={m2}
                  width={400}
                  height={400}
                  alt="Easy maintenanced"
                  className="rounded-full w-12"
                />
                <p className="ml-2 text-lg text-[#e33f70]">
                  Easy maintenanced{" "}
                </p>
              </div>
              <p>
                Easy support and maintenance makes Java the most loved app
                development language among app developers.
              </p>
            </div>
          </div>
          <Image src={mi} width={1000} height={1000} alt="Java Maintenance" />
        </div>
      </div>

      <RequestQuote />

      <CommonTechBlog
        img={ec}
        title="       What Are The Advantages Of Using The React Framework?
"
        desc="  The rapidly changing digital landscape requires the building of rich and
        engaging frontend web applications quickly and efficiently. This needs
        choosing a framework that is simple, easy to use/reuse, flexible, and
        allows minimal coding. Among the many open source frameworks available,
        React aka React or React.js fits the bill perfectly to build robust,
        attractive, feature rich, scalable, and secure Single Page Applications
        (SPA)."
      />

      <GetNewInsight />
    </>
  );
};

export default Java;
