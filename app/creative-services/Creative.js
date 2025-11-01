import React from "react";

import Image from "next/image";
import cwd from "../Assets/cwd.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import image1 from "../Assets/SIT.webp";
import { FaShoppingCart, FaPaintBrush, FaClock, FaUsers} from "react-icons/fa";
import {  FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";



import {
  FaPalette,
  FaCommentDots,
  FaGlobe,
  FaBookOpen,
  FaChartPie,
} from "react-icons/fa";

import { FaLightbulb, FaHandshake } from "react-icons/fa";

const Ecommerce = () => {
const features = [
  {
    title: "Strategic Brand Positioning",
    description:
      "We help businesses define their unique brand voice, values, and positioning in the market. Our strategy ensures your brand stands out with purpose, clarity, and emotional connection to your audience.",
    icon: <FaLightbulb />,
  },
  {
    title: "Creative Visual Identity",
    description:
      "From logos to color palettes and typography, we create a cohesive and memorable visual identity that reflects your brand’s personality and builds instant recognition across platforms.",
    icon: <FaPalette />,
  },
  {
    title: "Consistent Brand Messaging",
    description:
      "We craft compelling taglines, tone, and storytelling that communicate your brand’s message consistently across all touchpoints — from websites and packaging to social media and campaigns.",
    icon: <FaCommentDots />,
  },
  {
    title: "Audience Research & Insights",
    description:
      "Understanding your target audience is key to impactful branding. We conduct in-depth research to identify customer expectations, perceptions, and preferences for better brand alignment.",
    icon: <FaUsers />,
  },
  {
    title: "Digital Presence & Engagement",
    description:
      "We strengthen your online identity through consistent visual and content strategies on digital platforms — ensuring your brand connects effectively with audiences across all channels.",
    icon: <FaGlobe />,
  },
  {
    title: "Brand Guidelines Development",
    description:
      "We design comprehensive brand guidelines that outline logo usage, color systems, fonts, and visual tone — ensuring your brand maintains uniformity and professionalism everywhere it appears.",
    icon: <FaBookOpen />,
  },
  {
    title: "Performance & Growth Analytics",
    description:
      "We track the effectiveness of your branding efforts through analytics, helping you measure brand engagement, awareness, and growth for continuous improvement and impact.",
    icon: <FaChartPie />,
  },
];


 const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Strategic Brand Development",
    desc: "We help businesses define a clear brand vision and positioning strategy that connects emotionally with their audience and strengthens market presence.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Creative Visual Identity",
    desc: "Our creative designers craft unique logos, color palettes, and typography that reflect your brand’s personality and ensure consistent recognition everywhere.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Collaborative Approach",
    desc: "We work closely with clients to understand their goals and translate ideas into powerful brand visuals and messaging that inspire trust and loyalty.",
  },
];
  const cards = [
  {
    count: "250+",
    title: "Brands Transformed",
    desc: "We’ve helped over 250 businesses build strong brand identities that capture attention and connect emotionally with their audiences. From startups to enterprises, our creative solutions turn visions into recognizable brands.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "15+",
    title: "Years of Creative Expertise",
    desc: "With more than 15 years of experience in branding and creative strategy, Future IT Touch Pvt. Ltd. brings deep insight and innovation to every project, helping brands establish authority and trust in competitive markets.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Global Clients Empowered",
    desc: "Trusted by over 500 clients worldwide, we deliver impactful brand identity solutions tailored to each business’s personality, ensuring consistent visibility and recognition across industries and audiences.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our client-first approach and dedication to creativity have earned us a 98% satisfaction rate. We collaborate closely with businesses to design meaningful brand stories that inspire and engage their audiences.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Creative Support",
    desc: "Our team provides continuous brand support, ensuring consistency across all touchpoints — from visual assets to digital presence. We’re here to help your brand evolve, stay relevant, and grow stronger every day.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];
1

const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Visual Identity Design",
    desc: "We craft unique logos, color schemes, and typography systems that capture your brand’s personality and create a consistent, memorable visual identity across all platforms.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Brand Strategy & Guidelines",
    desc: "Our team develops comprehensive brand strategies and guidelines to ensure every communication reflects your brand’s vision, values, and voice consistently across channels.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "UI/UX Design",
    desc: "We design engaging and user-friendly interfaces that enhance the customer experience, reinforce your brand identity, and create lasting impressions on digital platforms.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Front-End Development",
    desc: "Our front-end developers translate brand designs into interactive and responsive web experiences, ensuring consistency, performance, and visually appealing layouts.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Back-End Development",
    desc: "We implement scalable and secure back-end systems to support your brand’s online presence, including content management, integrations, and database management.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Digital Marketing & SEO",
    desc: "We optimize your online presence with SEO strategies, content marketing, and digital campaigns to enhance visibility, engage audiences, and strengthen your brand identity.",
  },
]

