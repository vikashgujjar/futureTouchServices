"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import card2 from "../Assets/gagan.webp";
import card3 from "../Assets/ravinder.webp";
import card4 from "../Assets/rahul.webp";
import card7 from "../Assets/vishal.webp";
import card6 from "../Assets/girl.webp";
import card8 from "../Assets/shivam.webp";
import card9 from "../Assets/shubham.webp";
import card10 from "../Assets/DInesh.webp";

import kajal from "../Assets/kajalmam.webp";

import Bhawna from "../Assets/bhawna.webp";
import Rohitsir from "../Assets/rohitsir.webp";
import Rotang from "../Assets/rotang.webp";

import Rishav from "../Assets/rishav.webp";
import abhihek from "../Assets/abhihek.webp";
// import  from "../Assets/rishav.webp";

// import card7 from "../Assets/vishal.webp";
import {
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import CommonBanner from "../components/CommonBanner";

import Link from "next/link";
import GetNewInsight from "../components/GetNewInsight";

const OurTeam = () => {
  const portfolioItems = [
    {
      image: "/Assets/vinod.webp",
      category: "Founder & CEO",
      title: "Vinod Tanwar",
    },

    {
      image: "/Assets/pooja.webp",
      category: "Founder & CEO",
      title: "Pooja",
    },

    {
      image: "/Assets/rotang.webp",
      category: "BDM (Chandigarh)",
      title: "Rohtash Tanwar",
    },

    {
      image: "/Assets/DInesh.webp",
      category: "BDM (Bangalore)",
      title: "Dinesh",
    },

    {
      image: "/Assets/bhawna.webp",
      category: "BDM (Chandigarh)",
      title: "Bhawna Bakshki",
    },
    {
      image: "./Rajan.webp",
      category: "BDM (Texas - USA)",
      title: "Rajan Sharma",
    },

    {
      image: "/Assets/kajalmam.webp",
      category: "HR",
      title: "Kajal ",
    },

    // {
    //   image: card2,
    //   category: "Website Designer",
    //   title: "Gagan Kumar",
    // },
    {
      image: "/Assets/rohitsir.webp",
      category: "Website Designer",
      title: "Rohit walia",
    },
    {
      image: "/Assets/ravinder.webp",
      category: ".Net Developer",
      title: "Ravinder Godara",
    },
    // {
    //   image: card4,
    //   category: "Web Developer",
    //   title: "Rahul Rana",
    // },
    {
      image: "/Assets/vishal.webp",
      category: "Web Developer",

      title: "Vishal Thakur",
    },
    {
      image: "/Assets/shivam.webp",
      category: "React Developer",

      title: "Shivam Lugwal",
    },
    {
      image: "/Assets/shubham.webp",
      category: "React Developer",

      title: "Shubham",
    },

    // {
    //   image: Rishav,
    //   category: "Graphic Designer",
    //   title: "Rishav",
    // },

    // {
    //   image: abhihek,
    //   category: "MERN Stack  Developer",
    //   title: "Abhishek",
    // },

    {
      image: "/vivek.webp",
      category: "Full Stack Developer",
      title: "Vivek Pundir",
    },

    {
      image: "/Assets/Dixit.webp",
      category: "Full Stack developer",
      title: "Dixit Tiwari",
    },
    {
      image: "/Assets/Chirag.webp",
      category: "Digital Marketing",
      title: "Chirag Tiwari",
    },

    // Add more portfolio items as needed
  ];
  // https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.webp
  return (
    <>
      <CommonBanner title="Our Leaders" breadcrumb="Our Leaders" />

      <div className=" mt-10 px-5 md:px-12 xl:px-28 text-center">
        <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-8 font-bold">
          <span
            className=" text-4xl mb-8 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            We Are Awesome <br />
          </span>
          Our Team
          <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text ml-2">
            Members
          </span>
        </h3>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  pb-12 max-sm:px-5 xl:px-8 xl:grid-cols-4 gap-14 ">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="our-team wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="team-image overflow-hidden border-0">
                <Image
                  className="zoom-image"
                  src={item.image}
                  width={400}
                  height={400}
                  alt={item.title}
                />
              </div>

              <div className="px-6 py-4 team-content flex justify-between items-center">
                <div className="">
                  <div className="font-bold text-xl mb-2 text-left">
                    {item.title}
                  </div>
                  <p className="text-left text-base">
                    <Link href={"#"} className="font-semibold ">
                      {item.category}
                    </Link>
                  </p>
                </div>
                <div className="relative group">
                  <div className="media-btn p-2 w-10 h-10 my-2 bg-indigo-700 hover:bg-teal-400 text-white rounded">
                    <FaPlus className="icon-plus text-2xl" />
                  </div>
                  <ul className="social-icons list-inline  absolute bottom-0 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <li className="social-facebook p-2 w-10 h-10 my-2  bg-gradient-to-r from-teal-400 to-indigo-700 text-white rounded ">
                      <a
                        href="https://www.facebook.com/"
                        tabIndex="0"
                        target="blank"
                        className="text-white text-2xl"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li className="social-facebook p-2 w-10 h-10 my-2  bg-gradient-to-r from-teal-400 to-indigo-700 text-white rounded ">
                      <a
                        href="https://twitter.com/"
                        tabIndex="0"
                        target="blank"
                        className="text-white text-2xl"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li className="social-facebook p-2 w-10 h-10 my-2  bg-gradient-to-r from-teal-400 to-indigo-700 text-white rounded ">
                      <a
                        href="https://in.pinterest.com/"
                        tabIndex="0"
                        target="blank"
                        className="text-white text-2xl"
                      >
                        <FaPinterest />
                      </a>
                    </li>
                    <li className="social-facebook p-2 w-10 h-10 my-2  bg-gradient-to-r from-teal-400 to-indigo-700 text-white rounded ">
                      <a
                        href="https://www.instagram.com/"
                        tabIndex="0"
                        target="blank"
                        className="text-white text-2xl"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GetNewInsight />
    </>
  );
};

export default OurTeam;
