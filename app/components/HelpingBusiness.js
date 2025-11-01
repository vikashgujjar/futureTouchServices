import React from "react";

import Image from "next/image";

export default function IndustriesSection() {
  const cardsData = [
    {
      id: 1,
      src: "/Assets/icon-1.webp",
      alt: "Industries",
      text: "Social Networking",
      bgColor: "bg-blue-200",
    },
    {
      id: 2,
      src: "/Assets/icon-2.webp",
      alt: "Industries",
      text: "Digital Marketing",
      bgColor: "bg-green-200",
    },
    {
      id: 3,
      src: "/Assets/icon-3.webp",
      alt: "Industries",
      text: "Ecommerce Development",
      bgColor: "bg-purple-200",
    },
    {
      id: 4,
      src: "/Assets/icon-4.webp",
      alt: "Industries",
      text: "Video Service",
      bgColor: "bg-yellow-200",
    },
    {
      id: 5,
      src: "/Assets/icon-5.webp",
      alt: "Industries",
      text: "Banking Service",
      bgColor: "bg-red-200",
    },
    {
      id: 6,
      src: "/Assets/icon-6.webp",
      alt: "Industries",
      text: "Enterprise Service",
      bgColor: "bg-pink-200",
    },
    {
      id: 7,
      src: "/Assets/icon-7.webp",
      alt: "Industries",
      text: "Education Service",
      bgColor: "bg-indigo-200",
    },
    {
      id: 8,
      src: "/Assets/icon-8.webp",
      alt: "Industries",
      text: "Tour and Travels",
      bgColor: "bg-yellow-200",
    },
    {
      id: 9,
      src: "/Assets/icon-9.webp",
      alt: "Industries",
      text: "Health Service",
      bgColor: "bg-blue-200",
    },
    {
      id: 10,
      src: "/Assets/icon-10.webp",
      alt: "Industries",
      text: "Event & Ticket",
      bgColor: "bg-green-200",
    },
    {
      id: 11,
      src: "/Assets/icon-11.webp",
      alt: "Industries",
      text: "Restaurant Service",
      bgColor: "bg-purple-200",
    },
    {
      id: 12,
      src: "/Assets/icon-12.webp",
      alt: "Industries",
      text: "Business Consultant",
      bgColor: "bg-red-200",
    },
  ];

  return (
    <section className="Business-domain mt-5 sm:mt-7 lg:mt-10 px-4 sm:px-6 md:px-12 lg:px-16 !py-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Left content */}
        <div className="text-white px-2 sm:px-4 lg:px-10">
          <div className="common-heading">
            <span
              className="text-3xl sm:text-4xl mb-6 block tracking-wider"
              style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
            >
              Industries we work for
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 mb-6 w-full lg:w-[80%]">
              Helping Businesses in All Domains
            </h3>
            <p className="text-justify text-base sm:text-lg mb-5">
              We develop websites that build businesses! We believe, there is no
              room for a one-size-fits-all approach in web development services.
              Each website is unique and it needs a personal touch to meet
              specific business needs. Our experienced UI/UX designers and full
              stack web development team can effectively transform your idea
              into reality.
            </p>
            <p className="text-justify text-base sm:text-lg">
              As a reputable website development company in India, we've
              assisted hundreds of companies worldwide to achieve their goals,
              drive businesses growth, and create happy customers. From LAMP to
              MEAN, business websites for startups to custom web applications
              for corporate - we do it all! Engage our custom web design
              services to build a stunning website for your business.
            </p>
          </div>
        </div>

        {/* Right content - Cards */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className={`work-card ${card.bgColor} flex flex-col items-center justify-center rounded-lg shadow-md p-5 hover:scale-105 transition-transform`}
              >
                <Image
                  src={card.src}
                  width={400}
                  height={400}
                  alt={card.alt}
                  className="w-12 h-12 sm:w-14 sm:h-14 mb-3"
                />
                <p className="text-center text-sm sm:text-base font-medium">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
