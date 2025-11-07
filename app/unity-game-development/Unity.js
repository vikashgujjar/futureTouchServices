import React from "react";

import app from "../Assets/gam2d3d.webp";

import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import gm from "../Assets/java.webp";
import {
  FaJava,
  FaBug,
  FaBuilding,
  FaCloud,
  FaRocket,
  FaTools,
  FaServer,
  FaCogs,
  FaDatabase,
  FaLock,
} from "react-icons/fa";
import { SiUnity } from "react-icons/si";








const Unity = () => {
const technolgyData = [
  {
    title: "Custom Unity Game Development",
    icon: <FaJava className="text-[#00B2FF] text-4xl" />, // keep same color & icon format
    list: [
      "Developing high-quality 2D and 3D games using the Unity engine tailored to your creative vision.",
      "Building cross-platform games that run seamlessly on mobile, PC, consoles, and AR/VR devices.",
      "Designing immersive gameplay experiences with optimized performance and stunning visuals.",
      "Delivering complete end-to-end Unity game solutions — from concept to launch.",
    ],
  },
  {
    title: "AR/VR Game Development",
    icon: <FaBuilding className="text-[#00B2FF] text-4xl" />,
    list: [
      "Creating next-generation AR and VR experiences powered by Unity for immersive storytelling.",
      "Developing virtual reality simulations and training environments for education and enterprise.",
      "Integrating ARKit, ARCore, and mixed reality technologies for realistic user engagement.",
      "Optimizing graphics and performance for smooth experiences on all AR/VR platforms.",
    ],
  },
  {
    title: "Multiplayer & Networked Games",
    icon: <FaCloud className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building real-time multiplayer games with secure backend and matchmaking systems.",
      "Implementing cloud-based game servers for stable performance and minimal latency.",
      "Integrating in-game chats, leaderboards, and live events to boost engagement.",
      "Ensuring smooth synchronization and scalability for online multiplayer environments.",
    ],
  },
  {
    title: "Game Testing & Quality Assurance",
    icon: <FaBug className="text-[#00B2FF] text-4xl" />,
    list: [
      "Performing rigorous testing for gameplay, graphics, and performance optimization.",
      "Ensuring smooth cross-platform compatibility and bug-free experiences.",
      "Conducting device testing for mobile, console, and desktop platforms.",
      "Delivering stable, high-performance builds through continuous integration workflows.",
    ],
  },
  {
    title: "Game Deployment & Optimization",
    icon: <FaRocket className="text-[#00B2FF] text-4xl" />,
    list: [
      "Deploying Unity games across platforms like iOS, Android, Steam, PlayStation, and Xbox.",
      "Optimizing rendering pipelines and assets for smooth frame rates and reduced load times.",
      "Improving player experience through advanced performance tuning and GPU optimization.",
      "Implementing analytics and tracking to measure player engagement post-launch.",
    ],
  },
  {
    title: "Post-Launch Maintenance & Updates",
    icon: <FaTools className="text-[#00B2FF] text-4xl" />,
    list: [
      "Providing continuous updates, new features, and patches after game release.",
      "Monitoring player feedback and optimizing gameplay balance and performance.",
      "Managing version upgrades to keep your game compatible with the latest Unity releases.",
      "Offering 24/7 support and maintenance to ensure long-term game success.",
    ],
  },
];

