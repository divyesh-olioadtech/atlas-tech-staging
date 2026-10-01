import React from "react";
import Link from "next/link";

export default function Disclaimer() {
  return (
    <div className="bg-white">
      {/* Hero Section with Gradient */}
      <div className="relative pt-12 bg-gradient-to-br from-[#A0D983] via-[#8FD254] to-[#6FB03E] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="relative max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16 lg:py-20">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Disclaimer
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
              All information on{" "}
              <Link
                href="https://www.atlastechnologiesindia.com"
                className="text-[#2563eb] hover:text-[#1d4ed8] font-medium underline decoration-2 decoration-[#8FD254] underline-offset-4 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.atlastechnologiesindia.com
              </Link>{" "}
              is provided for general informational purposes only.
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
              No Warranty
            </h2>
          </div>

          <p className="text-base text-gray-700 sm:text-lg">
            The Website is provided on an &quot;as-is&quot; basis. Atlas
            Technologies India makes no warranties regarding accuracy,
            completeness, or suitability.
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
              No Technical or Commercial Advice
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-base text-gray-700 sm:text-lg">
              Website content does not constitute engineering, technical, legal,
              or commercial advice.
            </p>
            <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
              <p className="text-base font-medium text-gray-900 sm:text-lg">
                Decisions should be made after direct consultation.
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
              Product Performance
            </h2>
          </div>

          <p className="text-base text-gray-700 sm:text-lg">
            Actual product performance varies based on application, operating
            conditions, installation environment, and customization.
          </p>
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
              Visual & Media Representation
            </h2>
          </div>

          <p className="text-base text-gray-700 sm:text-lg">
            Images, videos, and illustrations are indicative and may not
            represent final delivered configurations.
          </p>
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
              External Content
            </h2>
          </div>

          <p className="text-base text-gray-700 sm:text-lg">
            Atlas Technologies India disclaims responsibility for external
            websites or third-party content.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8 lg:mb-12">
          <div className="mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="text-[#2563eb] text-3xl sm:text-4xl font-bold">
                06
              </span>
              <div className="h-px bg-gradient-to-r from-[#8FD254] to-transparent flex-1 min-w-[60px]"></div>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Limitation of Responsibility
            </h2>
          </div>

          <p className="text-base text-gray-700 sm:text-lg">
            Atlas Technologies India shall not be liable for losses arising from
            reliance on Website information or Website unavailability.
          </p>
        </section>

        {/* Contact Section */}
        <div className="p-6 mt-16 border border-gray-200 rounded-lg bg-gradient-to-r from-gray-50 to-white">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Contact for Formal Consultations
          </h3>
          <p className="mb-4 text-sm text-gray-700">
            For accurate technical specifications, quotations, or project
            consultation, please contact our team directly.
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
