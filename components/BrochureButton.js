"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import BrochureModal from "./BrochureModal";
import { getBrochuresForPath, getBrochuresForSlug } from "../data/brochures";

/**
 * Download Brochure button + modal, for pages that have no Category_Banner.
 *
 * Resolves brochures from the current URL exactly like the banner does, and
 * renders NOTHING when the page has no brochures - so it is safe to drop onto
 * any page without checking first.
 *
 * @param {string}  slug       Optional. Force a specific brochure key instead
 *                              of resolving from the URL.
 * @param {string}  label      Optional button text.
 * @param {boolean} inline     Render just the button, with no wrapper - use
 *                             when placing it beside an existing button.
 * @param {string}  variant    "outline" (default) or "solid".
 * @param {string}  className  Replaces the default button classes entirely.
 */
export default function BrochureButton({
  slug,
  label = "Download Brochure",
  inline = false,
  variant = "outline",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // The path is only read after mount: on a dynamic route the server renders
  // asPath as "/a/[slug]" while the client knows the real URL, which would
  // desync hydration.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const brochures = useMemo(() => {
    if (slug) return getBrochuresForSlug(slug);
    if (!mounted) return [];
    return getBrochuresForPath(router.asPath);
  }, [mounted, router.asPath, slug]);

  if (brochures.length === 0) return null;

  const styles =
    variant === "solid"
      ? "text-[#121C17] bg-[#8FD254] border-[#3C611C] hover:bg-[#7bc043]"
      : "text-[#121C17] bg-transparent border-[#121C17] hover:bg-[#8FD254] hover:border-[#3C611C]";

  // A className passed in replaces the defaults entirely, so the button can
  // adopt the site's own button classes where it sits beside existing ones.
  const buttonClass =
    className ||
    `inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold border rounded-lg transition-colors cursor-pointer ${styles}`;

  const button = (
    <button type="button" onClick={() => setOpen(true)} className={buttonClass}>
      {label}
    </button>
  );

  const modal = (
    <BrochureModal
      isOpen={open}
      onClose={() => setOpen(false)}
      brochures={brochures}
    />
  );

  if (inline) {
    return (
      <>
        {button}
        {modal}
      </>
    );
  }

  return (
    <div className="flex justify-center px-[5%] py-8">
      {button}
      {modal}
    </div>
  );
}