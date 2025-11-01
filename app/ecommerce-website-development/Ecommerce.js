import React from "react";

import Image from "next/image";
import ecc from "../Assets/ecc.svg";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import image1 from "../Assets/SIT.webp";
import { FaShoppingCart, FaPaintBrush, FaClock, FaUsers } from "react-icons/fa";
import {
  FaMagento,
  FaWordpress,
  FaShopify,
  FaOpencart,
  FaCogs,
  FaServer,
} from "react-icons/fa";

import {
  FaSitemap,
  FaImages,
  FaLock,
  FaFilter,
  FaShippingFast,
  FaBoxes,
  FaChartLine,
} from "react-icons/fa";

const Ecommerce = () => {
  const features = [
    {
      title: "Easy Navigation & Engaging Interface",
      description:
        "We design intuitive navigation structures and engaging user interfaces that allow visitors to browse effortlessly. A seamless navigation system not only improves the shopping experience but also ensures customers spend more time exploring your products, ultimately driving higher conversions.",
      icon: <FaSitemap />,
    },
    {
      title: "Multiple Product Images",
      description:
        "Visual appeal is critical in eCommerce. By offering multiple product images from different angles, customers get a realistic sense of your products. This increases trust and reduces return rates, ensuring buyers feel confident in their purchase decisions.",
      icon: <FaImages />,
    },
    {
      title: "Quick & Secure Checkout",
      description:
        "A smooth and secure checkout process is at the heart of a successful online store. We implement fast, one-page checkouts with trusted payment gateways, SSL encryption, and multiple payment options to ensure that customers complete their purchases without hesitation.",
      icon: <FaLock />,
    },
    {
      title: "Categories & Filters",
      description:
        "Advanced categorization and filtering options help users quickly locate products they’re interested in. By creating smart product taxonomies and layered navigation, we make shopping intuitive and efficient for your customers.",
      icon: <FaFilter />,
    },
    {
      title: "Seamless Order Tracking",
      description:
        "Customers can track their orders in real time, from purchase confirmation to delivery. A transparent and accessible order tracking system builds trust, reduces customer service queries, and improves overall satisfaction.",
      icon: <FaShippingFast />,
    },
    {
      title: "Easy Order & Inventory Management",
      description:
        "Our admin-friendly dashboard allows you to manage orders, update product attributes, configure tax and shipping rules, apply discounts, and monitor stock levels with ease. With seamless automation, you save time and focus more on growing your business.",
      icon: <FaBoxes />,
    },
    {
      title: "Analytics & Insights",
      description:
        "We integrate powerful analytics tools that provide actionable insights into your eCommerce performance. From conversion tracking to sales trends and customer behavior analysis, you’ll have the data you need to make informed business decisions and maximize ROI.",
      icon: <FaChartLine />,
    },
  ];

  const businessData = [
    {
      icons: <FaShoppingCart className="text-white w-8 h-8" />,
      title: "Specialized in eCommerce",
      desc: "Out of the wide range of services we provide, eCommerce web development is our specialization. We build online stores that are fast, secure, and optimized for conversions.",
    },
    {
      icons: <FaPaintBrush className="text-white w-8 h-8" />,
      title: "Innovative Designs",
      desc: "Our innovative eCommerce developers ensure your website stays up-to-date with the latest design trends, creating an engaging and seamless user experience for your customers.",
    },
    {
      icons: <FaClock className="text-white w-8 h-8" />,
      title: "On-Time Delivery",
      desc: "As a top eCommerce website design company, we ensure timely delivery of your online store, meeting deadlines without compromising on quality or performance.",
    },
  ];

  const cards = [
    {
      count: "250+",
      title: "Websites Delivered",
      desc: "We have crafted over 250+ eCommerce websites that captivate customers and drive sales. Each store is designed to be visually appealing, user-friendly, and fully optimized for performance, ensuring an outstanding online shopping experience.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Experience",
      desc: "With more than 15 years in eCommerce website development, Future IT Touch Pvt. Ltd. brings deep industry expertise. Our team ensures each project leverages best practices, modern technologies, and innovative design strategies.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 clients globally, we deliver tailor-made eCommerce solutions that meet diverse business needs. Our experience spans multiple industries and markets, ensuring websites that resonate with both local and international customers.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our client-centric approach has earned us a 98% satisfaction rate. We focus on clear communication, timely delivery, and creating online stores that exceed expectations and foster long-term business partnerships.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Support",
      desc: "We provide round-the-clock support for all your eCommerce websites. Our dedicated team ensures technical issues are resolved promptly, updates are applied efficiently, and your online store operates smoothly at all times.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaOpencart className="text-white w-6 h-6" />,
      title: "OpenCart Development",
      desc: "OpenCart allows easy customization and lightweight websites using AJAX. With over 14,000 extensions, we create beautiful and functional online stores with enhanced features and PA-DSS compliant security.",
    },
    {
      icon: <FaMagento className="text-white w-6 h-6" />,
      title: "Magento Development",
      desc: "Magento handles thousands of products and heavy traffic with ease. Its modular structure allows deep customization for marketplaces and offers unmatched security due to PA-DSS compliance.",
    },
    {
      icon: <FaWordpress className="text-white w-6 h-6" />,
      title: "WordPress & WooCommerce",
      desc: "WordPress websites with WooCommerce are lightweight, fast, and easy to manage. Scalable and secure, we deliver fully functional eCommerce stores with REST API, configurable shipping, and payment options.",
    },
    {
      icon: <FaCogs className="text-white w-6 h-6" />,
      title: "PrestaShop Development",
      desc: "PrestaShop is free, lightweight, and easy to use. With multilingual support, we create unique eCommerce websites that allow global sales without complex coding requirements.",
    },
    {
      icon: <FaServer className="text-white w-6 h-6" />,
      title: "Custom Development",
      desc: "Need a feature-rich marketplace tailored to your business? We build custom eCommerce solutions using frameworks like Laravel, CakePHP, CodeIgniter, NodeJS, and databases like MySQL for seamless performance.",
    },
    {
      icon: <FaShopify className="text-white w-6 h-6" />,
      title: "Shopify Development",
      desc: "Shopify is a fully hosted platform for quick online store setup. Our Shopify developers build SEO-optimized storefronts with Drop Shipping, Fraud Prevention, Social Media Integration, and more.",
    },
  ];

  const faqData = [
    {
      title: "Which eCommerce platforms do you specialize in?",
      description:
        "We specialize in OpenCart, Magento, WordPress/WooCommerce, PrestaShop, Shopify, and custom eCommerce solutions tailored to your business requirements.",
    },
    {
      title: "Can you customize my eCommerce store?",
      description:
        "Absolutely! Our developers provide deep customization for your online store, from front-end design to back-end functionalities, ensuring it matches your brand and business needs.",
    },
    {
      title: "Do you ensure website security?",
      description:
        "Yes, security is a top priority. We follow best practices and use PA-DSS compliant platforms to ensure your eCommerce website is safe, secure, and reliable.",
    },
    {
      title: "Can you handle large product catalogs?",
      description:
        "Definitely. Platforms like Magento and custom solutions can store thousands of products and manage heavy traffic seamlessly, without compromising performance.",
    },
    {
      title: "Do you offer mobile-friendly websites?",
      description:
        "Yes, all our eCommerce websites are responsive and mobile-first, ensuring smooth shopping experiences on smartphones, tablets, and desktops.",
    },
    {
      title: "Do you provide ongoing support after launch?",
      description:
        "We provide dedicated support, updates, and maintenance to ensure your online store remains functional, secure, and optimized for growth even after launch.",
    },
  ];

  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={ecc}
        title="ECOMMERCE WEBSITE DESIGN SERVICES"
        desc="Are you planning to expand your business by reaching out to your customers online? An eCommerce website would be the best option to enhance your customer base and increase your sales. Whether you want to create your first online store or overcome the sales slump with your existing one, we can help you out with our results-driven eCommerce website design services. Hire experienced developers from Future IT Touch Pvt. Ltd. for top-notch eCommerce web development solutions with a rich user interface, integration of payment gateway and shipping API, advanced security features, easy-to-manage product inventory and much more.

"
      />

      <TechMarquee />

      <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
            Trusted eCommerce Website Development
          </span>

          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
            Building Engaging Online Storefronts
          </h4>

          <p className="text-base md:text-lg text-gray-600">
            At{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch Pvt. Ltd.
            </span>{" "}
            we specialize in creating eCommerce websites that deliver seamless
            user experiences and powerful management features for businesses
            worldwide.
          </p>

          {/* Main Description */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            The goal of every online store is to provide users with an
            experience comparable to shopping in a physical store, while
            ensuring administrators enjoy effortless management. Our eCommerce
            development services focus on:
            <br /> <br />
            <span className="font-semibold text-gray-900">For Users:</span> Easy
            navigation, engaging interface, multiple product images, quick
            checkout, categories & filters, secured payments, and smooth order
            tracking. <br />
            <br />
            <span className="font-semibold text-gray-900">
              For Admins:
            </span>{" "}
            Simple order management, product attributes, tax & shipping
            integration, offers & discounts, inventory management, and detailed
            analytics. <br />
            <br />
            With over 15 years of expertise, we’ve built hundreds of B2B and B2C
            eCommerce stores. Choose our{" "}
            <span className="font-semibold text-indigo-600">
              custom eCommerce web design services
            </span>{" "}
            to deliver exceptional digital shopping experiences for your
            customers.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="tel:+917056937000"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
            >
              Start Your eCommerce Journey
            </a>
          </div>
        </div>
      </div>

      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
            Trusted eCommerce Website Development Company
          </h5>
          <h4 className="font-bold text-gray-900">
            Creating Online Stores That Engage & Convert
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0  ">
            <Image
              src={image1}
              alt="eCommerce Development"
              className="w-full rounded-xl shadow-lg h-full object-cover hover:scale-105 md:h-[70vh] transition-transform duration-500"
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
            Leading eCommerce Website Design Company in India
          </h5>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
            Partner with Us for Growth & Innovation
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
        title=" Delivering Engaging eCommerce Experiences with"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Ecommerce Website Development Platforms We Use
"
      />

      <FAQSection
        faqData={faqData}
        title="About eCommerce Website Developmen"
      />

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Ecommerce;
