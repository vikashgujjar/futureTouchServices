"use client";
import React, { useEffect, useState } from "react";
import icon1 from "../Assets/startup.webp";
import icon2 from "../Assets/team.webp";
import icon3 from "../Assets/mobile.webp";
import icon4 from "../Assets/computers.webp";
import icon5 from "../Assets/world.webp";
import icon6 from "../Assets/deal.webp";
import svg from "../Assets/ux.svg";
import apple from "../Assets/apple.svg";
import tablet from "../Assets/tablet.svg";
import android from "../Assets/android.svg";
import shopify from "../Assets/shopify.svg";
import php from "../Assets/php.svg";
import java from "../Assets/java.svg";
import magento from "../Assets/magento.svg";
import wordpress from "../Assets/wordpress.svg";
import reactjs from "../Assets/reactjs.webp";
import nodejs from "../Assets/nodejs.webp";
import angular from "../Assets/angular.webp";
import seo from "../Assets/seo.webp";
import cms from "../Assets/cms.webp";
import ppc from "../Assets/ppc.webp";
import smm from "../Assets/smm.webp";
import logo from "../Assets/logo.webp";
import brochure from "../Assets/brochure.webp";
import video from "../Assets/2d3d.webp";
import { FaAngleRight } from "react-icons/fa";
// import Testimonial from "../Hero/Testimonial";
// import MutipleServices from "../Hero/MutipleServices";
// import Location from "../Hero/Location";
import Login from "../components/Login";
import Testimonial from "../components/Testimonial";
import Location from "../components/Location";
import MutipleServices from "../components/MutipleServices";
import Link from "next/link";

import Image from "next/image";

