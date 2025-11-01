"use client";

import React, { useEffect, useState } from "react";

import breadcrumb7 from "../../Assets/breadcrumb-shape-7.webp";
import breadcrumb1 from "../../Assets/breadcrumb-shape-1.webp";
import breadcrumb2 from "../../Assets/breadcrumb-shape-2.webp";
import breadcrumb6 from "../../Assets/breadcrumb-shape-6.webp";
import breadcrumb5 from "../../Assets/breadcrumb-shape-5.webp";
import card1 from "../../Assets/vinod.webp";
import card2 from "../../Assets/gagan.webp";
import card3 from "../../Assets/ravinder.webp";
import card4 from "../../Assets/rahul.webp";
import card5 from "../../Assets/vishal.webp";
import card6 from "../../Assets/portfolio-img-6.webp";
import { IoIosPerson } from "react-icons/io";
import BlogImg from "../../Assets/blog-post-1.webp";
import { IoTime } from "react-icons/io5";

import imgblog1 from "../../Assets/blog-small.webp";
import imgblog2 from "../../Assets/blog-small2.webp";

import blog1 from "../../Assets/blog-dg-1.webp";
import blog2 from "../../Assets/blog-dg-2.webp";
import blog3 from "../../Assets/blog-dg-3.webp";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Link from "next/link";
import CommonBanner from "@/app/components/CommonBanner";
export default function BlogView({ slug }) {
  // const { slug } = useParams();

  const [searchQuery, setSearchQuery] = useState("");

  const BlogContent = [
    {
      id: 0,
      blogImg: blog1,
      title: "Everything You Need To Know About Nodejs!",
      slug: "everything-you-need-to-know-about-nodejs",
      para: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. It was designed to build scalable network applications.",
      username: "Manshu",
      date_blog_post: "Sep 24, 2019",
      para1:
        "Node.js allows developers to use JavaScript to write server-side code, making it easier to create real-time web applications and APIs. Its non-blocking, event-driven architecture makes it efficient and suitable for data-intensive applications.",
      para2:
        "One of the key features of Node.js is its package manager, npm, which is the largest software registry. It allows developers to share and reuse code, making development faster and more efficient.",
      para3:
        "Node.js has a large and active community, with a vast ecosystem of libraries and frameworks, such as Express.js, that simplify development. Its versatility and performance have made it a popular choice for modern web development.",
    },
    {
      id: 1,
      blogImg: blog2,
      title: "Exploring the Key Features of Laravel 7 Framework",
      slug: "exploring-the-key-features-of-laravel-7-framework",
      para: "Laravel 7 is a major release of the popular PHP framework, introducing a range of new features and improvements that make it easier for developers to build robust web applications.",
      username: "Manshu",
      date_blog_post: "Sep 24, 2019",
      para1:
        "One of the standout features of Laravel 7 is the improved routing speed, which significantly enhances the performance of your applications. The introduction of a new matching algorithm makes the routing process faster and more efficient.",
      para2:
        "Laravel 7 also brings Blade component tags, which simplify the process of creating reusable components. This feature allows developers to write cleaner and more maintainable code by encapsulating HTML markup in Blade templates.",
      para3:
        "Another key feature is Laravel Airlock (now known as Sanctum), a lightweight authentication system for SPAs (Single Page Applications), mobile applications, and simple token-based APIs. It provides a simple and secure way to manage API tokens for your users.",
    },
    {
      id: 2,
      blogImg: blog3,
      title: "Best Technology for Mobile Application Development",
      slug: "best-technology-for-mobile-application-development",
      para: "Choosing the right technology stack is crucial for successful mobile application development. Here's a look at some of the best technologies currently used:",
      username: "Manshu",
      date_blog_post: "Sep 24, 2019",
      para1:
        "Native apps are built using platform-specific languages like Swift (iOS) and Java/Kotlin (Android). They offer superior performance and access to device-specific features.",
      para2:
        "Developed by Facebook, React Native allows you to build mobile apps using JavaScript and React. It offers cross-platform compatibility and a rich ecosystem of libraries.",
      para3:
        "Flutter, created by Google, is another popular choice for cross-platform mobile app development. It uses the Dart programming language and provides a fast development cycle with native-like performance.",
    },
  ];

  const [filteredBlogContent, setFilteredBlogContent] = useState(BlogContent);
  const posts = [
    {
      id: 1,
      title: "Everything You Need To Know About Nodejs!",
      imgSrc: blog1,
      date_blog_post: "Sep 24, 2019",
      link: "#",
      slug: "everything-you-need-to-know-about-nodejs",
    },
    {
      id: 2,
      title: "Exploring the Key Features of Laravel 7 Framework",
      imgSrc: blog2,
      date_blog_post: "Sep 24, 2019",
      link: "#",
      slug: "exploring-the-key-features-of-laravel-7-framework",
    },
    {
      id: 3,
      title: "Best Technology for Mobile Application Development",
      imgSrc: blog3,
      date_blog_post: "Sep 24, 2019",
      link: "#",
      slug: "best-technology-for-mobile-application-development",
    },
  ];

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    { id: 1, name: "Technology", num: 2 },
    { id: 2, name: "Health", num: 3 },
    { id: 3, name: "Lifestyle", num: 4 },
    { id: 4, name: "Buisness", num: 3 },
    { id: 5, name: "Web Design", num: 5 },
  ];

  const blogPost = BlogContent.find((post) => post.slug === slug);

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredPosts = BlogContent.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.para.toLowerCase().includes(query)
    );

    setFilteredBlogContent(filteredPosts);

    console.log(filteredBlogContent);
  };

  return (
    <>
      <CommonBanner title="Our Blogs" breadcrumb="Our Blogs" />

      <div className="w-full grid-for-blog justify-items-center px-5 md:px-12 xl:px-28 my-4">
        <div className="block lg:hidden w-full">
          <div className="w-full px-2 relative">
            <div className="sticky top-0 py-4 bg-white">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaSearch className="text-gray-400" />
                </span>
              </div>
            </div>

            <div className="w-full p-0 lg:p-4 overflow-y-auto h-screen">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full sm:w-[90%] lg:w-[80%] rounded-md shadow-sm my-2">
                  <div className="img-box">
                    <Image
                      className="rounded-md drop-shadow-md w-full"
                      src={blogPost.blogImg}
                      alt="Blog"
                      width={600}
                      height={300}
                    />
                  </div>
                  <div className="icon-div flex mt-2 ">
                    <div className="flex items-center">
                      <IoIosPerson className="text-lg text-[#6a6a8e]" />
                      <span className="ml-2 text-md text-[#6a6a8e]">
                        {blogPost.username}
                      </span>
                    </div>
                    <div className="flex items-center ml-2">
                      <IoTime className="text-lg text-[#6a6a8e]" />
                      <span className="ml-2 text-md text-[#6a6a8e]">
                        {blogPost.date_blog_post}
                      </span>
                    </div>
                  </div>
                  <div className="content-box ">
                    <h1 className="text-xl font-bold py-2 text-[#050748]">
                      {blogPost.title}
                    </h1>
                    <p className="text-[#6a6a8e] my-1 text-sm">
                      {blogPost.para}
                    </p>
                  </div>

                  <div className="description  text-[#6a6a8e] my-2 text-sm  ">
                    <p className="my-2">{blogPost.para1}</p>

                    <p className="my-2">{blogPost.para2}</p>

                    <p className="my-2">{blogPost.para3}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Recent Posts</h2>
                {filteredBlogContent.length > 0 ? (
                  <ul>
                    {filteredBlogContent.map((post) => (
                      <li key={post.id} className="mb-4">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-start space-x-4"
                        >
                          <Image
                            src={post.blogImg}
                            alt={post.title}
                            width={128}
                            height={80}
                            className="w-32 h-20"
                          />
                          <div>
                            <h3 className="text-md text-[#050748] font-semibold">
                              {post.title}
                            </h3>
                            <span className="text-[#3a3b55] font-semibold">
                              {post.date_blog_post}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No posts found.</p>
                )}
              </div>
            </div>

            <div className="py-4">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Blog Categories</h2>
                <ul className="my-2">
                  {categories.map((category) => (
                    <li key={category.id} className="mb-4">
                      <a className="flex items-start space-x-4 border-b-2 border-grey-200">
                        <div className="flex w-full justify-between pb-2">
                          <h3 className="text-lg text-[#757589] font-semibold">
                            {category.name}
                          </h3>
                          <span className="text-lg text-[#757589] font-semibold">
                            ({category.num})
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-full px-2 relative">
          <div className="sticky top-0 py-4 bg-white ">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="text-gray-400" />
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Recent Posts</h2>
              <ul>
                {filteredBlogContent.length > 0 ? (
                  <ul>
                    {filteredBlogContent.map((post) => (
                      <li key={post.id} className="mb-4">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-start space-x-4"
                        >
                          <Image
                            src={post.blogImg}
                            alt={post.title}
                            width={128}
                            height={80}
                            className="w-32 h-20"
                          />
                          <div>
                            <h3 className="text-md text-[#050748] font-semibold">
                              {post.title}
                            </h3>
                            <span className="text-[#3a3b55] font-semibold">
                              {post.date_blog_post}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No posts found.</p>
                )}
              </ul>
            </div>
          </div>

          <div className="py-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Blog Categories</h2>
              <ul className="my-2">
                {categories.map((category) => (
                  <li key={category.id} className="mb-4">
                    <a className="flex items-start space-x-4 border-b-2 border-grey-200">
                      <div className="flex w-full justify-between pb-2">
                        <h3 className="text-lg text-[#757589] font-semibold">
                          {category.name}
                        </h3>
                        <span className="text-lg text-[#757589] font-semibold">
                          ({category.num})
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-full p-4 overflow-y-auto h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full sm:w-[90%] lg:w-[80%] rounded-md shadow-sm my-2">
              <div className="img-box">
                <Image
                  className="rounded-md drop-shadow-md w-full"
                  src={blogPost.blogImg}
                  alt="Blog"
                  width={600}
                  height={300}
                />
              </div>
              <div className="icon-div flex mt-2 px-2">
                <div className="flex items-center">
                  <IoIosPerson className="text-lg text-[#6a6a8e]" />
                  <span className="ml-2 text-md text-[#6a6a8e]">
                    {blogPost.username}
                  </span>
                </div>
                <div className="flex items-center ml-2">
                  <IoTime className="text-lg text-[#6a6a8e]" />
                  <span className="ml-2 text-md text-[#6a6a8e]">
                    {blogPost.date_blog_post}
                  </span>
                </div>
              </div>
              <div className="content-box px-2">
                <h1 className="text-xl font-bold py-2 text-[#050748]">
                  {blogPost.title}
                </h1>
                <p className="text-[#6a6a8e] my-1 text-lg">{blogPost.para}</p>
                <hr />
              </div>

              <div className="description px-2 text-[#6a6a8e] my-2 text-lg ">
                <p className="my-2">{blogPost.para1}</p>

                <p className="my-2">{blogPost.para2}</p>
                <p className="my-2">{blogPost.para3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