const steps = [
  {
    title: "Concept & Game Design",
    description:
      "We start by analyzing your game idea, defining core mechanics, and creating an engaging gameplay strategy using Unity.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "Art & Asset Production",
    description:
      "Our creative artists design stunning 2D/3D assets, environments, and animations tailored to your game’s style.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Unity Game Development",
    description:
      "Our skilled Unity developers bring your vision to life, implementing game mechanics, physics, and logic with precision.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend & Multiplayer Integration",
    description:
      "We build secure backend systems, integrate multiplayer features, and enable real-time cloud connectivity.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Testing & QA",
    description:
      "Comprehensive testing ensures flawless gameplay, optimized performance, and compatibility across devices.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "Deployment & Launch",
    description:
      "We handle deployment across app stores and gaming platforms, ensuring smooth publishing and performance.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Post-Launch Support & Optimization",
    description:
      "We continuously monitor, optimize, and update your game to keep players engaged and ensure long-term growth.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaServer className="text-[#306998]" />,
    title: "Cross-Platform Game Development",
    desc: "We create Unity games that run flawlessly across mobile, console, desktop, and web platforms.",
  },
  {
    icon: <FaCogs className="text-[#306998]" />,
    title: "Real-Time Multiplayer Support",
    desc: "We implement real-time networking, matchmaking, and server management for interactive multiplayer experiences.",
  },
  {
    icon: <FaDatabase className="text-[#306998]" />,
    title: "Cloud Integration & Analytics",
    desc: "We connect games with cloud databases, player analytics, and backend services for performance tracking.",
  },
  {
    icon: <FaLock className="text-[#306998]" />,
    title: "Game Security & Data Protection",
    desc: "We ensure secure user authentication, in-game purchase safety, and data integrity for players.",
  },
  {
    icon: <FaRocket className="text-[#306998]" />,
    title: "Performance Optimization",
    desc: "We enhance game performance with advanced Unity optimization techniques, reducing lag and load times.",
  },
  {
    icon: <FaTools className="text-[#306998]" />,
    title: "Ongoing Maintenance & Updates",
    desc: "We provide continuous game updates, bug fixes, and new content to maintain player engagement.",
  },
];

const cards = [
  {
    count: "150+",
    title: "Unity Games Delivered",
    desc: "We’ve developed and launched over 150 Unity-powered games across genres like action, simulation, AR/VR, and casual gaming.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "9+",
    title: "Years of Game Development Expertise",
    desc: "With over nine years in Unity development, our team excels at building high-performing and visually immersive gaming experiences.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "300+",
    title: "Global Gaming Clients",
    desc: "We’ve partnered with 300+ studios and brands worldwide to build interactive Unity games for diverse audiences.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our focus on creativity, technology, and smooth delivery has earned us a 98% satisfaction rate from our gaming partners.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical & Creative Support",
    desc: "We provide round-the-clock support, ensuring your game stays updated, optimized, and engaging for players.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "Why choose Unity for game development?",
    description:
      "Unity offers powerful tools, cross-platform support, and stunning graphics capabilities, making it ideal for modern game development.",
  },
  {
    title: "Do you develop both 2D and 3D games?",
    description:
      "Yes, we specialize in building engaging 2D, 3D, AR, and VR games tailored to your creative and technical requirements.",
  },
  {
    title: "Can you build multiplayer games with Unity?",
    description:
      "Absolutely. We develop real-time multiplayer games using cloud servers and frameworks like Photon and Mirror.",
  },
  {
    title: "Which platforms do you support?",
    description:
      "We develop Unity games for iOS, Android, PC, WebGL, PlayStation, Xbox, and VR platforms like Oculus and HTC Vive.",
  },
  {
    title: "Do you offer game design and art services?",
    description:
      "Yes, we provide complete game art, animation, and UI/UX design services alongside full Unity development.",
  },
  {
    title: "How do you ensure smooth performance?",
    description:
      "We optimize code, assets, and physics to ensure your Unity game runs smoothly across devices and resolutions.",
  },
  {
    title: "Can you help with game monetization?",
    description:
      "Yes, we integrate in-app purchases, ads, and other monetization models to maximize your game’s revenue potential.",
  },
  {
    title: "Do you provide ongoing support after launch?",
    description:
      "We offer long-term maintenance, updates, and performance monitoring to ensure your game’s success post-launch.",
  },
  {
    title: "Can you migrate an existing game to Unity?",
    description:
      "Yes, we provide migration and remastering services to bring your existing projects into the Unity engine environment.",
  },
  {
    title: "Do you offer AR/VR game development?",
    description:
      "Yes, we build immersive AR/VR experiences using Unity for industries like entertainment, training, and simulation.",
  },
];





  return (
    <>
      <CommonBanner
        img={app}
        title="2D & 3D Game Development Services"
        desc="Unity 2D/3D games development is taking the gaming world by storm through technological advances and innovation. We have an exclusive and highly skilled team dedicated to unity 2D/3D game development for last 7 years in this sphere. We are the only company providing Unity 2D/3D game development in New York – Canada. Team of Future IT Touch Pvt. Ltd. support for high end gaming solution with standard parameters of the gaming world reached a commendable height driven by the demands of a quality conscious user. Unity 3D games have had a revolutionary breakthrough in the domain of mobile game development frameworks. Unity lets you work on various platforms such as iOS, android, windows, Linux, Xbox etc."
      />

<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Immersive, Engaging & Cross-Platform Games with{" "}
      <span className="text-indigo-600">Unity Game Development</span> ⚡
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Ready to bring your game ideas to life? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, 
      we craft stunning, high-performance, and interactive games using{" "}
      <span className="font-semibold text-indigo-600">Unity</span> — 
      the industry-leading engine trusted by developers worldwide for creating 
      next-generation 2D, 3D, AR, and VR experiences.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Our Unity experts specialize in building visually captivating, responsive, and scalable games 
      for mobile, desktop, console, and VR platforms. We combine cutting-edge graphics, optimized performance, 
      and engaging gameplay mechanics to deliver exceptional player experiences across every device.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      From concept design and prototyping to full-scale development and post-launch support, 
      we handle every stage of your Unity game development journey — ensuring creativity, performance, 
      and innovation at every step.
    </p>

    <div className="pt-4">
      <a
        href="tel:+917056937000"
        className="px-6 py-3 text-white font-medium bg-indigo-600 rounded-xl shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
      >
        Let’s Discuss Your Project
      </a>
    </div>
  </div>
</div>




   
  
      {/* High-Performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 xl:py-12">
<div className="text-center space-y-5">
  <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
    Future IT Touch’s High-Performance Unity Game Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Elevate your gaming vision with immersive, cross-platform experiences powered by Unity. 
    Our skilled Unity developers design and build interactive, high-performance 2D, 3D, AR, and VR games 
    that captivate players across mobile, desktop, and console platforms — blending creativity, technology, 
    and storytelling for maximum engagement and impact.
  </p>
</div>





        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {technolgyData.map((elm, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-gray-300"
            >
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {elm.title}
                </h4>
                <div>{elm.icon}</div>
              </div>

              <div className="mt-5 space-y-3 grid grid-cols-2 gap-y-3">
                {elm.list.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheck className="text-blue-500 mt-1.5 min-w-[20px]" />
                    <p className="text-gray-700 font-semibold underline text-sm md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <a
            href="+917056937000"
            className="mt-10   px-6 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
          >
            i want speak with expert
          </a>
        </div>
      </div>

      {/* Approach We Follow */}

     <div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
           <div className="relative w-full lg:w-[55%] lg:sticky lg:top-24 self-start">
             <div className="rounded-2xl overflow-hidden shadow-2xl  ">
               <img
                 src="/images/appdevelopment/appbg.webp"
                 alt="High Performance"
                 className="w-full h-full absolute inset-0  rounded-2xl object-cover hover:scale-105 transition-transform duration-700"
               />
   
<div className="relative z-10 h-full bg-gradient-to-t rounded-2xl from-black/70 via-black/40 to-transparent flex flex-col justify-start p-8">
<div className="text-left capitalize leading-tight text-white space-y-4 font-bold">
  <h6 className="text-6xl lg:text-7xl">
    <SiUnity /> 
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    Unity 3D & <br />
    Game App <br />
    <span className="">Development Approach</span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    To create immersive{" "}
    <span className="text-[#00ffe4]">
      - cross-platform gaming experiences with stunning visuals ⚡
    </span>
  </p>
</div>

</div>



   
             </div>
           </div>
   
           <div className="w-full lg:w-[65%] grid grid-cols-1 gap-6">
             {steps.map((feature, index) => (
               <div
                 key={index}
                 className="flex flex-col items-start gap-2 p-6 rounded-2xl border border-gray-200 shadow-md group hover:bg-[#0E395E] hover:shadow-2xl transition-all duration-300"
               >
                 <h4 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-white transition-colors">
                   {feature.title}
                 </h4>
                 <p className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-gray-100 leading-relaxed text-justify transition-colors">
                   {feature.description}
                 </p>
               </div>
             ))}
           </div>
         </div>

      {/* <CustomSlider/> */}
      <CommonSlider cards={cards} />

      {/* upscale your buiness  */}

      <div className="px-5 md:px-12 xl:px-28 bg-[#0a2548] py-10 md:py-14 lg:py-16 m-6 md:m-10 rounded-2xl">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white font-extrabold w-full lg:w-[85%] mx-auto leading-snug">
Empower Your Business With Custom Unity Game Development Services

        </h4>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {upScale.map((elm, index) => (
            <div key={index} className="flex flex-col gap-y-4 text-white">
              <span className="text-4xl text-indigo-400">{elm.icon}</span>
              <h5 className="text-xl md:text-2xl font-bold">{elm.title}</h5>
              <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                {elm.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* faq  */}

      <CommonFaqs
        faqData={faqData}
title="On Unity Game Development Services"
      />
      <BusinessIdea />
    </>
  );
};

export default Unity;
