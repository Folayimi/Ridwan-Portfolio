"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const links = [
  ["About", "/#about"],
  ["Projects", "/#projects"],
  ["Experience", "/#work-experience"],
  ["CV", "/Ridwan_Ogunlade_Resume.pdf"],
];

const socialLinks = [
  ["GitHub", "https://github.com/Folayimi"],
  ["LinkedIn", "https://www.linkedin.com/in/ridwan-ogunlade-1a9610369"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-[#f5f5f5]/95 backdrop-blur">
      <nav aria-label="Main navigation" className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8">
        <Link href="/#home" onClick={closeMenu} className="shrink-0 rounded-sm font-semibold tracking-tight text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f7d35]">
          Ridwan Ogunlade
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f7d35]">
              {label}
            </Link>
          ))}
          {socialLinks.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f7d35]">
              {label}<span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
          <Link href="/#contact" className="ml-2 rounded-xl bg-[#1b1b1b] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3f4a3c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f7d35]">
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-900 transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f7d35] md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
            {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              className="absolute left-0 right-0 top-[calc(100%+1px)] border-b border-gray-200 bg-[#f5f5f5] px-4 pb-5 pt-3 shadow-lg md:hidden"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
            >
              <ul className="grid gap-1">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} onClick={closeMenu} className="block rounded-xl px-4 py-3 font-medium text-gray-800 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f7d35]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 grid grid-cols-3 gap-2 border-t border-gray-200 pt-4">
                {socialLinks.map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="rounded-xl border border-gray-200 bg-white px-3 py-3 text-center text-sm font-medium text-gray-800 hover:bg-gray-100">
                    {label}<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
                <Link href="/#contact" onClick={closeMenu} className="rounded-xl bg-[#1b1b1b] px-3 py-3 text-center text-sm font-medium text-white hover:bg-[#3f4a3c]">
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
