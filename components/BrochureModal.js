"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DotLoader from "react-spinners/SyncLoader";
import { getTracking } from "../lib/tracker";

/**
 * Single-screen brochure modal.
 *
 * - Selection and contact details sit on the same screen.
 * - Multiple brochures can be selected at once.
 * - When a page offers only one brochure there is no selection UI at all;
 *   the user fills the form and gets that brochure.
 * - On success each selected brochure opens in its own tab.
 *
 * @param {boolean}  isOpen
 * @param {Function} onClose
 * @param {Array}    brochures  [{ id, name, url }] for THIS page only.
 */
const BrochureModal = ({ isOpen, onClose, brochures = [] }) => {
  const list = useMemo(
    () => (Array.isArray(brochures) ? brochures : []),
    [brochures]
  );

  // Held in a ref so the reset effect can read the current list without
  // re-running each time the parent re-renders with a new array identity.
  const listRef = useRef(list);
  listRef.current = list;

  const [selectedIds, setSelectedIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const modalRef = useRef(null);

  const isEmpty = list.length === 0;
  const isSingle = list.length === 1;
  const showSearch = list.length > 6;

  const selected = useMemo(
    () => list.filter((b) => selectedIds.includes(b.id)),
    [list, selectedIds]
  );

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return list;
    return list.filter((b) => (b.name || "").toLowerCase().includes(q));
  }, [list, searchQuery]);

  // Reset on close. Auto-select when the page offers only one brochure.
  useEffect(() => {
    if (isOpen) {
      const l = listRef.current;
      setSelectedIds(l.length === 1 ? [l[0].id] : []);
    } else {
      setSelectedIds([]);
      setSearchQuery("");
      setFormData({ fullName: "", phone: "", email: "" });
      setErrors({});
      setLoading(false);
      setSubmitError("");
      setSubmitted(false);
    }
  }, [isOpen]);

  // Lock background scroll while open.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape to close (ignored mid-submit so a request isn't abandoned).
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && !loading) onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose, loading]);

  const handleOverlayClick = (e) => {
    if (loading) return;
    if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
  };

  const handleFormChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    // Names: letters and single spaces only. Anything else is dropped as it
    // is typed or pasted, so the field can never hold an invalid character.
    if (name === "fullName") {
      value = value.replace(/[^A-Za-z ]/g, "").replace(/ {2,}/g, " ");
      if (value.length > 50) value = value.slice(0, 50);
    }

    if (name === "email") {
      value = value.replace(/\s/g, "");
      if (value.length > 254) value = value.slice(0, 254);
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setSubmitError("");
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    setErrors({ ...errors, phone: "" });
    setSubmitError("");
  };

  const toggleBrochure = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
    setErrors((prev) => ({ ...prev, brochure: "" }));
    setSubmitError("");
  };

  const validate = () => {
    const next = {};

    // --- brochure ---
    if (selected.length === 0)
      next.brochure = "Select at least one brochure to continue";

    // --- full name: letters and single spaces only ---
    const name = formData.fullName.trim().replace(/ {2,}/g, " ");
    if (!name) {
      next.fullName = "Full Name is required";
    } else if (name.length < 2) {
      next.fullName = "Name must be at least 2 characters";
    } else if (name.length > 50) {
      next.fullName = "Name must be 50 characters or less";
    } else if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name)) {
      // To permit apostrophes and hyphens (D'Souza, Jean-Pierre) change the
      // character classes above and in handleFormChange to [A-Za-z'-].
      next.fullName = "Name can only contain letters and spaces";
    }

    // --- mobile: E.164 allows 8-15 digits including the country code ---
    const digits = (formData.phone || "").replace(/\D/g, "");
    if (!digits) {
      next.phone = "Mobile number is required";
    } else if (digits.length < 8 || digits.length > 15) {
      next.phone = "Enter a valid mobile number";
    } else if (/^(\d)\1+$/.test(digits)) {
      next.phone = "Enter a valid mobile number";
    } else if (
      digits.startsWith("91") &&
      digits.length === 12 &&
      !/^[6-9]/.test(digits.slice(2))
    ) {
      // Indian mobile numbers always begin 6, 7, 8 or 9.
      next.phone = "Enter a valid Indian mobile number";
    }

    // --- email ---
    const email = formData.email.trim();
    const emailRe =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;
    if (!email) {
      next.email = "Email is required";
    } else if (email.length > 254) {
      next.email = "Email address is too long";
    } else if (email.includes("..") || /^\.|\.@|@\./.test(email)) {
      next.email = "Enter a valid email address";
    } else if (!emailRe.test(email)) {
      next.email = "Enter a valid email address";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  /**
   * Streams a file down without opening a tab. A hidden iframe is not a popup,
   * so the browser will allow several of these from one click - which is how
   * multiple brochures can be delivered at once.
   */
  const forceDownload = (brochure, delay) => {
    const href = brochure.downloadUrl || brochure.url;
    if (!href) return;

    window.setTimeout(() => {
      const isExternal = /^https?:\/\//i.test(href);

      if (isExternal) {
        // Cross-origin: the `download` attribute is ignored, so rely on the
        // host sending Content-Disposition: attachment.
        const frame = document.createElement("iframe");
        frame.style.display = "none";
        frame.src = href;
        document.body.appendChild(frame);
        window.setTimeout(() => {
          if (frame.parentNode) frame.parentNode.removeChild(frame);
        }, 60000);
      } else {
        // Same-origin file in /public: a real download, correctly named.
        const link = document.createElement("a");
        link.href = href;
        link.download = `${brochure.name}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, delay);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!validate()) return;

    const multiple = selected.length > 1;

    // One brochure: open a tab. It has to be created synchronously inside the
    // click, because opening it after the await below would be blocked as a
    // popup. Several brochures: no tabs at all - browsers permit only one
    // window.open per click, so those go down the iframe path instead.
    let tab = null;
    if (!multiple) {
      try {
        tab = window.open("", "_blank");
        if (tab) tab.opener = null;
      } catch {
        tab = null;
      }
    }

    setLoading(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/brochure-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName.trim().replace(/ {2,}/g, " "),
          phone: formData.phone,
          email: formData.email.trim().toLowerCase(),
          brochureName: selected.map((b) => b.name).join(", "),
          ...getTracking(),
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      if (multiple) {
        // Staggered so the browser doesn't discard simultaneous requests.
        selected.forEach((b, i) => forceDownload(b, i * 900));
      } else if (tab && !tab.closed) {
        tab.location.href = selected[0].url;
      } else if (selected[0]) {
        // Tab was blocked - fall back to a download.
        forceDownload(selected[0], 0);
      }

      setSubmitted(true);
    } catch {
      if (tab && !tab.closed) tab.close();
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full px-3 py-2.5 text-sm text-[#1A1D2D] bg-gray-50 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8FD254] focus:border-[#8FD254] placeholder:text-gray-400";

  const pdfIcon = (
    <svg
      className="flex-shrink-0 w-5 h-5 text-red-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-[2px] px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="brochure-modal-title"
            className="relative flex flex-col w-full max-w-lg overflow-hidden bg-white shadow-xl rounded-xl max-h-[90vh]"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 sm:px-6">
              <h2
                id="brochure-modal-title"
                className="text-base font-semibold text-[#1A1D2D]"
              >
                Download Brochure
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="flex-shrink-0 p-1 text-gray-400 transition-colors cursor-pointer hover:text-gray-600"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 px-5 py-5 overflow-y-auto sm:px-6">
              {isEmpty ? (
                /* ---------- No brochures configured for this page ---------- */
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="flex items-center justify-center mb-4 bg-gray-100 rounded-full w-14 h-14">
                    <svg
                      className="text-gray-400 w-7 h-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-[#1A1D2D]">
                    Brochure coming soon
                  </h3>
                  <p className="max-w-xs mb-5 text-sm text-gray-500">
                    We don&apos;t have a downloadable brochure for this page yet.
                    Get in touch and our team will send you the details.
                  </p>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#121C17] bg-[#8FD254] rounded-lg hover:bg-[#7bc043] transition-colors"
                  >
                    Contact us
                  </Link>
                </div>
              ) : submitted ? (
                /* ---------- Success ---------- */
                <div className="flex flex-col items-center py-6 text-center">
                  <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-[#8FD254]/15">
                    <svg
                      className="w-7 h-7 text-[#8FD254]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-[#1A1D2D]">
                    Thank you!
                  </h3>
                  <p className="max-w-xs mb-5 text-sm text-gray-500">
                    {selected.length > 1
                      ? "Your brochures are downloading. If your browser asked permission for multiple files, allow it - or use the links below."
                      : "Your brochure opened in a new tab. If your browser blocked it, use the link below."}
                  </p>

                  <div className="w-full space-y-2">
                    {selected.map((b) => (
                      <a
                        key={b.id}
                        href={b.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full gap-3 px-3 py-2.5 text-sm text-[#1A1D2D] text-left border border-gray-200 rounded-lg hover:border-[#8FD254] hover:bg-[#8FD254]/5 transition-colors"
                      >
                        {pdfIcon}
                        <span className="flex-1 leading-tight">{b.name}</span>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                /* ---------- Selection + details, one screen ---------- */
                <form
                  id="brochure-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* --- Brochures --- */}
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-[#1A1D2D]">
                      {isSingle ? "Your brochure" : "Select your brochures"}
                    </h3>
                    {!isSingle && (
                      <p className="mb-3 text-xs text-gray-400">
                        You can choose more than one.
                      </p>
                    )}

                    {isSingle ? (
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#8FD254]/10 border border-[#8FD254]/40">
                        {pdfIcon}
                        <span className="text-sm text-[#1A1D2D] leading-tight">
                          {list[0]?.name}
                        </span>
                      </div>
                    ) : (
                      <>
                        {showSearch && (
                          <div className="relative mb-3">
                            <svg
                              className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                            <input
                              type="text"
                              placeholder="Search brochures..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className={`${inputBase} border-gray-200 pl-10`}
                            />
                          </div>
                        )}

                        <div className="max-h-[240px] overflow-y-auto space-y-1.5 pr-0.5">
                          {filtered.length === 0 ? (
                            <p className="py-6 text-sm text-center text-gray-400">
                              No brochures match that search.
                            </p>
                          ) : (
                            filtered.map((brochure) => {
                              const checked = selectedIds.includes(brochure.id);
                              return (
                                <label
                                  key={brochure.id}
                                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all ${
                                    checked
                                      ? "bg-[#8FD254]/10 border border-[#8FD254]/40"
                                      : "hover:bg-gray-50 border border-transparent"
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    name="brochure"
                                    checked={checked}
                                    onChange={() => toggleBrochure(brochure.id)}
                                    className="w-4 h-4 accent-[#8FD254] flex-shrink-0 rounded"
                                  />
                                  {pdfIcon}
                                  <span className="text-sm text-[#1A1D2D] leading-tight">
                                    {brochure.name}
                                  </span>
                                </label>
                              );
                            })
                          )}
                        </div>

                        {errors.brochure && (
                          <p className="mt-2 text-xs text-red-400">
                            {errors.brochure}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  <div className="border-t border-gray-100" />

                  {/* --- Details --- */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-[#1A1D2D]">
                      Your details
                    </h3>

                    <div>
                      <label
                        htmlFor="brochure-name"
                        className="block mb-1.5 text-sm font-medium text-gray-600"
                      >
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="brochure-name"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleFormChange}
                        className={`${inputBase} ${
                          errors.fullName ? "border-red-400" : "border-gray-200"
                        }`}
                        placeholder="John Doe"
                        maxLength={50}
                        inputMode="text"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-1.5 text-sm font-medium text-gray-600">
                        Mobile Number <span className="text-red-400">*</span>
                      </label>
                      <PhoneInput
                        country={"in"}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputStyle={{
                          width: "100%",
                          borderRadius: "8px",
                          height: "42px",
                          fontSize: "14px",
                          color: "#1A1D2D",
                          backgroundColor: "#f9fafb",
                          border: errors.phone
                            ? "1px solid #f87171"
                            : "1px solid #e5e7eb",
                          paddingLeft: "62px",
                        }}
                        containerStyle={{ width: "100%" }}
                        buttonStyle={{
                          borderRadius: "8px 0 0 8px",
                          backgroundColor: "#f9fafb",
                          border: errors.phone
                            ? "1px solid #f87171"
                            : "1px solid #e5e7eb",
                        }}
                        dropdownStyle={{ color: "#1A1D2D" }}
                        placeholder="Enter mobile number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="brochure-email"
                        className="block mb-1.5 text-sm font-medium text-gray-600"
                      >
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="brochure-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className={`${inputBase} ${
                          errors.email ? "border-red-400" : "border-gray-200"
                        }`}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {submitError && (
                      <p className="text-sm text-center text-red-400">
                        {submitError}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>

            {/* Footer */}
            {!submitted && !isEmpty && (
              <div className="flex items-center px-5 py-4 border-t border-gray-100 sm:px-6">
                <button
                  type="submit"
                  form="brochure-form"
                  disabled={loading}
                  className={`w-full px-5 py-3 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${
                    loading
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-[#8FD254] text-[#121C17] hover:bg-[#7bc043] cursor-pointer"
                  }`}
                >
                  {loading
                    ? "Submitting..."
                    : selected.length > 1
                    ? `Submit & Download (${selected.length})`
                    : "Submit & Download"}
                  {loading && (
                    <DotLoader color="#121C17" loading={loading} size={8} />
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrochureModal;