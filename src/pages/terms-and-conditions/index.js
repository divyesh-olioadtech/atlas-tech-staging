import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="bg-white">
      {/* Hero Section with Gradient */}
      <div className="relative pt-12 bg-gradient-to-br from-[#A0D983] via-[#8FD254] to-[#6FB03E] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="relative max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16 lg:py-20">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Terms & Conditions
          </h1>
          <p className="max-w-3xl text-base text-blue-100 sm:text-lg lg:text-xl">
            Last Updated: 28/01/2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8 sm:py-12 lg:py-16">
        {/* Introduction */}
        <div className="mb-12 lg:mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg">
              These Terms & Conditions govern the use of{" "}
              <Link
                href="https://www.atlastechnologiesindia.com"
                className="text-[#2563eb] hover:text-[#1d4ed8] font-medium underline decoration-2 decoration-[#8FD254] underline-offset-4 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.atlastechnologiesindia.com
              </Link>{" "}
              (&quot;Website&quot;), operated by Atlas Technologies India
              (&quot;Atlas&quot;, &quot;we&quot;, &quot;our&quot;,
              &quot;us&quot;).
            </p>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              By accessing or using the Website, you agree to these Terms. If
              you do not agree, you must discontinue use.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="mb-12 lg:mb-16">
          <div className="mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="text-[#2563eb] text-3xl sm:text-4xl font-bold">
                01
              </span>
              <div className="h-px bg-gradient-to-r from-[#8FD254] to-transparent flex-1 min-w-[60px]"></div>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Nature of Website
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-base text-gray-700 sm:text-lg">
              The Website is intended solely to provide general information
              regarding Atlas Technologies India, its manufacturing
              capabilities, and its products.
            </p>
            <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
              <p className="text-base font-medium text-gray-900 sm:text-lg">
                No content constitutes an offer, quotation, or contractual
                commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12 lg:mb-16">
          <div className="mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="text-[#2563eb] text-3xl sm:text-4xl font-bold">
                02
              </span>
              <div className="h-px bg-gradient-to-r from-[#8FD254] to-transparent flex-1 min-w-[60px]"></div>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Permitted Use
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-4 text-base text-gray-700 sm:text-lg">
                Users may use the Website only for lawful business purposes,
                including:
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start text-base text-gray-700 sm:text-lg">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Reviewing product and company information</span>
                </li>
                <li className="flex items-start text-base text-gray-700 sm:text-lg">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Submitting genuine enquiries</span>
                </li>
                <li className="flex items-start text-base text-gray-700 sm:text-lg">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>
                    Evaluating Atlas Technologies India as a potential supplier
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-base text-gray-700 sm:text-lg">
                Users must not:
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start text-base text-gray-700 sm:text-lg">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>
                    Misuse, copy, scrape, reverse-engineer any part of the
                    Website
                  </span>
                </li>
                <li className="flex items-start text-base text-gray-700 sm:text-lg">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>
                    Unlawfully access or interfere with Website functionality
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12 lg:mb-16">
          <div className="mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="text-[#2563eb] text-3xl sm:text-4xl font-bold">
                03
              </span>
              <div className="h-px bg-gradient-to-r from-[#8FD254] to-transparent flex-1 min-w-[60px]"></div>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Intellectual Property
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
              <p className="text-base font-medium text-gray-900 sm:text-lg">
                &quot;Atlas&quot; is a protected trademark
              </p>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start text-base text-gray-700 sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                <span>
                  All Website content is owned by Atlas Technologies India
                  unless stated otherwise
                </span>
              </li>
              <li className="flex items-start text-base text-gray-700 sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                <span>
                  Unauthorized reproduction, modification, or redistribution is
                  strictly prohibited
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12 lg:mb-16">
          <div className="mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="text-[#2563eb] text-3xl sm:text-4xl font-bold">
                04
              </span>
              <div className="h-px bg-gradient-to-r from-[#8FD254] to-transparent flex-1 min-w-[60px]"></div>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Product Information Disclaimer
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-base text-gray-700 sm:text-lg">
              All technical specifications, drawings, images, capacities, and
              performance data are indicative and subject to change.
            </p>
            <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
              <p className="text-base font-medium text-gray-900 sm:text-lg">
                Final details are confirmed only through formal technical and
                commercial documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12 lg:mb-16">
          <div className="mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="text-[#2563eb] text-3xl sm:text-4xl font-bold">
                05
              </span>
              <div className="h-px bg-gradient-to-r from-[#8FD254] to-transparent flex-1 min-w-[60px]"></div>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Enquiries & Communications
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
              <p className="text-base font-medium text-gray-900 sm:text-lg">
                Submission of enquiries does not create a contractual
                relationship.
              </p>
            </div>
            <p className="text-base text-gray-700 sm:text-lg">
              Atlas Technologies India reserves the right to respond or decline
              enquiries at its discretion.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-12 lg:mb-16">
          <div className="mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="text-[#2563eb] text-3xl sm:text-4xl font-bold">
                06
              </span>
              <div className="h-px bg-gradient-to-r from-[#8FD254] to-transparent flex-1 min-w-[60px]"></div>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Third-Party Links
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-base text-gray-700 sm:text-lg">
              The Website may contain third-party links for reference.
            </p>
            <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
              <p className="text-base font-medium text-gray-900 sm:text-lg">
                Atlas Technologies India has no control over and assumes no
                responsibility for such content.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-12 lg:mb-16">
          <div className="mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="text-[#2563eb] text-3xl sm:text-4xl font-bold">
                07
              </span>
              <div className="h-px bg-gradient-to-r from-[#8FD254] to-transparent flex-1 min-w-[60px]"></div>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Limitation of Liability
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
              <p className="text-base font-medium text-gray-900 sm:text-lg">
                Atlas Technologies India shall not be liable for any direct,
                indirect, incidental, or consequential losses.
              </p>
            </div>

            <p className="text-base text-gray-700 sm:text-lg">
              This includes losses arising from:
            </p>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start text-base text-gray-700 sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                <span>Use or inability to use the Website</span>
              </li>
              <li className="flex items-start text-base text-gray-700 sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                <span>Reliance on Website information</span>
              </li>
              <li className="flex items-start text-base text-gray-700 sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                <span>Technical disruptions or inaccuracies</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8 */}
        <section className="mb-8 lg:mb-12">
          <div className="mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="text-[#2563eb] text-3xl sm:text-4xl font-bold">
                08
              </span>
              <div className="h-px bg-gradient-to-r from-[#8FD254] to-transparent flex-1 min-w-[60px]"></div>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Governing Law & Jurisdiction
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-base text-gray-700 sm:text-lg">
              These Terms are governed by the laws of India.
            </p>

            <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
              <p className="text-base font-medium text-gray-900 sm:text-lg">
                All disputes shall be subject to the jurisdiction of courts in
                Mehsana, Gujarat, India.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <div className="p-6 mt-16 border border-gray-200 rounded-lg bg-gradient-to-r from-gray-50 to-white">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                For Export Enquiries
              </p>
              <Link
                href="tel:+919723810565"
                className="text-base text-[#2563eb] hover:text-[#1d4ed8] font-medium inline-flex items-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 97238 10565</span>
              </Link>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                For Local Enquiries
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="tel:+919824040565"
                  className="text-base text-[#2563eb] hover:text-[#1d4ed8] font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 98240 40565</span>
                </Link>
                <Link
                  href="tel:+919879554550"
                  className="text-base text-[#2563eb] hover:text-[#1d4ed8] font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 98795 54550</span>
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                General Contact
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-[#2563eb]">
                  Visit the{" "}
                  <Link
                    href="/contact-us"
                    className="hover:text-[#1d4ed8] underline decoration-2 decoration-[#8FD254] underline-offset-4 transition-colors"
                  >
                    Contact Page
                  </Link>{" "}
                  or email{" "}
                  <Link
                    href="mailto:contact@atlastechnologiesindia.com"
                    className="hover:text-[#1d4ed8] underline decoration-2 decoration-[#8FD254] underline-offset-4 transition-colors"
                  >
                    contact@atlastechnologiesindia.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-200">
            <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
              Registered Address
            </p>
            <p className="flex items-start gap-2 text-sm leading-relaxed text-gray-700">
              <MapPin className="w-5 h-5 text-[#8FD254] mt-0.5 flex-shrink-0" />
              <span>
                Block No. 97, Mehsana-Ahmedabad Highway, Behind Bhupendra Crane
                House,
                <br className="hidden sm:inline" />
                At & Po. Ditasan – 382710, District: Mehsana, Gujarat, India
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
