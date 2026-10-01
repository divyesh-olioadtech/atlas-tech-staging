"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Breadcrumb from "../Breadcrumb";
import { TextAnimate } from "../animated/Text_Animate";
import BrochureModal from "../BrochureModal";
import { getBrochuresForPath, getBrochuresForSlug } from "../../data/brochures";
import Image from "next/image";

export default function Category_Banner({ data }) {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const router = useRouter();

  // On a dynamic route the server renders asPath as "/asphalt-plants/[slug]"
  // while the client knows the real path, which would desync hydration. So the
  // path is only read after mount. Pages that set `data.brochureSlug` skip this
  // entirely, since that value is identical on server and client.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const brochures = useMemo(() => {
    if (data?.brochureSlug) return getBrochuresForSlug(data.brochureSlug);
    if (!mounted) return [];
    return getBrochuresForPath(router.asPath);
  }, [mounted, router.asPath, data?.brochureSlug]);

  const hasBrochures = brochures.length > 0;

  // Check if title is a React element or string
  const isReactElement = typeof data.title === "object" && data.title?.$$typeof;

  return (
    <>
      <div className="relative w-full h-[480px] md:h-[680px] mt-[80px] md:mt-[0px] overflow-hidden">
        <Image
          src={data.img}
          alt="banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="relative z-20 flex flex-col h-full max-w-screen-2xl mx-auto justify-end px-[5%]">
          <div className="flex flex-col gap-5 mb-16">
            <Breadcrumb />
            <div className="flex flex-col gap-2">
              {isReactElement ? (
                <h1 className="h1t leading-[1.1]">{data.title}</h1>
              ) : (
                <h1>
                  <TextAnimate
                    animation="blurInUp"
                    by="word"
                    delay={0.2}
                    duration={0.8}
                    className="h1t leading-[1.1]"
                    once={true}
                  >
                    {String(data.title || "")}
                  </TextAnimate>
                </h1>
              )}

              <TextAnimate
                delay={0.2}
                duration={0.2}
                className="textpara"
                once={true}
              >
                {String(data.para || "")}
              </TextAnimate>
            </div>
            <div className="flex gap-2 animate-[fadeIn_0.8s_ease-in-out_1.2s_both]">
              {/* Let's Connect Button */}
              <Link
                href="/contact-us"
                className="buttonsb font-semibold text-[#121C17] bg-[#8FD254] hover:bg-[#ffffff] border-[#3C611C] cursor-pointer inline-flex items-center justify-center"
              >
                Let&apos;s Connect
              </Link>

              {/* Download Brochure - rendered only when this page has brochures */}
              {hasBrochures && (
                <button
                  onClick={() => setBrochureModalOpen(true)}
                  className="buttonsb font-semibold text-[#ffffff] hover:text-[#121C17] hover:bg-[#ffffff] border-[#ffffff] cursor-pointer"
                >
                  Download Brochure
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {hasBrochures && (
        <BrochureModal
          isOpen={brochureModalOpen}
          onClose={() => setBrochureModalOpen(false)}
          brochures={brochures}
        />
      )}
    </>
  );
}