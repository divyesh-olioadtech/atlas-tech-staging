import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section with Gradient */}
      <div className="relative pt-12 bg-gradient-to-br from-[#A0D983] via-[#8FD254] to-[#6FB03E] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="relative max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16 lg:py-20">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Shipping and Delivery Policy
          </h1>
          <p className="max-w-3xl text-base text-blue-100 sm:text-lg lg:text-xl">
            Last Updated: February 10, 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8 sm:py-12 lg:py-16">
        {/* Introduction */}
        <div className="mb-12 lg:mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg">
              Atlas Technologies delivers heavy construction machinery to
              customers across India and globally. This policy outlines how we
              handle the logistics, costs, and timelines for your order.
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
              Production and Processing Time
            </h2>
          </div>

          <p className="mb-6 text-base text-gray-700 sm:text-lg">
            Since our products are large-scale industrial plants, they are often
            manufactured to order.
          </p>

          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                <strong className="font-semibold text-gray-900">
                  In-Stock Items:
                </strong>{" "}
                Spare parts and standard components are typically dispatched
                within 2-3 business days.
              </span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                <strong className="font-semibold text-gray-900">
                  Manufacturing Lead Time:
                </strong>{" "}
                Complete plants (e.g., Asphalt Batch Mix Plants) have a
                production lead time of 4 to 8 weeks, depending on the model and
                customization. The specific timeline will be confirmed in your
                Proforma Invoice.
              </span>
            </li>
          </ul>
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
              Shipping Methods
            </h2>
          </div>

          <p className="mb-6 text-base text-gray-700 sm:text-lg">
            We utilize specialized logistics for heavy machinery:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                a) Domestic (India)
              </h3>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Transportation via open trailers, flatbed trucks, or low-bed
                trailers depending on the equipment dimensions.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                b) International (Exports)
              </h3>
              <p className="mb-3 text-base leading-relaxed text-gray-700 sm:text-lg">
                We ship via Sea Freight using 20ft or 40ft Open Top / Flat Rack
                containers. We support Incoterms including:
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start text-base text-gray-700 sm:text-lg">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      EXW
                    </strong>{" "}
                    (Ex-Works)
                  </span>
                </li>
                <li className="flex items-start text-base text-gray-700 sm:text-lg">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      FOB
                    </strong>{" "}
                    (Free on Board)
                  </span>
                </li>
                <li className="flex items-start text-base text-gray-700 sm:text-lg">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      CIF
                    </strong>{" "}
                    (Cost, Insurance, and Freight)
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
              Shipping Costs
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
              <p className="text-base font-medium text-gray-900 sm:text-lg">
                Shipping costs are not included in the base product price listed
                on our website or catalog unless explicitly stated.
              </p>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start text-base text-gray-700 sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                <span>
                  <strong className="font-semibold text-gray-900">
                    Calculation:
                  </strong>{" "}
                  Freight charges are calculated based on the destination,
                  weight, and volume of the machinery at the time of dispatch.
                </span>
              </li>
              <li className="flex items-start text-base text-gray-700 sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                <span>
                  <strong className="font-semibold text-gray-900">
                    Payment:
                  </strong>{" "}
                  Shipping charges can be paid directly to the transporter (To
                  Pay basis) or added to your final invoice, as agreed upon
                  during the sale.
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
              Delivery Timelines
            </h2>
          </div>

          <p className="mb-6 text-base text-gray-700 sm:text-lg">
            Estimated transit times after dispatch from our Mehsana factory:
          </p>

          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                <strong className="font-semibold text-gray-900">
                  West & North India:
                </strong>{" "}
                15-20 Days
              </span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                <strong className="font-semibold text-gray-900">
                  South & East India:
                </strong>{" "}
                15-20 Days
              </span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                <strong className="font-semibold text-gray-900">
                  International Shipping:
                </strong>{" "}
                40-50 Days (Depending on the destination port and vessel
                availability).
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
              Delivery Responsibilities (Customer&apos;s Role)
            </h2>
          </div>

          <p className="mb-6 text-base text-gray-700 sm:text-lg">
            Due to the size of our machinery:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                a) Unloading
              </h3>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                The customer is responsible for arranging specialized unloading
                equipment (cranes, hydra, forklifts) at the delivery site. The
                carrier driver is not responsible for unloading.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                b) Site Access
              </h3>
              <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
                <p className="text-base font-medium text-gray-900 sm:text-lg">
                  Please ensure your site is accessible by large heavy-duty
                  trailers.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                c) Customs (International)
              </h3>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                For export orders, the customer (importer) is responsible for all
                import duties, taxes, and customs clearance at the destination
                port, unless CIF/DDP terms were agreed upon.
              </p>
            </div>
          </div>
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
              Order Tracking
            </h2>
          </div>

          <p className="mb-6 text-base text-gray-700 sm:text-lg">
            Once your shipment leaves our factory, we will provide you with:
          </p>

          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                <strong className="font-semibold text-gray-900">
                  Domestic:
                </strong>{" "}
                The Lorry Receipt (LR) number and the transporter&apos;s contact
                details.
              </span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                <strong className="font-semibold text-gray-900">
                  International:
                </strong>{" "}
                The Bill of Lading (BL) number and vessel tracking details.
              </span>
            </li>
          </ul>
        </section>

        {/* Contact Information */}
        <div className="p-6 mt-12 border border-gray-200 rounded-lg bg-gradient-to-r from-gray-50 to-white">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                className="text-base text-[#2563eb] hover:text-[#1d4ed8] font-medium inline-flex items-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 99048 69865</span>
              </Link>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                General Contact
              </p>
              <p className="text-base font-medium text-[#2563eb]">
                Visit the{" "}
                <Link
                  href="/contact-us"
                  className="hover:text-[#1d4ed8] underline decoration-2 decoration-[#8FD254] underline-offset-4 transition-colors"
                >
                  Contact Page
                </Link>
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-200">
            <p className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
              Factory Address
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