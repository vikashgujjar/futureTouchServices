import React from "react";

import Image from "next/image";
import d1 from "../Assets/graphic-and-logo-design-service.webp";
import mrk from "../Assets/mrk.gif";
import cwd from "../Assets/contone.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import {  FaUsers } from "react-icons/fa";
import { FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import {
  FaBuilding,
  FaBoxOpen,
  FaLayerGroup,
  FaFileAlt,
  FaFolderOpen,
} from "react-icons/fa";

import {
  FaPalette,
  FaCommentDots,
  FaGlobe,
  FaBookOpen,
  FaChartPie,
} from "react-icons/fa";

import { FaLightbulb, FaHandshake } from "react-icons/fa";

const Logo = () => {

const features = [
  {
    title: "Strategic Content Planning",
    description:
      "We develop comprehensive content strategies tailored to your business goals. By analyzing your audience, industry trends, and brand voice, we create a roadmap that ensures your content drives engagement, builds brand awareness, and supports lead generation across all platforms.",
    icon: <FaBuilding />,
  },
  {
    title: "Social Media Content Creation",
    description:
      "Our team crafts engaging content specifically designed for social media channels. From visually compelling graphics to concise, persuasive copy, we create posts that resonate with your audience, encourage interactions, and increase your brand’s reach and visibility online.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Blog & Article Marketing",
    description:
      "We write informative, SEO-optimized blogs and articles that position your brand as an authority in your industry. By linking new content to existing posts and maintaining valuable keywords, we enhance search engine rankings and drive consistent, qualified traffic to your website.",
    icon: <FaChartLine />,
  },
  {
    title: "Content Amplification & Promotion",
    description:
      "Beyond creating content, we strategically share it to maximize reach. We identify the right channels, leverage trending topics, participate in relevant groups, and time publications to ensure your content reaches the right audience and has the highest potential for engagement and virality.",
    icon: <FaBookOpen />,
  },
  {
    title: "Audience Engagement & Community Building",
    description:
      "We help you build meaningful relationships with your audience by joining discussions, responding to comments, and fostering communities around your brand. Our goal is to enhance loyalty, encourage brand advocacy, and turn followers into long-term customers.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Content Analysis & Optimization",
    description:
      "We continually analyze the performance of your content using metrics like engagement, traffic, and conversions. Based on insights, we refine strategies, improve messaging, and optimize content to achieve better results and maximize ROI for your content marketing campaigns.",
    icon: <FaFileAlt />,
  },
  {
    title: "Rebranding & Content Refresh",
    description:
      "For businesses looking to revitalize their online presence, we refresh existing content to align with current trends, brand messaging, and audience expectations. This ensures your content remains relevant, engaging, and impactful while maintaining SEO value and brand consistency.",
    icon: <FaFolderOpen />,
  },
];


const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Creative Content Strategy",
    desc: "We develop innovative content strategies tailored to your brand, ensuring that every piece of content aligns with your business goals, engages your audience, and drives measurable results.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Content Creation & Design",
    desc: "Our team produces high-quality, visually appealing content — from blogs and articles to social media posts and graphics — designed to educate, inspire, and captivate your target audience.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Collaborative Marketing Process",
    desc: "We work closely with you to understand your brand voice and objectives, incorporating feedback at every stage to ensure content resonates with your audience and effectively promotes your brand message.",
  },
];


const cards = [
  {
    count: "1000+",
    title: "Content Pieces Successfully Delivered",
    desc: "We’ve created over 1000 high-quality content pieces including blogs, articles, social media posts, and email campaigns that educate, engage, and convert audiences for businesses across industries.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "15+",
    title: "Years of Content Marketing Expertise",
    desc: "With over 15 years of experience, Future IT Touch Pvt. Ltd. crafts strategic content marketing campaigns that build brand authority, increase online visibility, and drive measurable results for businesses worldwide.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Global Clients Served",
    desc: "Trusted by over 500 international brands, we create content strategies and materials that strengthen brand messaging, boost engagement, and deliver tangible marketing outcomes across multiple platforms.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our dedication to strategy, creativity, and data-driven results has earned us a 98% satisfaction rate. We focus on delivering content marketing solutions that resonate with target audiences and achieve business goals.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Marketing Support",
    desc: "Our team provides continuous support, including content planning, revisions, and campaign optimization, ensuring that every content marketing initiative is aligned with your goals and delivers maximum ROI.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Content Strategy & Planning",
    desc: "We create data-driven content strategies that align with your brand goals, identify target audiences, and establish a roadmap for engaging, informative, and high-performing content campaigns.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Content Creation & Design",
    desc: "Our team produces high-quality blogs, articles, social media posts, graphics, and videos that are tailored to resonate with your audience, reinforce brand messaging, and drive meaningful engagement.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "SEO & Performance Optimization",
    desc: "We optimize all content for search engines, using keyword strategy, internal linking, and analytics insights to improve organic traffic, increase visibility, and ensure measurable marketing results.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Social Media Marketing",
    desc: "We craft content for social media channels that sparks engagement, encourages sharing, and strengthens your online presence, helping your brand connect with followers and grow a loyal audience.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Content Amplification & Promotion",
    desc: "Beyond creation, we strategically distribute and promote content to maximize reach, participate in relevant communities, and capitalize on trending topics for viral marketing potential.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Analytics & Continuous Improvement",
    desc: "We monitor content performance using analytics tools, adjusting strategies, optimizing messaging, and refining campaigns to ensure content consistently meets audience needs and business objectives.",
  },
];

