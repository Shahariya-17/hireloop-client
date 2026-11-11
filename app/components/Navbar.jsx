
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
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <header className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between px-5 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="8.5"
              stroke="#5145E5"
              strokeWidth="3.5"
              strokeDasharray="43 12"
              transform="rotate(-45 12 12)"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-[15px] font-bold tracking-tight text-gray-900">
            HireLoop
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-[12px] font-medium text-gray-700 transition-colors hover:text-[#5145E5]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Button
            as={Link}
            href="/login"
            variant="bordered"
            className="h-[30px] min-w-[54px] rounded-lg border border-gray-200 bg-white px-3 text-[11px] font-semibold text-gray-800"
          >
            Log in
          </Button>

          <Button
            as={Link}
            href="/signup"
            className="h-[30px] min-w-[61px] rounded-lg bg-[#4939D5] px-3 text-[11px] font-semibold text-white shadow-sm hover:bg-[#3829B9]"
          >
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 md:hidden"
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
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#5145E5]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex gap-2 border-t border-gray-100 pt-4">
            <Button
              as={Link}
              href="/login"
              variant="bordered"
              className="h-10 flex-1 rounded-lg border-gray-200 text-sm font-semibold text-gray-800"
            >
              Log in
            </Button>

            <Button
              as={Link}
              href="/signup"
              className="h-10 flex-1 rounded-lg bg-[#4939D5] text-sm font-semibold text-white"
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
