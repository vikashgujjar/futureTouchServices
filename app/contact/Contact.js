// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaLock, FaPhoneAlt, FaEnvelope, FaSkype } from "react-icons/fa";
// import OtpInput from "react-otp-input";
// import Location from "../components/Location";
// import CommonBanner from "../components/CommonBanner";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

"use client"
import React, { useState, useEffect } from "react";

import Link from "next/link";

import Location from "../components/Location";
import { FaEnvelope, FaLock, FaPhoneAlt, FaSkype } from "react-icons/fa";

import dynamic from "next/dynamic";  
const OtpInput = dynamic(() => import("otp-input-react"), { ssr: false });
import Swal from 'sweetalert2';


import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { auth } from "../firebase.config";
import CommonBanner from "../components/CommonBanner";

export default function Page() {
   const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState('');
  const [countryCodes, setCountryCodes] = useState([]);


  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    S_name: '',
    S_email: '',
    S_phone: '',
    S_subject: '',
    cr_code: '+91',
    check_term: '',
    userEmailsir: 'info@futuretouch.in',
    message: ''
  });





  


  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
        
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  }
  function onSignup() {


    const { S_name, S_email, S_phone, message } = formData;

    if (!S_name || !S_email || !S_phone || !message) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill out all the mandatory fields.',
      });
      return;
    }


    setShowOTP(true);
    onCaptchVerify();
    toast.success('OTP sent successfully!');

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

  function reSend() {


    const { S_name, S_email, S_phone, message } = formData;

    if (!S_name || !S_email || !S_phone || !message) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill out all the mandatory fields.',
      });
      return;
    }


    
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = formData.cr_code + formData.S_phone;
    console.log(formatPh)
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
      .then(async (res) => {
        console.log(res);


        const urlEncodedData = new URLSearchParams();
        for (const [key, value] of Object.entries(formData)) {
          urlEncodedData.append(key, value);
        }

        try {
          const response = await axios.post('https://futuretouchmail.onrender.com/send-email', urlEncodedData);
          setLoading(false);
          console.log(response);
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
              setLoading(false);
              console.log("hello User")

              setOTP(false)

              window.location.href = '/';

            }
          });

        } catch (error) {
          setLoading(false);
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }

      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Invalid OTP',
          text: 'Please enter the correct OTP.',
        });
      });
  };



  const handleChange = (e) => {
    console.log();
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const urlEncodedData = new URLSearchParams();
    for (const [key, value] of Object.entries(formData)) {
      urlEncodedData.append(key, value);
    }

    try {
      const response = axios.post('https://futuretouchmail.onrender.com/send-email', urlEncodedData);
      setLoading(false);
      setFormData({

        S_name: '',
        S_email: '',
        S_phone: '',
        S_subject: '',
        message: ''
      });

      console.log(response)

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



  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //     .then(response => response.json())
  //     .then(data => {
  //       const codes = data.map(country => ({
  //         shortName: country.cca2,
  //         dialCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '')
  //       })).filter(country => country.dialCode);
  //       console.log(codes)
  //       setCountryCodes(codes);
  //     })
  //     .catch(error => console.error('Error fetching country codes:', error));
  // }, []);




  return (
    <>
      <CommonBanner title=" Contact Us" breadcrumb="Contact" />
      <div className=" px-5 md:px-12 xl:px-28 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4  mx-auto container ">
          {/* <div className="md:col-span-7">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#050748]">
                Have Question? Write a Message
              </h2>
              <p className="my-5 text-[#6a6a8e] text-lg">
                We will catch you as early as we receive the message
              </p>
            </div>

            <div className="px-12 max-sm:px-3 max-md:px-5 pt-10">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    id="form_name"
                    type="text"
                    name="S_name"
                    placeholder="Enter your name *"
                    required
                    value={formData.S_name}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6] focus:outline-none focus:border-[#ff1f8e]"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    id="form_email"
                    type="email"
                    name="S_email"
                    placeholder="Enter your email *"
                    required
                    value={formData.S_email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6] focus:outline-none focus:border-[#ff1f8e]"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 mb-6">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 relative mt-5">
                      <select
                        onChange={handleChange}
                        name="cr_code"
                        value={formData.cr_code}
                        className="absolute h-full w-20 text-sm border-b-2 border-[#e6e6e6] outline-none focus:border-[#ff1f8e]"
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
                        value={formData.S_phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        className="w-full h-12 pl-[6rem] text-black outline-none border-b-2 border-[#e6e6e6] focus:border-[#ff1f8e]"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full px-3">
                  <select
                    id="form_need"
                    name="S_subject"
                    required
                    value={formData.S_subject}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 mb-3 text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6] focus:outline-none focus:border-[#ff1f8e]"
                  >
                    <option value="">Select Service</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Web Design">Web Design</option>
                    <option value="App Design">App Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <textarea
                id="form_message"
                name="message"
                placeholder="Message for me *"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="block w-full px-4 py-3 mb-3 text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6] focus:outline-none focus:border-[#ff1f8e]"
              ></textarea>
            </div>

            <div className="px-12 mt-5">
              <input
                type="checkbox"
                className="focus:border-[#ff1f8e]"
                id="customCheck"
                name="check_term"
                checked={formData.check_term}
                onChange={() =>
                  setFormData((prev) => ({
                    ...prev,
                    check_term: !prev.check_term,
                  }))
                }
              />
              <label
                className="text-[#6a6a8e] text-base ml-2"
                htmlFor="customCheck"
              >
                I agree to the{" "}
                <Link href="#" className="text-black">
                  Terms &amp; Conditions
                </Link>{" "}
                of Business Name.
              </label>
            </div>

            <div className="fieldsets mt-7 px-20">
              <button
                className="lnk px-8 w-full text-white text-lg font-normal leading-[56px] bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] rounded-full shadow-md outline-none border-none"
                onClick={onSignup}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-200"></div>
                  </div>
                ) : (
                  <span>Submit</span>
                )}
              </button>

              {showOTP && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                  <div className="bg-slate-100 flex flex-col justify-center items-center p-8 rounded-lg shadow-lg max-w-md w-full relative">
                    <button
                      className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                      onClick={() => setShowOTP(false)}
                    >
                      ✖
                    </button>

                    <h2 className="text-2xl mb-4 text-gray-800 font-semibold">
                      Phone Number Verification
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Enter the OTP sent to your phone
                    </p>

                    <OtpInput
                      value={otp}
                      onChange={setOTP}
                      numInputs={6}
                      inputStyle="w-10 h-10 border rounded text-center"
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                    />

                    <p className="text-gray-600 mt-4">
                      Please wait 2-3 minutes for OTP.
                    </p>

                    <div className="flex w-full justify-around mt-10">
                      <button
                        className="px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded"
                        onClick={reSend}
                      >
                        Resend OTP
                      </button>
                      <button
                        disabled={loading}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={onOTPVerify}
                      >
                        {loading ? "..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            

            <p className="flex gap-4 justify-center items-center text-[#6a6a8e] mt-10">
              <FaLock /> We hate spam, and we respect your privacy.
            </p>
          </div> */}

             <div className="md:col-span-7 ">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#050748]">
              Have Question? Write a Message
            </h2>
            <p className="my-5 text-[#6a6a8e] text-lg">
              We will catch you as early as we receive the message
            </p>
          </div>

          <div className="px-12  max-sm:px-3 max-md:px-5 pt-10">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  id="form_name"
                  type="text"
                  name="S_name"
                  placeholder="Enter your name *"
                  required
                  value={formData.S_name}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6]  focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  id="form_email"
                  type="email"
                  name="S_email"
                  placeholder="Enter your email *"
                  required
                  value={formData.S_email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6]  focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 mb-6 md:mb-0">
                <div className="flex flex-wrap max-sm:gap-6 -mx-3 mb-6">
                  <div className="w-full px-3 relative mt-5   ">
                    <select
                      onChange={handleChange}
                      name="cr_code"
                      value={formData.cr_code}
                      className="absolute h-full w-20 text-sm shadow-custom-second border-b-2 outline-0 border-[#e6e6e6] focus:bg-white focus:border-[#ff1f8e]"
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
                      value={formData.S_phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className={`w-full h-12 pl-[6rem] leading-tight text-black -full outline-0 border-b-2 border-[#e6e6e6] focus:bg-white focus:border-[#ff1f8e]  full-name`}
                    />
                  </div>

                </div>
                <div className="text-red-500 text-sm"></div>
              </div>
              <div className="w-full px-3">
                <select
                  id="form_need"
                  name="S_subject"
                  required
                  value={formData.S_subject}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6]  focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
                >
                  <option value="">Select Service</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Web Design">Web Design</option>
                  <option value="App Design">App Design</option>
                  <option value="Other">Other</option>
                </select>
                <div className="text-red-500 text-sm"></div>
              </div>
            </div>

            <textarea
              id="form_message"
              name="message"
              placeholder="Message for me *"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6]  focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
            ></textarea>
          </div>

          <div className="px-12 mt-5">
            <input
              type="checkbox"
              className="custom-control-input focus:bg-white focus:border-[#ff1f8e]"
              id="customCheck"
              name="check_term"
              checked={formData.check_term}
              onChange={() =>
                setFormData({
                  ...formData,
                  check_term: !formData.check_term,
                })
              }
            />
            <label className="text-[#6a6a8e] text-base ml-2" htmlFor="customCheck">
              I agree to the <Link href="#" className="text-black">Terms &amp; Conditions</Link> of
              Business Name.
            </label>
          </div>
          <div className="fieldsets mt-7 px-20">
            <button className="lnk px-8 py-0 w-full text-white text-lg font-normal leading-[56px] bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] rounded-full shadow-[0_10px_15px_0_rgba(233,30,99,0.15)] outline-none border-none inline-block relative" onClick={onSignup} >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-200"></div>
                </div>
              ) : (
                <span>Submit</span>
              )}
            </button>



            {showOTP && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="bg-slate-100 flex flex-col justify-center items-center p-8 rounded-lg shadow-lg max-w-md w-full relative">
                <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition duration-200"
       onClick={()=>setShowOTP(false)}
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

                  <h2 className="text-2xl mb-4 text-center text-gray-800 font-semibold">Phone Number Verification</h2>
                  <p className="text-center text-gray-600 mb-6">Enter the OTP sent to your phone</p>

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

                  <p className="text-center text-gray-600 mt-4">Please wait for 2-3 minutes for the OTP to be sent to your number.</p>

                  <div className="flex w-full justify-around mt-10">
                    <button
                      className="px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition duration-200"
                      onClick={reSend}
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
          <p className="flex gap-4 justify-center items-center text-[#6a6a8e] mt-10">
            <FaLock />We hate spam, and we respect your
            privacy.
          </p>

        </div>


          <div className="md:col-span-5 space-y-6">
            <div className="info-card text-[#6a6a8e] bg-[#fff8f2] p-6 rounded-lg shadow">
              <span className="flex items-center gap-3 font-bold text-xl">
                <FaPhoneAlt /> Phone:
              </span>
              <p className="mt-3 mb-2">
                Assistance hours: Monday – Friday, 9 am to 5 pm
              </p>
              <a href="tel:+91-7056937000" className="font-semibold text-xl">
                (+91) 7056937000
              </a>
            </div>

            <div className="info-card text-[#6a6a8e] bg-[#ffecec] p-6 rounded-lg shadow">
              <span className="flex items-center gap-3 font-bold text-xl">
                <FaEnvelope /> Email:
              </span>
              <p className="mt-3 mb-2">
                Our support team will get back to you within 24h.
              </p>
              <a
                href="mailto:info@futuretouch.in"
                className="font-semibold text-xl"
              >
                info@futuretouch.in
              </a>
            </div>

            <div className="info-card text-[#6a6a8e] bg-[#eafffd] p-6 rounded-lg shadow">
              <span className="flex items-center gap-3 font-bold text-xl">
                <FaSkype /> Skype:
              </span>
              <p className="mt-3 mb-2">
                We are online: Monday – Friday, 9 am to 5 pm
              </p>
              <a href="skype:futuretouch" className="font-semibold text-xl">
                Futuretouch
              </a>
            </div>
          </div>
        </div>
      </div>
      <Location />
      <div className="px-5 md:px-12 xl:px-28">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27444.62041181375!2d76.683024!3d30.702160000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a838963fb5049%3A0x4188b8c6dd4c764a!2sFuture%20IT%20Touch%20Private%20Limited%20%7C%20Website%20Design%20and%20Development%20Company!5e0!3m2!1sen!2sin!4v1716290401199!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Future IT Touch Private Limited - Location"
        ></iframe>
      </div>
         <ToastContainer />

    </>
  );
}
