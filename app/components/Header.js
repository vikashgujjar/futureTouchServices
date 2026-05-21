"use client";
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { usePathname } from "next/navigation";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { FaEnvelope, FaPhoneAlt, FaSkype } from "react-icons/fa";

import Link from "next/link";
import Login from "./Login";
export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen9, setDropdownOpen9] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isInnerDropdownOpen, setInnerDropdownOpen] = useState(false); // New state for inner dropdown
  const [isInnerDropdownOpen2, setInnerDropdownOpen2] = useState(false); // New state for inner dropdown
  const [isInnerDropdownOpen3, setInnerDropdownOpen3] = useState(false); // New state for inner dropdown
  const [isInnerDropdownOpen4, setInnerDropdownOpen4] = useState(false); // New state for inner dropdown
  const [isInnerDropdownOpen5, setInnerDropdownOpen5] = useState(false); // New state for inner dropdown
  const [isInnerDropdownOpen6, setInnerDropdownOpen6] = useState(false); // New state for inner dropdown
  const [isInnerDropdownOpen7, setInnerDropdownOpen7] = useState(false); // New state for inner dropdown
  const [isInnerDropdownOpen8, setInnerDropdownOpen8] = useState(false); // New state for inner dropdown
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(isMobileMenuOpen);
    setDropdownOpen(false);
    setDropdownOpen9(false);
    setInnerDropdownOpen2(false);
    setInnerDropdownOpen(false);
    setInnerDropdownOpen3(false);
    setInnerDropdownOpen4(false);
    setInnerDropdownOpen5(false);
    setInnerDropdownOpen6(false);
    setInnerDropdownOpen7(false);
    setInnerDropdownOpen8(false);
  };

  const handleButtonClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsPopupOpen(true);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownSecond = () => {
    setDropdownOpen9(!isDropdownOpen9);
  };
  const toggleDropdownThird = () => {
    setDropdownOpen3(!isDropdownOpen3);
  };

  const [fixed, setFixed] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const scrollHanlder = () => {
      if (window.scrollY > 0) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", scrollHanlder);

    return () => window.removeEventListener("scroll", scrollHanlder);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const [isSecond, setIsSecond] = useState(false);
  const [isThird, setIsThird] = useState(false);

  const handleMouseLeaveSecond = () => {
    setIsSecond(false);
  };

  const handleMouseLeaveThird = () => {
    setIsThird(false);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
    setIsSecond(false);
    setIsThird(false);
  };

  const handleMouseSecond = () => {
    setIsSecond(true);
    setIsOpen(false);
    setIsThird(false);
  };

  const handleMouseThird = () => {
    setIsSecond(false);
    setIsOpen(false);
    setIsThird(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path
      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text"
      : "";
  };

  return (
    <div
      className={`${
        fixed ? "bg-white top-0 shadow-md z-50" : "sm:pt-2 md:pt-4"
      } px-5 md:px-8 xl:px-20 fixed z-10 w-full `}
    >
      <div
        className={`hidden  bg-white lg:flex items-center justify-between py-1 ${
          fixed ? "px-0" : "px-5"
        }  md:px-12 lg:px-5 xl:px-12 rounded-sm relative`}
      >
        <div>
          <Link href="/">
            <img
              src="/images/Header/secondary-logo.webp"
              width={400}
              height={400}
              alt="header logo"
              className="w-[180px]  xl:w-[280px]"
            />
          </Link>
        </div>
        <ul className="hidden lg:flex items-center lg:gap-x-3 xl:gap-x-5">
          <li className="group block py-2 px-3 font-semibold md:hover:bg-transparent md:border-0 md:p-0 dark:text-black transition duration-300">
            <Link href="/">
              <span className="group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-transparent group-hover:bg-clip-text">
                Home
              </span>
            </Link>
          </li>

          <li onMouseEnter={handleMouseEnter} className="relative">
            <Link
              href="/about"
              className={`font-semibold flex gap-2 items-center py-2 px-3 icon-change md:hover:bg-transparent md:border-0 hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:text-transparent hover:bg-clip-text md:p-0 dark:text-black ${isActive(
                "/about"
              )}`}
            >
              <span className="group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
                About
              </span>
              <span className="inline-block bg-gradient-to-r from-violet-600 group-hover:to-indigo-600  bg-clip-text transition duration-300">
                <IoMdAdd className=" text-indigo-700 group-hover:text-indigo-700" />
              </span>

              {isOpen && (
                <ul
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-8 left-0 mt-2 w-48 bg-white border-t-2 border-violet-500 shadow-lg "
                >
                  <li>
                    <Link
                      href="/why-us"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100  "
                    >
                      Why Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-team"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mission"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                    >
                      Mission & Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-portfolio"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                    >
                      Our Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/price"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                    >
                      Our Pricing Package
                    </Link>
                  </li>
                </ul>
              )}
            </Link>
          </li>

          <li className="group block py-2 px-3 font-semibold md:hover:bg-transparent md:border-0 md:p-0 dark:text-black transition duration-300">
            <Link
              href="/service"
              onMouseEnter={handleMouseSecond}
              className="flex gap-x-2 items-center"
            >
              <span className="group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
                Service
              </span>
              <span className="inline-block group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
                <IoMdAdd className="text-indigo-700 group-hover:text-indigo-700" />
              </span>
            </Link>
          </li>

          <li className="group block py-2 px-3 font-semibold md:hover:bg-transparent md:border-0 md:p-0 dark:text-black transition duration-300">
            <Link
              href="/trending-technology"
              onMouseEnter={handleMouseThird}
              className="flex gap-x-2 items-center"
            >
              <span className="group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
                Technologies
              </span>
              <span className="">
                <IoMdAdd className="text-indigo-700 group-hover:text-indigo-700" />{" "}
              </span>
            </Link>
          </li>

          <li className="group block py-2 px-3 font-semibold md:hover:bg-transparent md:border-0 md:p-0 dark:text-black transition duration-300">
            <Link href="/blog" className="flex gap-x-2 items-center">
              <span className="group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
                Blogs
              </span>
            </Link>
          </li>

          <li className="group block py-2 px-3 font-semibold md:hover:bg-transparent md:border-0 md:p-0 dark:text-black transition duration-300">
            <Link href="/contact" className="flex gap-x-2 items-center">
              <span className="group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
                Contact
              </span>
            </Link>
          </li>
        </ul>
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-md focus:outline-none"
          onClick={() => setSidebarOpen(true)}
        >
          {sidebarOpen ? <RxCross2 /> : <BiMenuAltRight />}
        </button>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="hidden lg:flex w-fit items-center bg-dark-200 justify-center text-white py-[15px] sm:py-[12px] px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-full text-xs sm:text-xs md:text-sm text-nowrap xl:text-base focus:outline-none hover:bg-gray-300 bg-gradient-to-r from-violet-600 to-indigo-600"
        >
          Request A Quote
        </button>

        {/* Dropdowns  */}

        {isSecond && (
          <>
            <div
              className="hidden lg:flex gap-3 justify-around font-semibold border-t border-violet-500 px-5 pb-5 bg-white absolute top-[75px] left-0 w-full"
              onMouseLeave={handleMouseLeaveSecond}
            >
              <ul className="  mt-2  bg-white w-84 ">
                <li className="border-b">
                  <Link
                    href="/website-design"
                    className="flex gap-3 px-4 py-4 font-semibold text-gray-800 hover:bg-gray-100 "
                  >
                    Website Design{" "}
                    <img
                      src="/Assets/web-development.webp"
                      className="w-7 "
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ecommerce-website-development"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    eCommerce Website
                  </Link>
                </li>
                <li>
                  <Link
                    href="/web-app-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Web Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cms-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    CMS Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-developement"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Small Business Website
                  </Link>
                </li>
                <li>
                  <Link
                    href="/web-app-developemnt-corporate"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Corporate Website
                  </Link>
                </li>
              </ul>
              <ul className="  mt-2  bg-white w-84 ">
                <li className="border-b">
                  <Link
                    href="/application-developement"
                    className="flex gap-3 py-[15px] px-[10px] font-semibold text-gray-800 hover:bg-gray-100 "
                  >
                    Mobile App Development{" "}
                    <img
                      src="/Assets/mobile-PPC-Management.webp"
                      className="w-7 "
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/android-application-development"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    Android App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ios-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    IOS App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hybrid-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Hybrid App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mobile-application-testing"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Mobile App Testing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quality-assurance"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Quality Assurance
                  </Link>
                </li>
              </ul>

              <ul className="  mt-2  bg-white w-84 ">
                <li className="border-b">
                  <Link
                    href="/digital-marketing-service"
                    className="flex gap-3 py-[15px] px-[10px]  font-semibold text-gray-800 hover:bg-gray-100 "
                  >
                    Digital Marketing Service{" "}
                    <img
                      src="/Assets/social-media-marketing.webp"
                      className="w-7 "
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search-engine-optimization"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    Seo Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pay-per-click-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    PPC Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/social-media-marketing-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/local-search-engine-optimization"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Local Seo Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/content-marketing-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Content Marketing Services
                  </Link>
                </li>
              </ul>
              <ul className=" top-8 left-0 mt-2 w-84 bg-white font-semibold  ">
                <li className="border-b">
                  <Link
                    href="/graphic-design-services"
                    className="flex gap-3 px-4 py-4 font-semibold text-gray-800 hover:bg-gray-100 "
                  >
                    Design & Branding
                    <img
                      src="/Assets/cms_1.webp"
                      className="w-7"
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/logo-design-services"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    Logo Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate-stationery-design"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Corporate Identity Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brochure-design-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Brochure Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/animated-services"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Animated Videos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/creative-services"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Creative Agency
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {isThird && (
          <>
            <div
              className="hidden lg:flex max-sm:block gap-3 justify-around font-semibold border-t border-violet-500 px-5 pb-5 bg-white absolute top-[75px] left-0 w-full"
              onMouseLeave={handleMouseLeaveThird}
            >
              <ul className="  mt-2  bg-white w-84 ">
                <li className="border-b">
                  <Link
                    href="#"
                    className="flex gap-3 px-4 py-4  text-gray-800 font-semibold hover:bg-gray-100 "
                  >
                    Web Technology
                    <img
                      src="/Assets/web-development.webp"
                      className="w-7 "
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/php-laravel-codeigniter-services"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    PHP-Laravel, Codeigniter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reactjs-vuejs-nodejs-development-services"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    React js, Vue js, Node js
                  </Link>
                </li>
                <li>
                  <Link
                    href="/asp-dot-net-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Asp .net
                  </Link>
                </li>
                <li>
                  <Link
                    href="/python-and-django-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Python-Django, flask
                  </Link>
                </li>
                <li>
                  <Link
                    href="/angularjs-development-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Angular
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wordpress-and-shopify-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    WP, Shopify, Joomla, Magento
                  </Link>
                </li>
              </ul>
              <ul className="  mt-2  bg-white w-84 ">
                <li className="border-b">
                  <Link
                    href="#"
                    className="flex gap-2 px-4 py-4 text-gray-800 font-semibold hover:bg-gray-100 "
                  >
                    Mobile Application{" "}
                    <img
                      src="/Assets/mobile-PPC-Management.webp"
                      className="w-7 "
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/swift-app-development"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    Swift
                  </Link>
                </li>
                <li>
                  <Link
                    href="/react-native-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    React native
                  </Link>
                </li>
                <li>
                  <Link
                    href="/flutter-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Flutter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ionic-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Ionic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/java-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Java
                  </Link>
                </li>
                <li>
                  <Link
                    href="/unity-game-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    UNITY - 2D, 3D
                  </Link>
                </li>
              </ul>

              <ul className="  mt-2  bg-white w-84 ">
                <li className="border-b">
                  <Link
                    href="#"
                    className="flex gap-3 px-4 py-4 font-semibold  text-gray-800 hover:bg-gray-100 "
                  >
                    AI / ML{" "}
                    <img
                      src="/Assets/ai-ml.webp"
                      className="w-7 "
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/python-numpy-development"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    Python-NumPy, Pandas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ruby-and-pybrain-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Ruby, Pybrain
                  </Link>
                </li>
                <li>
                  <Link
                    href="/java-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Java
                  </Link>
                </li>
                <li>
                  <Link
                    href="/julia-developement-service"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Julia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lisp-online-store-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Lisp
                  </Link>
                </li>
                <li>
                  <Link
                    href="/haskell-ai-and-ml-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Haskell
                  </Link>
                </li>
              </ul>
              <ul className=" top-8 left-0 mt-2 w-84 bg-white   ">
                <li className="border-b">
                  <Link
                    href="#"
                    className="flex gap-3 px-4 py-4 font-semibold text-gray-800 hover:bg-gray-100 "
                  >
                    Blockchain
                    <img
                      src="/Assets/blockchain.webp"
                      className="w-7"
                      width={400}
                      height={400}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/c-plus-plus-blockchain-development"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 "
                  >
                    C++
                  </Link>
                </li>
                <li>
                  <Link
                    href="/java-application-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Java
                  </Link>
                </li>
                <li>
                  <Link
                    href="/customer-polls-blockchain"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Customer Polls
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solidity-blockchain-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Solidity
                  </Link>
                </li>
                <li>
                  <Link
                    href="/php-laravel-codeigniter-services"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    PHP
                  </Link>
                </li>
                <li>
                  <Link
                    href="/python-blockchain-development"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                  >
                    Python
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      {isPopupOpen && (
        <Login handleClosePopup={handleClosePopup} isPopupOpen={isPopupOpen} />
      )}

      {/* side bar  for phone */}
      {isMobileMenuOpen && (
        <>
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50"
          />
        </>
      )}

      {/*  sideBar for phone  */}

      <nav
        className={` lg:hidden bg-white inset-x-0 border-gray-200 nav-width rounded absolute z-4 mx-4 sm:mx-8 md:mx-12 lg:mx-20 mt-1 ${
          fixed ? "sticky-nav  coustom_margin" : ""
        }  `}
      >
        <div className=" mx-auto flex justify-between items-center p-[0.2rem] px-1">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/Header/secondary-logo.webp"
              className="h-auto w-40 nav-logo"
              width={400}
              height={400}
              alt="Flowbite Logo"
            />
          </Link>

          <div className=" ">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className={`w-8 h-6 mt-[8px] ${
                  isMobileMenuOpen ? "cross-animation" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transition: "transform 0.3s ease" }} // Add transition property here
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`fixed z-50 top-0 left-0 h-full bg-gray-800 transition-transform transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }  w-84`}
        >
          <div className=" flex bg-white p-2  justify-between items-center">
            <Link href="/">
              {" "}
              <img
                src="/images/Header/secondary-logo.webp"
                width={400}
                height={400}
                alt=""
                className="w-40"
              />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-black   focus:outline-none"
            >
              <svg
                className="w-8 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <ul className="mobile-border mt-4 relative">
            <li>
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="text-gray-300  hover:text-white block"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <div className="text-gray-300 flex items-center hover:text-white relative">
                <Link href="/about" onClick={toggleMobileMenu}>
                  About
                </Link>
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <svg
                    className={`w-8 h-8 fill-current transition-transform ${
                      isDropdownOpen3 ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => toggleDropdownThird(!isDropdownOpen3)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l4-4-1.41-1.41L10 9.17 7.41 6.59 6 8l4 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <div
                className={`transition-all duration-300 ${
                  isDropdownOpen3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }  ease-in-out overflow-scroll mobile-bor`}
              >
                {/* Dropdown content */}

                <Link
                  href="why-us"
                  onClick={toggleMobileMenu}
                  className="text-gray-300 hover:text-white block py-2 px-2   "
                >
                  Why Us
                </Link>
                <Link
                  href="our-team"
                  onClick={toggleMobileMenu}
                  className="text-gray-300 hover:text-white block py-2 px-2  "
                >
                  Our Team
                </Link>
                <Link
                  href="mission"
                  onClick={toggleMobileMenu}
                  className="text-gray-300 hover:text-white block py-2 px-2   "
                >
                  Mission & Vision
                </Link>
                <Link
                  href="our-portfolio"
                  onClick={toggleMobileMenu}
                  className="text-gray-300 hover:text-white block py-2 px-2   "
                >
                  Our Portfolio
                </Link>
                <Link
                  href="price"
                  className="text-gray-300 hover:text-white block py-2 px-2   "
                >
                  Our Pricing Package
                </Link>
              </div>
            </li>

            <li className="relative">
              <Link
                href="service"
                onClick={toggleMobileMenu}
                className="text-gray-300 flex items-center hover:text-white relative"
              >
                Services
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <svg
                    className={`w-8 h-8 fill-current transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleDropdown(!isDropdownOpen);
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l4-4-1.41-1.41L10 9.17 7.41 6.59 6 8l4 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>

              <div
                className={`transition-all duration-300 ${
                  isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } ease-in-out overflow-scroll`}
              >
                {/* Dropdown content */}
                <div className="relative">
                  <Link
                    onClick={toggleMobileMenu}
                    href="/website-design"
                    className="text-gray-300 flex p-2 items-center hover:text-white relative"
                  >
                    Website Design
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <svg
                        className={`w-8 h-8 fill-current  transition-transform ${
                          isInnerDropdownOpen ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setInnerDropdownOpen(!isInnerDropdownOpen);
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12l4-4-1.41-1.41L10 9.17 7.41 6.59 6 8l4 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>

                  <div
                    className={`transition-all duration-300 ${
                      isInnerDropdownOpen ? "opacity-100 " : "max-h-0 opacity-0"
                    } ease-in-out overflow-scroll mobile-bor top-full left-0 w-full bg-gray-800`}
                  >
                    <Link
                      href="/ecommerce-website-development"
                      onClick={toggleMobileMenu}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      eCommerce Website
                    </Link>
                    <Link
                      href="web-app-development"
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Web Application Development
                    </Link>
                    <Link
                      href="/cms-development"
                      onClick={toggleMobileMenu}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      CMS Web Development
                    </Link>
                    <Link
                      href="/business-developement"
                      onClick={toggleMobileMenu}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Small Business Website
                    </Link>
                    <Link
                      href="/corporate-stationery-design"
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Corporate Website
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <Link
                    href="/mobile-application-testing"
                    onClick={toggleMobileMenu}
                    className="text-gray-300 flex p-2 items-center hover:text-white relative"
                  >
                    Mobile App Development
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <svg
                        className={`w-8 h-8 fill-current  transition-transform ${
                          isInnerDropdownOpen2 ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setInnerDropdownOpen2(!isInnerDropdownOpen2);
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12l4-4-1.41-1.41L10 9.17 7.41 6.59 6 8l4 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>

                  <div
                    className={`transition-all duration-300 ${
                      isInnerDropdownOpen2
                        ? "opacity-100 "
                        : "max-h-0 opacity-0"
                    } mobile-bor ease-in-out overflow-scroll top-full left-0 w-full bg-gray-800`}
                  >
                    <Link
                      href="/android-application-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Android App Development
                    </Link>
                    <Link
                      href="/ios-application-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      IOS App Development
                    </Link>
                    <Link
                      href="/hybrid-application-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Hybrid App Development
                    </Link>
                    <Link
                      href="/application-developement"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Mobile-App-Testing
                    </Link>
                    <Link
                      href="/quality-assurance"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Quality -Assurance
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <Link
                    href="/digital-marketing-service"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 flex p-2 items-center hover:text-white relative"
                  >
                    Digital Marketing Service
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <svg
                        className={`w-8 h-8 fill-current  transition-transform ${
                          isInnerDropdownOpen3 ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setInnerDropdownOpen3(!isInnerDropdownOpen3);
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12l4-4-1.41-1.41L10 9.17 7.41 6.59 6 8l4 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>

                  <div
                    className={`transition-all duration-300  ${
                      isInnerDropdownOpen3
                        ? "opacity-100 "
                        : "max-h-0 opacity-0"
                    } mobile-bor ease-in-out overflow-scroll top-full left-0 w-full bg-gray-800`}
                  >
                    <Link
                      href="/search-engine-optimization"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Seo Services
                    </Link>
                    <Link
                      href="/pay-per-click-service"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      PPC Management
                    </Link>
                    <Link
                      href="/social-media-marketing-service"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Social Media Marketing
                    </Link>
                    <Link
                      href="/local-search-engine-optimization"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Local Seo Services
                    </Link>
                    <Link
                      href="/content-marketing-service"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Content Marketing Services
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <Link
                    href="/graphic-design-services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 flex p-2 items-center hover:text-white relative"
                  >
                    Design & Branding
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <svg
                        className={`w-8 h-8 fill-current  transition-transform ${
                          isInnerDropdownOpen4 ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setInnerDropdownOpen4(!isInnerDropdownOpen4);
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12l4-4-1.41-1.41L10 9.17 7.41 6.59 6 8l4 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>

                  <div
                    className={`transition-all duration-300 ${
                      isInnerDropdownOpen4
                        ? "opacity-100 "
                        : "max-h-0 opacity-0"
                    } mobile-bor ease-in-out overflow-scroll top-full left-0 w-full bg-gray-800`}
                  >
                    <Link
                      href="/logo-design-services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Logo Design
                    </Link>
                    <Link
                      href="/corporate-stationery-design"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Corporate Identity Design
                    </Link>
                    <Link
                      href="/brochure-design-service"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Brochure Design
                    </Link>
                    <Link
                      href="/animated-services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Animated Videos
                    </Link>
                    <Link
                      href="/creative-services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2"
                    >
                      Creative Agency
                    </Link>
                  </div>
                </div>

                {/* End of Dropdown content */}
              </div>
            </li>

            <li className="relative">
              <Link
                href="trending-technology"
                onClick={toggleMobileMenu}
                className="text-gray-300 flex items-center hover:text-white relative"
              >
                Technology
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <svg
                    className={`w-8 h-8 fill-current transition-transform ${
                      isDropdownOpen9 ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleDropdownSecond(!isDropdownOpen9);
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l4-4-1.41-1.41L10 9.17 7.41 6.59 6 8l4 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>

              <div
                className={`transition-all duration-300 ${
                  isDropdownOpen9 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } rounded ease-in-out overflow-scroll`}
              >
                {/* Dropdown content */}
                <div className="relative">
                  <Link
                    href="#"
                    className="text-gray-300 flex p-2 items-center hover:text-white relative"
                  >
                    Web Technology
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <svg
                        className={`w-8 h-8 fill-current  transition-transform ${
                          isInnerDropdownOpen5 ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => {
                          e.preventDefault();
                          setInnerDropdownOpen5(!isInnerDropdownOpen5);
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12l4-4-1.41-1.41L10 9.17 7.41 6.59 6 8l4 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>

                  <div
                    className={`transition-all duration-300 ${
                      isInnerDropdownOpen5
                        ? "opacity-100 "
                        : "max-h-0 opacity-0"
                    } mobile-bor ease-in-out overflow-scroll  top-full left-0 w-full bg-gray-800`}
                  >
                    <Link
                      href="/php-laravel-codeigniter-services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      PHP-Laravel, Codeigniter
                    </Link>
                    <Link
                      href="/reactjs-vuejs-nodejs-development-services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2  "
                    >
                      React js, Vue js, Node js
                    </Link>
                    <Link
                      href="/asp-dot-net-service"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Asp .net
                    </Link>
                    <Link
                      href="/python-and-django-service"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Python-Django, flask
                    </Link>
                    <Link
                      href="/angularjs-development-service"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Angular
                    </Link>
                    <Link
                      href="/wordpress-and-shopify-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      WP, Shopify, Joomla, Magento
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <Link
                    href="/mobile-application-testing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 flex p-2 items-center hover:text-white relative"
                  >
                    Mobile Application
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <svg
                        className={`w-8 h-8 fill-current  transition-transform ${
                          isInnerDropdownOpen6 ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => {
                          e.preventDefault();
                          setInnerDropdownOpen6(!isInnerDropdownOpen6);
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12l4-4-1.41-1.41L10 9.17 7.41 6.59 6 8l4 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>

                  <div
                    className={`transition-all duration-300 ${
                      isInnerDropdownOpen6
                        ? "opacity-100 "
                        : "max-h-0 opacity-0"
                    } mobile-bor ease-in-out overflow-scroll  top-full left-0 w-full bg-gray-800`}
                  >
                    <Link
                      href="/swift-app-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Swift
                    </Link>
                    <Link
                      href="/react-native-application-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2  "
                    >
                      React native
                    </Link>
                    <Link
                      href="/flutter-application-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Flutter
                    </Link>
                    <Link
                      href="/ionic-application-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Ionic
                    </Link>
                    <Link
                      href="/java-application-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Java
                    </Link>
                    <Link
                      href="/unity-game-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      UNITY - 2D, 3D
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <Link
                    href="#"
                    className="text-gray-300 flex p-2 items-center hover:text-white relative"
                  >
                    AI / ML
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <svg
                        className={`w-8 h-8 fill-current  transition-transform ${
                          isInnerDropdownOpen7 ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => {
                          e.preventDefault();
                          setInnerDropdownOpen7(!isInnerDropdownOpen7);
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12l4-4-1.41-1.41L10 9.17 7.41 6.59 6 8l4 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>

                  <div
                    className={`transition-all duration-300 ${
                      isInnerDropdownOpen7
                        ? "opacity-100 "
                        : "max-h-0 opacity-0"
                    } mobile-bor ease-in-out overflow-scroll  top-full left-0 w-full bg-gray-800`}
                  >
                    <Link
                      href="/python-numpy-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Python-NumPy, Pandas
                    </Link>
                    <Link
                      href="/ruby-and-pybrain-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2  "
                    >
                      Ruby, Pybrain
                    </Link>
                    <Link
                      href="/java-application-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Java
                    </Link>
                    <Link
                      href="/julia-developement-service"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Julia
                    </Link>
                    <Link
                      href="/lisp-online-store-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Lisp
                    </Link>
                    <Link
                      href="/haskell-ai-and-ml-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Haskell
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <Link
                    href="#"
                    className="text-gray-300 flex p-2 items-center hover:text-white relative"
                  >
                    Blockchain
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <svg
                        className={`w-8 h-8 fill-current  transition-transform ${
                          isInnerDropdownOpen8 ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => {
                          e.preventDefault();
                          setInnerDropdownOpen8(!isInnerDropdownOpen8);
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12l4-4-1.41-1.41L10 9.17 7.41 6.59 6 8l4 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>

                  <div
                    className={`transition-all duration-300 ${
                      isInnerDropdownOpen8
                        ? "opacity-100 "
                        : "max-h-0 opacity-0"
                    } mobile-bor ease-in-out overflow-scroll  top-full left-0 w-full bg-gray-800`}
                  >
                    <Link
                      href="/c-plus-plus-blockchain-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      C++
                    </Link>
                    <Link
                      href="/java-application-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2  "
                    >
                      Java
                    </Link>
                    <Link
                      href="/customer-polls-blockchain"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Customer Polls
                    </Link>
                    <Link
                      href="/solidity-blockchain-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Solidity
                    </Link>
                    <Link
                      href="/php-laravel-codeigniter-services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      PHP
                    </Link>
                    <Link
                      href="/python-blockchain-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-300 hover:text-white block py-2 px-2   "
                    >
                      Python
                    </Link>
                  </div>
                </div>

                {/* End of Dropdown content */}
              </div>
            </li>

            <li>
              <Link
                href="blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white block"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white block"
              >
                Contact
              </Link>
            </li>
            <div className="w-full px-4">
              <button
                className="flex items-center bg-dark-200 mt-5 w-full justify-center text-white py-[15px] sm:py-[12px] px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-full text-xs sm:text-xs md:text-sm lg:text-base focus:outline-none hover:bg-gray-300 bg-gradient-to-r from-violet-600 to-indigo-600"
                onClick={handleButtonClick}
              >
                Request A Quote
              </button>
            </div>
          </ul>

          <div className="absolute bottom-5 flex justify-evenly w-full  text-white">
            <Link href="tel:+91-7056937000">
              <FaPhoneAlt className="text-2xl" />
            </Link>
            <Link href="mailto:info@futuretouch.in">
              <FaEnvelope className="text-2xl" />
            </Link>
            <Link href="skype:futuretouch">
              <FaSkype className="text-2xl" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
