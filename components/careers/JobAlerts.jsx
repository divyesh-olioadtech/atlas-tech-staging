"use client";
import { useState } from "react";

export default function JobAlerts() {
  const [email, setEmail] = useState("");

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/job-alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      className="relative py-16 overflow-hidden md:py-24"
      style={{
        backgroundImage: "url('/images/comman/cta-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative px-[5%] max-w-screen-2xl mx-auto flex items-center justify-center">
        {/* Card */}
        <div
          className="w-full max-w-2xl rounded-[20px] px-8 py-12 md:px-14 md:py-14 text-center"
          style={{ backgroundColor: "#E7F1E9" }}
        >
          <h2 className="text-[#1A1D2D] h2t leading-[100%] mb-4">
            Be the First to Know About New Openings
          </h2>
          <p className="text-[#606370] text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-md mx-auto">
            Sign up to receive job alerts, hiring updates, and future opportunities directly in your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3 rounded-[12px] border border-[#D1D5DB] bg-white text-[#1A1D2D] text-[14px] md:text-[15px] outline-none focus:border-[#8FD254] transition-colors duration-200"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-[#8FD254] hover:bg-[#7aba45] text-[#1A1D2D] font-semibold text-[14px] md:text-[15px] rounded-[12px] transition-colors duration-200 whitespace-nowrap cursor-pointer disabled:opacity-60"
              style={{ borderBottom: "2px solid #3C611C" }}
            >
              {status === "loading" ? "Submitting..." : "Get Job Alerts"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-[#3C8A3C] text-[14px] font-medium">
              ✓ You&apos;re subscribed! We&apos;ll notify you about new openings.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-500 text-[14px] font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
