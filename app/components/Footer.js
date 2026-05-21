import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaHeart,
  FaMapMarkerAlt,
  FaInstagram,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaArrowRight,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Services", href: "/service" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact Us", href: "/contact" },
];

const companyLinks = [
  { label: "Get A Quote", href: "/contact" },
  { label: "Our Pricing", href: "/price" },
  { label: "Customer FAQ", href: "/faq" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Privacy Policy", href: "/Privacy-Policy" },
  { label: "Terms & Conditions", href: "/Terms-Conditions" },
];

const socialLinks = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/Futureittouch", label: "Facebook" },
  { Icon: FaTwitter, href: "https://x.com/futureittouch", label: "Twitter" },
  { Icon: FaLinkedinIn, href: "https://in.linkedin.com/company/future-it-touch", label: "LinkedIn" },
  { Icon: FaInstagram, href: "https://www.instagram.com/future_it_touch/", label: "Instagram" },
  { Icon: FaYoutube, href: "https://www.youtube.com/channel/UCirWettrTWfsFRzdGRIc6BQ/about", label: "YouTube" },
  { Icon: FaGithub, href: "https://github.com/Future-IT-Touch-Private-Limited", label: "GitHub" },
];

const badges = [
  { src: "badges-a", label: "Top App Developer" },
  { src: "badges-b", label: "Best IT Company" },
  { src: "badges-c", label: "Clutch Top Firm" },
  { src: "badges-d", label: "GoodFirms Award" },
];

const Footer = () => {
  return (
    <footer>
      {/* ── CTA Strip ── */}
      <div className="bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-700 py-10 px-4 sm:px-6 md:px-12 xl:px-28">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-violet-200 text-sm font-medium mb-1">
              Ready to grow your business?
            </p>
            <h3 className="text-white text-2xl sm:text-3xl font-bold">
              Let&apos;s Build Something{" "}
              <span className="text-violet-200">Great Together</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold px-6 py-2.5 rounded-full hover:bg-violet-50 transition-colors text-sm"
            >
              Get Free Consultation <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="tel:+917056937000"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/20 transition-colors text-sm"
            >
              <FaPhoneAlt className="w-3.5 h-3.5" /> 7056937000
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="bg-white pt-16 pb-0 border-t border-gray-100">
        <div className="px-4 sm:px-6 md:px-12 xl:px-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-gray-100">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/Assets/secondary-logo.webp"
                  width={200}
                  height={50}
                  alt="Future IT Touch Logo"
                  className="w-44 sm:w-52"
                />
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-sm">
                Future IT Touch Pvt. Ltd. is an innovative one-stop Web Solution
                Company in Chandigarh, delivering customized &amp; quality digital
                services to businesses globally since 2017.
              </p>

              {/* Become Partner CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full mb-6 hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                Become a Partner <FaChevronRight className="w-3 h-3" />
              </Link>

              {/* Social row */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gradient-to-br hover:from-violet-600 hover:to-indigo-600 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-gray-900 font-bold mb-5 text-xs uppercase tracking-widest after:block after:w-8 after:h-0.5 after:bg-violet-500 after:mt-2">
                Quick Links
              </h5>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-gray-500 hover:text-violet-600 text-sm transition-colors flex items-center gap-2 group"
                    >
                      <FaArrowRight className="w-2.5 h-2.5 text-violet-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-gray-900 font-bold mb-5 text-xs uppercase tracking-widest after:block after:w-8 after:h-0.5 after:bg-violet-500 after:mt-2">
                Company
              </h5>
              <ul className="space-y-3">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-gray-500 hover:text-violet-600 text-sm transition-colors flex items-center gap-2 group"
                    >
                      <FaArrowRight className="w-2.5 h-2.5 text-violet-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-gray-900 font-bold mb-5 text-xs uppercase tracking-widest after:block after:w-8 after:h-0.5 after:bg-violet-500 after:mt-2">
                Get In Touch
              </h5>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                    <FaMapMarkerAlt className="text-violet-600 w-3.5 h-3.5" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    SCO 54-55, 2nd Floor, Near Mukat Hospital, 34A Sector,
                    Chandigarh, 160022
                  </p>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-violet-600 w-3.5 h-3.5" />
                  </div>
                  <a href="mailto:info@futuretouch.in" className="text-gray-500 hover:text-violet-600 text-sm transition-colors">
                    info@futuretouch.in
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0">
                    <FaPhoneAlt className="text-violet-600 w-3.5 h-3.5" />
                  </div>
                  <a href="tel:+91-7056937000" className="text-gray-500 hover:text-violet-600 text-sm transition-colors">
                    +91-7056937000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Awards Band — violet gradient so white cards pop ── */}
        <div className="mt-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 py-10 px-4 sm:px-6 md:px-12 xl:px-28">
          <div className="flex flex-col lg:flex-row items-center gap-8">

            {/* Left label */}
            <div className="shrink-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-2">
                <FaStar className="text-yellow-300 w-4 h-4" />
                <FaStar className="text-yellow-300 w-4 h-4" />
                <FaStar className="text-yellow-300 w-4 h-4" />
                <FaStar className="text-yellow-300 w-4 h-4" />
                <FaStar className="text-yellow-300 w-4 h-4" />
              </div>
              <p className="text-white font-bold text-lg leading-tight">
                Awards &amp; Recognition
              </p>
              <p className="text-violet-200 text-sm mt-1">
                Trusted by Industry Leaders
              </p>
            </div>

            {/* Divider */}
            <div className="w-px h-16 bg-white/20 hidden lg:block shrink-0" />

            {/* Badge cards */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 flex-1">
              {badges.map((b) => (
                <div
                  key={b.src}
                  className="bg-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col items-center gap-2 min-w-[120px]"
                >
                  <Image
                    src={`/Assets/${b.src}.webp`}
                    width={110}
                    height={50}
                    alt={b.label}
                    className="h-12 w-auto object-contain"
                  />
                  <span className="text-xs text-gray-500 font-medium text-center leading-tight">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="bg-gray-50 border-t border-gray-200 px-4 sm:px-6 md:px-12 xl:px-28 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-400 text-sm">
              © 2017–2025 Future IT Touch Pvt. Ltd. · Made with{" "}
              <FaHeart className="inline text-red-400 mx-1 w-3 h-3" /> in Chandigarh
            </p>
            <div className="flex gap-5">
              {[
                { label: "Privacy Policy", href: "/Privacy-Policy" },
                { label: "Terms", href: "/Terms-Conditions" },
                { label: "FAQ", href: "/faq" },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-gray-400 hover:text-violet-600 text-sm transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
