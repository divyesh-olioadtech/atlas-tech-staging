import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section with Gradient */}
      <div className="relative pt-12 bg-gradient-to-br from-[#A0D983] via-[#8FD254] to-[#6FB03E] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="relative max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16 lg:py-20">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Privacy Policy
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
              Atlas Technologies India (&quot;
              <strong className="font-semibold text-gray-900">Atlas</strong>
              &quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) values
              the privacy of individuals who visit or interact with our website{" "}
              <Link
                href="https://www.atlastechnologiesindia.com"
                className="text-[#2563eb] hover:text-[#1d4ed8] font-medium underline decoration-2 decoration-[#8FD254] underline-offset-4 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.atlastechnologiesindia.com
              </Link>{" "}
              (&quot;Website&quot;). This Privacy Policy outlines how we
              collect, process, store, and protect personal data in compliance
              with applicable laws and regulations.
            </p>
            <p className="mb-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              This policy is framed in accordance with:
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start text-base text-gray-700 sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                <span>Digital Personal Data Protection Act, 2023 (India)</span>
              </li>
              <li className="flex items-start text-base text-gray-700 sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                <span>Information Technology Act, 2000 & associated rules</span>
              </li>
              <li className="flex items-start text-base text-gray-700 sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                <span>
                  General Data Protection Regulation (GDPR), where applicable
                </span>
              </li>
            </ul>
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
              Company Identity & Contact Details
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                Legal Entity Name
              </p>
              <p className="text-base font-medium text-gray-900 sm:text-lg">
                Atlas Technologies India
              </p>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                Trademark
              </p>
              <p className="text-base font-medium text-gray-900 sm:text-lg">
                Atlas
              </p>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                Registered Address
              </p>
              <p className="flex items-start gap-2 text-sm leading-relaxed text-gray-700 sm:text-base">
                <MapPin className="w-5 h-5 text-[#8FD254] mt-0.5 flex-shrink-0" />
                <span>
                  Block No. 97, Mehsana-Ahmedabad Highway, Behind Bhupendra
                  Crane House,
                  <br className="hidden sm:inline" />
                  At & Po. Ditasan – 382710, District: Mehsana, Gujarat, India
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                  For Export Enquiries
                </p>
                <Link
                  href="tel:+919723810565"
                  className="text-base sm:text-lg text-[#2563eb] hover:text-[#1d4ed8] font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 97238 10565</span>
                </Link>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                  For Local Enquiries
                </p>
                <div className="space-y-2">
                  <Link
                    href="tel:+919824040565"
                    className="text-base sm:text-lg text-[#2563eb] hover:text-[#1d4ed8] font-medium inline-flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 98240 40565</span>
                  </Link>
                  <br />
                  <Link
                    href="tel:+919879554550"
                    className="text-base sm:text-lg text-[#2563eb] hover:text-[#1d4ed8] font-medium inline-flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 98795 54550</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                  Email
                </p>
                <Link
                  href="mailto:contact@atlastechnologiesindia.com"
                  className="text-sm sm:text-base text-[#2563eb] hover:text-[#1d4ed8] font-medium inline-flex items-center gap-2 transition-colors break-all"
                >
                  <Mail className="flex-shrink-0 w-5 h-5" />
                  <span>contact@atlastechnologiesindia.com</span>
                </Link>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                  Phone
                </p>
                <Link
                  href="tel:+919904869865"
                  className="text-sm sm:text-base text-[#2563eb] hover:text-[#1d4ed8] font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 99048 69865</span>
                </Link>
              </div>
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
              Scope of Personal Data Collected
            </h2>
          </div>

          <p className="mb-6 text-base text-gray-700 sm:text-lg lg:mb-8">
            We may collect the following categories of data:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                a) Identity & Contact Data
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                Name, company name, email address, phone number,
                country/location.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                b) Enquiry & Communication Data
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                Information submitted through enquiry forms, emails, or calls.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                c) Technical & Usage Data
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                IP address, browser type, device information, operating system,
                referral source, and website interaction data.
              </p>
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
              Lawful Basis for Processing
            </h2>
          </div>

          <p className="mb-4 text-base text-gray-700 sm:text-lg sm:mb-6">
            Personal data is processed under the following lawful grounds:
          </p>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Consent provided by the user</span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Legitimate business interest for responding to enquiries and
                improving services
              </span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Legal obligation under applicable Indian and international laws
              </span>
            </li>
          </ul>
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
              Purpose of Data Processing
            </h2>
          </div>

          <p className="mb-4 text-base text-gray-700 sm:text-lg sm:mb-6">
            Personal data is used strictly for:
          </p>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Responding to domestic and export business enquiries</span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Providing information related to Atlas Technologies India&apos;s
                products and services
              </span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Improving Website functionality and user experience</span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Advertising measurement and optimization on Google, Meta, and
                Microsoft Bing
              </span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Internal compliance, record-keeping, and audit requirements
              </span>
            </li>
          </ul>
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
              Cookies, Tracking & Consent Mode v2
            </h2>
          </div>

          <p className="mb-4 text-base text-gray-700 sm:text-lg sm:mb-6">
            Atlas Technologies India uses cookies and tracking technologies in
            line with Google Consent Mode v2.
          </p>
          <ul className="mb-4 space-y-3 sm:space-y-4 sm:mb-6">
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Analytics and advertising cookies are activated only after
                explicit user consent
              </span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Consent signals (ad_storage, analytics_storage) are transmitted
                to advertising platforms
              </span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                For non-consenting users, only anonymized and aggregated data
                modeling is applied
              </span>
            </li>
          </ul>
          <p className="text-base text-gray-700 sm:text-lg">
            Users may manage or withdraw consent at any time via cookie settings
            or browser controls.
          </p>
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
              Data Sharing & Disclosure
            </h2>
          </div>

          <p className="mb-4 text-base text-gray-700 sm:text-lg sm:mb-6">
            Atlas Technologies India does not sell or trade personal data.
          </p>
          <p className="mb-4 text-base text-gray-700 sm:text-lg">
            Data may be shared with:
          </p>
          <ul className="mb-4 space-y-3 sm:space-y-4 sm:mb-6">
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Advertising & analytics platforms (Google, Meta, Microsoft)
              </span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Website hosting, CRM, and IT service providers</span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Government or regulatory authorities where legally required
              </span>
            </li>
          </ul>
          <p className="text-base text-gray-700 sm:text-lg">
            Appropriate safeguards are applied for any cross-border data
            transfers.
          </p>
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
              Data Retention & Security
            </h2>
          </div>

          <p className="text-base text-gray-700 sm:text-lg">
            Personal data is retained only for as long as necessary for the
            stated purpose. Atlas Technologies India employs reasonable
            technical and organizational safeguards to prevent unauthorized
            access, misuse, or disclosure.
          </p>
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
              User Rights
            </h2>
          </div>

          <p className="mb-4 text-base text-gray-700 sm:text-lg sm:mb-6">
            Users have the right to:
          </p>
          <ul className="mb-6 space-y-3 sm:space-y-4 lg:mb-8">
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Access their personal data</span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Request correction or deletion</span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Withdraw consent at any time</span>
            </li>
          </ul>

          <div className="border-l-4 border-[#8FD254] pl-6 py-4">
            <p className="mb-3 text-sm text-gray-600">
              Requests may be sent to:
            </p>
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
        </section>
      </div>
    </div>
  );
}
