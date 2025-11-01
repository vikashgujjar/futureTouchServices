"use client";

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";   // ✅ ADD THIS

// import OtpInput from "otp-input-react";
const OtpInput = dynamic(() => import("otp-input-react"), { ssr: false });import Link from "next/link";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import help from "../Assets/call-agent.webp";
import { auth } from "../firebase.config";

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
          const response = await axios.post(
            "https://futuretouchmail.onrender.com/send-email",
            urlEncodedData
          );
          setLoading(false);
          console.log(response);

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

  return (
    <div
      id="scroll-down"
      className="bg-[#EEECFF] py-12 lg:py-0 px-0 xl:px-10 contact-bg overflow-hidden mt-0 sm:mt-0 md:mt-20 "
    >
      <div id="recaptcha-container"></div>
      <div className="mx-auto relative">
        <div className="flex items-center flex-col p-3 sm:p-3 md:p-5 xl:p-16 lg:flex-row my-4">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 z-0 relative bg-white px-5 sm:px-5 md:px-10 lg:px-16 rounded-2xl py-14 my-4">
            <div className="mb-4 lg:flex">
              <div className="lg:w-1/2 lg:pr-2">
                <input
                  type="text"
                  name="S_name"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded px-4 py-4"
                  value={formData.S_name}
                  onChange={handleChange}
                />
              </div>
              <div className="lg:w-1/2 lg:pl-2 mt-4 lg:mt-0">
                <input
                  type="email"
                  name="S_email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded px-4 py-4"
                  value={formData.S_email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4 lg:flex">
              <div className="lg:w-1/2 lg:pr-2">
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  className="w-full border border-gray-300 photo-main rounded px-4 pt-3"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-2 mt-4 lg:mt-0">
                <input
                  type="text"
                  name="skype_id"
                  placeholder="Skype ID"
                  className="w-full border border-gray-300 rounded px-4 py-4"
                  value={formData.skype_id || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4 lg:flex">
              <div className="w-full relative border-gray-300">
                <select
                  onChange={handleChange}
                  name="cr_code"
                  value={formData.cr_code}
                  className="absolute h-full w-20 border-l-2 border-t-2 border-b-2 border-gray-300 text-sm rounded shadow-custom-second"
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
                  placeholder="Phone Number *"
                  value={formData.S_phone}
                  onChange={handleChange}
                  className="w-full border pl-[6rem] border-gray-300 rounded px-4 py-4"
                />
              </div>
            </div>

            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Type your query"
              className="w-full border border-gray-300 rounded px-4 py-4 mb-4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="button"
              onClick={onSignup}
              className="bg-gradient-to-r from-teal-400 to-indigo-600 hover:from-indigo-400 hover:to-teal-600 text-white font-bold py-4 w-full px-4 rounded"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-200"></div>
                </div>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </div>

          {/* OTP Popup */}
          {showOTP && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-[10]">
              <div className="bg-slate-100 flex flex-col justify-center items-center p-8 rounded-lg shadow-lg max-w-md w-full relative">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition duration-200"
                  onClick={() => setShowOTP(false)}
                >
                  ✕
                </button>

                <h2 className="text-2xl mb-4 text-center text-gray-800 font-semibold">
                  Phone Number Verification
                </h2>
                <p className="text-center text-gray-600 mb-6">
                  Enter the OTP sent to your phone
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

                <p className="text-center text-gray-600 mt-4">
                  Please wait for 2-3 minutes for the OTP to arrive.
                </p>

                <div className="flex w-full justify-around mt-10">
                  <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition duration-200">
                    Resend OTP
                  </button>
                  <button
                    disabled={loading}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                    onClick={onOTPVerify}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-200"></div>
                      </div>
                    ) : (
                      <span>Submit</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar Section */}
          <div className="w-full lg:w-1/2 mx-5 relative z-0 bg-white px-5 sm:px-5 md:px-10 lg:px-16 rounded-2xl py-14">
            <div className="mb-5">
              <span
                className="text-4xl mb-8 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
                style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
              >
                Request A Free Quote <br />
              </span>
              <h3 className="text-2xl text-gray-700 mt-2 font-bold mb-4">
                Ready to Turn Your Vision into Reality?
              </h3>

              <p className="text-base font-medium text-gray-500">
                Fill out the form below and share the specifics of your project.
                Whether it's a bold new venture, a creative initiative, or an
                innovative solution, we're here to help you make it happen. Your
                journey starts here—let’s shape the future together.
              </p>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/Assets/call-agent.webp"
                width={400}
                height={400}
                alt="help-line"
                className="w-16 bg-black rounded-full p-3"
              />
              <div>
                <span className="block font-bold text-xl bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text">
                  Help Line:
                </span>
                <Link
                  href="tel:+917056937000"
                  className="text-base font-medium"
                >
                  +91 70569-37000
                </Link>
              </div>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27444.62041181375!2d76.683024!3d30.702160000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a838963fb5049%3A0x4188b8c6dd4c764a!2sFuture%20IT%20Touch%20Private%20Limited%20%7C%20Website%20Design%20and%20Development%20Company!5e0!3m2!1sen!2sin!4v1716290401199!5m2!1sen!2sin"
                width="100%"
                height="190px"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Future IT Touch Private Limited - Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;


