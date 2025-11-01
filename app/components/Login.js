"use client";
import React, { useState, useEffect } from "react";
import email from "../Assets/email.webp";
import name from "../Assets/name.webp";
import phone from "../Assets/phone_1.webp";
import skype from "../Assets/skype.webp";
import site from "../Assets/website.webp";
import building from "../Assets/company_1.webp";
import country from "../Assets/map.webp";
import state from "../Assets/state.webp";
import calender from "../Assets/datetime.webp";
import range from "../Assets/budget.webp";
import project from "../Assets/project.webp";
import { FileUploader } from "react-drag-drop-files";
import Link from "next/link";
import { auth } from "../firebase.config";


import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import dynamic from "next/dynamic";   // ✅ ADD THIS

// import OtpInput from "otp-input-react";
const OtpInput = dynamic(() => import("otp-input-react"), { ssr: false });

import Swal from "sweetalert2";
import axios from "axios";
const fileTypes = ["JPG", "PNG", "GIF", "Pdf"];

// https://email.futuretouch.in/ 

// put this email

const Login = ({ handleClosePopup ,isPopupOpen}) => {

    useEffect(() => {
      if (isPopupOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isPopupOpen]);

  const [loading, setLoading] = useState(false);
  const [showOTP2, setShowOTP2] = useState(false);
  const [otp, setOTP] = useState("");




  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    S_name: "",
    S_email: "",
    S_phone: "",

    web_url: "",
    // userEmailsir: "info@futuretouch.in",
    userEmailsir: "email.futuretouch.in",
    company_name: "",
    S_subject: "",
    S_services: "",
    country: "",
    cr_code: "+91",
    state_city: "",
    service_type: "",
    budget_range: "",
    service_type: "",
    message: "",
    skype_id: "",
    term_condition: false,
    uploadfile: null,
  });

  const handleChange = (e) => {
    console.log();
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Add form submission logic here
  };

  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

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

  const handleCountryCodeChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
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

    if (!S_name || !S_email || !S_phone) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill out all the mandatory fields.",
      });
      return;
    }

    setShowOTP2(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = formData.cr_code + formData.S_phone;
    console.log(formatPh);
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP2(true);
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
      .then(async (res) => {
        console.log(res);

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
              console.log("hello User");

              setOTP(false);

              window.location.href = "/";
            }
          });
        } catch (error) {
          setLoading(false);
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Invalid OTP",
          text: "Please enter the correct OTP.",
        });
      });
  };

  const handleResendOTP = () => {
    const appVerifier = window.recaptchaVerifier;
    const formatPh = formData.cr_code + formData.S_phone;

    Swal.fire({
      title: "Resend OTP",
      text: "Are you sure you want to resend OTP?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, resend OTP",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        signInWithPhoneNumber(auth, formatPh, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setLoading(false);
            setShowOTP2(true);
            Swal.fire({
              icon: "success",
              title: "OTP Resent",
              text: "OTP has been successfully resent.",
            });
          })
          .catch((error) => {
            setLoading(false);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Failed to resend OTP. Please try again later.",
            });
          });
      }
    });
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700/50 z-50">
        <div className="bg-white rounded-lg p-4 w-[90%] max-w-2xl relative">
          <button
            onClick={handleClosePopup}
            className="!absolute   custom-close-button  z-[999] lg:top-[1%] right-2 text-gray-600 "
          >
            &times;
          </button>

          <h3
            className="uppercase mt-0 my-5 font-sans text-2xl font-bold text-center text-[#050748]"
            style={{ fontFamily: "system-ui" }}
          >
            Get Free Quote
          </h3>

          <div id="recaptcha-container"></div>

          <input type="hidden" name="action" value="request_form" />
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2  px-3 mb-6 md:mb-0">
              <input
                type="text"
                name="S_name"
                placeholder="Full Name"
                required
                style={{ backgroundImage: `url(/Assets/name.webp)` }}
                className={`w-full h-12 px-12  text-black border-2 rounded-md border-[#e6e6e6]  full-name`}
                value={formData.S_name}
                onChange={handleChange}
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <input
                type="text"
                name="S_email"
                placeholder="Email"
                required
                                style={{ backgroundImage: `url(/Assets/email.webp)` }}

                className={`w-full h-12 px-12  text-black  border-2 rounded-md -full border-[#e6e6e6]  full-name`}
                value={formData.S_email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap max-sm:gap-6 -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 relative ">
              <select
                onChange={handleChange}
                name="cr_code"
                value={formData.cr_code}
                className="absolute h-full w-20 text-sm border-l border-y-2 rounded-md shadow-custom-second"
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
                className={`w-full h-12 pl-[85px]   border-2 rounded-md  text-black -full border-[#e6e6e6]  full-name`}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 hidden lg:block">
              <input
                type="text"
                placeholder="Skype ID"
                     style={{ backgroundImage: `url(/Assets/skype.webp)` }}

                className={`w-full h-12 px-12 border-2 rounded-md  text-black -full border-[#e6e6e6] bg-[url(${skype})] full-name `}
                name="skype_id"
                required
                value={formData.skype_id}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex max-md:block  -mx-3 mb-0 max-md:mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 max-md:mb-6">
              <select
                name="start_time"
                className={`w-full h-12 px-12 border-2 rounded-md text-black -full border-[#e6e6e6]  full-name`}
                value={formData.start_time}
                style={{ backgroundImage: `url(/Assets/datetime.webp)` }}

                onChange={handleChange}
              >
                <option value="">When would you like us to start?</option>
                <option value="ASAP">ASAP</option>
                <option value="In a week">In a week</option>
                <option value="In a month">In a month</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 max-md:mb-0">
              <select
                name="service_type"
                className={`w-full h-12 px-12 border-2 rounded-md  text-black -full border-[#e6e6e6]  full-name`}
                value={formData.service_type}
               style={{ backgroundImage: `url(/Assets/website.webp)` }}

                onChange={handleChange}
              >
                <option value="">Choose Our Services</option>
                <option value="Web Designing">Web Designing</option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap max-sm:gap-6  -mx-3 mb-6">
            <div className="w-full md:w-[39%] px-3">
              <input
                type="text"
                name="budget_range"
                placeholder="Enter your budget range"
                                     style={{ backgroundImage: `url(/Assets/budget.webp)` }}

                className={`w-full h-12 border-2 rounded-md px-12  text-black -full border-[#e6e6e6] bg-[url(${range})] full-name`}
                value={formData.budget_range}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-[60%] px-3 hidden lg:block">
              <div className="dropify-wrapper">
                <FileUploader name="file" types={fileTypes} className="h-10" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-full    max-md:mb-0 hidden lg:block">
            <textarea
              name="message"
              placeholder="Project Description"
              className={`w-full h-[143px] max-sm:h-[90px] border-2 rounded-md px-12 py-2 text-black  border-[#e6e6e6] bg-[url(${project})] full-name`}
            style={{ backgroundImage: `url(/Assets/project.webp)` }}

              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* terms and conditon  */}

          <div className="flex   items-center flex-col">
            <div className="flex w-full items-start mt-4">
              <input
                type="checkbox"
                name="term_condition"
                className="dotted-border-checkbox"
                checked={formData.term_condition}
                onChange={handleChange}
              />

              <p className="ml-2  text-gray-700 text-justify">
                I accept{" "}
                <Link
                  href="/Terms-Conditions"
                  target="blank"
                  className="font-semibold"
                >
                  {" "}
                  terms & conditon
                </Link>
              </p>
            </div>
            <div className="flex justify-center w-1/2 mt-4 ">
              <button
                type="submit"
                onClick={onSignup}
                className="lnk px-8 py-0 w-full font-semibold  text-white text-2xl leading-[56px] bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] -full rounded-full shadow-[0_10px_15px_0_rgba(233,30,99,0.15)] outline-none border-none inline-block relative"
              >
                Submit <span className="circle dkpr"></span>
              </button>
            </div>
          </div>

          {showOTP2 && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="bg-slate-100 flex flex-col justify-center items-center p-8 rounded-lg shadow-lg max-w-md w-full relative">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition duration-200"
                  onClick={() => setShowOTP2(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <h2 className="text-2xl mb-4 text-center text-gray-800 font-semibold">
                  Phone Number Verification
                </h2>
                <p className="text-center text-gray-600 mb-6">
                  Enter the OTP sent to your phone
                </p>

                <OtpInput
                  value={otp}
                  onChange={(otp) => {
                    setOTP(otp);
                  }}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container"
                />

                <p className="text-center text-gray-600 mt-4">
                  Please wait for 2-3 minutes for the OTP to be sent to your
                  number.
                </p>

                <div className="flex w-full justify-around mt-10">
                  <button
                    className="px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition duration-200"
                    onClick={handleResendOTP}
                  >
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
        </div>
      </div>
    </>
  );
};

export default Login;
