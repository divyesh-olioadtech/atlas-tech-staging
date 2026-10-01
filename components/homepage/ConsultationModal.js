"use client";

import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DotLoader from "react-spinners/SyncLoader";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getTracking } from "../../lib/tracker";

const ConsultationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    product: "",
    comment: "",
    page: typeof window !== "undefined" ? window.location.href : "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess(null);
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    setSuccess(null);
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^\+?[1-9]\d{11,14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required";
    if (!formData.phone || !phoneRegex.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Enter a valid mobile number";
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.product) newErrors.product = "Please select a product";
    if (!formData.comment)
      newErrors.comment = "Please describe your project requirement";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (validate()) {
      try {
        const res = await fetch("/api/sendmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, ...getTracking() }),
        });

        if (!res.ok) {
          setLoading(false);
          throw new Error("Failed to send email");
        } else {
          setLoading(false);
          setFormData({
            fullName: "",
            companyName: "",
            phone: "",
            email: "",
            product: "",
            comment: "",
            page: typeof window !== "undefined" ? window.location.href : "",
          });
          setErrors({});
          setSuccess("Thank you! We'll contact you within 24 hours.");
        }
      } catch (error) {
        setLoading(false);
        console.error("Error sending email:", error);
        setSuccess("Failed to send. Please try again later.");
      }
    } else {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-3 py-4 sm:px-4 sm:py-6"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[1050px] max-h-[95vh] bg-white rounded-[16px] shadow-2xl flex flex-col md:flex-row p-3 sm:p-4 gap-3 sm:gap-4 overflow-hidden"
          >
            {/* ── LEFT PANEL (dark card inside white modal) ── */}
            <div className="hidden md:flex md:w-[40%] lg:w-[38%] rounded-[12px] flex-col overflow-hidden flex-shrink-0 relative" style={{ backgroundImage: "url('/images/comman/pop-bg-dark.png')", backgroundSize: "cover", backgroundPosition: "center" }}>

              {/* Logo — top */}
              <div className="flex items-center gap-3 px-6 pt-7">
                <Image
                  src="/images/comman/logo/footer-logo.png"
                  alt="Atlas Technologies"
                  width={160}
                  height={55}
                  className="object-contain"
                />
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* ISO Badge — above stats */}
              <div className="px-6 pb-4">
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 w-fit">
                  <svg
                    className="w-3.5 h-3.5 text-[#8FD254] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white text-[13px] font-semibold tracking-wide uppercase">
                    ISO Certified Company
                  </span>
                </div>
              </div>

              {/* Stats — pushed to bottom above image */}
              <div className="flex gap-5 px-6 pb-4">
                {[
                  { value: "50+", label: "Countries" },
                  { value: "2,500+", label: "Global Installations" },
                  { value: "35", label: "Years of Excellence" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-[#8FD254] font-bold text-[26px] leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-white/60 text-[13px] leading-tight mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Person image */}
              <div className="px-6 pb-6">
                <Image
                  src="/images/comman/pop-form-person.svg"
                  alt="Atlas Engineer"
                  width={380}
                  height={163}
                  className="w-full rounded-[10px] object-contain"
                />
              </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="flex flex-col flex-1 min-w-0 gap-3 px-3 py-4 overflow-y-auto sm:px-5 sm:gap-4">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute z-20 text-gray-400 transition-colors cursor-pointer top-4 right-4 hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Header */}
              <div>
                <h2 className="text-[#1A1D2D] font-bold text-[18px] sm:text-[22px] leading-tight">
                  Book a Free Consultation with Our Engineers
                </h2>
                <p className="text-gray-500 text-[12px] sm:text-[13px] mt-1">
                  Get a plant recommendation tailored to your project, within 48 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`px-3 py-2.5 rounded-[8px] bg-white border ${
                        errors.fullName ? "border-red-500" : "border-gray-200"
                      } text-[#1A1D2D] text-[14px] placeholder-gray-400 focus:outline-none focus:border-[#8FD254] transition-colors`}
                      placeholder="Full Name"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-[11px] mt-0.5">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`px-3 py-2.5 rounded-[8px] bg-white border ${
                        errors.companyName ? "border-red-500" : "border-gray-200"
                      } text-[#1A1D2D] text-[14px] placeholder-gray-400 focus:outline-none focus:border-[#8FD254] transition-colors`}
                      placeholder="Company Name"
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-[11px] mt-0.5">{errors.companyName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`px-3 py-2.5 rounded-[8px] bg-white border ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      } text-[#1A1D2D] text-[14px] placeholder-gray-400 focus:outline-none focus:border-[#8FD254] transition-colors`}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[11px] mt-0.5">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <PhoneInput
                      country={"in"}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputStyle={{
                        background: "#ffffff",
                        color: "#1A1D2D",
                        width: "100%",
                        borderRadius: "8px",
                        height: "42px",
                        fontSize: "14px",
                        border: errors.phone ? "1px solid #f56565" : "1px solid #e5e7eb",
                        paddingLeft: "62px",
                      }}
                      containerStyle={{ width: "100%" }}
                      buttonStyle={{
                        background: "#ffffff",
                        borderRadius: "8px 0 0 8px",
                        border: errors.phone ? "1px solid #f56565" : "1px solid #e5e7eb",
                      }}
                      placeholder="+91"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[11px] mt-0.5">{errors.phone}</p>
                    )}
                  </div>

                  {/* Product Dropdown — full width */}
                  <div className="flex flex-col col-span-1 sm:col-span-2">
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className={`px-3 py-2.5 rounded-[8px] bg-white border ${
                        errors.product ? "border-red-500" : "border-gray-200"
                      } text-[14px] focus:outline-none focus:border-[#8FD254] transition-colors ${
                        formData.product ? "text-[#1A1D2D]" : "text-gray-400"
                      }`}
                    >
                      <option value="">Product you are interested in</option>
                      <option value="Asphalt Plants">Asphalt Plants</option>
                      <option value="Drum Mix Plants">Drum Mix Plants</option>
                      <option value="Bitumen & Asphalt Machines">Bitumen & Asphalt Machines</option>
                      <option value="Wet Mix Plants">Wet Mix Plants</option>
                      <option value="Concrete Batching Plants">Concrete Batching Plants</option>
                      <option value="Concrete Mixers & Pumps">Concrete Mixers & Pumps</option>
                      <option value="Kerb & Road Cutting Machines">Kerb & Road Cutting Machines</option>
                      <option value="Other Road Construction Machinery">Other Road Construction Machinery</option>
                    </select>
                    {errors.product && (
                      <p className="text-red-500 text-[11px] mt-0.5">{errors.product}</p>
                    )}
                  </div>
                </div>

                {/* Project Requirement */}
                <div className="flex flex-col">
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    className={`px-3 py-2.5 rounded-[8px] bg-white border ${
                      errors.comment ? "border-red-500" : "border-gray-200"
                    } text-[#1A1D2D] text-[14px] placeholder-gray-400 focus:outline-none focus:border-[#8FD254] transition-colors resize-none`}
                    placeholder="Describe your project requirement"
                    rows="3"
                  />
                  {errors.comment && (
                    <p className="text-red-500 text-[11px] mt-0.5">{errors.comment}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-[#8FD254] text-[#121C17] font-bold rounded-[8px] hover:bg-[#7bbf45] transition-colors cursor-pointer text-[15px]"
                >
                  <div className="flex items-center justify-center gap-2">
                    {loading ? "Sending..." : "Book Free Consultation"}
                    <DotLoader color="#121C17" loading={loading} size={6} />
                  </div>
                </button>

                {success && (
                  <p
                    className={`text-[13px] text-center ${
                      success.includes("Thank") ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {success}
                  </p>
                )}

                <p className="text-gray-400 text-[12px] text-center">
                  Our engineers personally review every inquiry and respond within 48 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
