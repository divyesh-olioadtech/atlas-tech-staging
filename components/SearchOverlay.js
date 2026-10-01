"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { getSearchableItems, searchItems } from "../lib/searchData";

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const allItems = useMemo(() => getSearchableItems(), []);
  const results = useMemo(() => searchItems(query, allItems), [query, allItems]);

  const handleClose = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - click to close (transparent) */}
          <div
            className="fixed inset-0 z-[55]"
            onClick={handleClose}
          />

          {/* Search dropdown bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed right-0 z-[56] px-[5%] py-3"
            style={{ top: "80px", width: "min(450px, 90vw)" }}
          >
            <div>
              {/* Search input row */}
              <div className="flex items-center bg-white rounded-md overflow-hidden shadow-lg">
                <svg
                  className="w-4 h-4 text-gray-400 ml-3 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" strokeLinecap="round" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search"
                  className="flex-1 px-3 py-2.5 text-[14px] text-gray-800 placeholder-gray-400 outline-none bg-transparent"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="mr-3 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Results dropdown */}
              {query.trim().length > 0 && (
                <div className="mt-2 max-h-[50vh] overflow-y-auto rounded-md bg-white shadow-lg">
                  {results.length > 0 ? (
                    <ul>
                      {results.slice(0, 10).map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.link}
                            onClick={handleClose}
                            className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                          >
                            <div>
                              <p className="text-[14px] text-gray-800 font-medium">
                                {item.name}
                              </p>
                              <p className="text-[12px] text-gray-400 mt-0.5">
                                {item.category}
                              </p>
                            </div>
                            <svg
                              className="w-4 h-4 text-gray-300 shrink-0 ml-3"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                            >
                              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-4 py-6 text-center">
                      <p className="text-gray-500 text-[14px]">
                        No results found for &ldquo;{query}&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
