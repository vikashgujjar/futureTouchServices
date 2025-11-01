import React from "react";
import {
  FaShoppingCart,
  FaLaptopCode,
  FaWordpress,
  FaStore,
  FaBuilding,
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaReact,
  FaVial,
  FaClipboardCheck,
  FaBullhorn,
  FaSearch,
  FaGoogle,
  FaShareAlt,
  FaMapMarkerAlt,
  FaFileAlt,
  FaPaintBrush,
  FaRegIdBadge,
  FaIdCard,
  FaFilePdf,
  FaVideo,
  FaLightbulb,
} from "react-icons/fa";

export default function TechMarquee() {
  const services = [
    { name: "eCommerce Website", icon: FaShoppingCart },
    { name: "Web Application Development", icon: FaLaptopCode },
    { name: "CMS Web Development", icon: FaWordpress },
    { name: "Small Business Website", icon: FaStore },
    { name: "Corporate Website", icon: FaBuilding },
    { name: "Mobile App Development", icon: FaMobileAlt },
    { name: "Android App Development", icon: FaAndroid },
    { name: "iOS App Development", icon: FaApple },
    { name: "Hybrid App Development", icon: FaReact },
    { name: "Mobile App Testing", icon: FaVial },
    { name: "Quality Assurance", icon: FaClipboardCheck },
    { name: "Digital Marketing Service", icon: FaBullhorn },
    { name: "SEO Services", icon: FaSearch },
    { name: "PPC Management", icon: FaGoogle },
    { name: "Social Media Marketing", icon: FaShareAlt },
    { name: "Local SEO Services", icon: FaMapMarkerAlt },
    { name: "Content Marketing Services", icon: FaFileAlt },
    { name: "Design & Branding", icon: FaPaintBrush },
    { name: "Logo Design", icon: FaRegIdBadge },
    { name: "Corporate Identity Design", icon: FaIdCard },
    { name: "Brochure Design", icon: FaFilePdf },
    { name: "Animated Videos", icon: FaVideo },
    { name: "Creative Agency", icon: FaLightbulb },
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Duplicate services for infinite loop */}
        {[...services, ...services].map((service, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-6 py-3 bg-white shadow-md rounded-xl mx-3"
          >
            <service.icon className="text-xl text-blue-500" />
            <span className="text-sm font-medium">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
