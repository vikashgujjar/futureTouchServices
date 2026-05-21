"use client";
import React from "react";
import devops from "../Assets/app-develops.webp";
import {
  FaServer,
  FaCheckCircle,
  FaUserCheck,
  FaCloud,
  FaLayerGroup,
  FaLock,
  FaChartLine,
} from "react-icons/fa";
import { FaShieldAlt, FaCogs, FaHandshake } from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready for expert app testing?",
  preTitle: "Ensure Your App is",
  highlight: "Bug-Free & Ready to Launch",
  postTitle: "",
  description:
    "Get a free consultation with our mobile testing experts and discover how we can deliver flawless quality assurance for your iOS and Android applications.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Comprehensive test coverage", sub: "Functional, UI & regression" },
    { label: "Cross-device & OS testing", sub: "iOS, Android & more" },
    { label: "Security & penetration testing", sub: "Data protection assured" },
    { label: "Detailed defect reports", sub: "Actionable insights delivered" },
    { label: "Post-testing support", sub: "We stay with you after QA" },
  ],
  cardCta: { label: "Get App Testing Quote", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Mobile = () => {
  const features = [
    {
      title: "Installation Testing",
      description:
        "We verify that your application installs and operates correctly across various devices, OS versions, and configurations. Using the required tools and equipment, we ensure a smooth and error-free installation experience for every user.",
      icon: <FaServer />,
    },
    {
      title: "Functional Testing",
      description:
        "Functional testing ensures your app performs exactly as specified. Our independent QA team validates every feature and workflow with precision, reporting transparent results to help you meet the evolving expectations of your end users.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Usability Testing",
      description:
        "Our usability testing covers both web and mobile versions, including screen resolution checks, compatibility across devices, OS systems, and A/B testing. We ensure your app conforms to system requirements and exceeds user expectations.",
      icon: <FaUserCheck />,
    },
    {
      title: "Cloud Testing",
      description:
        "We leverage leading cloud platforms including Amazon EC2 and Microsoft Azure for comprehensive cloud-based testing. Our cloud testing methodology covers functional, performance, compatibility, and globalization testing for maximum ROI.",
      icon: <FaCloud />,
    },
    {
      title: "Cross Platform (Hybrid) Testing",
      description:
        "To ensure optimal compatibility across Windows, Android, iOS, Linux, and macOS, our testers perform both automated and manual cross-platform QA — validating consistent performance and user experience on every supported platform.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Security Testing",
      description:
        "Data security is a prime concern for every application. Our dedicated security testing team identifies vulnerabilities and loopholes from the earliest SDLC stages, conducting comprehensive penetration testing to safeguard your application.",
      icon: <FaLock />,
    },
    {
      title: "Performance Testing",
      description:
        "We assess your application's speed, scalability, and stability under real-world conditions. Our performance testing methodology identifies bottlenecks and ensures your app delivers a smooth, reliable experience even under peak load.",
      icon: <FaChartLine />,
    },
  ];

  const businessData = [
    {
      icons: <FaShieldAlt className="text-white w-8 h-8" />,
      title: "Comprehensive QA Services",
      desc: "Our fully functional QA services ensure product performance meets requirements. We validate data integrity across business flows and provide continuous 24x7 testing with strong infrastructure and disaster recovery plans.",
    },
    {
      icons: <FaCogs className="text-white w-8 h-8" />,
      title: "Advanced Testing Infrastructure",
      desc: "Our dedicated testing labs with well-equipped servers simulate diverse client conditions. We leverage cloud infrastructure and web-enabled defect management tools for full transparency throughout the testing cycle.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Global Testing Teams",
      desc: "Multiple teams across different GEOs track defects in real-time. Our organisation maintains multiple redundant servers ensuring 99.9% uptime, delivering consistent and reliable testing results for your application.",
    },
  ];

  const platforms = [
    {
      icon: <FaServer className="text-white w-6 h-6" />,
      title: "Installation & Compatibility Testing",
      desc: "We verify smooth installation and compatibility across devices, OS versions, and screen resolutions to ensure your app runs flawlessly for every user on every platform.",
    },
    {
      icon: <FaCheckCircle className="text-white w-6 h-6" />,
      title: "Functional & Regression Testing",
      desc: "Our team validates every feature, workflow, and user scenario against specifications, and performs regression testing after updates to ensure existing functionality remains intact.",
    },
    {
      icon: <FaUserCheck className="text-white w-6 h-6" />,
      title: "Usability & UX Testing",
      desc: "We evaluate app usability through real-world user scenarios, A/B testing, and accessibility checks — ensuring your app delivers an intuitive and engaging experience for all users.",
    },
    {
      icon: <FaCloud className="text-white w-6 h-6" />,
      title: "Cloud & Performance Testing",
      desc: "Leveraging cloud platforms like AWS and Azure, we simulate real-world traffic and load conditions to measure your app's performance, reliability, and scalability under stress.",
    },
    {
      icon: <FaLayerGroup className="text-white w-6 h-6" />,
      title: "Cross Platform Testing",
      desc: "We test your app across iOS, Android, Windows, and other platforms using both automated and manual approaches to guarantee consistent behavior and performance everywhere.",
    },
    {
      icon: <FaLock className="text-white w-6 h-6" />,
      title: "Security & Penetration Testing",
      desc: "Our security experts identify vulnerabilities, test for data leaks, and conduct penetration testing to ensure your application meets security standards and protects user data.",
    },
  ];

  const faqData = [
    {
      title: "What mobile platforms do you test applications for?",
      description:
        "We test mobile applications for iOS, Android, and cross-platform apps including hybrid and React Native apps, across a wide range of devices, screen sizes, and OS versions.",
    },
    {
      title: "What types of testing do you perform?",
      description:
        "We perform functional, installation, usability, performance, security, cloud, and cross-platform testing to ensure your app is thoroughly validated before and after launch.",
    },
    {
      title: "Do you provide automated testing services?",
      description:
        "Yes, we offer both manual and automated testing using industry-leading tools. Automation is used for regression, performance, and repetitive test scenarios to improve speed and accuracy.",
    },
    {
      title: "How do you ensure data security during testing?",
      description:
        "Our testing team follows strict data security protocols, uses secure test environments, and ensures that no sensitive data is exposed during the testing process.",
    },
    {
      title: "Can you test apps that are already live?",
      description:
        "Absolutely! We provide testing services for apps at any stage — pre-launch, post-launch, or after major updates — to identify and resolve issues without disrupting your users.",
    },
    {
      title: "Do you provide a testing report after completion?",
      description:
        "Yes, we deliver comprehensive testing reports that include identified defects, severity levels, test coverage summaries, and recommendations for improvement after every testing cycle.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Mobile Application Testing Services",
        title: "Ensure Your App is",
        highlight: "Flawless & Reliable",
        description:
          "Future IT Touch is an eminent Mobile Application Testing organization offering comprehensive testing for iOS and Android apps. With certified testers, we cover functional, usability, cloud, security, and cross-platform testing.",
        image: devops,
        primaryCta: { label: "Get App Testing Quote", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["500+ Apps Tested", "15+ Years Expertise", "99.9% Uptime SLA"],
      }}
      intro={{
        badge: "Comprehensive Mobile App QA Services",
        title: "Why Choose FTS",
        highlight: "for Mobile App Testing?",
        description:
          "At Future IT Touch we test applications for functionality, usability, consistency, and compatibility — ensuring longer stability and reliable performance for your users across all platforms and devices.",
        ctaLabel: "Get App Testing Quote",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "End-to-End Mobile App Testing",
        title: "Comprehensive Testing Services for Flawless App Performance",
        image: devops,
        items: features,
      }}
      benefits={{
        title: "Trusted Mobile App Testing Company in India",
        subtitle: "Delivering Quality Assurance with Precision & Reliability",
        items: businessData,
      }}
      platforms={{
        title: "Mobile App Testing Services We Deliver",
        items: platforms,
      }}
      faq={{
        title: "About Mobile Application Testing",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Mobile;
