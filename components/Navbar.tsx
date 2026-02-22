"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  // Highlight active section on scroll (same logic, slightly guarded)
  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
          break;
        }
      }
    };
    handleScroll(); // set initial on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route hash change or when a link is clicked
  const onLinkClick = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-6">
        {/* Brand / Name */}
        <a
          href="#hero"
          className="font-semibold text-lg sm:text-xl cursor-pointer hover:opacity-80 transition"
        >
          Nidhi Kadam
        </a>

        {/* Desktop links */}
        <div className="ml-auto hidden md:flex items-center gap-1 text-sm">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`px-3 py-2 rounded-md transition ${
                active === section.id
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger (md:hidden) */}
        <button
          type="button"
          className="ml-auto md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Close main menu" : "Open main menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icon: hamburger / close */}
          <span className="sr-only">Toggle menu</span>
          <svg
            className={`h-6 w-6 ${open ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg
            className={`h-6 w-6 ${open ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden origin-top overflow-hidden transition-[max-height,opacity] duration-300 ease-out
          ${open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pb-4 space-y-2 bg-white border-t">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={onLinkClick}
              className={`block w-full text-left px-3 py-2 rounded-md text-base transition ${
                active === section.id
                  ? "bg-gray-900 text-white"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