const Services = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const cardsData = [
    {
      id: 1,
      src: icon1,
      alt: "Industries",
      text: "Years Experience",
      bgColor: "bg-[#f3f5ff]",
      borderColor: "#b0bdff",
      counter: "20+",
    },
    {
      id: 2,
      src: icon2,
      alt: "Industries",
      text: "Talented Squad",
      bgColor: "bg-[#fff3e6]",
      borderColor: "#ffc093",
      counter: "250+",
    },
    {
      id: 3,
      src: icon3,
      alt: "Industries",
      text: "Apps Developed",
      bgColor: "bg-[#fbeefd]",
      borderColor: "#f6bcff",
      counter: "1200+",
    },
    {
      id: 4,
      src: icon4,
      alt: "Industries",
      text: "Projects Delivered",
      bgColor: "bg-[#effdff]",
      borderColor: "#9ff3ff",
      counter: "100%",
    },
    {
      id: 5,
      src: icon5,
      alt: "Industries",
      text: "Countries Served",
      bgColor: "bg-[#fbfff1]",
      borderColor: "#ffdaa2",
      counter: "120+",
    },
    {
      id: 6,
      src: icon6,
      alt: "Industries",
      text: "Client Satisfaction",
      bgColor: "bg-[#f3f5ff]",
      borderColor: "#b0bdff",
      counter: "100%",
    },
  ];

  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="">
          <div className="px-5 md:px-12 xl:px-28 pt-14 max-sm:py-7 max-lg:py-10 lg:py-10">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl max-lg:text-xl">
              WEBSITE, MOBILE APP & DIGITAL MARKETING SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                We are Link full-stack Branding, Website Development, App
                Development, Digital marketing and web designing company in
                Chandigarh with all the expertise you need to build Link
                successful, stable and scalable product. We follow our tried and
                tested processes that ensures that the product is Link
                marketfit, and hence your marketing and technology partner.{" "}
                <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-hue">
                  Future IT Touch Pvt. Ltd.
                </span>{" "}
                mobile app development & website design company in India offers
                Link comprehensive range of digital solutions for all your
                online business needs. Our bouquet of services includes web
                design and development, mobility solutions, digital marketing,
                and corporate branding solutions. With our team of 50+
                designers, developers, content writers, and marketing experts,
                we have been serving Link global clientele in 3+ countries since
                2017.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <Link
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-2 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </Link>
              <button className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading ">
                <Link href="tel:+917056937000">Call us - 7056937000</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-image mt-5 sm:mt-5 md:mt-7 lg:mt-10 px-5 md:px-12 xl:px-28 pb-10">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="col-lg-5 v-center px-5 sm:px-5 md:px-0 lg:px-0">
            <div className="common-heading">
              <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl leading-tight mt-5 mb-5 font-bold">
                <span className="text-4xl max-sm:text-3xl max-md:text-3xl mt-5 mb-5 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  Future IT Touch Pvt. Ltd. <br />
                </span>
                WEBSITE, MOBILE APP & DIGITAL MARKETING SERVICES
              </h3>

              <p className="text-justify text-lg mt-5">
                We are a full-stack Branding, Website Development, App
                Development, Digital Marketing and Web Designing company in
                Chandigarh with all the expertise you need to build a
                successful, stable & scalable product. We follow our tried and
                tested processes that ensure the product is market-fit & hence
                your marketing and technology partner.
              </p>

              <p className="text-justify text-lg font-bold text-gray-700 mt-5">
                You already have a project in mind and want to work with us?
                Fill out the form below and let us know right away in which
                direction it should go.
              </p>

              <div className="cta-card mt-8 text-left pr-0 sm:pr-0 md:pr-0 lg:pr-16">
                <h3 className="mb-4 text-2xl sm:text-2xl md:text-3xl lg:text-2xl font-bold float-start">
                  Let's Start a New Project Together
                </h3>

                <button
                  onClick={handleButtonClick}
                  className="btn-outline float-right flex items-center border-2 border-black text-black px-8 py-2 font-poppins text-base bg-white shadow-md rounded-full mt-5 ml-2 hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white hover:border-current"
                >
                  Request A Quote <FaAngleRight className="relative left-2" />
                </button>
              </div>
            </div>
          </div>

          {isPopupOpen && (
             <Login handleClosePopup={handleClosePopup} isPopupOpen={isPopupOpen} />

          )}

          <div className="col-lg-7">
            <div className="mx-5 max-sm:mx-2 max-md:mx-4 mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {cardsData.map((card) => (
                <div
                  key={card.id}
                  className={`work-cards cd${card.id} ${card.bgColor} h-[14rem] w-44 max-sm:w-40 max-md:w-40 relative inline-block p-10 text-center shadow-lg`}
                  style={{ borderBottom: `4px solid ${card.borderColor}` }}
                >
                  <div className="ml-3">
                    <Image
                      className="w-16 h-16 mb-2"
                      src={card.src}
                      width={64}
                      height={64}
                      alt={card.alt}
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-[#050748]">
                    {card.counter}
                  </h1>
                  <p className="text-center text-[#6a6a8e] mt-2 font-semibold">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12  pb-10">
        <div className="pt-20 md:col-span-12 text-center">
          <span
            className="text-4xl mb-5 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Our Services
          </span>
          <p className="text-xl font-semibold text-gray-700 mt-2 p-2">
            We think big and have hands in all leading technology platforms to
            provide you wide array of services.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-5 sm:px-5 md:px-12 xl:px-28  gap-4 mb-20 service-bg ">
        <div className=" rounded overflow-hidden bg-white py-4 shadow-lg">
          <div className="px-6 py-4">
            <h4 className="font-bold text-xl mb-2">App Development</h4>
            <ul className="text-sm font-semibold text-[#6a6a8e] flex my-3 uppercase">
              <li className="border-r-2 border-gray-300 pr-2 ">
                <Link href="/IOS">iphone</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-2">
                <Link href="/android-application-development">android</Link>
              </li>
              <li className="border-r-2 text-nowrap border-gray-300 px-2">
                <Link href="/hybrid-application-development">
                  cross platform
                </Link>
              </li>
            </ul>
            <div className="pt-2">
              <ul className="flex gap-2">
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={android}
                      width={400}
                      height={400}
                      alt="Android"
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={apple}
                      width={400}
                      height={400}
                      alt="Apple"
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-4">
                  <Link href="#">
                    <Image
                      className=""
                      src={tablet}
                      width={400}
                      height={400}
                      alt="Tablet"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-base mt-4 text-justify">
              Transform and mobilize your business anytime, anywhere with custom
              mobile app development services Android, IOS &amp; Hybrid from
              Future IT Touch Pvt. Ltd. India.
            </p>
          </div>
          <div className="px-6 py-4">
            <Link
              href="/application-developement"
              className="bg-gradient-to-r from-teal-400 to-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className=" rounded overflow-hidden bg-white shadow-lg py-4">
          <div className="px-6 py-4">
            <h4 className="font-bold text-xl mb-2">Web Development</h4>
            <ul className="text-sm font-semibold text-[#6a6a8e] flex my-3 uppercase">
              <li className="border-r-2 border-gray-300 pr-2 ">
                <Link href="/asp-dot-net-service">Asp.net</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-2">
                <Link href="/php-laravel-codeigniter-services">php</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-2">
                <Link href="/java-application-development">java</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-2">
                <Link href="/wordpress-and-shopify-development">Wordpress</Link>
              </li>
            </ul>
            <div className="pt-2">
              <ul className="flex gap-2">
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={svg}
                      width={400}
                      height={400}
                      alt="Android"
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={php}
                      width={400}
                      height={400}
                      alt="Apple"
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={java}
                      width={400}
                      height={400}
                      alt="Tablet"
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={wordpress}
                      width={400}
                      height={400}
                      alt="Tablet"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-base mt-4 text-justify">
              Your business can get a reliable facelift for long-term branding
              solutions across all verticals including e-commerce solutions and
              open source content management exclusively.
            </p>
          </div>
          <div className="px-6 py-4">
            <Link
              href="/website-design"
              className="bg-gradient-to-r from-teal-400 to-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More <i className="fas fa fa-arrow-circle-right ml-1"></i>
            </Link>
          </div>
        </div>
        <div className=" rounded overflow-hidden bg-white py-4  shadow-lg">
          <div className="px-6 py-4">
            <h4 className="font-bold text-xl mb-2">eCommerce Development</h4>
            <ul className="text-sm font-semibold text-[#6a6a8e] flex  my-3 uppercase">
              <li className="border-r-2 border-gray-300 pr-4 ">
                <Link href="/php-laravel-codeigniter-services">laravel</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-4">
                <Link href="/wordpress-and-shopify-development">magneto</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-4">
                <Link href="/reactjs-vuejs-nodejs-development-services">
                  react js
                </Link>
              </li>
            </ul>
            <div className="pt-2">
              <ul className="flex">
                <li className="mr-2">
                  <Link href="#">
                    <Image
                      className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3"
                      src={magento}
                      width={400}
                      height={400}
                      alt="Android"
                    />
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="#">
                    <Image
                      className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3"
                      src={shopify}
                      width={400}
                      height={400}
                      alt="Apple"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3"
                      src={reactjs}
                      width={400}
                      height={400}
                      alt="Tablet"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-base mt-4 text-justify">
              Future IT Touch Pvt. Ltd., we deliver cutting edge technology
              solutions for online commerce industry. Our ecommerce solutions
              are built on latest technology.
            </p>
          </div>
          <div className="px-6 py-4">
            <Link
              href="/ecommerce"
              className="bg-gradient-to-r from-teal-400 to-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More <i className="fas fa fa-arrow-circle-right ml-1"></i>
            </Link>
          </div>
        </div>
        <div className=" rounded overflow-hidden bg-white py-4 shadow-lg">
          <div className="px-6 py-4">
            <h4 className="font-bold text-xl mb-2">Trending Technologies</h4>
            <ul className="text-sm font-semibold text-[#6a6a8e] flex my-3 uppercase">
              <li className="border-r-2 border-gray-300 pr-2 ">
                <Link href="/reactjs-vuejs-nodejs-development-services">
                  React js
                </Link>
              </li>
              <li className="border-r-2 border-gray-300 px-2">
                <Link href="/reactjs-vuejs-nodejs-development-services">
                  node js
                </Link>
              </li>
              <li className="border-r-2 border-gray-300 px-2">
                <Link href="/angularjs-development-service"> angular</Link>
              </li>
            </ul>
            <div className="pt-2">
              <ul className="flex gap-2">
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={reactjs}
                      width={400}
                      height={400}
                      alt="Android"
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={nodejs}
                      width={400}
                      height={400}
                      alt="Apple"
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-4">
                  <Link href="#">
                    <Image
                      className=""
                      src={angular}
                      width={400}
                      height={400}
                      alt="Tablet"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-base mt-4 text-justify">
              Future IT Touch Pvt. Ltd. India, we create winning business models
              through innovative product development practices. Committed to
              delivering the right value.
            </p>
          </div>
          <div className="px-6 py-4">
            <Link
              href="/trending-technology"
              className="bg-gradient-to-r from-teal-400 to-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More <i className="fas fa fa-arrow-circle-right ml-1"></i>
            </Link>
          </div>
        </div>
        <div className=" rounded overflow-hidden bg-white shadow-lg py-4">
          <div className="px-6 py-4">
            <h4 className="font-bold text-xl mb-2">Digital marketing</h4>
            <ul className="text-sm font-semibold text-[#6a6a8e] flex my-3 uppercase">
              <li className="border-r-2 border-gray-300 pr-2 ">
                <Link href="/search-engine-optimization">seo</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-2">
                <Link href="/cms">cms</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-2">
                <Link href="/pay-per-click-service">ppc</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-2">
                <Link href="/social-media-marketing-service">smm</Link>
              </li>
            </ul>
            <div className="pt-2">
              <ul className="flex gap-2">
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={seo}
                      width={400}
                      height={400}
                      alt="Android"
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={cms}
                      width={400}
                      height={400}
                      alt="Apple"
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={ppc}
                      width={400}
                      height={400}
                      alt="Tablet"
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={smm}
                      width={400}
                      height={400}
                      alt="Tablet"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-base mt-4 text-justify">
              Digital marketing is the best way to reach your audiences and
              create relationships with your client. We provide all types of
              digital marketing tools like PPC, SMO, SEO, SMM.
            </p>
          </div>
          <div className="px-6 py-4">
            <Link
              href="/"
              className="bg-gradient-to-r from-teal-400 to-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More <i className="fas fa fa-arrow-circle-right ml-1"></i>
            </Link>
          </div>
        </div>
        <div className=" rounded overflow-hidden bg-white py-4  shadow-lg">
          <div className="px-6 py-4">
            <h4 className="font-bold text-xl mb-2">Design & Branding</h4>
            <ul className="text-sm font-semibold text-[#6a6a8e] flex  my-3 uppercase">
              <li className="border-r-2 border-gray-300 pr-4 ">
                <Link href="/logo-design-services">logo</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-4">
                <Link href="/brochure-design-service">brochure</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-4">
                <Link href="/animated-services">2d-3d vedio</Link>
              </li>
            </ul>
            <div className="pt-2">
              <ul className="flex">
                <li className="mr-2">
                  <Link href="#">
                    <Image
                      className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3"
                      src={logo}
                      width={400}
                      height={400}
                      alt="Android"
                    />
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="#">
                    <Image
                      className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3"
                      src={brochure}
                      width={400}
                      height={400}
                      alt="Apple"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3"
                      src={video}
                      width={400}
                      height={400}
                      alt="Tablet"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 text-base mt-4 text-justify">
              We serve all your designing needs like, Corporate Identity,
              Product Branding, Brand logo designing, Brochures, Leaflets,
              Animated Vedio 2D/3D & many more.
            </p>
          </div>
          <div className="px-6 py-4">
            <Link
              href="/graphic-design-services"
              className="bg-gradient-to-r from-teal-400 to-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More <i className="fas fa fa-arrow-circle-right ml-1"></i>
            </Link>
          </div>
        </div>
      </div>

      <MutipleServices />
      <Testimonial />
      <Location />

      <div>
                
          {isPopupOpen && (
                <Login handleClosePopup={handleClosePopup} isPopupOpen={isPopupOpen} />
      )}
      </div>
    </>
  );
};

export default Services;
