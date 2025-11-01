import React from "react";

import Image from "next/image";
import d1 from "../Assets/logo-gif.gif";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import image1 from "../Assets/SIT.webp";
import { FaShoppingCart, FaPaintBrush, FaClock, FaUsers } from "react-icons/fa";
import { FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

import gm from "../Assets/ams.webp";

import {
  FaPalette,
  FaCommentDots,
  FaGlobe,
  FaBookOpen,
  FaChartPie,
} from "react-icons/fa";

import { FaLightbulb, FaHandshake } from "react-icons/fa";

const Animated = () => {
  const features = [
    {
      title: "Concept & Script Development",
      description:
        "We craft compelling concepts and scripts that simplify complex ideas into clear, engaging narratives — ensuring your brand message is delivered effectively and memorably.",
      icon: <FaLightbulb />,
    },
    {
      title: "Creative Storyboarding",
      description:
        "Our experts design detailed storyboards that visualize the flow of your video before production — aligning visuals, voiceovers, and brand tone for perfect storytelling.",
      icon: <FaPalette />,
    },
    {
      title: "Custom Animation & Motion Graphics",
      description:
        "We create stunning 2D and 3D animations that bring your story to life with smooth transitions, vibrant visuals, and engaging motion effects that captivate viewers.",
      icon: <FaCommentDots />,
    },
    {
      title: "Voiceover & Sound Design",
      description:
        "Professional voiceovers and custom sound design enhance the emotional appeal of your videos — making them more impactful, authentic, and audience-friendly.",
      icon: <FaUsers />,
    },
    {
      title: "Product & Service Explainers",
      description:
        "We produce high-quality explainer videos that effectively showcase your products or services, increasing customer understanding and driving conversions.",
      icon: <FaGlobe />,
    },
    {
      title: "Brand Story Videos",
      description:
        "We help brands tell their unique stories through creative visuals and inspiring narratives that build trust, emotion, and lasting audience connections.",
      icon: <FaBookOpen />,
    },
    {
      title: "Performance Tracking & Optimization",
      description:
        "We analyze video engagement metrics to optimize content for better viewer retention, brand recall, and marketing ROI — ensuring your videos achieve real results.",
      icon: <FaChartPie />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Creative Script Development",
      desc: "We craft engaging scripts and storylines that simplify complex messages, helping brands communicate their ideas clearly and effectively through video.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Professional Animation Design",
      desc: "Our skilled animators create captivating 2D and 3D visuals that bring your brand stories to life with clarity, creativity, and lasting audience appeal.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Client-Focused Collaboration",
      desc: "We partner closely with clients at every step to ensure each video reflects their goals, brand voice, and vision while maintaining a smooth production flow.",
    },
  ];

  const cards = [
    {
      count: "250+",
      title: "Videos Successfully Delivered",
      desc: "We’ve produced over 250 high-quality explainer videos that simplify complex ideas and help businesses communicate their stories effectively. From startups to enterprises, our videos drive engagement and conversions.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Production Expertise",
      desc: "With more than 15 years of experience in creative storytelling and animation, Future IT Touch Pvt. Ltd. delivers impactful explainer videos that educate, inspire, and connect with audiences worldwide.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 international brands, we create explainer videos that enhance communication, strengthen marketing efforts, and increase brand visibility across digital platforms.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our commitment to creativity, clarity, and storytelling excellence has earned us a 98% satisfaction rate. We focus on delivering videos that truly represent your brand and connect with your audience.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Video Support",
      desc: "Our creative team provides round-the-clock support — from script revisions to post-production edits — ensuring every video meets your goals and maintains top-tier quality at all times.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Story & Script Development",
      desc: "We craft engaging scripts that simplify complex ideas, ensuring your explainer videos clearly communicate your message and resonate with your audience.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Storyboarding & Visual Planning",
      desc: "Our team develops detailed storyboards to map out the flow of your video, aligning visuals, voiceovers, and brand tone for maximum clarity and impact.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "Custom Animation & Motion Graphics",
      desc: "We design high-quality 2D and 3D animations with smooth motion graphics, bringing your story to life and keeping viewers engaged from start to finish.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Voiceover & Sound Design",
      desc: "Professional voiceovers and custom soundtracks enhance the emotional impact of your videos, making your message memorable and engaging.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Explainer Video Production",
      desc: "From concept to final delivery, we handle every step of production to ensure your explainer video is polished, professional, and effective.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Performance & Optimization",
      desc: "We analyze video engagement metrics and optimize content to boost viewer retention, brand recall, and overall impact for maximum ROI.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Explainer Video production?",
      description:
        "Our services include concept development, scriptwriting, storyboarding, animation design, voiceovers, motion graphics, and final video production to deliver engaging and clear explainer videos.",
    },
    {
      title: "Can you customize explainer videos for my business?",
      description:
        "Absolutely! We tailor every aspect of your explainer video — from style and animation to voiceover and storytelling — ensuring it perfectly represents your brand and message.",
    },
    {
      title: "How do you ensure video quality and consistency?",
      description:
        "We follow a structured production process with detailed storyboards, animation guidelines, and professional post-production checks to maintain high-quality, consistent output across all videos.",
    },
    {
      title: "Do you provide videos for digital platforms?",
      description:
        "Yes, we create explainer videos optimized for websites, social media, marketing campaigns, presentations, and other digital channels to maximize engagement and reach.",
    },
    {
      title: "Can you revamp an existing explainer video?",
      description:
        "Definitely! We can enhance your current videos by improving visuals, animations, voiceovers, and storytelling to make them more modern, engaging, and aligned with your audience.",
    },
    {
      title: "Do you provide ongoing video support?",
      description:
        "Yes, we offer continuous support including video updates, revisions, optimization for new platforms, and guidance to ensure your explainer videos stay relevant and effective.",
    },
  ];

  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={gm}
        title="Explainer Video Services"
        desc="Videos are a great means to explain your business, products or services to potential customers. Invest in a professional explainer video to get discovered faster, generate greater brand awareness, and grow your customer base. Future IT Touch Pvt. Ltd. is an certified company providing a wide array of digital solutions to clients across the world. Our corporate video production services help you turn your visitors into loyal followers of your brand. Avail our explainer video services and create amazing videos for your target audience."
      />

      <TechMarquee />
      <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
            Creative & Impactful Explainer Video Services
          </span>

          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
            Explain, Engage, and Inspire Through Motion
          </h4>

          <p className="text-base md:text-lg text-gray-600">
            At{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch Pvt. Ltd.
            </span>{" "}
            we transform complex ideas into visually stunning and
            easy-to-understand explainer videos that captivate your audience and
            boost brand awareness.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            A great explainer video is more than animation — it’s a blend of
            creativity, clarity, and storytelling. Our team crafts videos that
            deliver your message effectively, helping you connect with your
            audience instantly.
            <br /> <br />
            <span className="font-semibold text-gray-900">
              For Businesses:
            </span>{" "}
            We create tailor-made explainer videos that simplify your products,
            services, and processes. From scriptwriting to final animation,
            every frame reflects your brand’s essence. <br />
            <br />
            <span className="font-semibold text-gray-900">
              For Audiences:
            </span>{" "}
            We design engaging visuals, relatable storytelling, and smooth
            animations that educate, entertain, and inspire action. <br />
            <br />
            With over 15 years of creative experience, our{" "}
            <span className="font-semibold text-indigo-600">
              Explainer Video Services
            </span>{" "}
            help brands stand out with clarity, emotion, and innovation.
          </p>

          <div className="pt-4">
            <a
              href="tel:+917056937000"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
            >
              Create Your Explainer Video
            </a>
          </div>
        </div>
      </div>

      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
            Engaging Explainer Video Services
          </h5>
          <h4 className="font-bold text-gray-900">
            Turning Complex Ideas into Clear, Captivating Visual Stories
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0  ">
            <Image
              src={d1}
              alt="eCommerce Development"
              className="w-full rounded-xl shadow-lg h-full object-cover hover:scale-105 md:min-h-[70vh] transition-transform duration-500"
            />
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 gap-12 lg:gap-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-4 p-6 border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex -mt-14 text-[#7C4DDA] text-3xl bg-white justify-center items-center p-4 rounded w-20 h-20 border border-gray-400">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-sm lg:text-base text-gray-700 text-justify">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TurnYourBusiness */}

      <div className="business-idea mx-5 py-8 md:py-12 xl:py-16 my-8 lg:my-16 px-5 md:px-12 xl:px-28 bg-gradient-to-r rounded-3xl">
        <div className="text-center">
          <h5 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
            Leading Explainer Video Production Company in India
          </h5>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
            Creating Videos That Explain, Engage & Inspire Action
          </h4>
        </div>

        <div className="mt-10 grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {businessData.map((elm) => (
            <div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-start text-start"
              key={elm.title}
            >
              <div className="bg-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {elm.icons}
              </div>
              <h5 className="text-xl md:text-2xl font-bold mb-2">
                {elm.title}
              </h5>
              <p className="text-gray-700 text-sm md:text-base">{elm.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CustomSlider
        cards={cards}
        title="Crafting Memorable Brand Identities with Creativity & Strategy"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Explainer Video Solutions We Deliver"
      />

      <FAQSection
        faqData={faqData}
        title="About Our Explainer Video Services"
      />

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Animated;
