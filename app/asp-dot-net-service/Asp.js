"use client";
import React from "react";

import app from "../Assets/asp.webp";
import loc from "../Assets/snet.webp";
import Image from "next/image";
import {
  FaBattleNet,
  FaChevronRight,
  FaEthernet,
  FaThumbsUp,
  FaWindowRestore,
} from "react-icons/fa";
import Link from "next/link";

import { rangeData } from "../common/Service_comp";
import GetNewInsight from "../components/GetNewInsight";

const Asp = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className="  relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              ASP.NET Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Microsoft ASP.NET is a set of technologies, built on top of the
                Microsoft .NET Framework, for building Web applications and XML
                Web services. ASP.NET web pages execute on a web server in IIS
                (Internet Information Server) and generate markup such as HTML
                and XML that is sent down to a desktop or mobile browser. This
                is important because the application does not require any
                installation on the client computer beyond a web browser. This
                means your application can be run from anywhere regardless of
                the hardware.
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
            src={app}
            width={400}
            height={400}
            alt="ASP.NET Development"
            className="w-60 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className=" px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Providing High Level Of Security & Scalability To Your Business App
        </h3>
        <p className=" text-lg text-[#6a6a8e] my-5">
          ASP.NET is a robust platform that allows the developers to create
          simplest to most complex web applications whilst offering the
          flexibility and scalability to develop solutions across devices. We
          develop highly functional, feature-rich and user-friendly applications
          for desktops, smartphones, as well as web platforms.
        </p>
        <div className="flex max-lg:block gap-10  max-sm:mt-2">
          <div className="w-2/3 max-lg:w-full grid grid-cols-1 md:grid-cols-2 pt-10 gap-10  text-lg text-[#6a6a8e]">
            <div className="">
              <div className="flex items-center gap-5">
                <FaThumbsUp className="text-4xl text-[#673ab7]" />

                <p className="text-xl font-semibold text-[#050748]">
                  Reliable Platform
                </p>
              </div>
              <p className="mt-4 text-justify">
                Since its release, ASP.NET has been used to develop thousands of
                applications which make it the most popular platform among
                developer. Moreover, its performance on Microsoft Windows Server
                2003 and Windows 2000 Server is very stable and reliable.
              </p>
            </div>
            <div className="">
              <div className="flex items-center gap-5">
                <FaBattleNet className="text-4xl text-[#673ab7]" />

                <p className="text-xl font-semibold text-[#050748]">
                  Integration with legacy systems
                </p>
              </div>
              <p className="mt-4 text-justify">
                The ASP.NET platform can process all types of XML documents as
                well as to write any format of the file with swiftness and ease.
                That ultimately means that it provides multiple routes for
                integration.
              </p>
            </div>
          </div>
          <div className="w-1/3 max-lg:w-full mt-10">
            <Image
              src={loc}
              width={400}
              height={400}
              alt="ASP.NET Location"
              className="w-full  max-lg:mx-auto"
            />
          </div>
        </div>

        <p className=" text-lg font-bold text-[#050748] mt-20  mb-5">
          OUR ASP.NET DEVELOPMENT SERVICES
        </p>
        <h3 className="text-3xl lg:text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
          Scalable, Powerful, & Leading-Edge Collaborative ASP.NET Solutions
        </h3>

        <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 pt-10 gap-10  text-lg text-[#6a6a8e]">
          {rangeData.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-5">
                <item.iconFour className="text-4xl text-[#673ab7]" />

                <p className="text-xl font-semibold text-[#050748]">
                  {item.titleFour}
                </p>
              </div>
              <p className="mt-4 text-justify">{item.descriptionFour}</p>
            </div>
          ))}
          <div className="">
            <div className="flex items-center gap-5">
              <FaEthernet className="text-4xl text-[#673ab7]" />

              <p className="text-xl font-semibold text-[#050748]">
                NET Integration
              </p>
            </div>
            <p className="mt-4 text-justify">
              If you’re migrating from another platform and want some old
              features to keep in the new app as well, or you may also want some
              unique tool to integrate into your web application, then why
              should you worry as we are here to help you in integrating
              existing tools with your ASP.Net application.
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-5">
              <FaWindowRestore className="text-4xl text-[#673ab7]" />

              <p className="text-xl font-semibold text-[#050748]">
                MVC Development
              </p>
            </div>
            <p className="mt-4 text-justify">
              With our ASP.Net MVC development service, our developers can help
              you build interactive and vibrant websites as well as some robust
              and scalable web applications for your business using the MVC
              design pattern.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <p className=" text-lg font-bold text-[#050748]  mb-5">
          ADVANTAGES OF .NET FOR A BUSINESS APP DEVELOPMENT
        </p>
        <h3 className="text-3xl lg:text-4xl max-sm:text-2xl max-md:text-3xl text-[#050748] font-bold">
          Why To Go With A Dot Net Development Company?
        </h3>
        <div className="flex gap-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10  text-lg text-[#6a6a8e]">
            {rangeData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-5">
                  <item.iconThree className="text-4xl text-[#673ab7]" />

                  <p className="text-xl font-semibold text-[#050748]">
                    {item.titleThree}
                  </p>
                </div>
                <p className="mt-4 text-justify">{item.descriptionThree}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GetNewInsight />
    </>
  );
};

export default Asp;
