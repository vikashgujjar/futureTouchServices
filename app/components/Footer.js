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

const contactItems = [
  {
    Icon: FaMapMarkerAlt,
    value: "SCO 54-55, 2nd Floor, Near Mukat Hospital, Sector 34A, Chandigarh 160022",
  },
  {
    Icon: FaEnvelope,
    value: "info@futuretouch.in",
    href: "mailto:info@futuretouch.in",
  },
  {
    Icon: FaPhoneAlt,
    value: "+91-7056937000",
    href: "tel:+91-7056937000",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">

      {/* ── Main Grid ── */}
      <div className="px-4 sm:px-6 md:px-12 xl:px-28 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Assets/secondary-logo.webp"
                width={180}
                height={45}
                alt="Future IT Touch Logo"
                className="w-40 h-auto"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
              Future IT Touch Pvt. Ltd. — an innovative one-stop Web Solution Company in
              Chandigarh delivering quality digital services to businesses globally since 2017.
            </p>

            {/* Social icons */}
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">
              Follow Us
            </p>
            <div className="flex flex-wrap gap-1.5">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 hover:bg-violet-600 hover:border-violet-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">
              Quick Links
              <span className="block w-6 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 mt-1.5 rounded-full" />
            </h5>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-gray-500 hover:text-violet-600 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">
              Company
              <span className="block w-6 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 mt-1.5 rounded-full" />
            </h5>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-gray-500 hover:text-violet-600 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h5 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">
              Get In Touch
              <span className="block w-6 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 mt-1.5 rounded-full" />
            </h5>
            <ul className="space-y-3">
              {contactItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <item.Icon className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-500 hover:text-violet-600 text-sm leading-relaxed transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-500 text-sm leading-relaxed">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Awards Row ── */}
      <div className="border-t border-gray-100 bg-gray-50 px-4 sm:px-6 md:px-12 xl:px-28 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 shrink-0">
            Awards &amp; Recognition
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4">
            {badges.map((b) => (
              <div
                key={b.src}
                title={b.label}
                className="flex flex-col items-center gap-1 hover:-translate-y-0.5 transition-transform duration-200"
              >
                <Image
                  src={`/Assets/${b.src}.webp`}
                  width={80}
                  height={48}
                  alt={b.label}
                  className="h-10 w-auto object-contain"
                />
                <span className="text-[10px] text-gray-400 font-medium">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-100 px-4 sm:px-6 md:px-12 xl:px-28 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © 2017–2025 Future IT Touch Pvt. Ltd. · Made with{" "}
            <FaHeart className="inline text-red-400 mx-0.5 w-3 h-3" /> in Chandigarh
          </p>
          <div className="flex gap-4">
            {[
              { label: "Privacy Policy", href: "/Privacy-Policy" },
              { label: "Terms", href: "/Terms-Conditions" },
              { label: "FAQ", href: "/faq" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-gray-400 hover:text-violet-600 text-xs transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