const faqData = [
  {
    title: "What services are included in Content Marketing?",
    description:
      "Our services include content strategy development, content creation for blogs, articles, and social media, SEO optimization, content promotion, analytics monitoring, and ongoing support to ensure consistent and high-performing campaigns.",
  },
  {
    title: "Can you create custom content for my business?",
    description:
      "Absolutely! We tailor every content piece to match your brand voice, target audience, and business goals. From written content to visual assets, everything is designed to engage, educate, and convert effectively.",
  },
  {
    title: "Do you optimize content for SEO and engagement?",
    description:
      "Yes, all content is crafted with SEO best practices and engagement strategies in mind. We ensure keyword relevance, proper linking, readability, and compelling storytelling to boost organic traffic and audience interaction.",
  },
  {
    title: "Can you manage social media content as part of the marketing strategy?",
    description:
      "Definitely! We create and schedule social media content, engage with your followers, and manage campaigns to increase brand awareness, grow community interaction, and drive traffic to your website.",
  },
  {
    title: "How do you measure content marketing success?",
    description:
      "We track metrics like website traffic, engagement rates, social shares, lead generation, and conversions. Regular reports and insights allow us to continuously refine content strategy and improve ROI.",
  },
  {
    title: "Do you provide ongoing content marketing support?",
    description:
      "Yes, we offer ongoing support including content updates, campaign optimization, analytics monitoring, and strategic adjustments to ensure your content marketing efforts remain effective and aligned with your business objectives.",
  },
];

  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={cwd}
        title="CONTENT MARKETING SERVICES"
        desc="Future IT Touch Pvt. Ltd. Content is the root of every digital marketing campaign. It forms the backbone of your online identity and, helps create awareness of your brand. A content marketing agency can be the partner to set up your brand online by marketing professionally curated content with the current business data and industry information. Being a leading digital marketing agency India , we create content that ranks and pulls your business up with it. Avail our content marketing services to increase your visibility and engage your customers.."
      />

      <TechMarquee />
    <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
      Professional & Strategic Content Marketing Services
    </span>

    <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
      Crafting Content That Engages, Educates & Converts
    </h4>

    <p className="text-base md:text-lg text-gray-600">
      At{" "}
      <span className="font-semibold text-indigo-600">
        Future IT Touch Pvt. Ltd.
      </span>{" "}
      we create compelling content strategies that resonate with your audience, drive engagement, and support your business goals. Effective content marketing builds trust, authority, and lasting relationships with your customers.
    </p>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      From blogs and social media posts to newsletters and video scripts, we craft content that speaks to your target audience. Our experienced content marketers combine storytelling, SEO, and data-driven insights to deliver content that not only informs but inspires action.
      <br /> <br />
      With over 15 years of experience and a team of skilled professionals, we provide high-quality{" "}
      <span className="font-semibold text-indigo-600">
        Content Marketing Services
      </span>{" "}
      tailored to your brand’s needs. We help businesses increase visibility, generate leads, and establish authority in their industry.
    </p>

    <div className="pt-4">
      <a
        href="tel:+917056937000"
        className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
      >
        Start Your Content Strategy Today
      </a>
    </div>
  </div>
</div>




      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
   <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
  <h5 className="font-bold text-[#7C4DDA]">
    Strategic Content Marketing Services
  </h5>
  <h4 className="font-bold text-gray-900">
    Creating Engaging Content That Educates, Inspires & Converts
  </h4>
</div>


        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0  ">
            <Image
              src={mrk}
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
    Professional Content Marketing Company in India
  </h5>
  <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
    Crafting Content That Engages, Educates & Converts Your Audience
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
  title="Creating Impactful Content That Engages, Educates & Converts"
/>

<WhyFutureITTouch
  platforms={platforms}
  title="Content Marketing Solutions We Deliver"
/>

<FAQSection
  faqData={faqData}
  title="About Our Content Marketing Services"
/>


      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Logo;
