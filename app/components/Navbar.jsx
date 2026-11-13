
'use client';

import { useState } from "react";
import { Link, Button } from "@heroui/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-xl">

      <header className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Logo */}
        <Link
          href="/"
          className="flex w-fit shrink-0 items-center gap-2.5 no-underline"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#6657F5] to-[#4335CF] shadow-lg shadow-indigo-500/20">
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="8"
                stroke="white"
                strokeWidth="3"
                strokeDasharray="40 12"
                transform="rotate(-45 12 12)"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span className="text-[21px] font-extrabold tracking-tight text-gray-950">
            Hire<span className="text-[#5145E5]">Loop</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`rounded-xl px-4 py-2.5 text-[13px] font-semibold no-underline transition-all duration-200 ${
                  index === 0
                    ? "bg-indigo-50 text-[#5145E5]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#5145E5]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-3 lg:flex">

          <Button
            as={Link}
            href="/login"
            variant="bordered"
            className="h-10 min-w-[88px] rounded-xl border border-gray-200 bg-white px-5 text-[13px] font-semibold text-gray-700 transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-[#5145E5]"
          >
            Log in
          </Button>

          <Button
            as={Link}
            href="/signup"
            className="h-10 min-w-[105px] rounded-xl bg-gradient-to-r from-[#5B4CE6] to-[#4737D1] px-5 text-[13px] font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            Sign up
            <svg
              className="ml-1 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>

        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 transition-colors hover:bg-gray-50 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-xl shadow-gray-900/5 sm:px-8 lg:hidden">

          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold no-underline transition-colors ${
                    index === 0
                      ? "bg-indigo-50 text-[#5145E5]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#5145E5]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex gap-3 border-t border-gray-100 pt-4">

            <Button
              as={Link}
              href="/login"
              variant="bordered"
              className="h-11 flex-1 rounded-xl border-gray-200 text-sm font-semibold text-gray-700"
            >
              Log in
            </Button>

            <Button
              as={Link}
              href="/signup"
              className="h-11 flex-1 rounded-xl bg-gradient-to-r from-[#5B4CE6] to-[#4737D1] text-sm font-bold text-white shadow-md shadow-indigo-500/20"
            >
              Sign up
            </Button>

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
