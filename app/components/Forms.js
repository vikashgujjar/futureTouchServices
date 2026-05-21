"use client";

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.config";

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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const urlEncodedData = new URLSearchParams();
    for (const [key, value] of Object.entries(formData)) {
      urlEncodedData.append(key, value);
    }

    try {
      const response = await axios.post('https://futuretouchmail.onrender.com/send-email', urlEncodedData);
      setLoading(false);
      setFormData({

        S_name: '',
        S_email: '',
        S_phone: '',
        S_subject: '',
        message: ''
      });

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your query has been submitted.',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/';
        }
      });



    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  function onCaptchVerify() {
  if (typeof window !== "undefined" && !window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          onSignup();
        },
        "expired-callback": () => {},
      },
      auth
    );
  }
}


  function onSignup() {
    const { S_name, S_email, S_phone, message } = formData;

    if (!S_name || !S_email || !S_phone || !message) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill out all the mandatory fields.",
      });
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
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
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
          await axios.post(
            "https://futuretouchmail.onrender.com/send-email",
            urlEncodedData
          );
          setLoading(false);

          setFormData({
            S_name: "",
            S_email: "",
            S_phone: "",
            S_subject: "",
            message: "",
          });

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your query has been submitted.",
          }).then((result) => {
            if (result.isConfirmed) {
              setLoading(false);
              setOTP("");
              router.push("/");
            }
          });
        } catch (error) {
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch(() => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Invalid OTP",
          text: "Please enter the correct OTP.",
        });
      });
  };

  const inputCls =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100 transition-all duration-200";

  const contactInfo = [
    {
      icon: "📍",
      label: "Address",
      value: "SCO 54-55, 2nd Floor, Sector 34A, Chandigarh 160022",
    },
    { icon: "📞", label: "Phone", value: "+91 70569-37000", href: "tel:+917056937000" },
    { icon: "✉️", label: "Email", value: "info@futuretouch.in", href: "mailto:info@futuretouch.in" },
  ];

  return (
    <section
      id="scroll-down"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-950 py-20"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div id="recaptcha-container" />

      <div className="relative px-4 sm:px-6 md:px-12 xl:px-28">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-4xl bg-gradient-to-r from-violet-400 to-indigo-300 text-transparent bg-clip-text tracking-widest block mb-2"
            style={{ fontFamily: "’Bilbo Swash Caps’, cursive" }}
          >
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-slate-400 text-base mt-4 max-w-xl mx-auto">
            Share your project details and our team will get back to you within
            24 hours with a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: contact info + map */}
          <div className="space-y-6">
            {/* Contact cards */}
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm"
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
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
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27444.62041181375!2d76.683024!3d30.702160000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a838963fb5049%3A0x4188b8c6dd4c764a!2sFuture%20IT%20Touch%20Private%20Limited%20%7C%20Website%20Design%20and%20Development%20Company!5e0!3m2!1sen!2sin!4v1716290401199!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Future IT Touch Location"
              />
            </div>
          </div>

          {/* Right: form card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              Request A Free Quote
            </h3>
            <p className="text-gray-500 text-sm mb-7">
              Fill in the details below and we&apos;ll shape your vision into
              reality.
            </p>

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="file"
                name="photo"
                accept="image/*"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 pt-3 pb-2.5 text-sm text-gray-500 outline-none focus:border-violet-400 transition-all duration-200"
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
            <div className="relative mb-4">
              <select
                onChange={handleChange}
                name="cr_code"
                value={formData.cr_code}
                className="absolute h-full w-24 border-r border-gray-200 bg-gray-50 text-xs rounded-l-xl px-2 outline-none focus:ring-0"
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
              rows={5}
              placeholder="Tell us about your project…"
              className={`${inputCls} mb-5 resize-none`}
              value={formData.message}
              onChange={handleChange}
            />

            {/* Submit */}
            <button
              type="button"
              onClick={onSignup}
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-violet-300/30 hover:shadow-violet-400/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white/60" />
                  Sending…
                </div>
              ) : (
                "Send Message & Get Free Quote"
              )}
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              We respond within 24 hours · No spam · 100% confidential
            </p>
          </div>
        </div>
      </div>

      {/* OTP Popup */}
      {showOTP && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm z-50">
          <div className="bg-white flex flex-col justify-center items-center p-8 rounded-3xl shadow-2xl max-w-md w-full mx-4 relative">
            <button
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition"
              onClick={() => setShowOTP(false)}
            >
              ✕
            </button>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg">
              <span className="text-white text-2xl">📱</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">
              Verify Your Phone
            </h2>
            <p className="text-center text-gray-500 text-sm mb-6">
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
            <p className="text-center text-gray-400 text-xs mt-4">
              Please wait 2–3 minutes for the OTP to arrive.
            </p>
            <div className="flex w-full gap-3 mt-8">
              <button className="flex-1 py-3 rounded-xl border-2 border-violet-600 text-violet-600 text-sm font-semibold hover:bg-violet-50 transition">
                Resend OTP
              </button>
              <button
                disabled={loading}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:from-violet-700 hover:to-indigo-700 transition disabled:opacity-60"
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


