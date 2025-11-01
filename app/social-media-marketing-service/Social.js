import React from "react";
import Image from "next/image";
import image2 from "../Assets/lss.webp";
import mrk from "../Assets/mrk.gif";
import cwd from "../Assets/soci.webp";
import soe from "../Assets/soe.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";

import {
  FaUsers,
  FaChartLine,
  FaBullhorn,
  FaCameraRetro,
  FaHashtag,
  FaEnvelopeOpenText,
  FaLaptop,
  FaLightbulb,
  FaHandshake,
  FaPalette,
  FaGlobe,
  FaCommentDots,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPinterest,
  FaAd,
  FaPeopleArrows,
} from "react-icons/fa";

const Social = () => {
const features = [
  {
    title: "Social Media Strategy & Planning",
    description:
      "We design a tailored social media marketing strategy to align with your brand goals. From defining audience personas to content calendar planning, we ensure every post drives engagement and builds brand loyalty.",
    icon: <FaBullhorn />,
  },
  {
    title: "Content Creation & Management",
    description:
      "Our creative team produces visually stunning graphics, engaging videos, and compelling posts that resonate with your audience. We handle all aspects of content management to maintain a consistent and impactful online presence.",
    icon: <FaCameraRetro />,
  },
  {
    title: "Content Creation & Marketing",
    description:
      "Using premium stock images, custom-made graphics, or unique assets provided by you, we create visual content including static images, videos, infographics, and carousels. Our in-house designers, copywriters, and marketing experts work together to craft engaging posts that drive attention and boost brand impression.",
    icon: <FaChartLine />,
  },
  {
    title: "Facebook Page Management",
    description:
      "From page creation and post designing to Facebook Ad management, campaign monitoring, and audience engagement — we handle everything to grow your follower base and improve visibility.",
    icon: <FaFacebookF />,
  },
  {
    title: "Twitter Account Management",
    description:
      "Our strategic Twitter marketing leverages powerful words and trending hashtags to strengthen your brand authority. We blend creativity and tactics to enhance your presence on this micro-blogging platform.",
    icon: <FaTwitter />,
  },
  {
    title: "LinkedIn Profile Management",
    description:
      "Reflect your business professionalism on LinkedIn. We help B2B and B2C brands establish a strong presence, connect with professionals, and build a credible network that drives opportunities.",
    icon: <FaLinkedin />,
  },
  {
    title: "Instagram Marketing",
    description:
      "Boost engagement with our Instagram marketing expertise. We craft eye-catching visuals, short videos, and shoppable content to drive conversions and elevate your brand image.",
    icon: <FaInstagram />,
  },
  {
    title: "Pinterest Marketing",
    description:
      "We blend creativity and strategy to optimize your Pins, Feeds, and Boards. Our Pinterest marketing ensures your visuals capture attention, keeping users engaged and generating quality leads.",
    icon: <FaPinterest />,
  },
  {
    title: "Social Media Advertising Campaigns",
    description:
      "We run high-performing ad campaigns across Facebook, Instagram, LinkedIn, and more — focusing on conversions, brand awareness, and audience growth with precision targeting and ROI-driven strategies.",
    icon: <FaAd />,
  },
  {
    title: "Influencer & Community Marketing",
    description:
      "We collaborate with trusted influencers and manage brand communities to enhance your reach and authenticity. Our team ensures genuine engagement that strengthens your brand reputation and trust.",
    icon: <FaUsers />,
  },
  {
    title: "Community Management",
    description:
      "Our social media activities help build a loyal community around your niche. Through meaningful, informative interactions, we ensure your brand stays connected and relevant in the competitive digital world.",
    icon: <FaPeopleArrows />,
  },
  {
    title: "Analytics & Performance Tracking",
    description:
      "Using advanced analytics, we monitor engagement, reach, and conversions to refine campaigns continuously — ensuring data-backed decisions and measurable success.",
    icon: <FaSearch />,
  },
  {
    title: "Brand Reputation & Engagement Management",
    description:
      "We actively manage brand mentions, respond to comments, and engage with your audience to build strong relationships. Our approach turns followers into loyal advocates for your brand.",
    icon: <FaCommentDots />,
  },
  {
    title: "Multi-Platform Optimization",
    description:
      "We optimize campaigns for each social platform — ensuring your content performs effectively whether on Facebook, Instagram, LinkedIn, or X (Twitter).",
    icon: <FaGlobe />,
  },
];


  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Strategic Social Campaigns",
      desc: "Our data-driven campaigns are designed to maximize engagement, reach, and conversions — ensuring every post aligns with your brand’s vision and audience interests.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Creative Content & Visuals",
      desc: "We craft visually appealing designs, stories, and videos that not only grab attention but also communicate your brand message effectively across all social platforms.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Marketing Approach",
      desc: "We work closely with your team to understand your goals and target audience, ensuring each campaign strengthens your online presence and brand identity.",
    },
  ];

