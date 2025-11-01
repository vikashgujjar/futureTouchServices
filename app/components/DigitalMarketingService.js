import React from "react";

import Image from "next/image";

export default function DigitalMarketingService() {
  return (
    <section className="bg-[#FAFAFC] py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 xl:px-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Heading */}
          <div>
            <span
              className="text-2xl lg:text-4xl bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest block"
              style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
            >
              Digital Marketing Services
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl mt-5 font-bold text-gray-900 leading-snug">
              We Make Finest Marketing With
              <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text">
                &nbsp; Great Passion
              </span>
            </h2>
          </div>

          {/* Service Cards */}
          <div className="space-y-5">
            {/* SEO */}
            <div className="rounded-lg border border-[#ccc] lg:border-transparent bg-white lg:bg-transparent p-4 flex items-start gap-4 shadow-sm lg:shadow-none hover:shadow-md transition">
              <Image
                src="/Assets/search.webp"
                className="w-12 h-12 flex-shrink-0"
                width={400}
                height={400}
                alt="SEO"
              />
              <div>
                <h4 className="text-xl lg:text-2xl font-bold mb-2 bg-[#705fff] text-transparent bg-clip-text">
                  Search Engine Optimisation
                </h4>
                <p className="text-gray-700">
                  Boost your website's visibility with our personalized SEO
                  services, designed to improve search rankings and connect you
                  with your ideal audience.
                </p>
              </div>
            </div>

            {/* SMM */}
            <div className="rounded-lg border border-[#ccc] lg:border-transparent bg-white lg:bg-transparent p-4 flex items-start gap-4 shadow-sm lg:shadow-none hover:shadow-md transition">
              <Image
                src="/Assets/family.webp"
                className="w-12 h-12 flex-shrink-0"
                width={400}
                height={400}
                alt="Social Media"
              />
              <div>
                <h4 className="text-xl lg:text-2xl font-bold mb-2 bg-[#705fff] text-transparent bg-clip-text">
                  Social Media Marketing
                </h4>
                <p className="text-gray-700">
                  Enhance your brand’s reach with our customized Social Media
                  Marketing services, designed to authentically engage your
                  audience and foster meaningful growth.
                </p>
              </div>
            </div>

            {/* SEM */}
            <div className="rounded-lg border border-[#ccc] lg:border-transparent bg-white lg:bg-transparent p-4 flex items-start gap-4 shadow-sm lg:shadow-none hover:shadow-md transition">
              <Image
                src="/Assets/digital-marketing.webp"
                className="w-12 h-12 flex-shrink-0"
                width={400}
                height={400}
                alt="SEM"
              />
              <div>
                <h4 className="text-xl lg:text-2xl font-bold mb-2 bg-[#705fff] text-transparent bg-clip-text">
                  Search Engine Marketing / Paid Ads
                </h4>
                <p className="text-gray-700">
                  Drive targeted traffic and enhance your online presence with
                  our specialized Search Engine Marketing and Paid Ads services,
                  crafted to optimize ROI and achieve measurable success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full  pulse ">
            <Image
              className="object-contain w-full drop-shadow-lg"
              src="/Assets/connect_img.webp"
              width={400}
              height={400}
              alt="Digital Marketing Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
