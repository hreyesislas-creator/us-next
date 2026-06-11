import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

const serviceTags = ["Handyman", "Remodeling", "Repairs", "Home Improvement"];

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex justify-center sm:justify-start">
              <Link href="/" aria-label="U.S. Next — Home">
                <Image
                  src="/images/logo.png"
                  alt="U.S. Next — You dream it, we build it."
                  width={80}
                  height={80}
                  className="h-20 w-20"
                />
              </Link>
            </div>
            <p className="mt-4 text-center text-sm leading-relaxed text-slate-400 sm:text-left">
              Reliable handyman, remodeling, and home improvement services for
              local homeowners.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <Link
              href={site.phoneHref}
              className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-amber-accent"
              aria-label={`Call U.S. Next at ${site.phoneDisplay}`}
            >
              <PhoneIcon className="h-5 w-5 text-amber-accent" />
              {site.phoneDisplay}
            </Link>
            <p className="mt-3 text-sm text-slate-400">
              Call now for a free no-obligation estimate.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {serviceTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="/#services"
                  className="text-slate-400 transition-colors hover:text-amber-accent"
                >
                  Our Services
                </a>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-400 transition-colors hover:text-amber-accent"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-slate-400 transition-colors hover:text-amber-accent"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} U.S. Next. All rights reserved.
          </p>
          <p>
            Website by{" "}
            <a
              href={site.builtBy.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-200 transition-colors hover:text-amber-accent"
            >
              {site.builtBy.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