const cards = [
  {
    count: "1500+",
    title: "Campaigns Successfully Executed",
    desc: "We’ve successfully delivered over 1500 high-impact social media campaigns that boosted brand visibility, audience engagement, and lead conversions across diverse industries worldwide.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "15+",
    title: "Years of Digital Expertise",
    desc: "With more than 15 years of experience in digital marketing, Future IT Touch Pvt. Ltd. crafts innovative, data-driven social strategies that accelerate growth and ensure long-term brand success.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Satisfied Global Clients",
    desc: "Trusted by over 500 leading brands worldwide, our social media professionals deliver impactful content and campaigns that build trust, foster connections, and inspire customer loyalty.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "We’re proud to maintain a 98% satisfaction rate by consistently delivering creative excellence, measurable performance, and proactive support that exceed client expectations.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Social Support & Monitoring",
    desc: "Our dedicated social team provides 24/7 support and real-time monitoring to ensure your brand remains active, responsive, and protected across every social platform.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];


  const platforms = [
    {
      icon: <FaBullhorn className="text-white w-6 h-6" />,
      title: "Strategic Campaign Planning",
      desc: "We plan campaigns that combine creativity, analytics, and audience insights to deliver meaningful engagement and brand visibility.",
    },
    {
      icon: <FaLaptop className="text-white w-6 h-6" />,
      title: "Content Creation & Scheduling",
      desc: "We produce and schedule high-quality content optimized for every platform — from carousel posts to reels and ad creatives.",
    },
    {
      icon: <FaUsers className="text-white w-6 h-6" />,
      title: "Community Building & Management",
      desc: "We grow your online communities, respond to followers, and encourage meaningful interactions to build strong brand loyalty.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Performance Analytics & Reporting",
      desc: "Our detailed reports track campaign results, helping you understand audience behavior and identify opportunities for growth.",
    },
    {
      icon: <FaHashtag className="text-white w-6 h-6" />,
      title: "Paid Social Advertising",
      desc: "We manage targeted ad campaigns to increase brand awareness, drive leads, and boost ROI across Facebook, Instagram, and LinkedIn.",
    },
    {
      icon: <FaEnvelopeOpenText className="text-white w-6 h-6" />,
      title: "Brand Reputation Management",
      desc: "We monitor brand mentions, respond to feedback, and ensure your business maintains a positive and engaging presence online.",
    },
  ];

  const faqData = [
    {
      title: "What does your Social Media Marketing service include?",
      description:
        "Our services include strategy planning, content creation, advertising, analytics tracking, and community management across platforms like Facebook, Instagram, LinkedIn, and Twitter (X).",
    },
    {
      title: "Can you manage multiple social media platforms for my brand?",
      description:
        "Yes, we handle multi-platform management — ensuring consistent branding and messaging across all social channels with unique, platform-specific strategies.",
    },
    {
      title: "Do you create custom content for social media?",
      description:
        "Absolutely! We design and write creative content tailored to your brand tone, audience preferences, and campaign goals.",
    },
    {
      title: "How do you measure social media performance?",
      description:
        "We track engagement, reach, clicks, conversions, and ROI through advanced analytics tools to measure campaign effectiveness and optimize future strategies.",
    },
    {
      title: "Can social media marketing help grow my business?",
      description:
        "Yes! Social media builds brand visibility, trust, and customer relationships — driving leads, conversions, and long-term growth.",
    },
    {
      title: "Do you provide ongoing social media support?",
      description:
        "Yes, we offer continuous monitoring, updates, performance reports, and optimization to ensure consistent brand engagement and growth.",
    },
  ];

  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={cwd}
        title="SOCIAL MEDIA MARKETING SERVICES"
        desc="Future IT Touch Pvt. Ltd., an certified agency, provides dynamic and results-driven social media marketing services. We take into account the current brand value of a business and, work toward enhancing it. We use futuristic strategies and creative designs for maximum impact. Our team of proficient social media optimization and marketing specialists is adept at managing media platforms like Facebook, Twitter, Google+, LinkedIn and Pinterest. Together, we boost your social media presence, generating more leads in the process.

"
      />

      <TechMarquee />

      <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
            Creative & Data-Driven Social Media Marketing
          </span>

          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
            Amplify Your Brand Presence with Strategic Social Media Marketing
          </h4>

          <p className="text-base md:text-lg text-gray-600">
            At{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch Pvt. Ltd.
            </span>{" "}
            we help businesses connect, engage, and grow through innovative social media strategies that turn followers into customers and customers into loyal brand advocates.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            From creative content and influencer collaborations to paid advertising and performance tracking, our comprehensive solutions ensure your brand stands out in the digital crowd. 
            <br /> <br />
            With over 15 years of experience, we deliver high-performing{" "}
            <span className="font-semibold text-indigo-600">
              Social Media Marketing Services
            </span>{" "}
            tailored to your goals and audience.
          </p>

          <div className="pt-4">
            <a
              href="tel:+917056937000"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
            >
              Grow Your Brand with Social Media Today
            </a>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
            Comprehensive Social Media Marketing Services
          </h5>
          <h4 className="font-bold text-gray-900">
            Building Engagement & Driving Conversions Across Platforms
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0">
            <Image
              src={soe}
              alt="Social Media Marketing"
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

      <div className="business-idea mx-5 py-8 md:py-12 xl:py-16 my-8 lg:my-16 px-5 md:px-12 xl:px-28 bg-gradient-to-r rounded-3xl">
        <div className="text-center">
          <h5 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
            Top Social Media Marketing Company in India
          </h5>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
            Engaging, Growing & Converting Audiences Organically
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
        title="Empowering Brands Through Engaging Social Media Strategies"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Our Social Media Marketing Process"
      />

      <FAQSection faqData={faqData} title="About Our Social Media Marketing Services" />

      <BuinessIdea />
    </>
  );
};

export default Social;
