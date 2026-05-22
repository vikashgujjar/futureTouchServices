"use client";
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { usePathname } from "next/navigation";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { FaEnvelope, FaPhoneAlt, FaSkype, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Login from "./Login";

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen9, setDropdownOpen9] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isInnerDropdownOpen, setInnerDropdownOpen] = useState(false);
  const [isInnerDropdownOpen2, setInnerDropdownOpen2] = useState(false);
  const [isInnerDropdownOpen3, setInnerDropdownOpen3] = useState(false);
  const [isInnerDropdownOpen4, setInnerDropdownOpen4] = useState(false);
  const [isInnerDropdownOpen5, setInnerDropdownOpen5] = useState(false);
  const [isInnerDropdownOpen6, setInnerDropdownOpen6] = useState(false);
  const [isInnerDropdownOpen7, setInnerDropdownOpen7] = useState(false);
  const [isInnerDropdownOpen8, setInnerDropdownOpen8] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSecond, setIsSecond] = useState(false);
  const [isThird, setIsThird] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setDropdownOpen(false);
    setDropdownOpen9(false);
    setInnerDropdownOpen2(false);
    setInnerDropdownOpen(false);
    setInnerDropdownOpen3(false);
    setInnerDropdownOpen4(false);
    setInnerDropdownOpen5(false);
    setInnerDropdownOpen6(false);
    setInnerDropdownOpen7(false);
    setInnerDropdownOpen8(false);
  };

  const handleButtonClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsPopupOpen(true);
  };

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleDropdownSecond = () => setDropdownOpen9(!isDropdownOpen9);
  const toggleDropdownThird = () => setDropdownOpen3(!isDropdownOpen3);

  useEffect(() => {
    const scrollHandler = () => setFixed(window.scrollY > 10);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleMouseEnter = () => { setIsOpen(true); setIsSecond(false); setIsThird(false); };
  const handleMouseLeave = () => setIsOpen(false);
  const handleMouseSecond = () => { setIsSecond(true); setIsOpen(false); setIsThird(false); };
  const handleMouseLeaveSecond = () => setIsSecond(false);
  const handleMouseThird = () => { setIsSecond(false); setIsOpen(false); setIsThird(true); };
  const handleMouseLeaveThird = () => setIsThird(false);

  const pathname = usePathname();
  const isActive = (path) =>
    pathname === path
      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text"
      : "";

  /* Shared dropdown link class */
  const ddLink = "block px-4 py-2 text-sm text-gray-600 hover:text-violet-700 hover:bg-violet-50 rounded-lg transition-colors duration-150";
  const ddLinkHeader = "flex items-center gap-2 px-4 py-3 text-sm font-bold text-gray-800 hover:bg-violet-50 rounded-lg border-b border-gray-100 transition-colors duration-150";

  return (
    <div
      className={`fixed z-999 w-full transition-all duration-300 ${
        fixed
          ? "top-0 bg-white/[0.98] backdrop-blur-md shadow-sm border-b-0 border-violet-100"
          : "sm:pt-2 md:pt-4 bg-transparent"
      } px-5 md:px-8 xl:p4x-20`}
    >
      {/* ── Desktop nav ── */}
      <div
        className={`hidden lg:flex items-center justify-between bg-white ${
          fixed ? "py-3 px-4 rounded-none" : "py-3 px-6 rounded-2xl shadow-sm border border-gray-100"
        } relative`}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/images/Header/secondary-logo.webp"
            width={400}
            height={400}
            alt="Future IT Touch"
            className="w-[160px] xl:w-[220px] h-auto"
          />
        </Link>

        {/* Nav links */}
        <ul className="flex items-center lg:gap-x-1 xl:gap-x-2">
          {/* Home */}
          <li>
            <Link
              href="/"
              className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200 ${isActive("/")}`}
            >
              Home
            </Link>
          </li>

          {/* About */}
          <li onMouseEnter={handleMouseEnter} className="relative">
            <Link
              href="/about"
              className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200 ${isActive("/about")}`}
            >
              About
              <IoMdAdd className="w-4 h-4 text-violet-500" />
            </Link>
            {isOpen && (
              <ul
                onMouseLeave={handleMouseLeave}
                className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 py-2"
              >
                {[
                  { label: "Why Us", href: "/why-us" },
                  { label: "Our Team", href: "/our-team" },
                  { label: "Mission & Vision", href: "/mission" },
                  { label: "Our Portfolio", href: "/our-portfolio" },
                  { label: "Our Pricing Package", href: "/price" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={ddLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Services */}
          <li>
            <Link
              href="/service"
              onMouseEnter={handleMouseSecond}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200 ${isActive("/service")}`}
            >
              Services
              <IoMdAdd className="w-4 h-4 text-violet-500" />
            </Link>
          </li>

          {/* Technologies */}
          <li>
            <Link
              href="/trending-technology"
              onMouseEnter={handleMouseThird}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200 ${isActive("/trending-technology")}`}
            >
              Technologies
              <IoMdAdd className="w-4 h-4 text-violet-500" />
            </Link>
          </li>

          {/* Blogs */}
          <li>
            <Link
              href="/blog"
              className={`flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200 ${isActive("/blog")}`}
            >
              Blogs
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              href="/contact"
              className={`flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200 ${isActive("/contact")}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA button */}
        <button
          onClick={() => setIsPopupOpen(true)}
          className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold px-5 py-2.5 rounded-full text-sm shadow-md shadow-violet-200 hover:shadow-violet-300 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
        >
          Request A Quote
        </button>

        {/* ── Services mega-dropdown ── */}
        {isSecond && (
          <div
            className="hidden lg:grid grid-cols-4 gap-0 absolute top-full left-0 w-full bg-white border-t-2 border-violet-500 shadow-2xl shadow-violet-100/40 z-50 rounded-b-2xl overflow-hidden"
            onMouseLeave={handleMouseLeaveSecond}
          >
            {/* Website Design */}
            <div className="p-4 border-r border-gray-100">
              <Link href="/website-design" className={ddLinkHeader}>
                Website Design
                <img src="/Assets/web-development.webp" className="w-6 h-6 object-contain ml-auto" alt="" width={24} height={24} />
              </Link>
              {[
                { label: "eCommerce Website", href: "/ecommerce-website-development" },
                { label: "Web Application Development", href: "/web-app-development" },
                { label: "CMS Web Development", href: "/cms-development" },
                { label: "Small Business Website", href: "/business-developement" },
                { label: "Corporate Website", href: "/web-app-developemnt-corporate" },
              ].map((l) => <Link key={l.label} href={l.href} className={ddLink}>{l.label}</Link>)}
            </div>

            {/* Mobile App */}
            <div className="p-4 border-r border-gray-100">
              <Link href="/application-developement" className={ddLinkHeader}>
                Mobile App Development
                <img src="/Assets/mobile-PPC-Management.webp" className="w-6 h-6 object-contain ml-auto" alt="" width={24} height={24} />
              </Link>
              {[
                { label: "Android App Development", href: "/android-application-development" },
                { label: "iOS App Development", href: "/ios-application-development" },
                { label: "Hybrid App Development", href: "/hybrid-application-development" },
                { label: "Mobile App Testing", href: "/mobile-application-testing" },
                { label: "Quality Assurance", href: "/quality-assurance" },
              ].map((l) => <Link key={l.label} href={l.href} className={ddLink}>{l.label}</Link>)}
            </div>

            {/* Digital Marketing */}
            <div className="p-4 border-r border-gray-100">
              <Link href="/digital-marketing-service" className={ddLinkHeader}>
                Digital Marketing
                <img src="/Assets/social-media-marketing.webp" className="w-6 h-6 object-contain ml-auto" alt="" width={24} height={24} />
              </Link>
              {[
                { label: "SEO Services", href: "/search-engine-optimization" },
                { label: "PPC Management", href: "/pay-per-click-service" },
                { label: "Social Media Marketing", href: "/social-media-marketing-service" },
                { label: "Local SEO Services", href: "/local-search-engine-optimization" },
                { label: "Content Marketing", href: "/content-marketing-service" },
              ].map((l) => <Link key={l.label} href={l.href} className={ddLink}>{l.label}</Link>)}
            </div>

            {/* Design & Branding */}
            <div className="p-4">
              <Link href="/graphic-design-services" className={ddLinkHeader}>
                Design & Branding
                <img src="/Assets/cms_1.webp" className="w-6 h-6 object-contain ml-auto" alt="" width={24} height={24} />
              </Link>
              {[
                { label: "Logo Design", href: "/logo-design-services" },
                { label: "Corporate Identity Design", href: "/corporate-stationery-design" },
                { label: "Brochure Design", href: "/brochure-design-service" },
                { label: "Animated Videos", href: "/animated-services" },
                { label: "Creative Agency", href: "/creative-services" },
              ].map((l) => <Link key={l.label} href={l.href} className={ddLink}>{l.label}</Link>)}
            </div>
          </div>
        )}

        {/* ── Technologies mega-dropdown ── */}
        {isThird && (
          <div
            className="hidden lg:grid grid-cols-4 gap-0 absolute top-full left-0 w-full bg-white border-t-2 border-violet-500 shadow-2xl shadow-violet-100/40 z-50 rounded-b-2xl overflow-hidden"
            onMouseLeave={handleMouseLeaveThird}
          >
            {/* Web Technology */}
            <div className="p-4 border-r border-gray-100">
              <div className={ddLinkHeader}>
                Web Technology
                <img src="/Assets/web-development.webp" className="w-6 h-6 object-contain ml-auto" alt="" width={24} height={24} />
              </div>
              {[
                { label: "PHP-Laravel, Codeigniter", href: "/php-laravel-codeigniter-services" },
                { label: "React js, Vue js, Node js", href: "/reactjs-vuejs-nodejs-development-services" },
                { label: "Asp .net", href: "/asp-dot-net-service" },
                { label: "Python-Django, Flask", href: "/python-and-django-service" },
                { label: "Angular", href: "/angularjs-development-service" },
                { label: "WP, Shopify, Joomla, Magento", href: "/wordpress-and-shopify-development" },
              ].map((l) => <Link key={l.label} href={l.href} className={ddLink}>{l.label}</Link>)}
            </div>

            {/* Mobile Application */}
            <div className="p-4 border-r border-gray-100">
              <div className={ddLinkHeader}>
                Mobile Application
                <img src="/Assets/mobile-PPC-Management.webp" className="w-6 h-6 object-contain ml-auto" alt="" width={24} height={24} />
              </div>
              {[
                { label: "Swift", href: "/swift-app-development" },
                { label: "React Native", href: "/react-native-application-development" },
                { label: "Flutter", href: "/flutter-application-development" },
                { label: "Ionic", href: "/ionic-application-development" },
                { label: "Java", href: "/java-application-development" },
                { label: "UNITY - 2D, 3D", href: "/unity-game-development" },
              ].map((l) => <Link key={l.label} href={l.href} className={ddLink}>{l.label}</Link>)}
            </div>

            {/* AI / ML */}
            <div className="p-4 border-r border-gray-100">
              <div className={ddLinkHeader}>
                AI / ML
                <img src="/Assets/ai-ml.webp" className="w-6 h-6 object-contain ml-auto" alt="" width={24} height={24} />
              </div>
              {[
                { label: "Python-NumPy, Pandas", href: "/python-numpy-development" },
                { label: "Ruby, Pybrain", href: "/ruby-and-pybrain-development" },
                { label: "Java", href: "/java-application-development" },
                { label: "Julia", href: "/julia-developement-service" },
                { label: "Lisp", href: "/lisp-online-store-development" },
                { label: "Haskell", href: "/haskell-ai-and-ml-development" },
              ].map((l) => <Link key={l.label} href={l.href} className={ddLink}>{l.label}</Link>)}
            </div>

            {/* Blockchain */}
            <div className="p-4">
              <div className={ddLinkHeader}>
                Blockchain
                <img src="/Assets/blockchain.webp" className="w-6 h-6 object-contain ml-auto" alt="" width={24} height={24} />
              </div>
              {[
                { label: "C++", href: "/c-plus-plus-blockchain-development" },
                { label: "Java", href: "/java-application-development" },
                { label: "Customer Polls", href: "/customer-polls-blockchain" },
                { label: "Solidity", href: "/solidity-blockchain-development" },
                { label: "PHP", href: "/php-laravel-codeigniter-services" },
                { label: "Python", href: "/python-blockchain-development" },
              ].map((l) => <Link key={l.label} href={l.href} className={ddLink}>{l.label}</Link>)}
            </div>
          </div>
        )}
      </div>

      {/* Login popup */}
      {isPopupOpen && (
        <Login handleClosePopup={() => setIsPopupOpen(false)} isPopupOpen={isPopupOpen} />
      )}

      {/* ── Mobile nav bar ── */}
      <nav className="lg:hidden bg-white border border-gray-100 rounded-2xl mx-0 mt-1 shadow-sm">
        <div className="flex justify-between items-center px-4 py-3">
          <Link href="/">
            <img
              src="/images/Header/secondary-logo.webp"
              className="h-auto w-36"
              width={400}
              height={400}
              alt="Future IT Touch"
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <RxCross2 className="w-5 h-5" /> : <BiMenuAltRight className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile sidebar ── */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      <div
        className={`fixed z-50 top-0 left-0 h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-80`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/images/Header/secondary-logo.webp" width={400} height={400} alt="" className="w-36 h-auto" />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600"
          >
            <RxCross2 className="w-4 h-4" />
          </button>
        </div>

        {/* Sidebar links */}
        <ul className="px-4 py-4 space-y-1">

          {/* Home */}
          <li>
            <Link href="/" onClick={toggleMobileMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-violet-50 hover:text-violet-700 font-semibold text-sm transition-colors"
            >
              Home
            </Link>
          </li>

          {/* About */}
          <li>
            <div className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-violet-50 transition-colors">
              <Link href="/about" onClick={toggleMobileMenu} className="text-gray-700 hover:text-violet-700 font-semibold text-sm flex-1">
                About
              </Link>
              <button onClick={() => toggleDropdownThird(!isDropdownOpen3)} className="w-6 h-6 flex items-center justify-center">
                <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isDropdownOpen3 ? "rotate-180" : ""}`} />
              </button>
            </div>
            {isDropdownOpen3 && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-violet-100 pl-3">
                {[["Why Us", "/why-us"], ["Our Team", "/our-team"], ["Mission & Vision", "/mission"], ["Our Portfolio", "/our-portfolio"], ["Our Pricing Package", "/price"]].map(([label, href]) => (
                  <Link key={label} href={href} onClick={toggleMobileMenu}
                    className="block py-2 px-3 text-sm text-gray-600 hover:text-violet-700 hover:bg-violet-50 rounded-lg"
                  >{label}</Link>
                ))}
              </div>
            )}
          </li>

          {/* Services */}
          <li>
            <div className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-violet-50 transition-colors">
              <Link href="/service" onClick={toggleMobileMenu} className="text-gray-700 hover:text-violet-700 font-semibold text-sm flex-1">
                Services
              </Link>
              <button onClick={(e) => { e.preventDefault(); toggleDropdown(); }} className="w-6 h-6 flex items-center justify-center">
                <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            {isDropdownOpen && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-violet-100 pl-3">
                {/* Website Design */}
                <div>
                  <div className="flex items-center justify-between py-2 px-3">
                    <Link href="/website-design" onClick={toggleMobileMenu} className="text-sm font-semibold text-gray-700 hover:text-violet-700">Website Design</Link>
                    <button onClick={(e) => { e.stopPropagation(); setInnerDropdownOpen(!isInnerDropdownOpen); }}>
                      <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isInnerDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {isInnerDropdownOpen && (
                    <div className="ml-3 space-y-1 border-l border-violet-100 pl-3">
                      {[["eCommerce Website", "/ecommerce-website-development"], ["Web App Development", "/web-app-development"], ["CMS Web Development", "/cms-development"], ["Small Business Website", "/business-developement"], ["Corporate Website", "/web-app-developemnt-corporate"]].map(([l, h]) => (
                        <Link key={l} href={h} onClick={toggleMobileMenu} className="block py-1.5 text-sm text-gray-500 hover:text-violet-700">{l}</Link>
                      ))}
                    </div>
                  )}
                </div>
                {/* Mobile App */}
                <div>
                  <div className="flex items-center justify-between py-2 px-3">
                    <Link href="/application-developement" onClick={toggleMobileMenu} className="text-sm font-semibold text-gray-700 hover:text-violet-700">Mobile App Dev</Link>
                    <button onClick={(e) => { e.stopPropagation(); setInnerDropdownOpen2(!isInnerDropdownOpen2); }}>
                      <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isInnerDropdownOpen2 ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {isInnerDropdownOpen2 && (
                    <div className="ml-3 space-y-1 border-l border-violet-100 pl-3">
                      {[["Android App Development", "/android-application-development"], ["iOS App Development", "/ios-application-development"], ["Hybrid App Development", "/hybrid-application-development"], ["Mobile App Testing", "/mobile-application-testing"], ["Quality Assurance", "/quality-assurance"]].map(([l, h]) => (
                        <Link key={l} href={h} onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-500 hover:text-violet-700">{l}</Link>
                      ))}
                    </div>
                  )}
                </div>
                {/* Digital Marketing */}
                <div>
                  <div className="flex items-center justify-between py-2 px-3">
                    <Link href="/digital-marketing-service" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-violet-700">Digital Marketing</Link>
                    <button onClick={(e) => { e.stopPropagation(); setInnerDropdownOpen3(!isInnerDropdownOpen3); }}>
                      <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isInnerDropdownOpen3 ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {isInnerDropdownOpen3 && (
                    <div className="ml-3 space-y-1 border-l border-violet-100 pl-3">
                      {[["SEO Services", "/search-engine-optimization"], ["PPC Management", "/pay-per-click-service"], ["Social Media Marketing", "/social-media-marketing-service"], ["Local SEO Services", "/local-search-engine-optimization"], ["Content Marketing", "/content-marketing-service"]].map(([l, h]) => (
                        <Link key={l} href={h} onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-500 hover:text-violet-700">{l}</Link>
                      ))}
                    </div>
                  )}
                </div>
                {/* Design & Branding */}
                <div>
                  <div className="flex items-center justify-between py-2 px-3">
                    <Link href="/graphic-design-services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-violet-700">Design & Branding</Link>
                    <button onClick={(e) => { e.stopPropagation(); setInnerDropdownOpen4(!isInnerDropdownOpen4); }}>
                      <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isInnerDropdownOpen4 ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {isInnerDropdownOpen4 && (
                    <div className="ml-3 space-y-1 border-l border-violet-100 pl-3">
                      {[["Logo Design", "/logo-design-services"], ["Corporate Identity Design", "/corporate-stationery-design"], ["Brochure Design", "/brochure-design-service"], ["Animated Videos", "/animated-services"], ["Creative Agency", "/creative-services"]].map(([l, h]) => (
                        <Link key={l} href={h} onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-500 hover:text-violet-700">{l}</Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>

          {/* Technologies */}
          <li>
            <div className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-violet-50 transition-colors">
              <Link href="/trending-technology" onClick={toggleMobileMenu} className="text-gray-700 hover:text-violet-700 font-semibold text-sm flex-1">
                Technology
              </Link>
              <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleDropdownSecond(!isDropdownOpen9); }} className="w-6 h-6 flex items-center justify-center">
                <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isDropdownOpen9 ? "rotate-180" : ""}`} />
              </button>
            </div>
            {isDropdownOpen9 && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-violet-100 pl-3">
                {[
                  ["Web Technology", isInnerDropdownOpen5, setInnerDropdownOpen5, [["PHP-Laravel, Codeigniter", "/php-laravel-codeigniter-services"], ["React js, Vue js, Node js", "/reactjs-vuejs-nodejs-development-services"], ["Asp .net", "/asp-dot-net-service"], ["Python-Django, Flask", "/python-and-django-service"], ["Angular", "/angularjs-development-service"], ["WP, Shopify, Joomla, Magento", "/wordpress-and-shopify-development"]]],
                  ["Mobile Application", isInnerDropdownOpen6, setInnerDropdownOpen6, [["Swift", "/swift-app-development"], ["React Native", "/react-native-application-development"], ["Flutter", "/flutter-application-development"], ["Ionic", "/ionic-application-development"], ["Java", "/java-application-development"], ["UNITY - 2D, 3D", "/unity-game-development"]]],
                  ["AI / ML", isInnerDropdownOpen7, setInnerDropdownOpen7, [["Python-NumPy, Pandas", "/python-numpy-development"], ["Ruby, Pybrain", "/ruby-and-pybrain-development"], ["Java", "/java-application-development"], ["Julia", "/julia-developement-service"], ["Lisp", "/lisp-online-store-development"], ["Haskell", "/haskell-ai-and-ml-development"]]],
                  ["Blockchain", isInnerDropdownOpen8, setInnerDropdownOpen8, [["C++", "/c-plus-plus-blockchain-development"], ["Java", "/java-application-development"], ["Customer Polls", "/customer-polls-blockchain"], ["Solidity", "/solidity-blockchain-development"], ["PHP", "/php-laravel-codeigniter-services"], ["Python", "/python-blockchain-development"]]],
                ].map(([title, open, setOpen, items]) => (
                  <div key={title}>
                    <div className="flex items-center justify-between py-2 px-3">
                      <span className="text-sm font-semibold text-gray-700">{title}</span>
                      <button onClick={(e) => { e.stopPropagation(); setOpen(!open); }}>
                        <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {open && (
                      <div className="ml-3 space-y-1 border-l border-violet-100 pl-3">
                        {items.map(([l, h]) => (
                          <Link key={l} href={h} onClick={() => setIsMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-500 hover:text-violet-700">{l}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>

          {/* Blog */}
          <li>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-violet-50 hover:text-violet-700 font-semibold text-sm transition-colors"
            >Blog</Link>
          </li>

          {/* Contact */}
          <li>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-violet-50 hover:text-violet-700 font-semibold text-sm transition-colors"
            >Contact</Link>
          </li>

          {/* Request A Quote */}
          <li className="pt-2">
            <button
              onClick={handleButtonClick}
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold py-3 rounded-xl text-sm shadow-md shadow-violet-200"
            >
              Request A Quote
            </button>
          </li>
        </ul>

        {/* Sidebar bottom quick-contacts */}
        <div className="border-t border-gray-100 mt-2 px-5 py-4 flex items-center justify-around">
          <Link href="tel:+91-7056937000" className="flex flex-col items-center gap-1 text-gray-500 hover:text-violet-600 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center">
              <FaPhoneAlt className="w-4 h-4 text-violet-600" />
            </div>
            <span className="text-xs font-medium">Call</span>
          </Link>
          <Link href="mailto:info@futuretouch.in" className="flex flex-col items-center gap-1 text-gray-500 hover:text-violet-600 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
              <FaEnvelope className="w-4 h-4 text-indigo-600" />
            </div>
            <span className="text-xs font-medium">Email</span>
          </Link>
          <Link href="skype:futuretouch" className="flex flex-col items-center gap-1 text-gray-500 hover:text-violet-600 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
              <FaSkype className="w-4 h-4 text-blue-500" />
            </div>
            <span className="text-xs font-medium">Skype</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
