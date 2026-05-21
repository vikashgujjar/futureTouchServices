"use client";

import Image from "next/image";

import trendtech from "../Assets/trendtech.webp";
import MutipleServices from "../components/MutipleServices";
import Location from "../components/Location";
import svg from "../Assets/ux.svg";
import apple from "../Assets/apple.svg";
import tablet from "../Assets/tablet.svg";
import android from "../Assets/android.svg";
import php from "../Assets/php.svg";
import java from "../Assets/java.svg";
import wordpress from "../Assets/wordpress.svg";
import reactjs from "../Assets/reactjs.webp";
import nodejs from "../Assets/nodejs.webp";
import angular from "../Assets/angular.webp";
import Link from "next/link";
// import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import Counter from "../components/Counter";
import ChooseFuture from "../components/ChooseFuture";
const TrendingTechnology = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] h-80 max-sm:h-auto max-lg:h-auto">
        <div className="">
          <div className="px-28  max-sm:px-5 max-lg:px-10 pt-14 max-sm:py-7 max-lg:py-5">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl max-lg:text-xl">
              Website & Application Trending Technologies
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                Standards in web development sometimes change faster than they
                can be implemented. To stay one step ahead, it is important to
                focus on trends, techniques, and approaches that are gaining
                popularity. We have analyzed tendencies across industries to
                create this ultimate list of web development trends in 2021. As
                a bonus, you’ll read about the top web technology stacks worth
                your attention in the coming year. No matter what your current
                interests are — marketplace development, startup innovations, —
                you should be aware of these trends.{" "}
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 justify-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2.5 px-7 font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-300/40 hover:-translate-y-0.5"
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
      <Counter />

      <div className="bg-gradient-to-b from-[#fff6f3] to-[#fffefb] py-20 px-5 md:px-12 xl:px-28">
        <div className="grid grid-cols-1 md:grid-cols-12 ">
          <div className="p-4 md:col-span-4">
            <Image
              src={trendtech}
              className="w-96 h-80 rounded-lg mx-auto"
              alt="Trending technology illustration"
              width={384}
              height={320}
            />
          </div>

          <div className="common-heading md:col-span-8">
            <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-[#050748] font-bold mt-4 px-0 max-sm:px-5 max-md:px-5">
              Top Trending Technologies Solutions
            </h3>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10 max-sm:px-5 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              As the web development technologies mature and the versatility of
              online space rapidly grows, the way of building a feature-rich
              application gets considerably more complicated. Nowadays it’s not
              that easy to satisfy customers with a basic online presence as
              everyone wants to see your business updated as per the latest
              technology trends. However, the burden can be reduced largely if
              you work with web developers on the latest web development
              technologies and frameworks like blockchain development, virtual
              reality, chatbot development, etc.{" "}
            </p>
            <p className="text-xl text-[#6a6a8e] text-justify pt-3 pr-10 max-sm:px-5 max-md:px-0 pl-0 max-sm:pl-5 max-md:pl-10 ">
              We provide custom mobile app development services. This includes
              expert business analysis, design and development of your mobile
              application from idea to launch, integrating the new product into
              your infrastructure and providing further optimization and
              scale-up on demand.
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-4xl max-sm:text-3xl max-md:text-3xl text-center py-10 text-[#050748] font-bold mt-4 px-0 max-sm:px-5 max-md:px-5">
        Top Trending Technologies Solutions
      </h3>
      <div className="flex flex-wrap justify-between px-5 sm:px-5 md:px-10 lg:px-20  gap-4 mb-20 service-bg ">
        <div className="w-cards rounded overflow-hidden bg-white py-4 shadow-lg">
          <div className="px-6 py-4">
            <h4 className="font-bold text-xl mb-2">App Development</h4>
            <ul className="text-sm font-semibold text-[#6a6a8e] flex my-3 uppercase">
              <li className="border-r-2 border-gray-300 pr-4 ">
                <Link href="/IOS">iphone</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-2">
                <Link href="/android-application-development">android</Link>
              </li>
              <li className="border-r-2 border-gray-300 px-2">
                <Link
                  href="/hybrid-application-development"
                  className="text-nowrap"
                >
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
                      alt="Android logo"
                      width={64}
                      height={64}
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={apple}
                      alt="Apple logo"
                      width={64}
                      height={64}
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-4">
                  <Link href="#">
                    <Image
                      className=""
                      src={tablet}
                      alt="Tablet device"
                      width={64}
                      height={64}
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
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="w-cards rounded overflow-hidden bg-white shadow-lg py-4">
          <div className="px-6 py-4">
            <h4 className="font-bold text-xl mb-2">Web Development</h4>
            <ul className="text-sm font-semibold text-[#6a6a8e] flex my-3 uppercase">
              <li className="border-r-2 border-gray-300 pr-4 ">
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
                      alt="UX design logo"
                      width={64}
                      height={64}
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={php}
                      alt="PHP logo"
                      width={64}
                      height={64}
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={java}
                      alt="Java logo"
                      width={64}
                      height={64}
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={wordpress}
                      alt="WordPress logo"
                      width={64}
                      height={64}
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
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More <i className="fas fa fa-arrow-circle-right ml-1"></i>
            </Link>
          </div>
        </div>

        <div className="w-cards rounded overflow-hidden bg-white py-4 shadow-lg">
          <div className="px-6 py-4">
            <h4 className="font-bold text-xl mb-2">Trending Technologies</h4>
            <ul className="text-sm font-semibold text-[#6a6a8e] flex my-3 uppercase">
              <li className="border-r-2 border-gray-300 pr-2">
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
                      alt="ReactJS logo"
                      width={64}
                      height={64}
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-3">
                  <Link href="#">
                    <Image
                      className=""
                      src={nodejs}
                      alt="NodeJS logo"
                      width={64}
                      height={64}
                    />
                  </Link>
                </li>
                <li className="w-16 h-16 rounded-full bg-[#f5f7ff] p-4">
                  <Link href="#">
                    <Image
                      className=""
                      src={angular}
                      alt="Angular logo"
                      width={64}
                      height={64}
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
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More <i className="fas fa fa-arrow-circle-right ml-1"></i>
            </Link>
          </div>
        </div>
      </div>
      <ChooseFuture />
      <MutipleServices />
      <Testimonial />
      <Location />
    </>
  );
};

export default TrendingTechnology;
