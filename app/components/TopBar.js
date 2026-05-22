"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaSkype,
  FaInstagram,
  FaPhoneAlt,
  FaCaretDown,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const socials = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/Futureittouch", label: "Facebook" },
  { Icon: FaTwitter, href: "https://x.com/futureittouch", label: "Twitter" },
  { Icon: FaLinkedinIn, href: "https://in.linkedin.com/company/future-it-touch", label: "LinkedIn" },
  { Icon: FaInstagram, href: "https://www.instagram.com/future_it_touch/", label: "Instagram" },
  { Icon: FaYoutube, href: "https://www.youtube.com/channel/UCirWettrTWfsFRzdGRIc6BQ/about", label: "YouTube" },
  { Icon: FaGithub, href: "https://github.com/Future-IT-Touch-Private-Limited", label: "GitHub" },
];

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 text-white relative z-50">
      <div className="px-5 md:px-8 xl:px-20 py-2 flex items-center justify-between gap-4">

        {/* ── Left: contact info (desktop only) ── */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="mailto:info@futuretouch.in"
            className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors duration-200"
          >
            <FaEnvelope className="w-3 h-3 text-white/70" />
            info@futuretouch.in
          </a>
          <div className="w-px h-3.5 bg-white/25" />
          <a
            href="skype:live:.cid.313b26920df66baf"
            className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors duration-200"
          >
            <FaSkype className="w-3 h-3 text-white/70" />
            futuretouch
          </a>
        </div>

        {/* ── Right: support, login, socials ── */}
        <div className="flex items-center gap-3 ml-auto">

          {/* Support dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsOpen(true)}
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-1.5 transition-all duration-200"
            >
              <FaPhoneAlt className="w-3 h-3" />
              Support
              <FaCaretDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
              <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl shadow-violet-200/60 border border-gray-100 overflow-hidden z-50"
              >
                {/* Dropdown header */}
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3">
                  <p className="text-white font-bold text-sm">Future IT Touch Contacts</p>
                </div>

                <div className="p-3 space-y-1">
                  {/* HR */}
                  <p className="text-[10px] font-extrabold text-violet-500 uppercase tracking-widest px-2 pt-1 pb-1.5">
                    HR Department
                  </p>
                  <a
                    href="tel:+91-7056937000"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-violet-50 transition-colors duration-200"
                  >
                    <Image src="/Assets/country.webp" width={22} height={22} alt="IN" className="w-5 h-5 object-cover rounded" />
                    <span className="text-gray-700 font-semibold text-sm">+91-7056937000</span>
                  </a>

                  <div className="border-t border-gray-100 my-2" />

                  {/* Sales */}
                  <p className="text-[10px] font-extrabold text-violet-500 uppercase tracking-widest px-2 pb-1.5">
                    Sales Department
                  </p>
                  <a
                    href="tel:+91-7056997000"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-violet-50 transition-colors duration-200"
                  >
                    <Image src="/Assets/country.webp" width={22} height={22} alt="IN" className="w-5 h-5 object-cover rounded" />
                    <span className="text-gray-700 font-semibold text-sm">+91-7056997000</span>
                  </a>
                  <a
                    href="tel:+91-7056937000"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-violet-50 transition-colors duration-200"
                  >
                    <Image src="/Assets/flag.webp" width={22} height={16} alt="flag" className="w-5 h-4 object-cover rounded" />
                    <span className="text-gray-700 font-semibold text-sm">+91-7056937000</span>
                  </a>
                  <a
                    href="skype:live:.cid.313b26920df66baf"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-violet-50 transition-colors duration-200"
                  >
                    <FaSkype className="text-blue-400 w-5 h-5" />
                    <span className="text-gray-700 font-semibold text-sm">Futuretouch</span>
                  </a>
                  <a
                    href="mailto:info@futuretouch.in"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-violet-50 transition-colors duration-200"
                  >
                    <FaEnvelope className="text-violet-500 w-5 h-5" />
                    <span className="text-gray-700 font-semibold text-sm">info@futuretouch.in</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-3.5 bg-white/25" />

          {/* Login */}
          <Link
            href="https://crm.futuretouch.in/authentication/login"
            className="hidden lg:block text-xs font-medium text-white/80 hover:text-white transition-colors duration-200"
          >
            Login
          </Link>

          {/* Divider */}
          <div className="hidden lg:block w-px h-3.5 bg-white/25" />

          {/* Social icons */}
          <div className="flex items-center gap-1">
            {socials.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all duration-200"
              >
                <Icon className="w-3 h-3 text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
