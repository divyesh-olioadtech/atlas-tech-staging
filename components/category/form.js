import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DotLoader from "react-spinners/SyncLoader";
import { Element } from "react-scroll";
import { getTracking } from "../../lib/tracker";
const ContactForm = ({
  formcontent = {
    title: "Ready to Build? Let’s Talk!",
    description:
      "Whether you’re expanding existing facilities or starting new projects, we’re here to help you achieve optimal results. Complete the form, and our engineers will provide a customized solution within 24 hours.",
  },
  page,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    product: "",
    comment: "",
    page: page || (typeof window !== "undefined" ? window.location.href : ""),
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess(null);
  };

  const handleProductChange = (e) => {
    setFormData({ ...formData, product: e.target.value });
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
    if (!formData.product) newErrors.product = "Please specify a product";
    if (!formData.comment) newErrors.comment = "Comment cannot be empty";

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
          headers: {
            "Content-Type": "application/json",
          },
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
            page:
              page ||
              (typeof window !== "undefined" ? window.location.href : ""),
          });
          setErrors({});
          setSuccess("Email sent successfully!");
        }
      } catch (error) {
        setLoading(false);
        console.error("Error sending email:", error);
        setSuccess("Failed to send email. Please try again later.");
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <Element name="contact-form">
      <div
        id="contact-form"
        className="w-full bg-gradient-to-r from-[#1A1D2D] to-[#252B4D]"
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-8 px-[5%] py-10 sm:py-12 md:py-16 lg:py-20">
          {/* Left Section */}
          <div className="text-white flex flex-col justify-between gap-5 lg:w-[50%] md:pr-[10%]">
            <div>
              <p className="text-[14px] font-bold tracking-widest mb-5 md:mb-8">
                CONNECT WITH US
              </p>
              <h2 className="font-bold text-[24px] mb-2 sm:text-[28px] md:text-[35px] lg:text-[64px] leading-[120%] ">
                {formcontent?.title}
              </h2>
              <p className="text-[16px]">{formcontent?.description}</p>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="bg-[#212436] p-5 lg:w-[50%] rounded-[12px]"
            style={{
              border: "1px solid transparent",
              borderImageSource:
                "linear-gradient(180deg, #302F47 0%, #2D2C34 100%)",
              borderImageSlice: 1,
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 rounded-[12px]">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="text-[14px] mb-1 text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`p-2 rounded-[5px] bg-[#2C2F3F] border ${
                      errors.fullName ? "border-red-500" : "border-gray-600"
                    } text-white text-[16px]`}
                    placeholder="Full Name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-[14px] mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div className="flex flex-col">
                  <label className="text-[14px] mb-1 text-white">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`p-2 rounded-[5px] bg-[#2C2F3F] border ${
                      errors.companyName ? "border-red-500" : "border-gray-600"
                    } text-white text-[16px]`}
                    placeholder="Company Name"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-[14px] mt-1">
                      {errors.companyName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="text-[14px] mb-1 text-white">
                    Mobile Number
                  </label>
                  <PhoneInput
                    country={"in"}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputStyle={{
                      background: "#2C2F3F",
                      color: "white",
                      width: "100%",
                      borderRadius: "5px",
                      height: "40px",
                      fontSize: "16px",
                      border: errors.phone
                        ? "1px solid #f56565"
                        : "1px solid #4b5563",
                      paddingLeft: "62px",
                    }}
                    containerStyle={{ width: "100%" }}
                    buttonStyle={{
                      background: "#2C2F3F",
                      borderRadius: "5px 0 0 5px",
                      border: errors.phone
                        ? "1px solid #f56565"
                        : "1px solid #4b5563",
                    }}
                    placeholder="Mobile Number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[14px] mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-[14px] mb-1 text-white">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`p-2 rounded-[5px] bg-[#2C2F3F] border ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    } text-white text-[16px]`}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[14px] mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Product */}
                <div className="flex flex-col col-span-1 sm:col-span-2">
                  <label className="text-[14px] mb-1 text-white">
                    Product you are interested in
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleProductChange}
                    className={`p-2 rounded-[5px] bg-[#2C2F3F] border ${
                      errors.product ? "border-red-500" : "border-gray-600"
                    } text-white text-[16px]`}
                  >
                    <option value="">Select a product</option>
                    <option value="Asphalt Plants">Asphalt Plants</option>
                    <option value="Drum Mix Plants">Drum Mix Plants</option>
                    <option value="Bitumen & Asphalt Machines">
                      Bitumen & Asphalt Machines
                    </option>
                    <option value="Wet Mix Plants">Wet Mix Plants</option>
                    <option value="Concrete Batching Plants">
                      Concrete Batching Plants
                    </option>
                    <option value="Concrete Mixers & Pumps">
                      Concrete Mixers & Pumps
                    </option>
                    <option value="Kerb & Road Cutting Machines">
                      Kerb & Road Cutting Machines
                    </option>
                    <option value="Other Road Construction Machinery">
                      Other Road Construction Machinery
                    </option>
                  </select>
                  {errors.product && (
                    <p className="text-red-500 text-[14px] mt-1">
                      {errors.product}
                    </p>
                  )}
                </div>
              </div>

              {/* Comment */}
              <div className="flex flex-col">
                <label className="text-[14px] mb-1 text-white">
                  Comment/Remark
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className={`p-2 rounded-[5px] bg-[#2C2F3F] border ${
                    errors.comment ? "border-red-500" : "border-gray-600"
                  } text-white text-[16px]`}
                  placeholder="Comment"
                  rows="3"
                />
                {errors.comment && (
                  <p className="text-red-500 text-[14px] mt-1">
                    {errors.comment}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col items-start w-full gap-2 mt-4 md:flex-row md:gap-4">
                <button
                  type="submit"
                  className="px-[30px] cursor-pointer p-[15px] bg-[#8FD254] text-[#121C17] font-semibold rounded-[5px] hover:bg-[#212436] hover:text-white border border-[#8FD254] transition-all"
                >
                  <div className="flex items-center justify-center gap-2">
                    {loading ? "Sending.." : "Enquire Now"}
                    <DotLoader color="#ffffff" loading={loading} size={10} />
                  </div>
                </button>
                {/* <button
                  type="button"
                  className="flex-1 p-[10px] md:p-[15px] bg-[#212436] font-semibold rounded-[5px] hover:bg-[#8FD254] hover:text-[#121C17] text-white border border-[#8FD254] transition-all"
                >
                  Download Brochure
                </button> */}
              </div>

              {success && (
                <p className="text-green-500 text-[16px] text-center mt-2">
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ContactForm;
