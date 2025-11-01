"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import company from "../Assets/about-service.webp";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import service1 from "../Assets/service-img-1_1.webp";
import service2 from "../Assets/service-img-2.webp";
import service3 from "../Assets/service-img-3.webp";
import service4 from "../Assets/service-img-4.webp";
import GetNewInsight from "../components/GetNewInsight";

const WebDesign = () => {
  const services = [
    {
      title: "Web Application Development",
      category: "APP",
      bgColor: "#e9ddff",
      href: "/web-app-development",
      image: service1.src,
      alt: "Web App",
    },
    {
      title: "Small Business Website",
      category: "Marketing",
      bgColor: "#ffdadb",
      href: "/business-developement",
      image: service2.src,
      alt: "Small Business Website",
    },
    {
      title: "CMS Web Development",
      category: "CMS",
      bgColor: "#d6edff",
      href: "/cms-development",
      image: service3.src,
      alt: "CMS",
    },
    {
      title: "Website Design & Development",
      category: "Website Design",
      bgColor: "#ffede1",
      href: "/web-app-developemnt-corporate",
      image: service4.src,
      alt: "Website Design",
    },
  ];
  return (
    <>
      {/* Spacer */}
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      {/* Hero Section */}
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="px-5 md:px-12 xl:px-28  pt-14 max-sm:py-7 max-lg:py-5 lg:py-10 xl:pb-0 ">
          <div>
            <h1 className="text-white font-bold text-4xl max-sm:text-2xl max-lg:text-xl">
              WEBSITE DESIGN & DEVELOPMENT SERVICES
            </h1>
            <div className="text-[#dcd7f8] mt-3 text-lg text-justify max-lg:text-base">
              <p>
                The biggest challenge faced by any small business is to expand
                its customer base. With the rising expenses of electronic and
                print media, the only option left for the small business owners
                is to create a strong digital presence. A professionally
                developed website for small business is the first step toward
                achieving this aim.{" "}
                <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-hue">
                  Future IT Touch Pvt. Ltd.
                </span>{" "}
                company providing a range of business website design services to
                clients worldwide. Our small business website design services
                are customized exclusively for startups at affordable rates. In
                the last 15 years, we have delivered effective web solutions to
                a number of small businesses and helped them enhance their
                growth online.
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <Link
              href="/contact"
              className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
            >
              Quick Enquiry
            </Link>

            <a
              href="tel:+917056937000"
              className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2 sm:px-8 font-heading"
            >
              Call us - 7056937000
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 choose-background px-5 sm:px-6 md:px-10 lg:px-20 xl:px-28 xl:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center lg:justify-start">
            <Image
              className="relative  rounded w-full sm:w-3/4 md:w-2/3 lg:w-11/12 h-auto object-cover"
              src={company.src}
              width={400}
              height={400}
              alt="About Company"
            />
          </div>
          <div className="text-left pt-5 lg:pt-0">
            <span className="text-sm sm:text-base md:text-lg text-[#e60072] font-medium">
              What our clients say about Future IT Touch Pvt. Ltd.
            </span>
            <h3 className="text-3xl lg:text-4xl mt-4 mb-4 sm:mb-6 font-bold">
              Website For Small Business & Startups
            </h3>
            <p className="leading-6 sm:leading-7 text-sm sm:text-base md:text-lg text-[#6a6a8e] text-justify">
              Rise from a startup to an established brand. Whether you run a
              small business or have invested in a startup, we can build a
              professional website at a very reasonable price point. We use the
              latest technologies, create attractive design layouts, and develop
              business-oriented features to upscale user experience. A
              well-built website for small businesses can convert visitors into
              buyers by creating a strong impression within their target
              audience. This in turn increases revenue and helps your business
              grow.
            </p>
            <button className="bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] flex justify-center items-center mt-6 text-white px-5 py-3 text-sm sm:text-base md:text-lg font-semibold rounded-full hover:shadow-lg transition-shadow duration-300">
              Learn More <FaAngleRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <section className="service-section service-2 py-20 max-lg:py-10">
        <div className="flex justify-center px-5 sm:px-6">
          <div className="w-full lg:w-8/12 text-center">
            <span className="text-base md:text-lg text-[#e60072] uppercase">
              Services We’re Provided
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-8">
              Our Web Development Services
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-5 sm:px-10 lg:px-20 my-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row rounded-lg shadow-lg p-6  items-center`}
              style={{ backgroundColor: service.bgColor }}
            >
              <div className="lg:w-1/2 text-center sm:text-left mb-4 sm:mb-0">
                <span className="text-sm md:text-lg">{service.category}</span>
                <h4 className="text-xl  md:text-2xl font-bold mt-2 mb-4 text-[#050748]">
                  {service.title}
                </h4>
                <Link
                  href={service.href}
                  className="flex justify-center sm:justify-start items-center text-sm md:text-lg"
                >
                  Learn More <FaAngleRight className="ml-2" />
                </Link>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <Image
                  src={service.image}
                  width={300}
                  height={300}
                  alt={service.alt}
                  className="w-40 sm:w-52 md:w-64 h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <GetNewInsight />
    </>
  );
};

export default WebDesign;
