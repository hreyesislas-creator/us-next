"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { CallButton } from "./CallButton";
import { PhoneIcon, MenuIcon, CloseIcon } from "./icons";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Service Area", href: "/#service-area" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 shadow-lg shadow-navy-950/20 backdrop-blur"
          : "bg-navy-950"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white"
          aria-label="U.S. Next home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-accent text-base font-black tracking-tighter text-navy-950 lg:h-10 lg:w-10">
            US
          </span>
          <span className="text-lg font-extrabold tracking-tight lg:text-xl">
            U.S. <span className="text-amber-accent">Next</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-amber-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <CallButton size="sm" label={`Call ${site.phoneDisplay}`} />
        </div>

        {/* Mobile: quick call + menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={site.phoneHref}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-accent text-navy-950"
            aria-label={`Call U.S. Next at ${site.phoneDisplay}`}
          >
            <PhoneIcon className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="border-t border-white/10 bg-navy-950 px-4 pb-6 pt-2 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-100 transition-colors hover:bg-white/5 hover:text-amber-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <CallButton className="w-full" size="md" />
          </div>
        </nav>
      )}
    </header>
  );
}
