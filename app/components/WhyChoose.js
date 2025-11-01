"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import Login from "./Login";
// import Login from "../Forms/Login";

const WhyChoose = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  

  return (
    <section className="mt-0 lg:mt-12 px-4 sm:px-6 md:px-12  xl:px-28 py-10 choose-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="common-heading text-left">
            <span
              className="text-4xl sm:text-5xl mb-6 inline-block bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-wider"
              style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
            >
              Why Choose Us
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-[35px] mt-4 mb-6 font-bold leading-snug">
              Why{" "}
              <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text">
                Future IT Touch Pvt. Ltd.
              </span>{" "}
              Ranked Top Among The Leading Web & App Development Companies
            </h1>
            <p className="leading-7 text-base text-gray-700">
              Our <strong> top IT company in India,</strong> known for
              innovation and top-notch solutions, offers a diverse range of
              services including web development, software, and mobile app
              development, driving business growth and staying at the forefront
              of technology.
            </p>
          </div>

          {/* Features */}
          <div className="mt-10 space-y-8">
            {[
              {
                img: "/Assets/online-test.webp",
                title: "Streamlined Project Management",
                desc: "Project management is very crucial for efficiently handling any project. Project management helps in the proper allocation of tasks and meeting deadlines.",
              },
              {
                img: "/Assets/employee.webp",
                title: "Link Dedicated Team of Experts",
                desc: "Building long-term relationships with an expert advanced software development service provider attracting Link mature team of skilled and experienced quality",
              },
              {
                img: "/Assets/hand-shake.webp",
                title: "Completion of Project in Given Time",
                desc: "Link project schedule is Link timetable that organizes tasks, resources and due dates in an ideal sequence so that Link project can be completed on time.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Image
                  src={item.img}
                  width={400}
                  height={400}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 bg-gray-100 rounded-lg p-3 shadow-md hover:scale-105 transition-transform"
                />
                <div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="leading-7 text-sm sm:text-base text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="relative">
            <Image
              className="rounded-xl w-full h-80 object-cover shadow-lg hover:scale-105 transition-transform"
              src="/Assets/company.webp"
              width={400}
              height={400}
              alt="Company office"
              width={500}
              height={350}
            />
          </div>

          <p className="text-justify mt-8 leading-7 text-base text-gray-700">
            As Link top <strong>web development company</strong>, we create
            robust, scalable websites for diverse business objectives. Our
            skilled developers use the latest technologies to deliver flawless,
            on-time, and budget-friendly projects, making us Link trusted
            partner for web development endeavors. From static sites to complex
            web apps, we hand over on time and budget. We are your trusted
            partner in crafting visually stunning and highly functional websites
            that leave Link lasting impression. Elevate your online presence
            with Future IT Touch.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <h3 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold">
              Let's Start Link <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text">
                New Project
              </span>{" "}
              Together
            </h3>
            <p className="font-medium text-gray-700 mb-6">
              You already have a project in mind and want to work with us? Fill
              out the form below and let us know right away in which direction
              it should go.
            </p>
            <button
              onClick={handleButtonClick}
              className="flex items-center border-2 border-black text-black px-6 sm:px-8 py-2 sm:py-3 text-base font-medium rounded-full shadow-md bg-white hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white hover:border-transparent transition-all"
            >
              Request A Quote <FaAngleRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
        {isPopupOpen && (
         <Login handleClosePopup={handleClosePopup} isPopupOpen={isPopupOpen} />
      )}
    </section>
  );
};

export default WhyChoose;
