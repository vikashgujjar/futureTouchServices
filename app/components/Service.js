"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Service() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDescriptionClick = (idx) => {
    if (!isMobile) return;
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const servicesData = [
    {
      icon: "/Assets/data.webp",
      title: "Web Development",
      linkhead: "",
      number: "01",
      description:
        "Your business can get a reliable facelift for long-term branding solutions across all verticals including e-commerce solutions and open source content management exclusively at Future IT Touch Pvt. Ltd.",

      headinglink: "/website-design",
      courseone: "PHP",
      cousefive: "Node Js",
      cousesix: "Laravel",
      couseseven: "React js",
      coursetwo: ".Net",
      coursethree: "Java",

      linksix: "/php-laravel-codeigniter-services",
      hoverImage: "/Assets/hero-about-1.webp",
      linktwo: "/php-laravel-codeigniter-services",
      linkthree: "/asp-dot-net-service",
      linkfour: "/reactjs-vuejs-nodejs-development-services",

      linksix: "/java-application-development",
      linkfive: "/wordpress-and-shopify-development",
    },
    {
      icon: "/Assets/shopping-cart.webp",
      title: "Ecommerce Development",
      headinglink: "/ecommerce-website-development",
      number: "02",
      description:
        "IT is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout Future IT Touch Pvt. Ltd., we deliver cutting edge technology solutions for online commerce industry. Our ecommerce solutions are built on latest technology.",

      heading: "Ecommerce Development",
      courseone: "Magento",
      coursetwo: "WP",
      coursethree: "Shopify",
      linksix: "/wordpress-and-shopify-development",
      coursefour: "Laravel",
      linktwo: "/wordpress-and-shopify-development",
      linkthree: "/wordpress-and-shopify-development",
      linkfour: "/wordpress-and-shopify-development",
      linkfive: "/php-laravel-codeigniter-services",
    },
    {
      icon: "/Assets/app-development.webp",
      title: "Mobile App Development",
      headinglink: "/application-developement",
      number: "03",
      description:
        "Transform and mobilize your business anytime, anywhere with custom mobile app development services from Future IT Touch Pvt. Ltd. India.",

      heading: "Mobile App Development",
      courseone: "Iphone",
      coursetwo: "Android",
      coursethree: "Cross Platform",
      linksix: "/hybrid-application-development",
      linktwo: "/ios-application-development",
      linkthree: "/android-application-development",
      linkfour: "/hybrid-application-development",
    },
    {
      icon: "/Assets/future.webp",

      title: "Trending Technologies",
      headinglink: "/application-developement",
      number: "03",
      description:
        "Future IT Touch Pvt. Ltd. India, we create winning business models through innovative product development practices. Committed to delivering the right value.",

      heading: "Mobile App Development",
      courseone: "react.js",
      coursetwo: "Node.js",
      coursethree: "angular.js",
      linksix: "/reactjs-vuejs-nodejs-development-services",
      linktwo: "/reactjs-vuejs-nodejs-development-services",
      linkthree: "/reactjs-vuejs-nodejs-development-services",
      linkfour: "/reactjs-vuejs-nodejs-development-services",
    },
    {
      icon: "/Assets/marketing.webp",
      title: "Digital Marketing",
      headinglink: "/digital-marketing-service",

      number: "03",
      description:
        "Digital marketing is the best way to reach your audiences and create relationships with your client. We provide all types of digital marketing tools like PPC, SMO, SEO, SMM for example Google Ads and Facebook Ads.",

      heading: "Mobile App Development",
      courseone: "seo",
      coursetwo: "cms",
      coursethree: "ppc",
      coursefour: "smm",
      linktwo: "/search-engine-optimization",
      linkthree: "/cms-development",
      linksix: "/pay-per-click-service",
      linkfive: "/social-media-marketing-service",
    },
  ];

  return (
    <div>
      <div className="m-0 sm:m-0 md:m-5 lg:m-10">
        <div className="relative">
          <div className="w-full sm:w-full md:w-full  lg:w-1/2 pl-5 pt-0 sm:pt-0 md:pt-2 lg:pt-5 sm:pl-5 md:pl-6 lg:pl-12 xl:pl-28 ">
            <span
              className=" text-4xl mb-8 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
              style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
            >
              Our Services
            </span>
            <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-8 font-bold">
              We Empower Clients <br /> To{" "}
              <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text">
                Be Loved
              </span>
            </h3>
          </div>
        </div>
        <ul className="divide-y px-2 sm:px-2 md:px-12 xl:px-28 custom-divide-gray">
          {servicesData.map((service, index) => (
            <li
              key={index}
              className="services-list-item grid max-sm:block grid-cols-2 py-8 relative hover:overflow-visible"
            >
              <div className="flex max-sm:block max-md:block max-lg:block card-data">
                <Image
                  className="w-16 h-16 mr-14"
                  src={service.icon}
                  width={400}
                  height={400}
                  alt={service.title + " icon"}
                  width={64}
                  height={64}
                />
                <h3 className="font-semibold ">
                  <Link
                    className="text-2xl sm:text-2xl md:text-2xl lg:text3xl bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text"
                    href={service.headinglink}
                  >
                    {service.title}
                  </Link>
                  <ul className="service-list flex mt-4 mb-3 uppercase">
                    <li className="border-r-2 text-nowrap border-gray-300 px-2">
                      <Link href={service.linktwo}>{service.courseone}</Link>
                    </li>
                    <li className="border-r-2 text-nowrap border-gray-300 px-2">
                      <Link href={service.linkthree}>{service.coursetwo}</Link>
                    </li>

                    {service.cousesix ? (
                      <>
                        <li className="border-r-2 text-nowrap border-gray-300 px-2">
                          <Link href={service.linkthree}>
                            {service.cousesix}
                          </Link>
                        </li>
                      </>
                    ) : (
                      ""
                    )}

                    {service.cousefive ? (
                      <>
                        <li className="border-r-2 text-nowrap border-gray-300 px-2">
                          <Link href={service.linkfour}>
                            {service.cousefive}
                          </Link>
                        </li>
                      </>
                    ) : (
                      ""
                    )}

                    <li className="border-r-2 text-nowrap border-gray-300 px-2">
                      <Link href={service.linksix}>{service.coursethree}</Link>
                    </li>
                    {service.coursefour && service.linkfive && (
                      <li className="pl-2">
                        <Link href={service.linkfive}>
                          {service.coursefour}
                        </Link>
                      </li>
                    )}
                  </ul>
                </h3>
              </div>
              <div className="flex gap-2 w-full sm:w-full md:w-full lg:w-10/12">
                <p
                  className={`text-gray-600 text-lg mb-8 font-small text-justify ${
                    isMobile
                      ? expandedIndex === index
                        ? ""
                        : "line-clamp-2"
                      : "line-clamp-2 hover:line-clamp-none"
                  }`}
                  style={{ cursor: isMobile ? "pointer" : "default" }}
                  onClick={() => handleDescriptionClick(index)}
                >
                  {service.description}
                </p>
                <FaArrowRight className="absolute w-10 h-10 top-10 sm:top:10 max-lg:hidden md:top-12 lg:top:14 right-7" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
