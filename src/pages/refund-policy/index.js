import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section with Gradient */}
      <div className="relative pt-12 bg-gradient-to-br from-[#A0D983] via-[#8FD254] to-[#6FB03E] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="relative max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16 lg:py-20">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Refund and Cancellation Policy
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
              At Atlas Technologies, we pride ourselves on manufacturing
              high-quality asphalt and concrete batching plants. Due to the heavy
              industrial nature and custom manufacturing of our products, our
              Return and Refund Policy differs from standard retail goods. Please
              read the following terms carefully before placing an order.
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
              Returns on Machinery & Equipment
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-base text-gray-700 sm:text-lg">
              Because our products (Asphalt Batching Plants, Concrete Plants, Wet
              Mix Plants) are heavy industrial machinery often manufactured or
              customized to specific client requirements, we do not accept returns
              once the equipment has been delivered and accepted by the customer.
            </p>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start text-base text-gray-700 sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                <span>
                  <strong className="font-semibold text-gray-900">
                    Final Sale:
                  </strong>{" "}
                  All sales of custom-manufactured plants and machinery are
                  considered final upon delivery.
                </span>
              </li>
              <li className="flex items-start text-base text-gray-700 sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
                <span>
                  <strong className="font-semibold text-gray-900">
                    Inspection:
                  </strong>{" "}
                  Customers are encouraged to inspect the machinery at our factory
                  (Pre-Dispatch Inspection) before the final shipment is
                  initiated.
                </span>
              </li>
            </ul>
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
              Order Cancellation
            </h2>
          </div>

          <p className="mb-6 text-base text-gray-700 sm:text-lg">
            We understand that project requirements may change. Our cancellation
            policy is as follows:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                a) Before Manufacturing Starts
              </h3>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                If you wish to cancel your order within 48 hours of paying the
                booking amount/advance, and before raw material procurement has
                begun, you may be eligible for a full or partial refund of the
                booking amount, subject to administrative deductions.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                b) During Manufacturing
              </h3>
              <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
                <p className="text-base font-medium text-gray-900 sm:text-lg">
                  Once production has commenced or materials have been procured
                  specifically for your order, the advance/booking amount is
                  non-refundable.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                c) After Dispatch
              </h3>
              <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
                <p className="text-base font-medium text-gray-900 sm:text-lg">
                  Orders cannot be cancelled once the machinery has left our
                  factory premises.
                </p>
              </div>
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
              Damages and Manufacturing Defects
            </h2>
          </div>

          <p className="mb-6 text-base text-gray-700 sm:text-lg">
            While we do not accept returns for &quot;change of mind,&quot; we
            stand by the quality of our manufacturing.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                a) Transit Damage
              </h3>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                If the machinery arrives damaged, you must note the damage on the
                delivery receipt immediately and notify us within 24 hours. We
                will assist in the insurance claim process or repair as per the
                terms agreed upon in the Purchase Order.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                b) Warranty Claims
              </h3>
              <div className="border-l-4 border-[#8FD254] pl-6 py-4 bg-gray-50/50">
                <p className="text-base font-medium text-gray-900 sm:text-lg">
                  Defective parts covered under our standard Warranty Policy will
                  be repaired or replaced, not refunded.
                </p>
              </div>
              <p className="mt-3 text-base leading-relaxed text-gray-700 sm:text-lg">
                Please refer to your specific Warranty Agreement for details on
                coverage duration (typically 12 months for critical components).
              </p>
            </div>
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
              Refund Processing
            </h2>
          </div>

          <p className="mb-4 text-base text-gray-700 sm:text-lg sm:mb-6">
            If a cancellation is approved by Atlas Technologies management:
          </p>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                Refunds will be processed within 7-14 business days.
              </span>
            </li>
            <li className="flex items-start text-base text-gray-700 sm:text-lg">
              <span className="inline-block w-2 h-2 rounded-full bg-[#8FD254] mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                The amount will be credited back to the original method of
                payment (Bank Transfer/Cheque).
              </span>
            </li>
          </ul>
        </section>

        {/* Section 5 - Contact */}
        <section className="mb-8 lg:mb-12">
          <div className="mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="text-[#2563eb] text-3xl sm:text-4xl font-bold">
                05
              </span>
              <div className="h-px bg-gradient-to-r from-[#8FD254] to-transparent flex-1 min-w-[60px]"></div>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Contact Us
            </h2>
          </div>

          <p className="mb-6 text-base text-gray-700 sm:text-lg">
            For any questions regarding cancellations or defects, please contact
            us:
          </p>
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
              Registered Address
            </p>
            <p className="flex items-start gap-2 text-sm leading-relaxed text-gray-700">
              <MapPin className="w-5 h-5 text-[#8FD254] mt-0.5 flex-shrink-0" />
              <span>
                Block No. 97, Mehsana-Ahmedabad Highway, District:, behind
                Bhupendra Crane House,
                <br className="hidden sm:inline" />
                Ditasan, Gujarat 384460
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}