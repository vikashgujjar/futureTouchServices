"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaSkype,
  FaInstagram,
  FaPhoneAlt,
  FaCaretDown,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
// import "./Navbar.css";

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const toggleVisibility = () => setIsOpen(!isOpen);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <header className="w-full  py-2 px-5 md:p-2 lg:px-5 bg-gradient-to-r from-teal-400 to-indigo-700 text-white grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-2">
      <div className="hidden lg:block">
        <div className="header-top-call flex sm:justify-start justify-around lg:justify-start font-bold sm:text-sm">
          <div className="hidden lg:block">
            <p className="flex items-center text-lg max-sm:text-base pr-2">
              <FaEnvelope className="mr-3" />
              <span>info@futuretouch.in</span>
            </p>
          </div>
          <p className="hidden lg:block">|</p>
          <a
            href="skype:live:.cid.313b26920df66baf"
            className="flex text-lg max-sm:text-base items-center ml-3"
          >
            <FaSkype className="mr-2 hidden lg:block" />
            <span className="hidden lg:block">futuretouch</span>
          </a>
        </div>
      </div>

      <div className="header-med-email w-full flex items-center flex-row-reverse justify-between md:px-5 lg:px-0 lg:justify-end gap-5 text-end lg:flex-row">
        <div className="relative">
          <button
            onMouseEnter={handleMouseEnter}
            onClick={toggleVisibility}
            className="flex items-center focus:outline-none"
          >
            <FaPhoneAlt className="h-4 w-5" />
            <FaCaretDown className="h-5 ml-1" />
            <span className="ml-2 font-bold">Support</span>
          </button>

          {isOpen && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute left-[-159%] lg:left-0 lg:right-0 mt-2 w-72 py-3 text-start bg-white rounded-md shadow-lg index-main"
            >
              <div className="block px-4 pb-2 text-xl text-gray-700 rounded-md font-bold">
                Future IT Touch Contacts
              </div>

              <div className="block px-4 py-2 text-sm text-gray-700 bg-[#e4e8ff]">
                <h5 className="block pb-2 text-base text-[#5f637d] font-bold">
                  FOR HR DEPARTMENT
                </h5>
                <a
                  href="tel:+91-7056937000"
                  className="block text-gray-700 font-bold text-base"
                >
                  <li className="flex items-center gap-3">
                    <Image
                      src="/Assets/country.webp"
                      width={32}
                      height={32}
                      alt="country"
                      className="object-cover"
                    />
                    +91-7056937000
                  </li>
                </a>
              </div>

              <h5 className="block px-4 py-2 text-base text-[#5f637d] font-bold">
                FOR SALES DEPARTMENT
              </h5>
              <ul>
                <a
                  href="tel:+91-7056997000"
                  className="block px-4 py-2 text-gray-700 font-bold text-base"
                >
                  <li className="flex items-center gap-3">
                    <Image
                      src="/Assets/country.webp"
                      width={32}
                      height={32}
                      alt="country"
                      className="object-cover"
                    />
                    +91-7056997000
                  </li>
                </a>
                <a
                  href="tel:+91-7056937000"
                  className="block px-4 py-2 text-gray-700 font-bold text-base"
                >
                  <li className="flex items-center gap-3">
                    <Image
                      src="/Assets/flag.webp"
                      width={28}
                      height={20}
                      alt="flag"
                      className="object-cover pl-1"
                    />
                    +91-7056937000
                  </li>
                </a>
                <a
                  href="skype:live:.cid.313b26920df66baf"
                  className="block px-6 py-2 text-gray-700 font-bold text-base"
                >
                  <li className="flex items-center gap-3">
                    <FaSkype className="text-xl" />
                    Futuretouch
                  </li>
                </a>
                <a
                  href="mailto:info@futuretouch.in"
                  className="block px-6 py-2 text-gray-700 font-bold text-base"
                >
                  <li className="flex items-center gap-3">
                    <FaEnvelope className="text-xl" />
                    info@futuretouch.in
                  </li>
                </a>
              </ul>
            </div>
          )}
        </div>

        <p className="hidden lg:block">|</p>
        <Link
          href="https://crm.futuretouch.in/authentication/login"
          className="hidden lg:block"
        >
          Login
        </Link>
        <p className="hidden lg:block">|</p>

        <div className="flex gap-2 lg:gap-3">
          <Link href="https://www.facebook.com/Futureittouch" target="_blank">
            <FaFacebookF className="h-6 w-6 rounded-full bg-white text-[#4243c9] p-1" />
          </Link>
          <Link href="https://x.com/futureittouch" target="_blank">
            <FaTwitter className="w-6 h-6 rounded-full bg-white text-[#4243c9] p-1" />
          </Link>
          <Link
            href="https://in.linkedin.com/company/future-it-touch"
            target="_blank"
          >
            <FaLinkedinIn className="w-6 h-6 rounded-full bg-white text-[#4243c9] p-1" />
          </Link>
          <Link
            href="https://www.instagram.com/future_it_touch/"
            target="_blank"
          >
            <FaInstagram className="w-6 h-6 rounded-full bg-white text-[#4243c9] p-1" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCirWettrTWfsFRzdGRIc6BQ/about"
            target="_blank"
          >
            <FaYoutube className="w-6 h-6 rounded-full bg-white text-[#4243c9] p-1" />
          </Link>
          <Link
            href="https://github.com/Future-IT-Touch-Private-Limited"
            target="_blank"
          >
            <FaGithub className="w-6 h-6 rounded-full bg-white text-[#4243c9] p-1" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
