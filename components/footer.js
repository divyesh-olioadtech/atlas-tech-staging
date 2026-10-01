import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BrochureModal from "./BrochureModal";

export default function Footer() {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  // Define all links as constants
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Download Brochure", href: "#", isBrochure: true },
  ];

  const products = [
    { name: "Asphalt Products", href: "/asphalt-plants" },
    { name: "Concrete Products", href: "/concrete-plants" },
    { name: "Other Products", href: "/other-products" },
  ];

  // New Legal & Policies section
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Shipping Policy", href: "/shipping-policy" },
  ];

  const contact = [
    {
      name: "contact@atlastechnologiesindia.com",
      href: "mailto:contact@atlastechnologiesindia.com",
      icon: "/images/comman/logo/mail.png",
      type: "email",
    },
    {
      name: "Block No. 97, Mehsana-Ahmedabad Highway, Behind Bhupendra Crane House, At & Po. Ditasan - 382710 District: Mehsana, Gujarat, India.",
      href: "https://www.google.com/maps/place/Atlas+Technologies+Private+Limited/@23.499062,72.402075,13z/data=!4m6!3m5!1s0x395c3f675070d155:0xdac6c768265a8efd!8m2!3d23.497173!4d72.4014739!16s%2Fg%2F11b6sw1nm6?hl=en&entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
      icon: "/images/comman/logo/map-and-location.png",
      type: "location",
    },
  ];

  // Updated footer sections to include Legal & Policies
  const footerSections = [
    { title: "QUICK LINKS", links: quickLinks },
    { title: "PRODUCTS", links: products },
    { title: "LEGAL & POLICIES", links: legalLinks },
    { title: "CONTACT US", links: contact },
  ];

  return (
    <footer className="bg-[#1A1D2D] text-white w-full">
      <div className="mx-auto max-w-screen-2xl px-[5%]">
        {/* Header section with logo and social media */}
        <div className="py-8 mb-8 border-b border-gray-700 md:py-10 lg:pt-12 md:mb-10">
          <div className="flex flex-col justify-start gap-4 md:gap-2 md:justify-between md:flex-row md:items-center">
            {/* Logo section */}
            <div className="flex items-center gap-2">
              <Image
                src="/images/comman/logo/new-footer.png"
                alt="Atlas Technologies Logo"
                width={500}
                height={500}
                className="w-auto h-14 md:h-16"
              />
            </div>

            {/* Social media section */}
            <div className="flex flex-wrap gap-2 mt-1 gap-y-3 md:gap-y-4">
              {/* YouTube with handle */}
              <Link
                href={"https://www.youtube.com/@AtlasTechnologiesPvt.Ltd."}
                target="_blank"
              >
                <button className="p-[8px] md:p-[13px] rounded-[12px] border-[#8FD254] font-semibold hover:bg-[#ffffff] hover:border-[#ffffff] hover:text-black border-[1px] cursor-pointer bg-[#8FD254] flex items-center gap-2 text-sm md:text-base">
                  <img
                    src="/images/comman/youtube.png"
                    alt="YouTube"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  <span className="hidden sm:inline">@AtlasTechIndia</span>
                </button>
              </Link>

              {/* Other social media icons */}
              <div className="flex gap-2">
                <Link
                  href={"https://www.instagram.com/atlas_technologies_pvt._ltd?igsh=dWxpa3hzc203MTl5"}
                  target="_blank"
                >
                  <button className="p-[8px] md:p-[13px] hover:bg-[#ffffff] rounded-[12px] border-[#8FD254] font-semibold hover:border-[#ffffff] border-[1px] cursor-pointer bg-[#8FD254] flex items-center gap-2">
                    <img
                      src="/images/comman/instagram.png"
                      alt="Instagram"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </button>
                </Link>
                <Link
                  href={"https://www.facebook.com/share/1CNVa1Zsad/"}
                  target="_blank"
                >
                  <button className="p-[8px] md:p-[13px] rounded-[12px] border-[#8FD254] font-semibold hover:bg-[#ffffff] hover:border-[#ffffff] border-[1px] cursor-pointer bg-[#8FD254] flex items-center gap-2">
                    <img
                      src="/images/comman/facebook.png"
                      alt="Facebook"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </button>
                </Link>
                <Link
                  href={"https://www.linkedin.com/company/atlastechindia/posts/?feedView=all"}
                  target="_blank"
                >
                  <button className="p-[8px] md:p-[13px] rounded-[12px] border-[#8FD254] font-semibold hover:bg-[#ffffff] hover:border-[#ffffff] border-[1px] cursor-pointer bg-[#8FD254] flex items-center gap-2">
                    <img
                      src="/images/comman/linkedin.png"
                      alt="LinkedIn"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="pb-8 md:pb-10">
          {/* Footer sections - flex layout with controlled spacing */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-8 md:gap-12 lg:gap-16 sm:items-start sm:justify-start">
            {footerSections.map((section, index) => (
              <div
                key={index}
                className={`${
                  section.title === "CONTACT US"
                    ? "sm:flex-1"
                    : "sm:min-w-[160px]"
                }`}
              >
                <h3 className="text-[16px] md:text-[18px] text-[#ffffff] font-bold mb-3 md:mb-4">
                  {section.title}
                </h3>
                <ul className="text-[#8FD254] text-[14px] md:text-[16px] lg:text-[18px] space-y-2 md:space-y-3">
                  {/* Phone numbers with phone icon - Updated with proper labels */}
                  {section.title === "CONTACT US" && (
                    <>
                      {/* Export Enquiries */}
                      <li className="flex items-start gap-2 md:gap-3">
                        <img
                          src="/images/comman/logo/telephone.png"
                          alt="Phone"
                          className="flex-shrink-0 w-4 h-4 mt-1 md:w-5 md:h-5"
                        />
                        <div className="flex-1">
                          <div className="mb-1 text-[14px] text-gray-300 md:text-[16px]">
                            For Export Enquiries
                          </div>
                          <Link
                            href="tel:+919723810565"
                            className="text-[16px] transition-colors hover:text-gray-300 md:text-[18px]"
                          >
                            +91 97238 10565
                          </Link>
                        </div>
                      </li>

                      {/* Local Enquiries */}
                      <li className="flex items-start gap-2 md:gap-3">
                        <img
                          src="/images/comman/logo/telephone.png"
                          alt="Phone"
                          className="flex-shrink-0 w-4 h-4 mt-1 md:w-5 md:h-5"
                        />
                        <div className="flex-1">
                          <div className="mb-1 text-[14px] text-gray-300 md:text-[16px]">
                            For Domestic Enquiries
                          </div>
                          <div className="flex flex-wrap items-center gap-1 text-[16px] md:gap-2 md:text-[18px]">
                            <Link
                              href="tel:+919824040565"
                              className="transition-colors hover:text-gray-300"
                            >
                              +91  98240 40565
                            </Link>
                            <span className="text-gray-400">|</span>
                            <Link
                              href="tel:+919879554550"
                              className="transition-colors hover:text-gray-300"
                            >
                              +91 98795 54550
                            </Link>
                            <span className="text-gray-400">|</span>
                            <Link
                              href="tel:+919904869865"
                              className="transition-colors hover:text-gray-300"
                            >
                              +91 99048 69865
                            </Link>
                          </div>
                        </div>
                      </li>
                    </>
                  )}

                  {/* Regular links for QUICK LINKS, PRODUCTS, and LEGAL & POLICIES */}
                  {section.title !== "CONTACT US" &&
                    section.links.map((link, linkIndex) => (
                      <li
                        key={linkIndex}
                        className="flex items-start transition-colors hover:text-gray-300"
                      >
                        {link.isBrochure ? (
                          <button
                            onClick={() => setBrochureModalOpen(true)}
                            className="flex-1 p-0 text-left bg-transparent border-none cursor-pointer hover:text-gray-300 text-inherit font-inherit"
                          >
                            {link.name}
                          </button>
                        ) : (
                          <Link href={link.href || "#"} className="flex-1">
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}

                  {/* Email and Location with their respective icons */}
                  {section.title === "CONTACT US" &&
                    section.links.map((link, linkIndex) => (
                      <li
                        key={linkIndex}
                        className="flex items-start gap-2 md:gap-3"
                      >
                        {link.icon && (
                          <img
                            src={link.icon}
                            alt={link.type}
                            className="flex-shrink-0 w-4 h-4 mt-1 md:w-5 md:h-5"
                          />
                        )}
                        <Link
                          href={link.href || "#"}
                          target={link.type === "location" ? "_blank" : "_self"}
                          className={`flex-1 transition-colors hover:text-gray-300 max-w-xl leading-[120%] text-[16px] md:text-[18px] ${
                            link.type === "email"
                              ? "break-all word-break-break-all overflow-wrap-anywhere"
                              : "break-words whitespace-normal"
                          }`}
                          style={
                            link.type === "email"
                              ? {
                                  wordBreak: "break-all",
                                  overflowWrap: "anywhere",
                                }
                              : {}
                          }
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer bottom section */}
          <div className="flex flex-col items-start justify-between gap-4 pt-6 mt-8 border-t border-gray-700 md:pt-8 md:mt-10 sm:flex-row sm:items-center">
            <p className="text-[14px] md:text-[16px] text-gray-300">
              Copyright © {new Date().getFullYear()} Atlas Technologies Pvt.
              Ltd.
            </p>

            <p className="text-[14px] md:text-[16px] text-gray-300">
              <Link
                target="_blank"
                href={"https://www.olioglobaladtech.com/?utm_source=atlas"}
                className="transition-colors hover:text-white"
              >
                Design & Developed by Olio Global AdTech.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
    </footer>
  );
}
