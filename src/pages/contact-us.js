import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DotLoader from "react-spinners/SyncLoader";
import Link from "next/link";
import MapIframe from "../../components/others/mapframe";
import Head from "next/head";
const Contact_us = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    product: "",
    comment: "",
    page: "Contact Us Page",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const [errors, setErrors] = useState({});

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
    // Here we expect the phone value without country code digits to be 10 digits;
    // adjust your validation accordingly if needed.
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

    if (validate()) {
      setLoading(true);
      try {
        const res = await fetch("/api/sendmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (!res.ok) {
          setLoading(false);
          throw new Error("Failed to send email");
        } else {
          // Reset form and show success message
          setLoading(false);
          setFormData({
            fullName: "",
            companyName: "",
            phone: "",
            email: "",
            product: "",
            comment: "",
          });
          setErrors({});
          setSuccess("Email sent successfully!");
        }
      } catch (error) {
        setLoading(false);

        console.error("Error sending email:", error);
        setSuccess("Failed to send email. Please try again later.");
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact Atlas Technologies | Road Construction Machinery</title>
        <meta
          name="description"
          content="Get in touch with Atlas Technologies for sales, service, and support for road construction machinery. Our team is ready to help with all equipment-related inquiries."
        />
      </Head>
      <div className="w-full mt-20 md:mt-10 ">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 px-[5%] py-10 sm:py-12 md:py-16 lg:py-20">
          {/* Left Section */}
          <div className="text-white flex flex-col justify-between gap-2 md:w-[50%] ">
            <div>
              <h1 className="font-bold text-[24px] mb-2 sm:text-[28px] md:text-[35px] lg:text-[64px] max-w-lg leading-[100%]">
                <span className="text-[#1A1D2D] ">Ready to Build?</span>{" "}
                <span className="text-[#0052B4]">Let’s Talk!</span>
              </h1>
            </div>

            <div className="">
              {/* Inquiry Section */}
              <div className="pb-2 border-b">
                <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[34px] font-bold text-[#1A1D2D]">
                  For Inquiry
                </h2>

                <div className="grid grid-cols-1 gap-4 mt-2 md:gap-6 sm:grid-cols-2 ">
                  <div>
                    <p className="text-[#0052B4] font-normal text-[16px]">
                      For Export Enquiries
                    </p>
                    <p className="text-[17px] text-[#1A1D2D] font-semibold">
                      <a
                        href="tel:+91 97238 10565"
                        className="hover:text-[#8FD254]"
                      >
                        +91 97238 10565
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#0052B4] font-normal text-[16px]">
                      For Domestic Enquiries
                    </p>
                    <div className="text-[17px]  text-[#1A1D2D] font-semibold flex flex-col md:flex-row lg:flex-col">
                      <a
                        href="tel:+919824040565"
                        className="hover:text-[#8FD254]"
                      >
                        +91 98240 40565
                      </a>

                      <a
                        href="tel:+919879554550"
                        className="hover:text-[#8FD254]"
                      >
                        +91 98795 54550
                      </a>

                      <a
                        href="tel:+919904869865"
                        className="hover:text-[#8FD254]"
                      >
                        +91 99048 69865
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="">
                <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[34px] font-bold text-[#1A1D2D]">
                  Contact Information
                </h2>

                <div className="mt-2">
                  <p className="text-[#0052B4] font-normal text-[16px]">
                    Address
                  </p>
                  <p className="text-[17px] text-[#1A1D2D] font-normal">
                    Block No. 97, Mehsana-Ahmedabad Highway, Behind Bhupendra
                    Crane House, At & Po. Ditasan - 382710 District: Mehsana,
                    Gujarat, India.
                  </p>
                </div>

                <div className="">
                  <div>
                    <p className="text-[#0052B4] font-normal text-[16px]">
                      Email
                    </p>
                    <p className="text-[17px] text-[#1A1D2D] font-semibold break-words">
                      <a
                        href="mailto:contact@atlastechnologiesindia.com"
                        className="hover:text-[#8FD254]"
                      >
                        contact@atlastechnologiesindia.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mt-2">
                  <p className="text-[#0052B4] font-normal text-[16px]">
                    Phone
                  </p>
                  <div className="text-[17px] text-[#1A1D2D] font-semibold flex flex-col md:flex-row lg:flex-col">
                    <a
                      href="tel:+91 99048 69865"
                      className="hover:text-[#8FD254]"
                    >
                      +91 99048 69865
                    </a>
                    <span className="hidden mx-2 md:inline lg:hidden">|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div
            className="bg-[#212436] p-5 md:w-[50%] rounded-[12px]"
            style={{
              borderImageSource:
                "linear-gradient(180deg, #302F47 0%, #2D2C34 100%)",
              borderImageSlice: 1,
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 rounded-[12px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-[12px]">
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

                {/* Phone Input using react-phone-input-2 */}
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
                      padding: "22px",
                      paddingLeft: "60px",
                    }}
                    containerStyle={{ width: "100%" }}
                    buttonStyle={{
                      background: "#2C2F3F",
                      borderRadius: "5px 0 0 5px",
                      border: errors.phone
                        ? "1px solid #f56565"
                        : "1px solid #4b5563",
                      padding: "5px",
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

                {/* Product Field - Full Width */}
                <div className="flex flex-col col-span-1 sm:col-span-2">
                  <label className="text-[14px] mb-1 text-white">
                    Product you are interested in
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className={`p-2 rounded-[5px] bg-[#2C2F3F] border ${
                      errors.product ? "border-red-500" : "border-gray-600"
                    } text-white text-[16px]`}
                    placeholder="Product you are interested in"
                  />
                  {errors.product && (
                    <p className="text-red-500 text-[14px] mt-1">
                      {errors.product}
                    </p>
                  )}
                </div>
              </div>

              {/* Comment Field */}
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
                  rows="5"
                />
                {errors.comment && (
                  <p className="text-red-500 text-[14px] mt-1">
                    {errors.comment}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col w-full gap-2 mt-2 md:flex-row md:gap-4">
                <button
                  type="submit"
                  className="flex-1 p-[15px] bg-[#8FD254] text-[#121C17] font-semibold rounded-[5px] hover:bg-[#212436] hover:text-[#ffffff] transition-all cursor-pointer border border-[#8FD254]"
                >
                  <div className="flex items-center justify-center gap-2 ">
                    {loading ? "Sending.." : "Enquire Now"}
                    <DotLoader
                      color={"#ffffff"}
                      loading={loading}
                      size={10}
                      data-testid="loader"
                    />
                  </div>
                </button>
                <button
                  type="button"
                  className="flex-1 p-[10px] md:p-[15px] bg-[#212436] font-semibold rounded-[5px] hover:bg-[#8FD254] hover:text-[#121C17] transition-all cursor-pointer border border-[#8FD254] text-[#ffffff]"
                >
                  Download Brochure
                </button>
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
      <MapIframe />
    </>
  );
};

export default Contact_us;
