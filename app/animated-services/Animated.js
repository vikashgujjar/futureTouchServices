import React from "react";
import gm from "../Assets/ams.webp";
import d1 from "../Assets/logo-gif.gif";
import { FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import {
  FaPalette,
  FaCommentDots,
  FaGlobe,
  FaBookOpen,
  FaChartPie,
} from "react-icons/fa";
import { FaLightbulb, FaHandshake, FaUsers } from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to tell your story?",
  preTitle: "Create Explainer Videos That",
  highlight: "Captivate & Convert",
  postTitle: "",
  description:
    "Get a free video consultation and discover how our creative team can craft compelling explainer videos that drive brand awareness and conversions.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Script & storyboard development", sub: "Your story mapped out" },
    { label: "Custom 2D/3D animation", sub: "Smooth & captivating visuals" },
    { label: "Professional voiceover", sub: "Native speaker in your language" },
    { label: "Background music & SFX", sub: "Emotional audio experience" },
    { label: "HD video delivery", sub: "Ready to publish on any platform" },
  ],
  cardCta: { label: "Create Your Explainer Video", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

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
    <ServicePageTemplate
      hero={{
        badge: "Explainer Video Services",
        title: "Engage Audiences with Animated",
        highlight: "Explainer Videos",
        description:
          "Videos are a great means to explain your business, products, or services to potential customers. Future IT Touch's corporate video production services help you turn visitors into loyal brand followers.",
        image: gm,
        primaryCta: { label: "Create Your Explainer Video", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["250+ Videos Delivered", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Creative & Impactful Explainer Video Services",
        title: "Explain, Engage, and Inspire",
        highlight: "Through Motion",
        description:
          "At Future IT Touch Pvt. Ltd. we transform complex ideas into visually stunning and easy-to-understand explainer videos that captivate your audience and boost brand awareness.",
        ctaLabel: "Create Your Explainer Video",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Engaging Explainer Video Services",
        title: "Turning Complex Ideas into Clear, Captivating Visual Stories",
        image: d1,
        items: features,
      }}
      benefits={{
        title: "Leading Explainer Video Production Company in India",
        subtitle: "Creating Videos That Explain, Engage & Inspire Action",
        items: businessData,
      }}
      platforms={{
        title: "Explainer Video Solutions We Deliver",
        items: platforms,
      }}
      faq={{
        title: "About Our Explainer Video Services",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Animated;