const faqData = [
  {
    title: "What services are included in Brand Identity Solutions?",
    description:
      "Our services include logo design, color palettes, typography systems, brand messaging, visual guidelines, and digital presence strategies to create a cohesive and memorable brand identity.",
  },
  {
    title: "Can you customize branding for my business?",
    description:
      "Absolutely! We tailor every aspect of your brand identity — from visual elements to messaging — ensuring it reflects your unique vision, values, and business goals.",
  },
  {
    title: "How do you ensure brand consistency?",
    description:
      "We develop detailed brand guidelines and strategy documents that outline logo usage, color schemes, typography, tone of voice, and design principles to maintain consistency across all platforms.",
  },
  {
    title: "Do you provide digital branding solutions?",
    description:
      "Yes, we integrate your brand identity into websites, social media, marketing campaigns, and other digital touchpoints to ensure consistent and engaging online presence.",
  },
  {
    title: "Can you revamp an existing brand?",
    description:
      "Definitely! We can refresh your current brand by enhancing its visual identity, messaging, and digital presence to make it more modern, engaging, and aligned with your audience.",
  },
  {
    title: "Do you provide ongoing brand support?",
    description:
      "Yes, we offer continuous support to ensure your brand remains consistent and relevant. This includes updating brand assets, maintaining design standards, and guiding digital marketing efforts.",
  },
];


  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={cwd}
        title="Creative Agency Branding"
        desc="Future IT Touch Pvt. Ltd. is the governing creative branding agency in India taking care of the details of customer's needs. Since, a brand is what people will perceive, the team at Future IT Touch Pvt. Ltd. sharpens the branding strategies in a way to attract your audience. The Internet is flooded with loads of diverse definitions of what a brand is. Let's just knock out the confusion and keep it simple and straight. A brand is the identity or personality of your business. And, when personality goes unpleasant, everything goes out of order. Future IT Touch Pvt. Ltd. is armed with quality dipped product branding services in India which leaves you with results giving your business an everlasting success. We guard the personality of your business to make you stand out in the crowd."
      />

      <TechMarquee />

<div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
      Trusted Brand Identity & Strategy Development
    </span>

    <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
      Crafting Brands That Speak, Connect, and Grow
    </h4>

    <p className="text-base md:text-lg text-gray-600">
      At{" "}
      <span className="font-semibold text-indigo-600">
        Future IT Touch Pvt. Ltd.
      </span>{" "}
      we help businesses establish strong, consistent brand identities through
      strategy, creativity, and design excellence.
    </p>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      A strong brand identity is more than just a logo — it’s the essence of how
      your business is perceived. Our branding services focus on creating
      meaningful brand experiences that connect emotionally and visually.
      <br /> <br />
      <span className="font-semibold text-gray-900">For Businesses:</span> We
      define your brand voice, messaging, and visual style to ensure consistency
      across every platform. From color palettes and typography to marketing
      assets, everything reflects your unique story. <br />
      <br />
      <span className="font-semibold text-gray-900">For Audiences:</span> We
      design engaging visuals, creative storytelling, and user-centered brand
      experiences that build trust and loyalty. <br />
      <br />
      With over 15 years of creative expertise, we craft distinctive brand
      identities that leave lasting impressions. Choose our{" "}
      <span className="font-semibold text-indigo-600">
        Brand Identity & Strategy Solutions
      </span>{" "}
      to make your business stand out with purpose and personality.
    </p>

    <div className="pt-4">
      <a
        href="tel:+917056937000"
        className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
      >
        Build Your Brand Identity
      </a>
    </div>
  </div>
</div>



      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
<div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
  <h5 className="font-bold text-[#7C4DDA]">
    Creative Agency Branding Solutions
  </h5>
  <h4 className="font-bold text-gray-900">
    Building Powerful Brand Identities That Inspire & Connect
  </h4>
</div>



        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0  ">
            <Image
              src={devops}
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
    Leading Brand Identity & Creative Agency in India
  </h5>
  <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
    Crafting Unique Identities that Inspire & Connect
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
          title="Brand Identity & Creative Solutions We Deliver"
      />

      <FAQSection
        faqData={faqData}
  title="About Brand Identity & Creative Solutions"
      />

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Ecommerce;



