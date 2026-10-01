import React from "react";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section with Gradient */}
      <div className="relative pt-12 bg-gradient-to-br from-[#A0D983] via-[#8FD254] to-[#6FB03E] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="relative max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16 lg:py-20">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Cookie Policy
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
              This Cookie Policy explains the use of cookies and similar
              technologies on{" "}
              <Link
                href="https://www.atlastechnologiesindia.com"
                className="text-[#2563eb] hover:text-[#1d4ed8] font-medium underline decoration-2 decoration-[#8FD254] underline-offset-4 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.atlastechnologiesindia.com
              </Link>{" "}
              (&quot;Website&quot;).
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
              Purpose of Cookies
            </h2>
          </div>

          <p className="text-base text-gray-700 sm:text-lg">
            Cookies enable essential Website functionality, performance
            monitoring, and advertising effectiveness measurement.
          </p>
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
              Categories of Cookies
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                a) Essential Cookies
              </h3>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Necessary for security, navigation, and form submissions.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                b) Analytics Cookies
              </h3>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Used to understand Website traffic and improve performance.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                c) Advertising Cookies
              </h3>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Used for conversion tracking and remarketing on advertising
                platforms. These are deployed only after user consent.
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
              Consent Management
            </h2>
          </div>

          <p className="mb-4 text-base text-gray-700 sm:text-lg">
            Atlas Technologies India follows a consent-first approach:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Non-essential cookies require explicit consent</span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Consent preferences can be changed or withdrawn at any time
              </span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>Tracking complies with Google Consent Mode v2</span>
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
              Third-Party Cookies
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-base text-gray-700 sm:text-lg">
              Third-party cookies may be placed by analytics or advertising
              partners.
            </p>
            <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
              <p className="text-base font-medium text-gray-900 sm:text-lg">
                Their usage is governed by respective third-party policies.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-8 lg:mb-12">
          <div className="mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="text-[#2563eb] text-3xl sm:text-4xl font-bold">
                05
              </span>
              <div className="h-px bg-gradient-to-r from-[#8FD254] to-transparent flex-1 min-w-[60px]"></div>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Cookie Control
            </h2>
          </div>

          <p className="text-base text-gray-700 sm:text-lg">
            Users may manage cookies through browser settings. Disabling cookies
            may affect Website functionality.
          </p>
        </section>

        {/* Contact */}
        <div className="p-6 mt-12 border border-gray-200 rounded-lg bg-gradient-to-r from-gray-50 to-white">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Questions About Cookies?
          </h3>
          <p className="mb-4 text-sm text-gray-700">
            For more information about our cookie usage or to manage your
            preferences, please contact:
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
      </div>
    </div>
  );
}
