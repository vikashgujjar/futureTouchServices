"use client";

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.config";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";

const OtpInput = dynamic(() => import("otp-input-react"), { ssr: false });

const Forms = () => {
  const router = useRouter();
  const [showOTP, setShowOTP] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    S_name: "",
    S_email: "",
    S_phone: "",
    S_subject: "",
    cr_code: "+91",
    userEmailsir: "Info@digitalyaatra.com",
    message: "",
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const codes = data
          .map((country) => ({
            shortName: country.cca2,
            dialCode:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : ""),
          }))
          .filter((country) => country.dialCode);
        setCountryCodes(codes);
      })
      .catch((error) => console.error("Error fetching country codes:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function onCaptchVerify() {
    if (typeof window !== "undefined" && !window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => { onSignup(); },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    const { S_name, S_email, S_phone, message } = formData;
    if (!S_name || !S_email || !S_phone || !message) {
      Swal.fire({ icon: "warning", title: "Missing Information", text: "Please fill out all the mandatory fields." });
      return;
    }
    setShowOTP(true);
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = formData.cr_code + formData.S_phone;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
      })
      .catch((error) => { console.log(error); setLoading(false); });
  }

  const onOTPVerify = async () => {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async () => {
        const urlEncodedData = new URLSearchParams();
        for (const [key, value] of Object.entries(formData)) {
          urlEncodedData.append(key, value);
        }
        try {
          await axios.post("https://futuretouchmail.onrender.com/send-email", urlEncodedData);
          setLoading(false);
          setFormData({ S_name: "", S_email: "", S_phone: "", S_subject: "", message: "" });
          Swal.fire({ icon: "success", title: "Success!", text: "Your query has been submitted." }).then(
            (result) => { if (result.isConfirmed) { setLoading(false); setOTP(""); router.push("/"); } }
          );
        } catch {
          setLoading(false);
          Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!" });
        }
      })
      .catch(() => {
        setLoading(false);
        Swal.fire({ icon: "error", title: "Invalid OTP", text: "Please enter the correct OTP." });
      });
  };

  /* ── Same dark input style as GetNewInsight ── */
  const inputCls =
    "w-full rounded-xl border border-white/10 bg-white/[0.08] px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none focus:border-violet-400/60 focus:bg-white/[0.12] focus:ring-2 focus:ring-violet-500/20 transition-all duration-200";

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      label: "Address",
      value: "SCO 54-55, 2nd Floor, Sector 34A, Chandigarh 160022",
      accent: "from-violet-500 to-violet-700",
    },
    {
      icon: <FaPhoneAlt className="w-4 h-4" />,
      label: "Phone",
      value: "+91 70569-37000",
      href: "tel:+917056937000",
      accent: "from-indigo-500 to-indigo-700",
    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      label: "Email",
      value: "info@futuretouch.in",
      href: "mailto:info@futuretouch.in",
      accent: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section
      id="scroll-down"
      className="relative overflow-hidden bg-[#07021a] py-24"
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />

      <div id="recaptcha-container" />

      <div className="relative px-4 sm:px-6 md:px-12 xl:px-28">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-4xl bg-gradient-to-r from-violet-400 to-indigo-300 text-transparent bg-clip-text tracking-widest block mb-2"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-white/50 text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Share your project details and our team will get back to you within
            24 hours with a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: contact info + map ── */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.09] transition-all duration-200"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shrink-0 shadow-md`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-violet-300 text-xs font-semibold uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-white text-sm font-medium hover:text-violet-300 transition-colors"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-violet-900/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27444.62041181375!2d76.683024!3d30.702160000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a838963fb5049%3A0x4188b8c6dd4c764a!2sFuture%20IT%20Touch%20Private%20Limited%20%7C%20Website%20Design%20and%20Development%20Company!5e0!3m2!1sen!2sin!4v1716290401199!5m2!1sen!2sin"
                width="100%"
                height="275"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Future IT Touch Location"
              />
            </div>
          </div>

          {/* ── Right: form card (dark glassmorphism) ── */}
          <div className="bg-white/[0.06] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            {/* Form header */}
            <div className="flex items-center gap-4 mb-7">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-900/40 shrink-0">
                <FaEnvelope className="text-white text-base" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-none">
                  Request A Free Quote
                </h3>
                <p className="text-white/40 text-xs mt-1">
                  Fill in the details and we&apos;ll shape your vision into reality.
                </p>
              </div>
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                name="S_name"
                placeholder="Your name"
                className={inputCls}
                value={formData.S_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="S_email"
                placeholder="Email address"
                className={inputCls}
                value={formData.S_email}
                onChange={handleChange}
              />
            </div>

            {/* File + Skype */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                type="file"
                name="photo"
                accept="image/*"
                className="w-full rounded-xl border border-white/10 bg-white/[0.08] px-4 pt-3 pb-2.5 text-sm text-white/50 outline-none focus:border-violet-400/60 transition-all duration-200 file:mr-3 file:text-xs file:text-violet-300 file:bg-transparent file:border-0 file:font-semibold cursor-pointer"
              />
              <input
                type="text"
                name="skype_id"
                placeholder="Skype ID (optional)"
                className={inputCls}
                value={formData.skype_id || ""}
                onChange={handleChange}
              />
            </div>

            {/* Phone with country code */}
            <div className="relative mb-3">
              <select
                onChange={handleChange}
                name="cr_code"
                value={formData.cr_code}
                className="absolute h-full w-24 border-r border-white/10 bg-[#0f0720] text-white text-xs rounded-l-xl px-2 outline-none focus:ring-0 cursor-pointer"
              >
                {countryCodes.map((country, index) => (
                  <option key={index} value={country.dialCode}>
                    {country.shortName} ({country.dialCode})
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="S_phone"
                placeholder="Phone number *"
                value={formData.S_phone}
                onChange={handleChange}
                className={`${inputCls} pl-28`}
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your project…"
              className={`${inputCls} mb-5 resize-none`}
              value={formData.message}
              onChange={handleChange}
            />

            {/* Submit */}
            <button
              type="button"
              onClick={onSignup}
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-violet-900/40 hover:shadow-violet-600/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white/60" />
                  Sending…
                </div>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Send Message &amp; Get Free Quote
                  <FaArrowRight className="w-3.5 h-3.5" />
                </span>
              )}
            </button>

            {/* Privacy note */}
            <p className="text-center text-xs text-white/30 mt-4">
              We respond within 24 hours · No spam · 100% confidential
            </p>
          </div>
        </div>
      </div>

      {/* ── OTP Popup ── */}
      {showOTP && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm z-50">
          <div className="bg-white/[0.08] border border-white/15 backdrop-blur-md flex flex-col justify-center items-center p-8 rounded-3xl shadow-2xl max-w-md w-full mx-4 relative">
            <button
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition"
              onClick={() => setShowOTP(false)}
            >
              ✕
            </button>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg shadow-violet-900/40">
              <span className="text-white text-2xl">📱</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-1 text-center">
              Verify Your Phone
            </h2>
            <p className="text-center text-white/50 text-sm mb-6">
              Enter the 6-digit OTP sent to your phone number
            </p>
            <OtpInput
              value={otp}
              onChange={(otp) => setOTP(otp)}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="opt-container"
            />
            <p className="text-center text-white/30 text-xs mt-4">
              Please wait 2–3 minutes for the OTP to arrive.
            </p>
            <div className="flex w-full gap-3 mt-8">
              <button className="flex-1 py-3 rounded-xl border border-violet-400/50 text-violet-300 text-sm font-semibold hover:bg-violet-500/10 transition">
                Resend OTP
              </button>
              <button
                disabled={loading}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:from-violet-500 hover:to-indigo-500 transition disabled:opacity-60"
                onClick={onOTPVerify}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white/60" />
                  </div>
                ) : (
                  "Verify & Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Forms;
