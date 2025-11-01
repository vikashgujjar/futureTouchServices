"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

// ✅ Import your images from public folder

import blog1 from "../Assets/blog-dg-1.webp";
import blog2 from "../Assets/blog-dg-2.webp";
import blog3 from "../Assets/blog-dg-3.webp";

import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
  FaTag,
  FaTwitter,
} from "react-icons/fa";
import CommonBanner from "../components/CommonBanner";

const Blog = () => {
  const blogData = [
    {
      title: "Everything You Need To Know About Nodejs!",
      category: "Nodejs",
      date: "Sep 23, 2020",
      content:
        "Node.js is a fast, scalable runtime for server-side JavaScript, ideal for real-time applications, built on Chrome's V8 engine.",
      image: blog1,
      bgColor: "dg-bg2",
      slug: "/blog/everything-you-need-to-know-about-nodejs",
    },
    {
      title: "Exploring the Key Features of Laravel 7 Framework",
      category: "Laravel",
      date: "Sep 24, 2020",
      content:
        "Laravel 7 offers elegant syntax, robust routing, authentication, scheduling, real-time broadcasting, and seamless integration.",
      image: blog2,
      bgColor: "bg-gradient12",
      slug: "/blog/exploring-the-key-features-of-laravel-7-framework",
    },
    {
      title: "Best Technology for Mobile Application Development",
      category: "Mobile Application",
      date: "Sep 25, 2020",
      content:
        "React Native, Flutter, Swift, Kotlin, Xamarin, and Ionic excel in mobile app development with unique benefits.",
      image: blog3,
      slug: "/blog/best-technology-for-mobile-application-development",
      bgColor: "dg-bg2",
    },
  ];

  return (
    <>
      <CommonBanner title="Our Blogs" breadcrumb="Blogs" />

      {/* ✅ Blog List */}
      <div className="py-20 px-5 md:px-12 xl:px-28">
        <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <div key={index} className="blog-item rounded-lg shadow-lg">
              <Link href={blog.slug}>
                <Image
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={blog.image}
                  width={400}
                  height={400}
                  alt={blog.title + " blog image"}
                />
              </Link>

              <div className="p-8">
                <div
                  className={`flex justify-between items-center ${blog.bgColor} -top-14 relative text-white py-3 rounded-3xl px-3`}
                >
                  <p className="text-sm flex items-center gap-2">
                    <FaTag />
                    {blog.category}
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <FaClock /> {blog.date}
                  </p>
                </div>
                <Link href={blog.slug}>
                  <h2 className="text-xl font-bold -mt-8 mb-3">{blog.title}</h2>
                </Link>
                <p className="text-gray-800 border-b-2 pb-5">{blog.content}</p>
                <div className="flex mt-5 text-[#6a6a8e] items-center gap-3">
                  <span className="text-lg">Shares</span>
                  <Link href="#">
                    <FaFacebook />
                  </Link>
                  <Link href="#">
                    <FaTwitter />
                  </Link>
                  <Link href="#">
                    <FaLinkedin />
                  </Link>
                  <Link href="#">
                    <FaEnvelope />
                  </Link>
                  <Link href="#">
                    <FaFacebookMessenger />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
